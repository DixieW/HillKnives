<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
    import Image from '$lib/assets/images/hill knives-56 (webformaat srgb).jpg';
    import Image2 from '$lib/assets/images/dsci0334-crop-u12507.jpg';
</script>

<svelte:head>
    <title>Over Ons — Hill Knives Messenslijperij Rotterdam</title>
</svelte:head>

<main class="about-page">

    <!-- ── HEADER ── -->
    <section class="page-header">
        <FadeIn direction="down" duration={900}>
            <p class="eyebrow">Het verhaal</p>
            <h1 class="page-title">Drie generaties<br/>vakmanschap.</h1>
        </FadeIn>
    </section>

    <!-- ── STORY ── -->
    <section class="story-section">
        <FadeIn direction="right" duration={1000}>
            <div class="story-text">
                <p class="story-eyebrow">Insulindestraat 92, Rotterdam</p>
                <h2 class="story-title">Familie Van den Heuvel</h2>
                <p>
                    Al meer dan 40 jaar slijpen en maken wij messen in Rotterdam. Wat begon als een ambacht van Frans van den Heuvel, groeide uit tot een gerenommeerde messenslijperij die generaties lang zijn expertise doorgaf aan Albert en Michael.
                </p>
                <p>
                    Ons atelier aan de Insulindestraat is een vaste waarde in de wijk. Particulieren, horecabedrijven en professionele koks weten ons te vinden voor scherpe en vakkundig afgewerkte messen.
                </p>
                <p>
                    Elk mes dat onze werkplaats verlaat wordt niet alleen geslepen — het wordt gepolijst. Dat is onze standaard, bij elk stuk, zonder uitzondering.
                </p>
            </div>
        </FadeIn>
        <FadeIn direction="left" duration={1000} delay={200}>
            <div class="story-image">
                <img src={Image} alt="Hill Knives werkplaats" />
            </div>
        </FadeIn>
    </section>

    <Divider style="blade" width="50%" align="center" />

    <!-- ── VALUES ── -->
    <section class="values-section">
        <FadeIn direction="down" duration={900}>
            <h2 class="section-title">Waar wij voor staan</h2>
        </FadeIn>
        <div class="values-grid">
            <FadeIn direction="right" duration={1000} delay={100}>
                <div class="value-card">
                    <span class="value-icon">⚒</span>
                    <h3>Vakmanschap</h3>
                    <p>Meer dan vier decennia ervaring in het slijpen en polijsten van messen en scharen.</p>
                </div>
            </FadeIn>
            <FadeIn duration={1000} delay={250}>
                <div class="value-card">
                    <span class="value-icon">✦</span>
                    <h3>Kwaliteit</h3>
                    <p>Elk mes wordt geslepen én gepolijst. Geen half werk — dat is onze belofte aan elke klant.</p>
                </div>
            </FadeIn>
            <FadeIn direction="left" duration={1000} delay={400}>
                <div class="value-card">
                    <span class="value-icon">🏙</span>
                    <h3>Rotterdams</h3>
                    <p>Geworteld in Rotterdam. Wij bedienen particulieren, horeca en bedrijven in de regio.</p>
                </div>
            </FadeIn>
        </div>
    </section>

    <!-- ── PHOTO ── -->
    <section class="photo-section">
        <FadeIn duration={1200}>
            <img src={Image2} alt="Messen bij Hill Knives" class="full-photo" />
        </FadeIn>
        <div class="photo-caption">
            <FadeIn direction="up" duration={900} delay={400}>
                <p class="caption-quote">"Een scherp mes is geen luxe — het is een noodzaak."</p>
                <p class="caption-attr">— Hill Knives Messenslijperij</p>
            </FadeIn>
        </div>
    </section>

    <!-- ── OPENING ── -->
    <section class="info-section">
        <FadeIn direction="right" duration={1000}>
            <div class="info-block">
                <h3 class="info-title">Openingstijden</h3>
                <ul class="info-list">
                    <li><span>Maandag – Vrijdag</span><span>09:00 – 16:30</span></li>
                    <li><span>Zaterdag</span><span>Gesloten</span></li>
                    <li><span>Zondag</span><span>Gesloten</span></li>
                </ul>
            </div>
        </FadeIn>
        <FadeIn direction="left" duration={1000} delay={200}>
            <div class="info-block">
                <h3 class="info-title">Bezoekadres</h3>
                <address class="info-address">
                    Insulindestraat 92<br />
                    3038 JC Rotterdam<br />
                    Nederland
                </address>
                <a class="info-link" href="/contact">Neem contact op →</a>
            </div>
        </FadeIn>
    </section>

