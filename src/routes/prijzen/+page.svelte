<script lang="ts">
    import Pricetable from "$lib/components/layouts/pricetable.svelte";
</script>

<main class="w-full min-w-screen flex justify-center items-center flex-col">
    <div class="">
        <h1 class="m-2 text-center text-4xl font-bold mb-8  text-(--color-text) min-w-screen">Prijzen</h1>
        <div class="text-(--color-text) flex-initial">
            <Pricetable/>
        </div>
    </div>
</main>

<style>
</style>