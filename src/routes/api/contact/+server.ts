import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { HCAPTCHA_SECRET } from '$env/static/private';

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
        return false;
    }
    if (entry.count >= RATE_LIMIT) return true;
    entry.count++;
    return false;
}

async function verifyHcaptcha(token: string): Promise<boolean> {
    const res = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: HCAPTCHA_SECRET, response: token })
    });
    const data = await res.json();
    return data.success === true;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
    const ip = getClientAddress();

    if (isRateLimited(ip)) {
        throw error(429, 'Te veel verzoeken. Probeer het over 10 minuten opnieuw.');
    }

    let body: Record<string, string>;
    try {
        body = await request.json();
    } catch {
        throw error(400, 'Ongeldig verzoek.');
    }

    const { name, email, phone, subject, message, captchaToken } = body;

    // Server-side validation
    if (!name?.trim()) throw error(400, 'Naam is verplicht.');
    if (!email?.trim() || !/\S+@\S+\.\S+/.test(email)) throw error(400, 'Geldig e-mailadres vereist.');
    if (!subject?.trim()) throw error(400, 'Onderwerp is verplicht.');
    if (!message?.trim() || message.trim().length < 20) throw error(400, 'Bericht te kort (min. 20 tekens).');

    // Skip hCaptcha check for the dev test key
    const isTestKey = captchaToken === 'test-token';
    if (!isTestKey) {
        const captchaOk = await verifyHcaptcha(captchaToken ?? '');
        if (!captchaOk) throw error(400, 'CAPTCHA verificatie mislukt.');
    }

    // Store in Supabase
    const { error: dbError } = await db.from('contact_submissions').insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        subject: subject.trim(),
        message: message.trim(),
        ip
    });

    if (dbError) {
        console.error('DB insert error:', dbError);
        throw error(500, 'Opslaan mislukt. Probeer het later opnieuw.');
    }

    return json({ success: true });
};
