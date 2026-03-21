<script lang="ts">
    import { signOut } from '@auth/sveltekit/client';
    let { data } = $props();
    const { submissions } = data;
</script>

<svelte:head>
    <title>Admin — Hill Knives</title>
</svelte:head>

<main class="admin-page">
    <header class="admin-header">
        <div>
            <p class="eyebrow">Beheer</p>
            <h1 class="admin-title">Contactverzoeken</h1>
        </div>
        <button class="signout-btn" onclick={() => signOut({ redirectTo: '/' })}>Uitloggen</button>
    </header>

    {#if submissions.length === 0}
        <p class="empty">Nog geen berichten ontvangen.</p>
    {:else}
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Naam</th>
                        <th>E-mail</th>
                        <th>Onderwerp</th>
                        <th>Bericht</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {#each submissions as s}
                        <tr>
                            <td class="date">{new Date(s.created_at).toLocaleDateString('nl-NL')}</td>
                            <td>{s.name}</td>
                            <td><a href="mailto:{s.email}">{s.email}</a></td>
                            <td>{s.subject}</td>
                            <td class="msg">{s.message}</td>
                            <td><span class="badge badge-{s.status}">{s.status}</span></td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</main>

<style>
    .admin-page {
        padding: 3rem clamp(1rem, 4vw, 5rem);
        background: var(--color-bg);
        min-height: 100vh;
        color: var(--color-text);
    }
    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 1.5rem;
        margin-bottom: 2rem;
    }
    .eyebrow {
        font-family: var(--font-display);
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 0.4rem;
    }
    .admin-title {
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
    }
    .signout-btn {
        background: none;
        border: 1px solid var(--color-border);
        color: var(--color-text-dim);
        padding: 0.4rem 1rem;
        cursor: pointer;
        font-size: 0.85rem;
        transition: color 0.2s, border-color 0.2s;
    }
    .signout-btn:hover { color: var(--color-text); border-color: var(--color-text-muted); }

    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th {
        text-align: left;
        padding: 0.6rem 1rem;
        font-family: var(--font-display);
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--color-text-dim);
        border-bottom: 1px solid var(--color-border);
    }
    td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--color-border);
        vertical-align: top;
        color: var(--color-text-muted);
    }
    td.msg { max-width: 280px; white-space: pre-wrap; word-break: break-word; }
    td.date { white-space: nowrap; }
    td a { color: var(--color-accent); }
    tr:hover td { background: var(--color-bg-surface); }

    .badge {
        font-size: 0.65rem;
        font-family: var(--font-display);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.2rem 0.5rem;
        border-radius: 2px;
    }
    .badge-new { background: var(--color-accent-dim); color: var(--color-accent); }
    .badge-read { background: var(--color-bg-raised); color: var(--color-text-dim); }
    .badge-replied { background: rgba(74, 82, 64, 0.4); color: var(--color-text-muted); }

    .empty { color: var(--color-text-dim); padding: 2rem 0; }
</style>
