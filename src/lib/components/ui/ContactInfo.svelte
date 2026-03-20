<script>
    import * as C from '../utils/constants.ts';

    let ADDRESS = C.ADDRESS;
    let POSTALCODE = C.POSTALCODE;
    let COUNTRY = C.COUNTRY;
    let PHONENUM = C.PHONENUM;
    let EMAIL = C.EMAIL;
</script>

<section>
    <div class="font-[--font-display] m-5 p-5 mt-1">
        <h4 class="font-semibold text-xl pb-10 text-balance">
            Adres & Contact
        </h4>
        <span>
            {ADDRESS}<br>
            {POSTALCODE}<br>
            {COUNTRY}<br>
        </span>
        <a href="tel:{PHONENUM}" class="hover:underline hover:text-(--color-steel)">T: 010-4655743<br></a>
        <a href="mailto:{EMAIL}" class="hover:underline hover:text-(--color-steel)">
            E: {EMAIL}
        </a>
    </div>
</section>