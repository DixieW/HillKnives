import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authHandle } from './auth';

// ── Security headers ────────────────────────────────────────────────────────
const securityHeaders: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    response.headers.set(
        'Content-Security-Policy',
        [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "frame-src https://www.youtube.com https://newassets.hcaptcha.com https://www.google.com",
            "connect-src 'self' https://hcaptcha.com https://*.supabase.co"
        ].join('; ')
    );

    return response;
};

// ── Simple rate limiter for API routes ──────────────────────────────────────
// Stored in-memory — resets on server restart. For production use Redis.
const apiRateMap = new Map<string, { count: number; resetAt: number }>();
const API_RATE_LIMIT = 30;      // requests per window
const API_RATE_WINDOW = 60_000; // 1 minute

const rateLimiter: Handle = async ({ event, resolve }) => {
    if (!event.url.pathname.startsWith('/api/')) {
        return resolve(event);
    }

    const ip = event.getClientAddress();
    const now = Date.now();
    const entry = apiRateMap.get(ip);

    if (!entry || now > entry.resetAt) {
        apiRateMap.set(ip, { count: 1, resetAt: now + API_RATE_WINDOW });
    } else if (entry.count >= API_RATE_LIMIT) {
        return new Response(JSON.stringify({ message: 'Te veel verzoeken.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json', 'Retry-After': '60' }
        });
    } else {
        entry.count++;
    }

    return resolve(event);
};

// ── Auth guard — protect /admin routes ──────────────────────────────────────
const adminGuard: Handle = async ({ event, resolve }) => {
    if (!event.url.pathname.startsWith('/admin')) {
        return resolve(event);
    }

    // Session is populated by Auth.js (see src/auth.ts)
    const session = await event.locals.auth();
    if (!session?.user) {
        return Response.redirect(new URL('/admin/login', event.url), 302);
    }

    return resolve(event);
};

export const handle = sequence(authHandle, securityHeaders, rateLimiter, adminGuard);
