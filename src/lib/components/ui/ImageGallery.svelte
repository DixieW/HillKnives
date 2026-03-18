<!-- src/lib/components/ui/ImageGallery.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let images: { src: string; alt: string; caption?: string }[] = [];
  export let width: string    = '100%';
  export let maxWidth: string = '420px';

  let current = 0;
  let zoomed  = false;

  let carouselTimer:    ReturnType<typeof setTimeout>  | null = null;
  let carouselInterval: ReturnType<typeof setInterval> | null = null;

  function prev() {
    current = (current - 1 + images.length) % images.length;
    resetCarousel();
  }

  function next() {
    current = (current + 1) % images.length;
    resetCarousel();
  }

  function resetCarousel() {
    if (carouselTimer)    clearTimeout(carouselTimer);
    if (carouselInterval) clearInterval(carouselInterval);
    carouselTimer = setTimeout(startCycle, 5000);
  }

  function startCycle() {
    carouselInterval = setInterval(() => {
      if (!zoomed && images.length > 1) {
        current = (current + 1) % images.length;
      }
    }, 3500);
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape')      { zoomed = false; }
    if (e.key === 'ArrowLeft')   { prev(); }
    if (e.key === 'ArrowRight')  { next(); }
  }

  onMount(() => {
    window.addEventListener('keydown', onKeydown);
    resetCarousel();
  });

  onDestroy(() => {
    window.removeEventListener('keydown', onKeydown);
    if (carouselTimer)    clearTimeout(carouselTimer);
    if (carouselInterval) clearInterval(carouselInterval);
  });
</script>

<!-- ── Gallery ─────────────────────────────────────────────── -->
<div class="gallery" style="width: {width}; max-width: {maxWidth};">

  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="main-wrap" on:click={() => (zoomed = true)}>

    <img
      src={images[current].src}
      alt={images[current].alt}
      class="main-img"
      draggable="false"
    />

    {#if images.length > 1}
      <button class="nav nav--prev" on:click|stopPropagation={prev} aria-label="Vorige afbeelding">
        <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
          <polyline points="8,1 2,9 8,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="nav nav--next" on:click|stopPropagation={next} aria-label="Volgende afbeelding">
        <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
          <polyline points="2,1 8,9 2,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    {/if}
  </div>

  {#if images[current].caption}
    <p class="caption">{images[current].caption}</p>
  {/if}

  {#if images.length > 1}
    <div class="dots" role="tablist" aria-label="Afbeeldingen">
      {#each images as _, i}
        <button
          class="dot"
          class:dot--active={i === current}
          role="tab"
          aria-selected={i === current}
          aria-label="Afbeelding {i + 1}"
          on:click={() => { current = i; zoomed = false; resetCarousel(); }}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<!-- ── Zoom overlay ────────────────────────────────────────── -->
{#if zoomed}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="zoom-overlay" on:click={() => (zoomed = false)}>

    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="zoom-frame" on:click|stopPropagation>

      <img
        src={images[current].src}
        alt={images[current].alt}
        class="zoom-img"
        draggable="false"
      />

      <!-- X — top-right corner of the image -->
      <button
        class="close-btn"
        on:click={() => (zoomed = false)}
        aria-label="Sluiten"
      >
        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="13" y1="1" x2="1"  y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Prev / Next — outside the image edges -->
      {#if images.length > 1}
        <button class="zoom-nav zoom-nav--prev" on:click={prev} aria-label="Vorige afbeelding">
          <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
            <polyline points="8,1 2,9 8,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="zoom-nav zoom-nav--next" on:click={next} aria-label="Volgende afbeelding">
          <svg viewBox="0 0 10 18" fill="none" aria-hidden="true">
            <polyline points="2,1 8,9 2,17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
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

  /* ── Main image frame ────────────────────────────────────── */
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
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    cursor: zoom-in;
  }

  .main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
    user-select: none;
  }

  /* ── Small gallery nav buttons ───────────────────────────── */
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

  .nav svg        { width: 10px; height: 18px; }
  .nav--prev      { left:  0.6rem; }
  .nav--next      { right: 0.6rem; }

  .nav:hover {
    background: var(--color-bg-raised);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

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

  /* ── Zoom overlay ────────────────────────────────────────── */
  .zoom-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(10, 11, 9, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    animation: overlay-in 0.25s ease both;
  }

  @keyframes overlay-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Zoom frame — anchors buttons relative to the image ──── */
  .zoom-frame {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    overflow: visible;
    animation: gallery-zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes gallery-zoom-in {
    from { transform: scale(0.7); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }

  /* ── Zoomed image ────────────────────────────────────────── */
  .zoom-img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    display: block;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.75);
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
    border: 3px solid transparent;
  }

  /* ── Close button — just outside top-right corner ────────── */
  .close-btn {
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    background: rgba(26, 28, 24, 0.92);
    border: 1px solid var(--color-border-light);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .close-btn svg { width: 12px; height: 12px; }

  .close-btn:hover {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: #0a0b09;
  }

  /* ── Overlay prev / next — outside image edges ───────────── */
  .zoom-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    background: rgba(26, 28, 24, 0.82);
    border: 1px solid var(--color-border-light);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .zoom-nav svg { width: 12px; height: 22px; }

  .zoom-nav:hover {
    background: var(--color-bg-raised);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .zoom-nav--prev { left:  -56px; }
  .zoom-nav--next { right: -56px; }
</style>
