<script>
    import { PriceTableTitle, PRICE_LIST } from '$lib/data/pricelist';
    import "$lib/components/utils/constants.ts";

    let titleText = PriceTableTitle;
</script>

<div class="m-5 p-5">

    <h1 class="font-display text-4xl font-bold text-center">{titleText}</h1>
    {#each PRICE_LIST as category}
        <section class="">
            <div class="p-5 my-5 font-display background-(--color-bg-surface) shadow-md">
                <h2 class="font-display text-2xl font-bold mb-4">{category.title}</h2>
                <table class="font-display w-full table-auto border-collapse border border-(--color-text)">
                    <thead>
                        <tr class="bg-(--color-bg-raised)">
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left text-balance">Dienst</th>
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left text-nowrap">Prijs</th>
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left text-balance">Eenheid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each category.items as item}
                            <tr class="bg-(--color-olive) hover:bg-(--color-accent-2)">
                                <td class="font-[Open_Sans] font-display border border-(--color-text) p-4 text-balance">{item.label}</td>
                                <td class="font-[Open_Sans] font-display border border-(--color-text) p-4 text-nowrap">{item.price ?? '-'}</td>
                                <td class="font-[Open_Sans] font-display border border-(--color-text) p-4 text-balance">{item.unit ?? '-'}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>
    {/each}
</div>
