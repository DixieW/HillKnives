<script lang="ts">
	import Divider from "$lib/components/ui/divider.svelte";
	import Fadein from "$lib/components/ui/fadein.svelte";

    
</script>

<main>
    <div class=" text-(--color-text) flex-col h-screen">
        <Fadein direction="down" duration={1500}>
        <h1 class="flex justify-center text-5xl font-bold mt-10 mb-5">Over Ons</h1>
        </Fadein>
        <div>
            <Divider style="line" width="60%" align="center" />
        </div>
        <section>
            <ul class="list-disc">
                <Fadein direction="right" duration={2000} delay={2000}>
                <li class="pl-35 pt-10 text-2xl flex items-baseline gap-4 before:content-['›'] before:text-(--color-accent) before:font-bold before:shrink-0">Een familiebedrijf dat al meer dan 40 jaar gespecialiseerd is in het slijpen en ontwerpen van messen.</li>
                </Fadein>
                <Fadein direction="right" duration={2000} delay={4000}>
                <li class="pl-35 pt-10 text-2xl flex items-baseline gap-4 before:content-['›'] before:text-(--color-accent) before:font-bold before:shrink-0">We geloven in kwaliteit, betrouwbaarheid en klanttevredenheid.</li>
                </Fadein>
                <Fadein direction="right" duration={2000} delay={6000}>
                <li class="pl-35 pt-10 pb-15 text-2xl flex items-baseline gap-4 before:content-['›'] before:text-(--color-accent) before:font-bold before:shrink-0">Of het nu gaat om keukenmessen, scharen of ander gereedschap, wij staan klaar om u te helpen.</li>
                </Fadein>
            </ul>
        </section>
    </div>
</main>

<style>
    ul {
        list-style-type: disc;
    }
</style>
