<script>
    import * as C from '../utils/constants.ts';

    let Contact = C.Contact;
</script>

<section>
    <div class="mb-5 p-5 mt-1">
        <h4 class="font-semibold text-xl pb-10 text-balance">
            Afspraakmogelijkheden & verwerkingstijden
        </h4>
        <div class="flex flex-col gap-3">
            <a href={Contact} class="underline underline-offset-2 text-md text-balance hover:underline hover:text-(--color-steel) hover:pointer">
                Afspraak buiten reguliere openingstijden is mogelijk.
            </a>
            <span class="text-md font-bold text-balance mt-10">
                • Brengen in de ochtend → klaar in de middag
            </span>
            <span class="text-md font-bold text-balance mt-1">
                • Brengen in de middag → klaar de volgende ochtend
            </span>
        </div>
    </div>
</section>