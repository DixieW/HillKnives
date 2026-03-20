<!-- src/lib/components/ui/Divider.svelte -->
<script lang="ts">
  export let width: string = '80%';
  export let align: 'left' | 'center' | 'right' = 'center';
  export let style: 'line' | 'dots' | 'blade' = 'blade';

  const alignMap = {
    left:   'margin-right: auto',
    center: 'margin-left: auto; margin-right: auto',
    right:  'margin-left: auto',
  };
</script>

<div class="divider-wrap">
  {#if style === 'line'}
    <div
      class="line"
      style="width: {width}; {alignMap[align]}"
    ></div>

  {:else if style === 'dots'}
    <div
      class="dots"
      style="width: {width}; {alignMap[align]}"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

  {:else if style === 'blade'}
    <!-- Themed to your Field & Forge palette — knife blade shape -->
    <div
      class="blade-wrap"
      style="width: {width}; {alignMap[align]}"
    >
      <div class="blade-line"></div>
      <svg viewBox="0 0 24 24" class="blade-icon" aria-hidden="true">
        <path
          d="M12 2 C12 2, 16 8, 16 14 L12 16 L8 14 C8 8, 12 2, 12 2Z"
          fill="var(--color-accent)"
        />
        <rect x="10" y="16" width="4" height="3"
          fill="var(--color-accent)" opacity="0.7"/>
      </svg>
      <div class="blade-line"></div>
    </div>
  {/if}
</div>

<style>
  .divider-wrap {
    padding: 2rem 0;
  }

  /* ── Line ────────────────────────────────────────────── */
  .line {
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border-light),
      var(--color-accent),
      var(--color-border-light),
      transparent
    );
  }

  /* ── Dots ────────────────────────────────────────────── */
  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }

  .dots span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-accent);
    opacity: 0.6;
  }

  .dots span:nth-child(2) {
    opacity: 1;
    width: 6px;
    height: 6px;
  }

  /* ── Blade ───────────────────────────────────────────── */
  .blade-wrap {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .blade-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border-light)
    );
  }

  .blade-wrap .blade-line:last-child {
    background: linear-gradient(
      to left,
      transparent,
      var(--color-border-light)
    );
  }

  .blade-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    filter: drop-shadow(0 0 4px rgba(200, 168, 75, 0.4));
  }
</style>