<script lang="ts">
  import { onMount } from 'svelte';

  let x = 0, y = 0;
  let ox = 0, oy = 0;
  let frame: number;
  let visible = false;

  // Tip position inside SVG viewBox (where the blade point is)
  const TIP_X = 26;
  const TIP_Y = 2;
  const ANGLE = 315; // degrees

  // Convert angle to radians
  const rad = (ANGLE * Math.PI) / 180;

  // After rotating around (0,0), the tip lands at:
  // We rotate the tip point itself to find where it ends up
  // then offset so that rotated point sits at the mouse position
  const rotatedTipX = TIP_X * Math.cos(rad) - TIP_Y * Math.sin(rad);
  const rotatedTipY = TIP_X * Math.sin(rad) + TIP_Y * Math.cos(rad);

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  onMount(() => {
    function onMouseMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      visible = true;
    }
    function onMouseLeave() { visible = false; }
    function onMouseEnter() { visible = true; }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);

    function loop() {
      ox = lerp(ox, x, 0.18);
      oy = lerp(oy, y, 0.18);
      frame = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div
  class="cursor-wrap"
  class:visible
  style="transform: translate({ox - rotatedTipX}px, {oy - rotatedTipY}px) rotate({ANGLE}deg)"
  aria-hidden="true"
>
  <svg
    viewBox="0 0 32 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="knife-svg"
  >
    <defs>
      <linearGradient id="blade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#808880"/>
        <stop offset="30%"  stop-color="#c8ccc8"/>
        <stop offset="70%"  stop-color="#f0f2f0"/>
        <stop offset="88%"  stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e0e4e0"/>
      </linearGradient>

      <linearGradient id="bolster" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#7a6020"/>
        <stop offset="40%"  stop-color="#c8a028"/>
        <stop offset="70%"  stop-color="#d4a832"/>
        <stop offset="100%" stop-color="#7a6020"/>
      </linearGradient>

      <linearGradient id="handle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#0a0806"/>
        <stop offset="35%"  stop-color="#181410"/>
        <stop offset="65%"  stop-color="#1e1a14"/>
        <stop offset="100%" stop-color="#0e0c0a"/>
      </linearGradient>

      <radialGradient id="rivet" cx="35%" cy="35%">
        <stop offset="0%"   stop-color="#e8d060"/>
        <stop offset="60%"  stop-color="#c8a028"/>
        <stop offset="100%" stop-color="#7a6020"/>
      </radialGradient>
    </defs>

    <!-- ── Blade — sharp French chef, mirrored ───────────── -->
    <!-- Spine right, edge left, needle tip at (26, 2) -->
    <path
      d="M26 2
         L26 62
         L21 62
         C18 55, 9 100, 8 32
         C7 38, 10 7, 26 2
         Z"
      fill="url(#blade)"
    />

    <!-- Spine — hard straight right edge -->
    <line
      x1="26" y1="2"
      x2="26" y2="62"
      stroke="#c0c8c0"
      stroke-width="0.8"
    />

    <!-- Tip needle — very fine point -->
    <line x1="26" y1="1" x2="21" y2="7"
      stroke="white" stroke-width="0.35" opacity="0.9"/>

    <!-- Heel line -->
    <line x1="21" y1="62" x2="26" y2="62"
      stroke="#909890" stroke-width="1"/>

    <!-- ── Bolster ──────────────────────────────────────── -->
    <rect x="14" y="62" width="14" height="10" rx="0.5"
      fill="url(#bolster)"/>
    <line x1="14" y1="63" x2="28" y2="63"
      stroke="#e8d060" stroke-width="0.6" opacity="0.7"/>
    <line x1="14" y1="71" x2="28" y2="71"
      stroke="#5a4810" stroke-width="0.5" opacity="0.8"/>

    <!-- ── Handle ──────────────────────────────────────── -->
    <path
      d="M13 72
         C12 76, 12 84, 13 93
         C13.5 100, 14 104, 16 106
         C18 107, 22 107, 24 106
         C26 104, 26.5 100, 27 93
         C28 84, 28 76, 27 72
         Z"
      fill="url(#handle)"
      stroke="#0a0806"
      stroke-width="0.4"
    />

    <!-- Wood grain -->
    <line x1="16" y1="73" x2="15" y2="105"
      stroke="#fff" stroke-width="0.25" opacity="0.06"/>
    <line x1="19" y1="72" x2="19" y2="106"
      stroke="#fff" stroke-width="0.25" opacity="0.05"/>
    <line x1="22" y1="72" x2="22" y2="106"
      stroke="#fff" stroke-width="0.25" opacity="0.05"/>
    <line x1="25" y1="73" x2="25" y2="105"
      stroke="#fff" stroke-width="0.25" opacity="0.06"/>

    <!-- ── Rivets ───────────────────────────────────────── -->
    <circle cx="20" cy="79" r="1.8"
      fill="url(#rivet)" stroke="#5a4810" stroke-width="0.3"/>
    <circle cx="20" cy="89" r="1.8"
      fill="url(#rivet)" stroke="#5a4810" stroke-width="0.3"/>
    <circle cx="20" cy="99" r="1.8"
      fill="url(#rivet)" stroke="#5a4810" stroke-width="0.3"/>

    <!-- Rivet shine -->
    <circle cx="19.2" cy="78.2" r="0.5" fill="white" opacity="0.55"/>
    <circle cx="19.2" cy="88.2" r="0.5" fill="white" opacity="0.55"/>
    <circle cx="19.2" cy="98.2" r="0.5" fill="white" opacity="0.55"/>
  </svg>
</div>

<style>
  .cursor-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 130px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s;
    /* No margins — offset is calculated mathematically in transform */
  }

  .cursor-wrap.visible {
    opacity: 1;
  }

  .knife-svg {
    width: 100%;
    height: 100%;
    filter:
      drop-shadow(0 1px 4px rgba(0, 0, 0, 0.8))
      drop-shadow(0 0px 2px rgba(200, 160, 40, 0.2));
  }

  @media (hover: none) {
    .cursor-wrap { display: none; }
  }
</style>
