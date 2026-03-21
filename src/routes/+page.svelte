<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import ImageBlock from '$lib/components/ui/ImageBlock.svelte';
    import Divider from '$lib/components/ui/Divider.svelte';
    import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
    import BtnTrans from '$lib/components/ui/ButtonTrans.svelte';
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
            <ImageBlock src={Image2} alt="Steakmessen" title="Steak & tafelmessen" subtitle="Scherp voor elk moment" aspect="square" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
        <FadeIn duration={1200} delay={150}>
            <ImageBlock src={Image1} alt="Messen slijpen" title="Professioneel slijpen" subtitle="Precisie boven alles" aspect="portrait" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
        <FadeIn direction="left" duration={1200} delay={300}>
            <ImageBlock src={Image3} alt="Gereedschap" title="40 jaar vakmanschap" subtitle="Familie & traditie" aspect="square" fit="cover" width="100%" maxWidth="800px" />
        </FadeIn>
    </div>
</section>

<!-- ── PITCH ──────────────────────────────────────────── -->
<section class="pitch-section">
    <FadeIn direction="down" duration={900}>
        <p class="pitch-claim">De scherpste messen van Rotterdam? Die komen van HillKnives.</p>
        <p class="pitch-proof">Herman den Blijker weet het. De toprestaurants van Rotterdam weten het. En nu jij ook.</p>
        <p class="pitch-body">Bij HillKnives slijpen we alles — snel, vakkundig en eerlijk geprijsd.<br/>Breng je messen langs en ga weg alsof je nieuw bestek hebt.</p>
        <p class="pitch-tagline">HillKnives Rotterdam — omdat bot snijden geen optie is.</p>
    </FadeIn>
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
    /* ── Pitch ────────────────────────────────────────── */
    .pitch-section {
        background: var(--color-bg-raised);
        border-top: 2px solid var(--color-border-light);
        border-bottom: 1px solid var(--color-border-light);
        padding: 4rem 2rem;
        text-align: center;
        max-width: 760px;
        margin: 0 auto;
    }
    .pitch-claim {
        font-family: var(--font-display);
        font-size: clamp(1.4rem, 3vw, 2rem);
        font-weight: 700;
        color: var(--color-accent);
        letter-spacing: 0.03em;
        margin-bottom: 1rem;
    }
    .pitch-proof {
        font-size: 1rem;
        color: var(--color-text-muted);
        font-style: italic;
        margin-bottom: 1.5rem;
    }
    .pitch-body {
        font-size: 1.05rem;
        color: var(--color-text);
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }
    .pitch-tagline {
        font-family: var(--font-display);
        font-size: 0.85rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--color-text-dim);
    }

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
            rgba(16, 18, 14, 0.94) 40%,
            rgba(16, 18, 14, 0.38) 100%
        );
        /* Bottom vignette for depth */
        box-shadow: inset 0 -120px 80px rgba(10, 12, 8, 0.65);
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
        color: #f5f3ed;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        text-shadow: 0 4px 24px rgba(0, 0, 0, 0.72), 0 1px 4px rgba(0, 0, 0, 0.55);
    }

    .hero-sub {
        font-size: 1.15rem;
        color: #ccc9be;
        max-width: 40ch;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
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
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.36), inset 0 1px 0 rgba(255,255,255,0.04);
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
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--color-accent);
        letter-spacing: 0.03em;
        text-shadow: 0 1px 8px rgba(200, 168, 75, 0.35);
    }
    .stat-label {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--color-text-muted);
    }
    .stat-divider {
        width: 1px;
        height: 2.5rem;
        background: var(--color-border-light);
    }

    /* ── Sections ─────────────────────────────────────── */
    .services-section,
    .showcase-section {
        padding: 5rem clamp(1.5rem, 5vw, 6rem);
        background: var(--color-bg);
        box-shadow: inset 0 8px 32px rgba(0, 0, 0, 0.28);
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
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
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

    .divider-wrap {
        padding: 0 2rem;
        background: var(--color-bg);
    }

    /* ── CTA section ──────────────────────────────────── */
    .cta-section {
        padding: 6rem clamp(1.5rem, 6vw, 8rem);
        background: var(--color-bg-surface);
        border-top: 1px solid var(--color-border-light);
        box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.36), inset 0 1px 0 rgba(255,255,255,0.035);
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
        text-shadow: 0 2px 16px rgba(0, 0, 0, 0.32);
    }
</style>
