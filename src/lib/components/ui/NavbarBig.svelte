<script>
    import * as C from '../utils/constants.ts';
    import LogoImg from '$lib/assets/Images/logo.png';
    import ThemeToggle from './ThemeToggle.svelte';

    const Home = C.Home;
    const Prijzen = C.Prijzen;
    const About = C.About;
    const Nieuws = C.Nieuws;
    const Contact = C.Contact;
</script>

<div id="nav-big" class="hidden md:visible md:flex font-[Open_Sans] text-(--color-accent) shadow-2xl m-0 p-0 sticky top-0">
    <div class="w-full shadow-2xl ">
        <div class="flex justify-between gap-5 bg-(--color-bg-surface) w-screen px-5 py-2 items-center h-20 min-w-[60%] shadow-2lg border-b-2 border-b-(--color-accent) ">
            <a href={Home} class="flex justify-start items-center text-sm min-w-20 min-h-20 my-2 text-shadow-lg shadow-2lg hover:pointer">
                <img class="max-w-[60%] max-h-[60%] min-w-[50%] min-h-[50%] text-shadow-lg p-1" src={LogoImg} alt="HillKnives Logo" />
            </a>
            <h2 class="flex mr-auto item-center font-[Open_Sans] px-2 py-3 text-xl font-bold text-shadow-lg">HILL KNIVES <br> Messenslijperij</h2>
            <nav class="flex gap-5 text-lg font-medium">
                <a class="ml-auto hover:underline hover:pointer text-shadow-lg" href={Home}>Home</a>
                <a class="hover:underline hover:pointer text-shadow-lg" href={Prijzen}>Prijzen</a>
                <a class="hover:underline hover:pointer text-shadow-lg text-nowrap" href={About}>Over ons</a>
                <a class="hover:underline hover:pointer text-shadow-lg" href={Nieuws}>Nieuws</a>
                <a class="mr-2 text-(--color-accent) bg-(--color-accent-2) shadow-xl border-3 rounded-2xl px-2 hover:underline hover:pointer hover:text-(--color-text) hover:bg-(--color-text-muted)" href={Contact}><strong>Contact</strong></a>
                <ThemeToggle />
            </nav>
        </div>
    </div>
</div>
