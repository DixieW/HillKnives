<script lang="ts">
    import FadeIn from '$lib/components/ui/FadeIn.svelte';
    import Imageblock from '$lib/components/ui/imageblock.svelte';
    import Image1 from '$lib/assets/images/hb-messen_031.jpg';
    import Image2 from '$lib/assets/images/luxury line steakmessen rvs311x323.jpg';
    import Image3 from '$lib/assets/images/img-20171014-wa0000.jpg';
    import Divider from '$lib/components/ui/divider.svelte';
</script>


<main class="">
    <section class="m-0 bg-(--color-bg) h-full min-w-screen">
        <h1 class="text-center text-4xl font-bold pb-5 pt-5  tracking-tighter underline text-shadow-lg text-(--color-text)">Welkom bij Hill Knives Messenslijperij</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-15 mt-10 max-w-6xl mx-auto "> 
            
            <FadeIn direction="right" duration={1200}>
            <Imageblock
                src={Image2}
                alt="Messen slijpen bij Hill Knives Messenslijperij"
                title="Uw messen in topconditie"
                subtitle="scherp en veilig"
                description="Altijd klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven."
                aspect="square"
                fit="cover"
                width="100%"
                maxWidth="800px"
            />
            </FadeIn>
            <FadeIn duration={1200}>
            <Imageblock
                src={Image1}
                alt="Messen slijpen bij Hill Knives Messenslijperij"
                title="Professioneel messen slijpen"
                subtitle="Vakmanschap en kwaliteit"
                description="Bij Hill Knives Messenslijperij zorgen we ervoor dat uw messen weer scherp en veilig zijn. Onze ervaren slijpers gebruiken geavanceerde technieken om de beste resultaten te leveren."
                aspect="portrait"
                fit="cover"
                width="100%"
                maxWidth="800px"
            />
            </FadeIn>
            <FadeIn direction="left" duration={1200}>
            <Imageblock
                src={Image3}
                alt="Messen slijpen bij Hill Knives Messenslijperij"
                title="Scherpe messen, tevreden klanten"
                subtitle="Urenlang scherp"
                description="Onze slijpdiensten omvatten het slijpen van keukenmessen, scharen en meer. We gebruiken geavanceerde slijpmethoden om ervoor te zorgen dat uw gereedschappen scherp, veilig en efficiënt blijven."
                aspect="square"
                fit="cover"
                width="100%"
                maxWidth="800px"
            />
            </FadeIn>
        </div>
        <FadeIn direction="down" duration={1800} delay={1300}>
        <div class="mt-10">
            <Divider style="blade" width="60%" align="center" />
        </div>
        </FadeIn>
        <div class="m-5 p-5 text-(--color-text) min-h-8/12">
            <FadeIn direction="right" duration={2000} delay={2000}>
            <p class="font-[Open-Serif] mb-4 text-xl leadeing-3 tracking-tight text-balance">
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
            </p>
    
            <p class="font-[Open-Serif] mb-4 text-xl leadeing-3 tracking-tight text-balance">
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
            </p>

            <p class="font-[Open-Serif] mb-4 text-xl leadeing-3 tracking-tight text-balance">
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
            </p>
            
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 font text-balance tracking-tight">
                Onze diensten omvatten het slijpen van keukenmessen, scharen en meer. We gebruiken geavanceerde slijpmethoden om ervoor te zorgen dat uw gereedschappen scherp, veilig en efficiënt blijven.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bezoek onze prijspagina om een overzicht te krijgen van onze tarieven en diensten. Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op via onze contactpagina.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bedankt voor uw vertrouwen in Hill Knives Messenslijperij. Wij kijken ernaar uit om u van dienst te zijn!
            </p>
            <p class="font-[Open-Serif] mb-4 text-xl leadeing-3 tracking-tight text-balance">
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 font text-balance tracking-tight">
                Onze diensten omvatten het slijpen van keukenmessen, scharen en meer. We gebruiken geavanceerde slijpmethoden om ervoor te zorgen dat uw gereedschappen scherp, veilig en efficiënt blijven.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bezoek onze prijspagina om een overzicht te krijgen van onze tarieven en diensten. Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op via onze contactpagina.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bedankt voor uw vertrouwen in Hill Knives Messenslijperij. Wij kijken ernaar uit om u van dienst te zijn!
            </p>
            <p class="font-[Open-Serif] mb-4 text-xl leadeing-3 tracking-tight text-balance">
                Bij Hill Knives Messenslijperij staan we klaar om uw messen en gereedschappen weer in topconditie te brengen. Met jarenlange ervaring en vakmanschap bieden wij professionele slijpdiensten voor zowel particulieren als bedrijven.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 font text-balance tracking-tight">
                Onze diensten omvatten het slijpen van keukenmessen, scharen en meer. We gebruiken geavanceerde slijpmethoden om ervoor te zorgen dat uw gereedschappen scherp, veilig en efficiënt blijven.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bezoek onze prijspagina om een overzicht te krijgen van onze tarieven en diensten. Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op via onze contactpagina.
            </p>
            <p class="font-[Open-Serif] mb-2 text-xl leadeing-3 text-balance tracking-tight">
                Bedankt voor uw vertrouwen in Hill Knives Messenslijperij. Wij kijken ernaar uit om u van dienst te zijn!
            </p>
            </FadeIn>
        </div>
    </section>
</main>