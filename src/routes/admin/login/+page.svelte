<script lang="ts">
    import { signIn } from '@auth/sveltekit/client';
</script>

<svelte:head>
    <title>Admin Login — Hill Knives</title>
</svelte:head>

<main class="login-page">
    <div class="login-card">
        <p class="eyebrow">Beheerder toegang</p>
        <h1 class="login-title">Hill Knives<br/>Admin</h1>
        <p class="login-sub">Inloggen via GitHub OAuth2</p>
        <button class="login-btn" onclick={() => signIn('github', { redirectTo: '/admin' })}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Inloggen met GitHub
        </button>
    </div>
</main>

<style>
    .login-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-bg);
    }
    .login-card {
        background: var(--color-bg-surface);
        border: 1px solid var(--color-border);
        padding: 3rem 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        min-width: 320px;
        text-align: center;
    }
    .eyebrow {
        font-family: var(--font-display);
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-accent);
    }
    .login-title {
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
        color: var(--color-text);
        line-height: 1;
    }
    .login-sub {
        font-size: 0.9rem;
        color: var(--color-text-dim);
        margin-bottom: 0.5rem;
    }
    .login-btn {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: var(--color-accent-2);
        color: var(--color-accent);
        border: none;
        padding: 0.75rem 1.5rem;
        font-family: var(--font-display);
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        cursor: pointer;
        transition: opacity 0.2s;
    }
    .login-btn:hover { opacity: 0.85; }
</style>
