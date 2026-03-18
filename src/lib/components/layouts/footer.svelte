<script lang="ts">
    import OpeningHours from '../ui/openinghours.svelte';
    import Appointmentinfo from '../ui/appointmentinfo.svelte';
    import Contactinfo from '../ui/contactinfo.svelte';
    import Copyright from '../ui/copyright.svelte';
</script>

<footer>
    <section class="m-0 p-0">
            <div class="m-0 p-0 static mt-auto bottom-0 border-t-2 border-b-2 border-(--color-accent) min-w-screen bg-(--color-olive) text-(--color-text)">
                <div class="flex flex-col gap-15 items-center justify-evenly md:flex-row md:items-start top-auto shadow-inner">
                    <OpeningHours/>
                    <Appointmentinfo/>
                    <Contactinfo/>
                </div>
                <div class="flex justify-center items-center">
                    <Copyright/>
                </div>
            </div>
    </section>
</footer>
