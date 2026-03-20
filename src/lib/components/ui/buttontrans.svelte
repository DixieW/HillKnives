<script lang="ts">
    let { href, label, variant = 'outline', onclick }: {
        href?: string;
        label: string;
        variant?: 'accent' | 'outline';
        onclick?: () => void;
    } = $props();
</script>

{#if href}
    <a class="btn btn-{variant}" {href}>{label}</a>
{:else}
    <button class="btn btn-{variant}" {onclick}>{label}</button>
{/if}

<style>
    .btn {
        display: inline-block;
        padding: 0.85rem 2rem;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 0.78rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        border: 2px solid transparent;
        transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
    }
    .btn:hover { transform: translateY(-2px); }

    .btn-accent {
        background: var(--color-accent);
        color: var(--color-bg);
        border-color: var(--color-accent);
    }
    .btn-accent:hover {
        background: transparent;
        color: var(--color-accent);
    }

    .btn-outline {
        background: transparent;
        color: var(--color-text);
        border-color: var(--color-text);
    }
    .btn-outline:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
    }
</style>
