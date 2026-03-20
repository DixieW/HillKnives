<script lang="ts">
  import NewsArticleCard from '$lib/components/ui/NewsArticleCard.svelte';
  import ImageGallery from '$lib/components/ui/ImageGallery.svelte';
  import FadeIn from '$lib/components/ui/FadeIn.svelte';
  import ArticleImg from '$lib/assets/images/Article.jpg';
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

  <!-- ── VOOR & NA ── -->
  <section class="split-section">
    <FadeIn direction="right" duration={1000}>
      <div class="gallery-wrap">
        <h2 class="section-title">Voor &amp; Na</h2>
        <ImageGallery {images} />
      </div>
    </FadeIn>
    <FadeIn direction="left" duration={1000} delay={200}>
      <div class="split-text">
        <p class="split-eyebrow">Het verschil zit in het detail</p>
        <h3 class="split-heading">Van bot naar briljant</h3>
        <p>
          Elk mes dat onze werkplaats binnenkomt, verlaat het scherper dan ooit. In de voor- en na-galerij ziet u het verschil met eigen ogen — van een bot, uitgelopen lemmet tot een mes dat snijdt als een scheermesje.
        </p>
        <p>
          Wij gebruiken professionele slijptechnieken afgestemd op het type staal en de oorspronkelijke slijphoek van het mes. Geen standaard aanpak, maar vakwerk op maat.
        </p>
        <p class="split-note">
          Foto's worden binnenkort toegevoegd. Heeft u een voor/na foto van uw mes? Stuur ons een bericht via het contactformulier.
        </p>
      </div>
    </FadeIn>
  </section>

  <!-- ── LAATSTE NIEUWS ── -->
  <section class="split-section split-section--alt">
    <FadeIn direction="right" duration={1000}>
      <div class="split-text">
        <p class="section-eyebrow">In de pers</p>
        <h2 class="section-title left">Trots in de krant</h2>
        <p>
          Een krantenartikel dat ons na aan het hart ligt. Mooi om te zien dat het vakmanschap van onze slijperij de aandacht heeft getrokken van de pers — een erkenning van decennia trouw handwerk in Rotterdam.
        </p>
        <p>
          Klik op de afbeelding om het artikel te vergroten.
        </p>
      </div>
    </FadeIn>
    <FadeIn direction="left" duration={1000} delay={200}>
      <div class="articles-col">
        <NewsArticleCard
          image={ArticleImg}
          title="Hill Knives in de pers"
          excerpt="Een mooie erkenning van ons vakmanschap — Rotterdam's bekende messenslijperij onder de aandacht."
          date=""
          category="Pers"
          href=""
        />
      </div>
    </FadeIn>
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

  /* ── Split sections (Voor & Na + Laatste nieuws) ── */
  .split-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    padding: 5rem clamp(1.5rem, 6vw, 8rem);
    border-bottom: 1px solid var(--color-border);
  }
  .split-section--alt {
    background: var(--color-bg-surface);
  }

  /* ── Shared text block ── */
  .split-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .split-eyebrow,
  .section-eyebrow {
    font-family: var(--font-display);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
  }
  .split-heading {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800;
    text-transform: uppercase;
    color: var(--color-text);
  }
  .split-text p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.75;
  }
  .split-note {
    font-size: 0.8rem !important;
    color: var(--color-text-dim) !important;
    font-style: italic;
    border-left: 2px solid var(--color-border);
    padding-left: 0.75rem;
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }
  .section-title.left { text-align: left; }

  .gallery-wrap { width: 100%; }
  .articles-col { display: flex; flex-direction: column; gap: 1.5rem; }

  @media (max-width: 768px) {
    .documentary-section,
    .split-section {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
