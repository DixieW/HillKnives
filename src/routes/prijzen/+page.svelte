<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import Pricetable from "$lib/components/layouts/PriceTable.svelte";
</script>

<svelte:head>
    <title>Prijzen — Hill Knives Messenslijperij Rotterdam</title>
</svelte:head>

<main class="prijzen-page">

    <section class="page-header">
        <div class="header-inner">
            <FadeIn direction="down" duration={900}>
                <p class="eyebrow">Transparante tarieven</p>
                <h1 class="page-title">Prijzen &amp;<br/>Diensten.</h1>
                <p class="intro">Vakkundig slijpen voor eerlijke prijzen. Geen verrassingen — gewoon scherp werk.</p>
            </FadeIn>
        </div>
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
        background: transparent !important;
        display: contents;
    }

    .header-inner {
        padding: 6rem clamp(1.5rem, 6vw, 8rem) 4rem;
    }

    .table-section {
        padding: 4rem clamp(1.5rem, 6vw, 8rem);
    }

    /* ── Light mode overrides only ─────────────────────────────── */
    :global([data-theme="light"]) .prijzen-page {
        background: #f2f2f0;
        color: #141414;
    }
    :global([data-theme="light"]) .prijzen-page .eyebrow    { color: #9e7c1e; }
    :global([data-theme="light"]) .prijzen-page .page-title { color: #141414; }
    :global([data-theme="light"]) .prijzen-page .intro      { color: #444440; }

    :global([data-theme="light"]) .prijzen-page :global(.m-5) { color: #141414; }

    :global([data-theme="light"]) .prijzen-page :global(section > div) {
        background: #e8e8e5 !important;
        box-shadow:
            0 6px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px  rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
        border: 1px solid #b8b8b4 !important;
    }
    :global([data-theme="light"]) .prijzen-page :global(thead tr)  { background: #d8d8d4 !important; }
    :global([data-theme="light"]) .prijzen-page :global(thead th)  { color: #141414 !important; border-color: #b8b8b4 !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody tr)  { background: #f2f2f0 !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody tr:hover) { background: #e8e8e5 !important; }
    :global([data-theme="light"]) .prijzen-page :global(tbody td)  { color: #141414 !important; border-color: #b8b8b4 !important; }
    :global([data-theme="light"]) .prijzen-page :global(h2.font-display) { color: #141414 !important; }
    :global([data-theme="light"]) .prijzen-page :global(p.text-center)   { color: #444440 !important; }
</style>