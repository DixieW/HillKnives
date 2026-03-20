<script lang="ts">
    export let open = false;
	let hamburgerMenu: HTMLElement;
	
	export function toggleMenu() {
		open = !open;
	}

</script>

<button
    bind:this={hamburgerMenu}
    class="relative items-end z-50 {open ? 'active' : ''}"
    aria-expanded={open}
    aria-controls="off-screen-menu"
    type="button" title="Menu"
    on:click={toggleMenu}
>
    <span class={`block h-1 w-8 mr-5 bg-(--color-accent) ml-auto rounded transition-transform duration-300 mb-1 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span class={`block h-1 w-8 mr-5 bg-(--color-accent) ml-auto rounded transition-transform duration-300 ${open ? 'opacity-0' : ''}`}></span>
    <span class={`block h-1 w-8 mr-5 bg-(--color-accent) ml-auto rounded transition-transform duration-300 mt-1 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
</button>