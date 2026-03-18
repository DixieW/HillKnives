
<script lang="ts">
  // Content
  export let title: string = '';
  export let subtitle: string = '';
  export let description: string = '';

  // Media — pass one or the other
  export let imageSrc: string = '';
  export let imageAlt: string = '';
  export let videoUrl: string = '';        // YouTube or Cloudflare Stream URL
  export let videoType: 'youtube' | 'cloudflare' | 'mp4' = 'youtube';

  // Layout
  export let height: 'full' | 'large' | 'medium' = 'full';
  export let overlay: number = 0.5;        // 0 = no overlay, 1 = fully dark
  export let align: 'left' | 'center' | 'right' = 'left';
  export let contentPosition: 'top' | 'center' | 'bottom' = 'center';

  // Optional CTA buttons
  export let primaryLabel: string = '';
  export let primaryHref: string = '';
  export let secondaryLabel: string = '';
  export let secondaryHref: string = '';

  const heightMap = {
    full:   '100vh',
    large:  '80vh',
    medium: '60vh',
  };

  const alignMap = {
    left:   'flex-start',
    center: 'center',
    right:  'flex-end',
  };

  const textAlignMap = {
    left:   'left',
    center: 'center',
    right:  'right',
  };

  const contentPositionMap = {
    top:    'flex-start',
    center: 'center',
    bottom: 'flex-end',
  };

  // Build embed URL
  function getEmbedUrl(url: string, type: string): string {
    if (type === 'youtube') {
      // Handle both full URLs and short URLs
      const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
      );
      const id = match?.[1] ?? url;
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1`;
    }
    if (type === 'cloudflare') {
      // Cloudflare Stream — pass the full embed URL directly
      return `${url}?autoplay=true&muted=true&loop=true&controls=false`;
    }
    return url;
  }

  $: embedUrl = videoUrl ? getEmbedUrl(videoUrl, videoType) : '';
</script>

<section
  class="hero"
  style="
    height: {heightMap[height]};
    --overlay-opacity: {overlay};
    --align: {alignMap[align]};
    --text-align: {textAlignMap[align]};
    --content-position: {contentPositionMap[contentPosition]};
  "
>
  <!-- ── Background media ───────────────────────────── -->
  <div class="hero-media" aria-hidden="true">

    {#if videoUrl && (videoType === 'youtube' || videoType === 'cloudflare')}
      <!-- iframe embed — YouTube or Cloudflare -->
      <iframe
        src={embedUrl}
        title="Hero background video"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>

    {:else if videoUrl && videoType === 'mp4'}
      <!-- Self-hosted mp4 -->
      <video
        src={videoUrl}
        autoplay
        muted
        loop
        playsinline
      ></video>

    {:else if imageSrc}
      <!-- Image -->
      <img src={imageSrc} alt={imageAlt} />

    {:else}
      <!-- Fallback — dark gradient placeholder -->
      <div class="hero-placeholder"></div>
    {/if}

    <!-- Overlay -->
    <div class="hero-overlay"></div>
  </div>

  <!-- ── Content ────────────────────────────────────── -->
  <div class="hero-content container">
    <div class="hero-inner">
      {#if subtitle}
        <span class="hero-subtitle">{subtitle}</span>
      {/if}

      {#if title}
        <h1 class="hero-title">{title}</h1>
      {/if}

      {#if description}
        <p class="hero-description">{description}</p>
      {/if}

      <!-- Slot for custom content -->
      <slot />

      {#if primaryLabel && primaryHref}
        <div class="hero-cta">
          <a href={primaryHref} class="btn btn-primary">{primaryLabel}</a>
          {#if secondaryLabel && secondaryHref}
            <a href={secondaryHref} class="btn btn-outline">{secondaryLabel}</a>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator" aria-hidden="true">
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    display: flex;
    align-items: var(--content-position);
    overflow: hidden;
  }

  /* ── Media layer ─────────────────────────────────── */
  .hero-media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  /* Shared fill styles for all media types */
  .hero-media img,
  .hero-media video,
  .hero-media iframe,
  .hero-placeholder {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hero-media img,
  .hero-media video {
    object-fit: cover;
    object-position: center;
  }

  /* iframe needs pointer-events disabled and scale trick
     to hide YouTube controls that peek in at edges */
  .hero-media iframe {
    border: none;
    /* scale up slightly to hide iframe borders/controls */
    transform: scale(1.05);
    pointer-events: none;
  }

  .hero-placeholder {
    background: linear-gradient(
      135deg,
      var(--color-bg) 0%,
      var(--color-bg-surface) 50%,
      var(--color-bg) 100%
    );
  }

  /* Dark overlay on top of media */
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, var(--overlay-opacity));
    /* subtle vignette on top of flat overlay */
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.4);
  }

  /* ── Content layer ───────────────────────────────── */
  .hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: var(--align);
    padding-top: 6rem;
    padding-bottom: 4rem;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: var(--align);
    text-align: var(--text-align);
    gap: 1.25rem;
    max-width: 680px;
  }

  .hero-subtitle {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--color-accent);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* line before subtitle */
  .hero-subtitle::before {
    content: '';
    display: block;
    width: 2rem;
    height: 1px;
    background: var(--color-accent);
    flex-shrink: 0;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 0.95;
    letter-spacing: -0.01em;
    color: var(--color-text);
    margin: 0;
  }

  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    max-width: 50ch;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  /* ── Scroll indicator ────────────────────────────── */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(
      to bottom,
      var(--color-accent),
      transparent
    );
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50%       { opacity: 1;   transform: scaleY(1.1); }
  }

  /* ── Responsive ──────────────────────────────────── */
  @media (max-width: 768px) {
    .hero-inner {
      max-width: 100%;
    }

    .hero-title {
      font-size: clamp(2.5rem, 10vw, 4rem);
    }
  }
</style>