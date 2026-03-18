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
  export let readTime: string  = '';  // e.g. "3 min"
</script>

<svelte:element
  this={href ? 'a' : 'article'}
  href={href || undefined}
  class="news-card {href ? 'news-card--link' : ''}"
>
  {#if image}
    <div class="img-wrap">
      <img src={image} alt={title} loading="lazy" />
      {#if category}
        <span class="badge">{category}</span>
      {/if}
      <div class="overlay" aria-hidden="true"></div>
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
  /* ── Card shell ─────────────────────────────────────────── */
  /*
   * Gradient border via background-clip trick:
   * padding-box layer = card fill, border-box layer = polished blade gradient.
   * Diagonal angle (135deg) simulates overhead light catching the frame edge.
   */
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
        #e8e8e4                   50%,   /* bright edge highlight — no variable */
        var(--color-accent)       54%,   /* gold glint */
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

  /* On hover: brighter highlights — like tilting the blade more into the light */
  .news-card--link:hover {
    background:
      linear-gradient(var(--color-bg-surface), var(--color-bg-surface)) padding-box,
      linear-gradient(
        135deg,
        var(--color-bg-raised)    0%,
        var(--color-border-light) 20%,
        #c8c8c4                   38%,
        #e8e8e4                   47%,
        #ffffff                   50%,   /* peak — full light catch */
        var(--color-accent)       54%,   /* gold glint */
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
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }

  .news-card--link:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s;
  }

  .news-card--link:hover .overlay {
    background: rgba(0, 0, 0, 0.18);
  }

  /* ── Badge ──────────────────────────────────────────────── */
  .badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
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

  .category-strip {
    padding: 0.75rem 1.25rem 0;
  }

  .badge--inline {
    position: static;
    display: inline-block;
  }

  /* ── Content ────────────────────────────────────────────── */
  .content {
    margin: 5rem;
    padding: 1.25rem 1.4rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    flex: 1;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .date,
  .read-time {
    font-family: var(--font-display);
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-dim);
  }

  .sep {
    color: var(--color-text-dim);
    font-size: 0.75rem;
  }

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

  .news-card--link:hover .read-more {
    gap: 0.6rem;
  }

  .arrow {
    transition: transform 0.2s;
  }

  .news-card--link:hover .arrow {
    transform: translateX(3px);
  }
</style>
