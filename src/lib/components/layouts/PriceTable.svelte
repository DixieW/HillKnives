<script lang="ts">
    import { PriceTableTitle, PRICE_LIST } from '$lib/data/pricelist';
    import { cart } from '$lib/stores/cart';
    import CartDrawer from '$lib/components/ui/CartDrawer.svelte';

    let drawerOpen = $state(false);
    let addedId = $state<string | null>(null);

    function addToCart(categoryTitle: string, item: { label: string; price?: string; unit?: string }) {
        const id = `${categoryTitle}__${item.label}`;
        cart.add({
            id,
            label: item.label,
            category: categoryTitle,
            price: item.price ?? '-'
        });
        addedId = id;
        setTimeout(() => addedId = null, 1200);
        drawerOpen = true;
    }
</script>

<CartDrawer bind:open={drawerOpen} />

<div class="m-5 p-5">
    <h1 class="font-display text-4xl font-bold text-center mb-2">{PriceTableTitle}</h1>
    <p class="text-center text-(--color-text-muted) mb-8 text-sm tracking-widest uppercase">Klik op een dienst om toe te voegen aan uw bestelling</p>

    {#each PRICE_LIST as category}
        <section class="mb-6">
            <div class="p-5 my-5 font-display background-(--color-bg-surface) shadow-md">
                <h2 class="font-display text-2xl font-bold mb-4">{category.title}</h2>
                <table class="font-display w-full table-auto border-collapse border border-(--color-text)">
                    <thead>
                        <tr class="bg-(--color-bg-raised)">
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left">Dienst</th>
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left text-nowrap">Prijs</th>
                            <th class="text-xl font-display border border-(--color-text) p-4 text-left">Eenheid</th>
                            <th class="text-xl font-display border border-(--color-text) p-4 text-center w-16">Bestel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each category.items as item}
                            {@const id = `${category.title}__${item.label}`}
                            <tr class="price-row">
                                <td class="font-[Open_Sans] border border-(--color-text) p-4">{item.label}</td>
                                <td class="font-[Open_Sans] border border-(--color-text) p-4 text-nowrap font-bold text-(--color-accent)">{item.price ?? '-'}</td>
                                <td class="font-[Open_Sans] border border-(--color-text) p-4">{item.unit ?? '-'}</td>
                                <td class="border border-(--color-text) p-2 text-center">
                                    <button
                                        onclick={() => addToCart(category.title, item)}
                                        class="add-btn"
                                        class:added={addedId === id}
                                        title="Voeg toe aan bestelling"
                                        aria-label="Voeg {item.label} toe"
                                    >
                                        {addedId === id ? '✓' : '+'}
                                    </button>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>
    {/each}
</div>

<style>
    .price-row {
        background-color: var(--color-olive);
        transition: background 0.2s, box-shadow 0.2s;
    }
    .price-row:hover {
        background: var(--color-accent-2-shine);
        box-shadow:
            inset 0 1px 0 rgba(255, 180, 120, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.25);
    }
    .add-btn {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        border: 2px solid var(--color-accent);
        background: transparent;
        color: var(--color-accent);
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, color 0.2s, transform 0.15s;
        line-height: 1;
    }
    .add-btn:hover {
        background: var(--color-accent);
        color: var(--color-bg);
        transform: scale(1.1);
    }
    .add-btn.added {
        background: var(--color-accent);
        color: var(--color-bg);
        border-color: var(--color-accent);
    }
</style>
