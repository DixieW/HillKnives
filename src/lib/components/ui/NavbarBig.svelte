<script>
    import * as C from '../utils/constants.ts';
	import LogoImg from '$lib/assets/Images/logo.png';

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
            <h2 class="flex mr-auto item-center font-[Open_Sans] px-2 py-5 text-xl font-bold text-shadow-lg">HILL KNIVES <br> Messenslijperij</h2>
            <nav class="flex gap-5 text-lg font-medium">
                <a class="ml-auto hover:underline hover:pointer text-shadow-lg" href={Home}>Home</a>
                <a class="hover:underline hover:pointer text-shadow-lg" href={Prijzen}>Prijzen</a>
                <a class="hover:underline hover:pointer text-shadow-lg text-nowrap" href={About}>Over ons</a>
                <a class="hover:underline hover:pointer text-shadow-lg" href={Nieuws}>Nieuws</a>
                <a class="contact-cta" href={Contact}><strong>Contact</strong></a>
            </nav>
        </div>
    </div>
</div>

<style>
    .contact-cta {
        padding: 0.3rem 0.85rem;
        border-radius: 1rem;
        border: 2px solid rgba(200, 100, 50, 0.6);
        background: var(--color-accent-2-shine);
        box-shadow:
            inset 0 1px 0 rgba(255, 180, 120, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.35),
            0 2px 10px rgba(139, 58, 26, 0.45);
        color: var(--color-accent);
        font-weight: 700;
        text-decoration: none;
        transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
        display: inline-block;
    }
    .contact-cta:hover {
        opacity: 0.88;
        transform: translateY(-1px);
        box-shadow:
            inset 0 1px 0 rgba(255, 200, 140, 0.4),
            inset 0 -1px 0 rgba(0, 0, 0, 0.4),
            0 4px 16px rgba(139, 58, 26, 0.6);
    }
</style>
