<!-- src/lib/components/ui/ImageGallery.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let images: { src: string; alt: string; caption?: string }[] = [];

  let current = 0;
  let lightboxOpen = false;

  function prev() {
    current = (current - 1 + images.length) % images.length;
  }

  function next() {
    current = (current + 1) % images.length;
  }

  function openLightbox(index: number) {
    current = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (!lightboxOpen) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  }

  onMount(() => window.addEventListener('keydown', onKeydown));
  onDestroy(() => window.removeEventListener('keydown', onKeydown));
</script>

<!-- ── Gallery ─────────────────────────────────────────────── -->
<div class="gallery">

  <!-- Main display image -->
  <div class="main-wrap">
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <img
      src={images[current].src}
      alt={images[current].alt}
      class="main-img"
      on:click={() => openLightbox(current)}
      role="img"
    />

    <!-- Prev / Next buttons -->
    <button class="nav nav--prev" on:click={prev} aria-label="Vorige afbeelding">
      <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
        <polyline points="8,1 2,9 8,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="nav nav--next" on:click={next} aria-label="Volgende afbeelding">
      <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
        <polyline points="2,1 8,9 2,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Enlarge hint -->
    <div class="enlarge-hint" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
  </div>

  <!-- Caption -->
  {#if images[current].caption}
    <p class="caption">{images[current].caption}</p>
  {/if}

  <!-- Dot indicators -->
  {#if images.length > 1}
    <div class="dots" role="tablist" aria-label="Afbeeldingen">
      {#each images as _, i}
        <button
          class="dot"
          class:dot--active={i === current}
          role="tab"
          aria-selected={i === current}
          aria-label="Afbeelding {i + 1}"
          on:click={() => (current = i)}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<!-- ── Lightbox ────────────────────────────────────────────── -->
{#if lightboxOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="lightbox-backdrop" on:click={closeLightbox} role="presentation">
    <!-- Stop clicks on the inner panel from closing -->
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="lightbox-panel" on:click|stopPropagation role="presentation">

      <button class="close-btn" on:click={closeLightbox} aria-label="Sluiten">
        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="13" y1="1" x2="1"  y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <img
        src={images[current].src}
        alt={images[current].alt}
        class="lightbox-img"
      />

      {#if images[current].caption}
        <p class="lightbox-caption">{images[current].caption}</p>
      {/if}

      {#if images.length > 1}
        <button class="lb-nav lb-nav--prev" on:click={prev} aria-label="Vorige">
          <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
            <polyline points="8,1 2,9 8,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="lb-nav lb-nav--next" on:click={next} aria-label="Volgende">
          <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
            <polyline points="2,1 8,9 2,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <p class="lb-counter">{current + 1} / {images.length}</p>
      {/if}
    </div>
  </div>
{/if}

<style>
  /* ── Gallery wrapper ─────────────────────────────────────── */
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* ── Main image ──────────────────────────────────────────── */
  .main-wrap {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background:
      var(--color-bg) padding-box,
      linear-gradient(
        135deg,
        var(--color-bg)            0%,
        var(--color-bg-raised)    15%,
        var(--color-border-light) 28%,
        #9aaa96                   40%,
        #d8d8d4                   48%,
        #e8e8e4                   50%,
        var(--color-accent)       54%,
        #9aaa96                   62%,
        var(--color-border-light) 75%,
        var(--color-bg-raised)    88%,
        var(--color-bg)          100%
      ) border-box;
    border: 2px solid transparent;
    box-shadow: 10px 10px 24px rgba(0, 0, 0, 0.35);
    cursor: zoom-in;
  }

  .main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    pointer-events: none;
  }

  .main-wrap:hover .main-img {
    transform: scale(1.03);
  }

  /* ── Enlarge hint icon ───────────────────────────────────── */
  .enlarge-hint {
    position: absolute;
    bottom: 0.6rem;
    right: 0.6rem;
    width: 28px;
    height: 28px;
    color: var(--color-text-muted);
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  .main-wrap:hover .enlarge-hint {
    opacity: 0.7;
  }

  /* ── Prev / Next buttons ─────────────────────────────────── */
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    background: rgba(26, 28, 24, 0.7);
    border: 1px solid var(--color-border-light);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    z-index: 1;
  }

  .nav svg {
    width: 10px;
    height: 18px;
  }

  .nav:hover {
    background: var(--color-bg-raised);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .nav--prev { left:  0.6rem; }
  .nav--next { right: 0.6rem; }

  /* ── Caption ─────────────────────────────────────────────── */
  .caption {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--color-text-dim);
    text-align: center;
    margin: 0;
  }

  /* ── Dot indicators ──────────────────────────────────────── */
  .dots {
    display: flex;
    justify-content: center;
    gap: 0.45rem;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-border-light);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, transform 0.2s;
  }

  .dot--active {
    background: var(--color-accent);
    transform: scale(1.35);
  }

  /* ── Lightbox backdrop ───────────────────────────────────── */
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 11, 9, 0.92);
    backdrop-filter: blur(6px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  /* ── Lightbox panel ──────────────────────────────────────── */
  .lightbox-panel {
    position: relative;
    max-width: min(90vw, 1100px);
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    background:
      var(--color-bg-surface) padding-box,
      linear-gradient(
        135deg,
        var(--color-bg)            0%,
        var(--color-bg-raised)    15%,
        var(--color-border-light) 28%,
        #9aaa96                   40%,
        #d8d8d4                   48%,
        #e8e8e4                   50%,
        var(--color-accent)       54%,
        #9aaa96                   62%,
        var(--color-border-light) 75%,
        var(--color-bg-raised)    88%,
        var(--color-bg)          100%
      ) border-box;
    border: 2px solid transparent;
    padding: 1rem;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7);
  }

  /* ── Lightbox image ──────────────────────────────────────── */
  .lightbox-img {
    max-width: 100%;
    max-height: calc(90vh - 8rem);
    object-fit: contain;
    display: block;
  }

  /* ── Lightbox caption ────────────────────────────────────── */
  .lightbox-caption {
    font-family: var(--font-body);
    font-size: 0.82rem;
    color: var(--color-text-muted);
    text-align: center;
    margin: 0;
  }

  /* ── Lightbox prev / next ────────────────────────────────── */
  .lb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(26, 28, 24, 0.75);
    border: 1px solid var(--color-border-light);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    z-index: 1;
  }

  .lb-nav svg {
    width: 10px;
    height: 18px;
  }

  .lb-nav:hover {
    background: var(--color-bg-raised);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .lb-nav--prev { left:  -52px; }
  .lb-nav--next { right: -52px; }

  /* ── Counter ─────────────────────────────────────────────── */
  .lb-counter {
    font-family: var(--font-display);
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    color: var(--color-text-dim);
    margin: 0;
  }

  /* ── Close button ────────────────────────────────────────── */
  .close-btn {
    position: absolute;
    top: -14px;
    right: -14px;
    width: 32px;
    height: 32px;
    background: var(--color-bg-raised);
    border: 1px solid var(--color-border-light);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .close-btn svg {
    width: 12px;
    height: 12px;
  }

  .close-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: #0a0b09;
  }
</style>
