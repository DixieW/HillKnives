<script>
  import NewsArticleCard from '$lib/components/ui/NewsArticleCard.svelte';
  import ImageGallery from '$lib/components/ui/ImageGallery.svelte';
  import Image1 from '$lib/assets/images/TestImage1.jpeg';
  import Image2 from '$lib/assets/images/TestImage2.jpeg';
  import Image3 from '$lib/assets/images/TestImage3.jpeg';

  const images = [
        { src: Image1, alt: 'Geslepen koksmes', caption: 'Koksmes na het slijpen' },
        { src: Image2, alt: 'Broodmes', caption: 'Broodmes — nieuw scherp' },
        { src: Image3, alt: 'Schaar', caption: 'Schaar na behandeling' },
  ];
</script>

<div class="page-header">
  <div class="gallery-wrap m-5">
    <ImageGallery images={images} />
  </div>
    <NewsArticleCard
    title="Nieuwe slijpmachine aangekomen"
    excerpt="Onze nieuwste Tormek machine is gearriveerd en zorgt voor een nog scherpere snede."
    date="18 maart 2026"
    category="Nieuws"
    readTime="2 min"
    href="/nieuws/slijpmachine"
  />
</div>

<style>
  .page-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
</style>