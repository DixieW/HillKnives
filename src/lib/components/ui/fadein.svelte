<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let delay: number = 0;
  export let direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up';
  export let duration: number = 600;
  export let threshold: number = 0.15;

  const offsets = {
    up:    { x: 0,   y: 40  },
    down:  { x: 0,   y: -40 },
    left:  { x: 40,  y: 0   },
    right: { x: -40, y: 0   },
    none:  { x: 0,   y: 0   },
  };

  let visible = false;
  let el: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect(); // only fires once
        }
      },
      { threshold, rootMargin: '-60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div bind:this={el} class="fade-wrapper">
  {#if visible}
    <div in:fly={{ ...offsets[direction], duration, delay, opacity: 0 }}>
      <slot />
    </div>
  {/if}
</div>

<style>
  .fade-wrapper {
    min-height: 1px;
  }
</style>