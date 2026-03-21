<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import Pricetable from "$lib/components/layouts/PriceTable.svelte";
</script>

<svelte:head>
    <title>Prijzen — Hill Knives Messenslijperij Rotterdam</title>
</svelte:head>

<main class="prijzen-page">

    <section class="page-header">
        <FadeIn direction="down" duration={900}>
            <p class="eyebrow">Transparante tarieven</p>
            <h1 class="page-title">Prijzen &amp;<br/>Diensten.</h1>
            <p class="intro">Vakkundig slijpen voor eerlijke prijzen. Geen verrassingen — gewoon scherp werk.</p>
        </FadeIn>
    </section>

    <section class="table-section">
        <Pricetable />
    </section>

</main>

<style>
    /* ── Dark mode (default) — use CSS vars, no overrides needed ── */
    .prijzen-page {
        background: var(--color-bg);
        color: var(--color-text);
    }

    /* Hero blends seamlessly — no border, no own background */
    .prijzen-page :global(.page-header) {
        border-bottom: none !important;
        box-shadow: none !important;
        background: transparent !important;
    }

    .table-section {
        padding: 4rem clamp(1.5rem, 6vw, 8rem);
    }

    /* ── Light mode overrides only ─────────────────────────────── */
    :global([data-theme="light"]) .prijzen-page {
        background: #b08082;
        color: #faf0f0;
    }
    :global([data-theme="light"]) .prijzen-page .eyebrow    { color: #c8a84b; }
    :global([data-theme="light"]) .prijzen-page .page-title { color: #faf0f0; }
    :global([data-theme="light"]) .prijzen-page .intro      { color: #e8d0d0; }

    :global([data-theme="light"]) .prijzen-page :global(.m-5) { color: #faf0f0; }

    :global([data-theme="light"]) .prijzen-page :global(section > div) {
        background: #955659 !important;
        box-shadow:
            0 6px 32px rgba(40, 0, 3, 0.45),
            0 2px 8px  rgba(40, 0, 3, 0.28),
            inset 0 1px 0 rgba(255, 200, 200, 0.12) !important;
        border: 1px solid rgba(255, 180, 180, 0.18) !important;
    }
    :global([data-theme="light"]) .prijzen-page :global(thead tr)  { background: #580006 !important; }
    :global([data-theme="light"]) .prijzen-page :global(thead th)  { color: #faf0f0 !important; border-color: rgba(255,180,180,0.25) !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody tr)  { background: #8b4c4f !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody tr:hover) { background: #7a3c3f !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody td)  { color: #faf0f0 !important; border-color: rgba(255,180,180,0.18) !important; }
    :global([data-theme="light"]) .prijzen-page :global(h2.font-display) { color: #faf0f0 !important; }
    :global([data-theme="light"]) .prijzen-page :global(p.text-center)   { color: #e8d0d0 !important; }
</style>