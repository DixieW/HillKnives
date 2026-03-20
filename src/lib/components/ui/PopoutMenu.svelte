<script lang="ts">
    import HamburgerMenuIcon from './HamburgerMenuIcon.svelte';
    import * as C from '../utils/constants.ts';

    export let open = false;
    let hamburgerRef: { toggleMenu?: () => void } | null = null;
    let linkStyle = "opacity-100 text-[var(--color-text)] font-bold text-5xl hover:text-[var(--color-accent)] hover:underline hover:pointer active:text-[var(--color-accent)] active:translate-y-1 active:underline transition-all duration-150";

    const Home = C.Home;
    const Prijzen = C.Prijzen;
    const About = C.About;
    const Nieuws = C.Nieuws;
    const Contact = C.Contact;

</script>

<!-- use `open` to show/hide the popout -->
<!-- z-50 — must sit above image cards which create stacking contexts via transform/overflow -->
<div class:open={open} class={`flex flex-col justify-center items-center z-50 gap-10 bg-(--color-bg-raised) opacity-20 h-full fixed top-0 md:hidden transform transition-all duration-700 ease-in-out ${open ? 'translate-x-0 w-full pointer-events-auto opacity-100' : '-translate-x-full -right-full pointer-events-none'} `}>
    <div class={`absolute right-0 top-0 mt-7.5 mr-3 opacity-0 transform transition-all duration-500 delay-800 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' }`}>
        <HamburgerMenuIcon bind:open bind:this={hamburgerRef} />
    </div>
    <a href={Home} class={linkStyle} on:click={() => open = false}>Home</a>
    <a href={Prijzen} class={linkStyle} on:click={() => open = false}>Prijzen</a>
    <a href={About} class={linkStyle} on:click={() => open = false}>Over ons</a>
    <a href={Nieuws} class={linkStyle} on:click={() => open = false}>Nieuws</a>
    <a href={Contact} class={linkStyle} on:click={() => open = false}>Contact</a>
</div>

