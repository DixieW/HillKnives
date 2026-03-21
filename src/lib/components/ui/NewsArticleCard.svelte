<!-- src/lib/components/ui/NewsArticleCard.svelte -->
<script lang="ts">
  // Required
  export let title: string;
  export let excerpt: string;
  export let date: string;

  // Optional
  export let category: string  = '';
  export let image: string     = '';
  export let href: string      = '';
  export let readTime: string  = '';
  export let badgePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';

  let lightboxOpen = false;

  function openLightbox(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    lightboxOpen = true;
  }
  function closeLightbox() { lightboxOpen = false; }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Lightbox overlay -->
{#if lightboxOpen}
  <div
    class="lightbox-backdrop"
    role="button"
    tabindex="0"
    aria-label="Sluit afbeelding"
    onclick={closeLightbox}
    onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
  >
    <div class="lightbox-inner" onclick={(e) => e.stopPropagation()} role="presentation">
      <button class="lightbox-close" onclick={closeLightbox} aria-label="Sluit">✕</button>
      <img src={image} alt={title} class="lightbox-img" />
      {#if title}
        <p class="lightbox-caption">{title}</p>
      {/if}
    </div>
  </div>
{/if}

<svelte:element
  this={href ? 'a' : 'article'}
  href={href || undefined}
  class="news-card {href ? 'news-card--link' : ''}"
>
  {#if image}
    <div class="img-wrap">
      <img src={image} alt={title} loading="lazy" onclick={openLightbox} class="zoomable" />
      {#if category}
        <span class="badge badge--{badgePosition}">{category}</span>
      {/if}
      <div class="overlay" aria-hidden="true"></div>
      <!-- Zoom button -->
      <button class="zoom-btn" onclick={openLightbox} title="Vergroot afbeelding" aria-label="Vergroot afbeelding">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="7"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
          <line x1="11" y1="8" x2="11" y2="14"/>
        </svg>
      </button>
    </div>
  {:else if category}
    <div class="category-strip">
      <span class="badge badge--inline">{category}</span>
    </div>
  {/if}

  <div class="content">
    <div class="meta">
      <time class="date">{date}</time>
      {#if readTime}
        <span class="sep" aria-hidden="true">·</span>
        <span class="read-time">{readTime} leestijd</span>
      {/if}
    </div>

    <h3 class="title">{title}</h3>
    <p class="excerpt">{excerpt}</p>

    {#if href}
      <span class="read-more">
        Lees meer <span class="arrow" aria-hidden="true">→</span>
      </span>
    {/if}
  </div>
</svelte:element>

<style>
  /* ── Lightbox ───────────────────────────────────────────── */
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.88);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    cursor: zoom-out;
  }
  .lightbox-inner {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  .lightbox-img {
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    box-shadow: 0 8px 48px rgba(0,0,0,0.7);
    border: 1px solid var(--color-border);
  }
  .lightbox-close {
    position: absolute;
    top: -2.5rem;
    right: 0;
    background: none;
    border: none;
    color: var(--color-text-muted);
    font-size: 1.3rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    transition: color 0.2s;
  }
  .lightbox-close:hover { color: var(--color-text); }
  .lightbox-caption {
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-text-dim);
    text-align: center;
  }

  /* ── Zoom button ────────────────────────────────────────── */
  .zoom-btn {
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    width: 2rem;
    height: 2rem;
    background: rgba(16, 18, 14, 0.75);
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s, color 0.2s;
    z-index: 2;
    padding: 0.3rem;
  }
  .zoom-btn svg { width: 100%; height: 100%; }
  .img-wrap:hover .zoom-btn { opacity: 1; }
  .zoom-btn:hover { color: var(--color-accent); border-color: var(--color-accent); }

  /* ── Card shell ─────────────────────────────────────────── */
  .news-card {
    display: flex;
    flex-direction: column;
    background:
      linear-gradient(var(--color-bg-surface), var(--color-bg-surface)) padding-box,
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
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: 10px 10px 24px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
  }

  .news-card--link:hover {
    background:
      linear-gradient(var(--color-bg-surface), var(--color-bg-surface)) padding-box,
      linear-gradient(
        135deg,
        var(--color-bg-raised)    0%,
        var(--color-border-light) 20%,
        #c8c8c4                   38%,
        #e8e8e4                   47%,
        #ffffff                   50%,
        var(--color-accent)       54%,
        #c8c8c4                   64%,
        var(--color-border-light) 78%,
        var(--color-bg-raised)   100%
      ) border-box;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  }

  /* ── Image block ────────────────────────────────────────── */
  .img-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }
  img.zoomable { cursor: zoom-in; }

  .news-card--link:hover img { transform: scale(1.05); }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s;
    pointer-events: none;
  }

  .news-card--link:hover .overlay { background: rgba(0, 0, 0, 0.18); }

  /* ── Badge ──────────────────────────────────────────────── */
  .badge {
    position: absolute;
    background: var(--color-accent);
    color: #0a0b09;
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    z-index: 1;
  }
  .badge--top-left     { top: 0.75rem;    left: 0.75rem;  }
  .badge--top-right    { top: 0.75rem;    right: 0.75rem; }
  .badge--bottom-left  { bottom: 0.75rem; left: 0.75rem;  }
  .badge--bottom-right { bottom: 0.75rem; right: 0.75rem; }

  .category-strip { padding: 0.75rem 1.25rem 0; }
  .badge--inline { position: static; display: inline-block; }

  /* ── Content ────────────────────────────────────────────── */
  .content {
    padding: 1.25rem 1.4rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    flex: 1;
  }

  .meta { display: flex; align-items: center; gap: 0.4rem; }

  .date, .read-time {
    font-family: var(--font-display);
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-dim);
  }

  .sep { color: var(--color-text-dim); font-size: 0.75rem; }

  .title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 600;
    color: var(--color-text);
    margin: 0.15rem 0 0;
    letter-spacing: 0.02em;
  }

  .excerpt {
    font-family: var(--font-body);
    font-size: 0.875rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    margin-top: 0.2rem;
    flex: 1;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.75rem;
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent);
    transition: gap 0.2s;
  }

  .news-card--link:hover .read-more { gap: 0.6rem; }
  .news-card--link:hover .arrow { transform: translateX(3px); }
  .arrow { transition: transform 0.2s; }
</style>
