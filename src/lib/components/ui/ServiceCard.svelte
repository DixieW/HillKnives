<script lang="ts">
    let { icon, title, description, href }: {
        icon: string;
        title: string;
        description: string;
        href?: string;
    } = $props();
</script>

<a class="card" href={href ?? '#'}>
    <span class="card-icon" aria-hidden="true">{icon}</span>
    <h3 class="card-title">{title}</h3>
    <p class="card-desc">{description}</p>
    <span class="card-link">Bekijk prijzen →</span>
</a>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 2rem 1.75rem;
        background: var(--color-bg-surface);
        border: 1px solid var(--color-border);
        text-decoration: none;
        transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        height: 100%;
    }
    .card:hover {
        border-color: var(--color-accent);
        transform: translateY(-3px);
        box-shadow: 0 8px 28px rgba(0,0,0,0.3);
    }
    .card-icon {
        font-size: 2rem;
        display: block;
    }
    .card-title {
        font-family: var(--font-display);
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-text);
    }
    .card-desc {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        line-height: 1.6;
        flex: 1;
    }
    .card-link {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-accent);
        transition: letter-spacing 0.2s;
    }
    .card:hover .card-link { letter-spacing: 0.18em; }
</style>
