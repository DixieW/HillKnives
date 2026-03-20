<script lang="ts">
    import LogoImg from '$lib/assets/Images/logo.png';
    import * as C from '../utils/constants.ts';
    import HamburgerMenuIcon from './HamburgerMenuIcon.svelte';
    export let open = false;

    const Home = C.Home;
</script>

<!-- z-40 — below popout menu (z-50) but above page content -->
<nav class="md:hidden flex font-[Open_Sans] text-(--color-accent) shadow-2xl m-0 p-0 sticky top-0 z-40">
	<div class="flex shrink-0 justify-between gap-2 bg-(--color-bg-surface) m-0 w-screen px-3 sm:px-5 py-2 items-center h-20 shadow-2xl">
        <a href={Home} class="flex flex-none justify-start items-center text-sm min-w-20 min-h-20 my-2 hover:pointer px-2">
            <img class="max-w-[60%] max-h-[60%] min-w-[50%] min-h-[50%] text-shadow-lg p-1" src={LogoImg} alt="HillKnives Logo" >
        </a>
        <h4 class="flex flex-1 mr-auto item-center font-[Open_Sans] px-2 py-5 text-xl font-bold text-shadow-lg">HILL KNIVES <br> Messenslijperij</h4>
        <div class="flex shrink-0">
            <HamburgerMenuIcon bind:open />
        </div>
    </div>
</nav>

