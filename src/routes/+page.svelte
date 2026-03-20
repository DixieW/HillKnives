<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import Imageblock from '$lib/components/ui/imageblock.svelte';
    import Divider from '$lib/components/ui/divider.svelte';
    import ServiceCard from '$lib/components/ui/servicecard.svelte';
    import BtnTrans from '$lib/components/ui/buttontrans.svelte';
    import Image1 from '$lib/assets/images/hb-messen_031.jpg';
    import Image2 from '$lib/assets/images/luxury line steakmessen rvs311x323.jpg';
    import Image3 from '$lib/assets/images/img-20171014-wa0000.jpg';
    import { YoutubeLink } from '$lib/components/utils/constants';

    const videoId = YoutubeLink.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;
</script>

<!-- ── HERO ──────────────────────────────────────────── -->
<section class="hero">
    <div class="video-bg">
        <iframe
            src={embedUrl}
            title="Hill Knives promo"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>
        <div class="video-overlay"></div>
    </div>

    <div class="hero-content">
        <FadeIn direction="down" duration={1000}>
            <p class="hero-eyebrow">Rotterdam · Sinds 1984</p>
            <h1 class="hero-title">Scherpte<br/>is een<br/>ambacht.</h1>
            <p class="hero-sub">Professioneel messen slijpen voor particulieren & horeca.</p>
            <div class="hero-ctas">
                <BtnTrans href="/prijzen" label="Bekijk prijzen" variant="accent" />
                <BtnTrans href="/contact" label="Maak een afspraak" variant="outline" />
            </div>
        </FadeIn>
    </div>
</section>

<!-- ── STATS BAR ──────────────────────────────────────── -->
<div class="stats-bar">
    <div class="stat">
        <span class="stat-number">40+</span>
        <span class="stat-label">Jaar ervaring</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
        <span class="stat-number">Rotterdam</span>
        <span class="stat-label">Insulindestraat 92</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
        <span class="stat-number">Vakwerk</span>
        <span class="stat-label">Elk mes gepolijst</span>
    </div>
</div>

<!-- ── SERVICES ───────────────────────────────────────── -->
<section class="services-section">
    <FadeIn direction="down" duration={900}>
        <h2 class="section-title">Wat wij slijpen</h2>
    </FadeIn>
    <div class="services-grid">
        <FadeIn direction="right" duration={1000} delay={100}>
            <ServiceCard
                icon="🔪"
                title="Keukenmessen"
                description="Van filieermes tot kokmes — wij slijpen en polijsten elk lemmet vakkundig scherp."
                href="/prijzen"
            />
        </FadeIn>
        <FadeIn duration={1000} delay={250}>
            <ServiceCard
                icon="✂"
                title="Scharen"
                description="Huishoud- en stoffenscharen terug in topconditie, voor chirurgische precisie."
                href="/prijzen"
            />
        </FadeIn>
        <FadeIn direction="left" duration={1000} delay={400}>
            <ServiceCard
                icon="🍞"
                title="Broodmessen"
                description="Kartelgeslepen broodmessen die snijden als op de eerste dag."
                href="/prijzen"
            />
        </FadeIn>
    </div>
</section>

<FadeIn direction="down" duration={1400}>
    <div class="divider-wrap">
        <Divider style="blade" width="50%" align="center" />
    </div>
</FadeIn>

<!-- ── SHOWCASE ───────────────────────────────────────── -->
<section class="showcase-section">
    <FadeIn direction="down" duration={900}>
        <h2 class="section-title">Vakmanschap in beeld</h2>
    </FadeIn>
    <div class="showcase-grid">
        <FadeIn direction="right" duration={1200}>
            <Imageblock src={Image2} alt="Steakmessen" title="Steak & tafelmessen" subtitle="Scherp voor elk moment" aspect="square" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
        <FadeIn duration={1200} delay={150}>
            <Imageblock src={Image1} alt="Messen slijpen" title="Professioneel slijpen" subtitle="Precisie boven alles" aspect="portrait" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
        <FadeIn direction="left" duration={1200} delay={300}>
            <Imageblock src={Image3} alt="Gereedschap" title="40 jaar vakmanschap" subtitle="Familie & traditie" aspect="square" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
    </div>
</section>

<!-- ── CTA ────────────────────────────────────────────── -->
<section class="cta-section">
    <FadeIn direction="down" duration={900}>
        <p class="cta-eyebrow">Klaar om te beginnen?</p>
        <h2 class="cta-title">Geef uw messen<br/>een nieuw leven.</h2>
        <div class="hero-ctas">
            <BtnTrans href="/prijzen" label="Bekijk alle diensten" variant="accent" />
            <BtnTrans href="/contact" label="Neem contact op" variant="outline" />
        </div>
    </FadeIn>
</section>

<style>
    /* ── Hero ─────────────────────────────────────────── */
    .hero {
        position: relative;
        width: 100%;
        height: 90vh;
        min-height: 560px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .video-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
    }
    .video-bg iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100vw;
        height: 56.25vw;
        min-height: 100%;
        min-width: 177.78vh;
        pointer-events: none;
    }
    .video-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            rgba(16, 18, 14, 0.88) 40%,
            rgba(16, 18, 14, 0.3) 100%
        );
    }

    .hero-content {
        position: relative;
        z-index: 10;
        padding: 4rem clamp(1.5rem, 6vw, 8rem);
        max-width: 700px;
    }

    .hero-eyebrow {
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 1rem;
    }

    .hero-title {
        font-family: var(--font-display);
        font-size: clamp(3.5rem, 8vw, 7rem);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: -0.02em;
        color: var(--color-text);
        text-transform: uppercase;
        margin-bottom: 1.5rem;
    }

    .hero-sub {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        max-width: 40ch;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }

    .hero-ctas {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    /* ── Stats bar ────────────────────────────────────── */
    .stats-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        padding: 1.75rem 2rem;
        background: var(--color-bg-raised);
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
        flex-wrap: wrap;
    }
    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
    }
    .stat-number {
        font-family: var(--font-display);
        font-size: 1.4rem;
        font-weight: 800;
        color: var(--color-accent);
        letter-spacing: 0.03em;
    }
    .stat-label {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--color-text-dim);
    }
    .stat-divider {
        width: 1px;
        height: 2.5rem;
        background: var(--color-border);
    }

    /* ── Sections ─────────────────────────────────────── */
    .services-section,
    .showcase-section {
        padding: 5rem clamp(1.5rem, 5vw, 6rem);
        background: var(--color-bg);
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

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
        max-width: 1100px;
        margin: 0 auto;
    }

    .showcase-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .divider-wrap { padding: 0 2rem; }

    /* ── CTA section ──────────────────────────────────── */
    .cta-section {
        padding: 6rem clamp(1.5rem, 6vw, 8rem);
        background: var(--color-bg-surface);
        border-top: 1px solid var(--color-border);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cta-eyebrow {
        font-family: var(--font-display);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-accent);
        margin-bottom: 1rem;
    }
    .cta-title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.01em;
        color: var(--color-text);
        line-height: 1.05;
        margin-bottom: 2.5rem;
    }
</style>
