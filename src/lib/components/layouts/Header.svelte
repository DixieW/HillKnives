<script lang="ts">
	// import * as C from '../utils/constants.ts';
	// import LogoImg from '$lib/assets/Images/logo.png';
	import NavbarBig from '../ui/NavbarBig.svelte';
	import NavbarSmall from '../ui/NavbarSmall.svelte';
	import PopoutMenu from '../ui/PopoutMenu.svelte';

	// const Home = C.Home;
	// const Prijzen = C.Prijzen;
	// const About = C.About;
	// const Nieuws = C.Nieuws;
	// const Contact = C.Contact;

	let open = false;
	// let hamburgerMenu: HTMLElement;
	// let offScreenMenu: HTMLElement;

	// function toggleMenu() {
	// 	open = !open;
	// }

</script>

<!-- legacy off-screen menu removed in favor of `Popoutmenu.svelte` -->

<!-- <nav class="nav-big" id="hideable">
	<a href={Home} class="logo">
		<img src={LogoImg} alt="HillKnives Logo" />
	</a>
	<h4>HILL KNIVES <br> Messenslijperij</h4>
	<a href={Home}>Home</a>
	<a href={Prijzen}>Prijzen</a>
	<a href={About}>About</a>
	<a href={Nieuws}>Nieuws</a>
	<a class="supera" href={Contact}><strong>Contact</strong></a>
</nav> -->

<NavbarBig/>
<NavbarSmall bind:open={open}/>
<PopoutMenu bind:open={open}/>
<!-- 
<nav class="nav-small">
	<a href={Home} class="logo">
		<img src={LogoImg} alt="HillKnives Logo" >
	</a>
	<h4>HILL KNIVES <br> Messenslijperij</h4>
	<button
		bind:this={hamburgerMenu}
		class="hamburger-menu {open ? 'active' : ''}"
		aria-expanded={open}
		aria-controls="off-screen-menu"
		type="button"
		on:click={toggleMenu}
	>
		<span class="bar" aria-hidden="true"></span>
		<span class="bar" aria-hidden="true"></span>
		<span class="bar" aria-hidden="true"></span>
	</button>
</nav> 

<style>
	/* header component: keep only header-scoped rules here */
	div{
		margin: 0;
		padding: 0;
		width: 100%;
	}
	nav{
		margin: 0;
		padding: 0;
		width: 100%;
	}
	.off-screen-menu{
		/* use transform to hide off-canvas so it doesn't create horizontal overflow */
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: min(450px, 100%);
		background-color: var(--color-olive);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 3rem;
		transform: translateX(100%); /* hidden off-screen */
		transition: transform .3s ease;
		border-style: solid;
		box-shadow: 0px 2px 3px 3px var(--color-bg-surface);
		pointer-events: none; /* disable interactions when hidden */
	}
	.off-screen-menu.active {
		transform: translateX(0);
		pointer-events: auto;
	}
		.nav-big {
        display: flex;
        background-color: var(--color-bg-raised);
        border-style: solid;
        border-color: var(--color-olive);
        position: relative;
		width: 100%; 
		max-width: calc(100% - 2.25rem);
		min-width: calc(60% - 2.5rem);
			box-shadow: 0px 2px 3px 3px var(--color-bg-surface);
			z-index: 20; /* ensure header sits above page content */
    }
		.nav-small{
			display: none; /* hidden on desktop */
			position: absolute;
			z-index: 15;
		}
	.hamburger-menu{
			display: none; /* hidden on desktop */
			height: 3rem;
			width: 3rem;
			border-style: none;
			z-index: 30;
			background: none;
			padding: 0;
			margin: 0;
			cursor: pointer;
	}
	.hamburger-menu span{
		height: 5px;
		width: 100%;
		background-color: var(--color-accent);
		border-radius: 25px;
		position: absolute;
		margin-left: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: .3s ease;
	}
	.hamburger-menu span:nth-child(1){
		top: 25%;
	}
	.hamburger-menu span:nth-child(3){
		top: 75%;
	}
	.hamburger-menu.active span:nth-child(1){
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	.hamburger-menu.active span:nth-child(2){
		opacity: 0;
	}
	.hamburger-menu.active span:nth-child(3){
		top: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
	}
    a{
        justify-self: center;
        align-content: center;
        margin: 0.5rem;
        padding: 0 1rem;
        color: var(--color-accent);
        text-decoration: none; 
        box-shadow: 50px, 50px, 1px, 100px, var(--color-olive);  
        font-family: Verdana, Geneva, Tahoma, sans-serif;    
    }
    a:hover{
        color: var(--color-text);
        text-decoration: underline;
    }
    h4{
        color: var(--color-accent);
        margin-right: auto;
        font-family:  sans-serif, Helvetica, Arial;
    }
    img{
        width: 2.5rem;
        height: 3rem;

    }
    .logo{
        border-style: none;
        background-color: var(--color-bg-raised);
    }
    .logo:hover{
        background-color: var(--color-bg-raised);
    }
    .supera{
        color: var(--color-text);
        background-color: var(--color-olive);
        border-style: solid;
        border-radius: 15px;
        margin: 2rem;
		box-shadow: -1px 4px 1px rgba(0,0,0,0.1);
    }
    .supera:hover{
        color: var(--color-accent);
        border-color: var(--color-accent);
        background-color: var(--color-bg-surface);
		box-shadow: inset 0 2px 5px rgba(0,0,0,0.3);
    }
	.off-screen-link{
		cursor: pointer;
		text-shadow: 2px 2px 0 5px var(--color-bg-surface);
	} 

	/* @media(max-width: 70em){
        
    } */

    /* @media(max-width: 50em){
        #hideable{
			opacity: 0%;
			z-index: 1;
			position: absolute;
		}
		
		.off-screen-menu{
			keep the off-canvas menu fixed on small screens; transform handles visibility 
			position: fixed;
		}
		.nav-small{
			display: flex;
			background-color: var(--color-bg-raised);
			border-style: solid;
			border-color: var(--color-olive);
			position: relative;
			width: 100%; 
			max-width: calc(100% - 2.25rem);
			min-width: calc(60% - 2.5rem);
			box-shadow: 0px 2px 3px 3px var(--color-bg-surface);
		}

		.hamburger-menu{
			display: block;
			margin-top: 1em;
			margin-right: 1em;
			margin-left: auto;
			position: relative;
		}
    } 
	*/
</style>-->