</main>

<style>
    .about-page {
        background: var(--color-bg);
        color: var(--color-text);
    }

    /* ── Header ── */
    .page-header {
        padding: 5rem clamp(1.5rem, 6vw, 8rem) 3rem;
        border-bottom: 1px solid var(--color-border);
    }
    .eyebrow {
        font-family: var(--font-display);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 1rem;
    }
    .page-title {
        font-family: var(--font-display);
        font-size: clamp(3rem, 7vw, 6rem);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.02em;
        line-height: 0.95;
        color: var(--color-text);
    }

    /* ── Story ── */
    .story-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
        padding: 5rem clamp(1.5rem, 6vw, 8rem);
    }
    .story-eyebrow {
        font-family: var(--font-display);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 0.75rem;
    }
    .story-title {
        font-family: var(--font-display);
        font-size: clamp(1.8rem, 3.5vw, 2.8rem);
        font-weight: 800;
        text-transform: uppercase;
        color: var(--color-text);
        margin-bottom: 1.5rem;
    }
    .story-text p {
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-text-muted);
        margin-bottom: 1rem;
    }
    .story-image img {
        width: 100%;
        height: 480px;
        object-fit: cover;
        border: 1px solid var(--color-border);
        box-shadow: 8px 8px 32px rgba(0,0,0,0.4);
    }

    /* ── Values ── */
    .values-section {
        padding: 4rem clamp(1.5rem, 6vw, 8rem);
        background: var(--color-bg-surface);
    }
    .section-title {
        font-family: var(--font-display);
        font-size: clamp(1.8rem, 4vw, 3rem);
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--color-text);
        text-align: center;
        margin-bottom: 3rem;
    }
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
    }
    .value-card {
        padding: 2rem 1.75rem;
        background: var(--color-bg-raised);
        border: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .value-icon { font-size: 1.8rem; }
    .value-card h3 {
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-text);
    }
    .value-card p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        line-height: 1.6;
    }

    /* ── Photo ── */
    .photo-section {
        position: relative;
    }
    .full-photo {
        width: 100%;
        height: 420px;
        object-fit: cover;
        display: block;
    }
    .photo-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 2rem clamp(1.5rem, 6vw, 8rem);
        background: linear-gradient(to top, rgba(16,18,14,0.9) 0%, transparent 100%);
    }
    .caption-quote {
        font-family: var(--font-body);
        font-size: clamp(1rem, 2.5vw, 1.4rem);
        font-style: italic;
        color: var(--color-text);
        margin-bottom: 0.4rem;
    }
    .caption-attr {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--color-accent);
    }

    /* ── Info ── */
    .info-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        padding: 4rem clamp(1.5rem, 6vw, 8rem);
        background: var(--color-bg-surface);
        border-top: 1px solid var(--color-border);
    }
    .info-title {
        font-family: var(--font-display);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 1.25rem;
    }
    .info-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
    .info-list li {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--color-text-muted);
        padding-bottom: 0.6rem;
        border-bottom: 1px solid var(--color-border);
    }
    .info-list li span:last-child { color: var(--color-text); }
    .info-address {
        font-style: normal;
        font-size: 0.95rem;
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: 1.25rem;
    }
    .info-link {
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-accent);
        text-decoration: none;
        transition: letter-spacing 0.2s;
    }
    .info-link:hover { letter-spacing: 0.18em; }

    @media (max-width: 768px) {
        .story-section, .info-section { grid-template-columns: 1fr; gap: 2.5rem; }
        .story-image img { height: 280px; }
        .full-photo { height: 260px; }
    }
</style>
