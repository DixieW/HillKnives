<script lang="ts">
  import NewsArticleCard from '$lib/components/ui/NewsArticleCard.svelte';
  import ImageGallery from '$lib/components/ui/ImageGallery.svelte';
  import FadeIn from '$lib/components/ui/FadeIn.svelte';
  import Image1 from '$lib/assets/images/TestImage1.jpeg';
  import Image2 from '$lib/assets/images/TestImage2.jpeg';
  import Image3 from '$lib/assets/images/TestImage3.jpeg';
  import { DocumentaryLink } from '$lib/components/utils/constants';

  const docVideoId = DocumentaryLink.split('v=')[1];

  const images = [
    { src: Image1, alt: 'Geslepen koksmes', caption: 'Koksmes na het slijpen' },
    { src: Image2, alt: 'Broodmes', caption: 'Broodmes — nieuw scherp' },
    { src: Image3, alt: 'Schaar', caption: 'Schaar na behandeling' },
  ];
</script>

<svelte:head>
  <title>Nieuws — Hill Knives Messenslijperij Rotterdam</title>
</svelte:head>

<main class="nieuws-page">

  <!-- ── PAGE HEADER ── -->
  <section class="page-header">
    <FadeIn direction="down" duration={900}>
      <p class="eyebrow">Nieuws & Verhalen</p>
      <h1 class="page-title">Hill Knives<br/>in de spotlight</h1>
    </FadeIn>
  </section>

  <!-- ── DOCUMENTARY ── -->
  <section class="documentary-section">
    <FadeIn direction="right" duration={1000}>
      <div class="doc-content">
        <p class="doc-eyebrow">RTV Rijnmond · Ode aan de Rotterdammer</p>
        <h2 class="doc-title">STAAL</h2>
        <p class="doc-text">
          Een liefdevol portret van drie generaties messenmakers: Albert, Michael en Frans van den Heuvel.
          Verfilmd door RTV Rijnmond als onderdeel van de tentoonstelling
          <em>Het wonder dat niet omvalt</em> van Museum Rotterdam.
        </p>
        <a class="doc-btn" href={DocumentaryLink} target="_blank" rel="noopener noreferrer">
          Bekijk de documentaire →
        </a>
      </div>
    </FadeIn>
    <FadeIn direction="left" duration={1000} delay={200}>
      <div class="doc-video">
        <iframe
          src="https://www.youtube.com/embed/{docVideoId}"
          title="STAAL — Ode aan de Rotterdammer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </FadeIn>
  </section>

  <!-- ── GALLERY ── -->
  <section class="gallery-section">
    <FadeIn direction="down" duration={900}>
      <h2 class="section-title">Voor &amp; Na</h2>
    </FadeIn>
    <div class="gallery-wrap">
      <ImageGallery {images} />
    </div>
  </section>

  <!-- ── ARTICLES ── -->
  <section class="articles-section">
    <FadeIn direction="down" duration={900}>
      <h2 class="section-title">Laatste nieuws</h2>
    </FadeIn>
    <div class="articles-grid">
      <FadeIn direction="up" duration={900} delay={100}>
        <NewsArticleCard
          title="Nieuwe slijpmachine aangekomen"
          excerpt="Onze nieuwste Tormek machine is gearriveerd en zorgt voor een nog scherpere snede en een mooiere afwerking."
          date="18 maart 2026"
          category="Nieuws"
          readTime="2 min"
          href="/nieuws/slijpmachine"
        />
      </FadeIn>
    </div>
  </section>

</main>

<style>
  .nieuws-page {
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

  /* ── Documentary ── */
  .documentary-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding: 5rem clamp(1.5rem, 6vw, 8rem);
    background: var(--color-bg-surface);
    border-bottom: 1px solid var(--color-border);
  }
  .doc-eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
  }
  .doc-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text);
    margin-bottom: 1.25rem;
    line-height: 1;
  }
  .doc-text {
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    max-width: 45ch;
    margin-bottom: 2rem;
  }
  .doc-btn {
    display: inline-block;
    padding: 0.85rem 2rem;
    background: var(--color-accent);
    color: var(--color-bg);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--color-accent);
    transition: background 0.2s, color 0.2s, transform 0.15s;
  }
  .doc-btn:hover {
    background: transparent;
    color: var(--color-accent);
    transform: translateY(-2px);
  }
  .doc-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 1px solid var(--color-border);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  }
  .doc-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* ── Gallery & Articles ── */
  .gallery-section,
  .articles-section {
    padding: 5rem clamp(1.5rem, 6vw, 8rem);
  }
  .articles-section { background: var(--color-bg-surface); }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text);
    margin-bottom: 2.5rem;
  }

  .gallery-wrap { max-width: 900px; }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .documentary-section {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
