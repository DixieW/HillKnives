<!-- src/lib/components/ui/ImageCard.svelte -->
<script lang="ts">
  // Required
    export let src: string;
    export let alt: string;

    // Optional
    export let title: string = '';
    export let subtitle: string = '';
    export let description: string = '';
    export let href: string = '';        // makes the whole card a link
    export let badge: string = '';       // small label top-right
    export let fit: 'cover' | 'contain' | 'natural' = 'cover';
    export let aspect: 'square' | 'video' | 'portrait' | 'wide' = 'video';
    export let width: string = '100%';
    export let maxWidth: string = '100%';

  const aspectMap = {
    square:   'aspect-square',
    video:    'aspect-video',
    portrait: 'aspect-[3/4]',
    wide:     'aspect-[16/5]',
  };
</script>

<!-- Render as <a> if href is provided, otherwise <div> -->
<svelte:element
    this={href ? 'a' : 'div'}
    href={href || undefined}
    class="card {href ? 'card-link' : ''}"
    style="width: {width}; max-width: {maxWidth};"
>
  <!-- Image wrapper -->
   <!-- change your img-wrap div -->
<div class="img-wrap {fit !== 'natural' ? aspectMap[aspect] : ''}">
    <img {src} {alt} loading="lazy" class:contain={fit === 'contain'} class:natural={fit === 'natural'} />
  

    <!-- Badge -->
    {#if badge}
      <span class="badge">{badge}</span>
    {/if}

    <!-- Overlay on hover -->
    <div class="overlay" aria-hidden="true"></div>
  </div>

  <!-- Content -->
  {#if title || subtitle || description}
    <div class="content">
      {#if subtitle}
        <span class="subtitle">{subtitle}</span>
      {/if}
      {#if title}
        <h3 class="title">{title}</h3>
      {/if}
      {#if description}
        <p class="description">{description}</p>
      {/if}

      <!-- Arrow indicator if it's a link -->
      {#if href}
        <span class="arrow" aria-hidden="true">→</span>
      {/if}
    </div>
  {/if}
</svelte:element>

<style>
.card {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 0;
    background: var(--color-bg-surface);
    border: 2px solid var(--color-border);
    overflow: hidden;
    transition: border-color 0.25s, transform 0.25s;
    text-decoration: none;
    color: inherit;
    box-shadow:rgba(0, 0, 0, 0.2) 10px 10px 5px;
}

.card-link:hover {
    border-color: var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Image */
.img-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    padding: 1rem;
}

.card-link:hover img {
    transform: scale(1.04);
}

/* Overlay — darkens image on hover */
.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s;
}

.card-link:hover .overlay {
    background: rgba(0, 0, 0, 0.2);
}

/* Badge */
.badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: var(--color-accent);
    color: #000;
    font-family: var(--font-display);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.25rem 0.6rem;
}

/* Content */
.content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.subtitle {
    font-family: var(--font-display);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-accent);
}

.title {
    font-family: var(--font-display);
    font-size: 1.3rem;
    line-height: 1.1;
    color: var(--color-text);
}

.description {
    font-family: var(--font-body);
    font-size: 0.88rem;
    line-height: 1.65;
    color: var(--color-text-muted);
    margin-top: 0.25rem;
}

.arrow {
    margin-top: auto;
    padding-top: 0.75rem;
    font-size: 1.1rem;
    color: var(--color-accent);
    transition: transform 0.2s;
    display: block;
}

.card-link:hover .arrow {
    transform: translateX(4px);
}
/* add to your existing img style */
img.contain {
    object-fit: contain;    
    background: var(--color-bg-raised); /* fills the empty space around the image */
}

img.natural {
    width: 100%;
    height: auto;       /* image keeps its own proportions */
    object-fit: unset;
}
</style>