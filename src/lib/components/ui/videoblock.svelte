<script>
    // Import video assets so Vite resolves the correct URLs at build time
    import videoSmall from '$lib/assets/Videos/promovidsmall.mp4';
    import videoLarge from '$lib/assets/Videos/promovidlarge.mp4';
    // Optional poster image could be imported similarly
</script>

<video autoplay muted loop playsinline class="w-full h-auto">
    <source src={videoSmall} media="(max-width: 768px)" type="video/mp4" />
    <!-- <source src={videoLarge} media="(min-width: 769px)" type="video/mp4" /> -->
    <!-- Fallback text -->
    Your browser does not support the video tag.
</video>

