<script lang="ts">
    import favicon from '$lib/assets/Images/HillknivesLogo.png';
	import Header from '$lib/components/layouts/header.svelte';
    import Footer from '$lib/components/layouts/footer.svelte';
    import '$lib/styles/tailwind.css';
	let { children } = $props();
    // import * as C from '$lib/components/utils/constants.ts';
    import "../app.css";

    
</script>


<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>
<div class="site-wrapper">
    
    <Header/>
    
    <main>
        {@render children()}
    </main>
    
    <Footer/>
</div>

