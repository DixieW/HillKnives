import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { AUTH_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
    secret: AUTH_SECRET,
    providers: [
        GitHub({
            clientId: AUTH_GITHUB_ID,
            clientSecret: AUTH_GITHUB_SECRET
        })
    ],
    // Only allow specific GitHub accounts into /admin
    callbacks: {
        async signIn({ profile }) {
            const allowedLogins = ['DixieW']; // add GitHub usernames here
            return allowedLogins.includes((profile as any)?.login ?? '');
        },
        async session({ session, token }) {
            return session;
        }
    },
    pages: {
        signIn: '/admin/login'
    }
});
