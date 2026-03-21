<script lang="ts">
    import { cart } from '$lib/stores/cart';
    import { goto } from '$app/navigation';

    let { open = $bindable(false) } = $props<{ open?: boolean }>();

    let items = $derived($cart);
    let total = $derived(items.reduce((sum, i) => {
        const num = parseFloat(i.price.replace('€', '').replace(',', '.').trim());
        return sum + (isNaN(num) ? 0 : num * i.quantity);
    }, 0));

    function goToContact() {
        open = false;
        goto('/contact');
    }
</script>

<!-- Backdrop -->
{#if open}
    <div
        class="backdrop"
        onclick={() => open = false}
        role="presentation"
    ></div>
{/if}

<!-- Drawer -->
<aside class="drawer" class:open>
    <div class="drawer-header">
        <span class="drawer-title">Uw Selectie</span>
        <button class="close-btn" onclick={() => open = false} aria-label="Sluit">✕</button>
    </div>

    {#if items.length === 0}
        <div class="empty">
            <p>Geen items geselecteerd.</p>
            <p class="hint">Klik op <strong>+</strong> naast een dienst om toe te voegen.</p>
        </div>
    {:else}
        <ul class="item-list">
            {#each items as item (item.id)}
                <li class="item">
                    <div class="item-info">
                        <span class="item-label">{item.label}</span>
                        <span class="item-category">{item.category}</span>
                    </div>
                    <div class="item-controls">
                        <button onclick={() => cart.decrement(item.id)} aria-label="Minder">−</button>
                        <span class="qty">{item.quantity}</span>
                        <button onclick={() => cart.increment(item.id)} aria-label="Meer">+</button>
                    </div>
                    <span class="item-price">{item.price}</span>
                    <button class="remove-btn" onclick={() => cart.remove(item.id)} aria-label="Verwijder">✕</button>
                </li>
            {/each}
        </ul>

        <div class="drawer-footer">
            <div class="total-row">
                <span>Totaal (schatting)</span>
                <span class="total-price">€ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button class="contact-btn" onclick={goToContact}>
                Stuur een bericht →
            </button>
            <button class="clear-btn" onclick={() => cart.clear()}>Wis selectie</button>
        </div>
    {/if}
</aside>

<!-- Floating cart button -->
<button
    class="cart-fab"
    onclick={() => open = !open}
    aria-label="Bekijk selectie"
    title="Uw selectie"
>
    🗡
    {#if items.length > 0}
        <span class="fab-count">{items.reduce((s, i) => s + i.quantity, 0)}</span>
    {/if}
</button>

<style>
    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 90;
    }

    .drawer {
        position: fixed;
        top: 0;
        right: 0;
        width: min(420px, 95vw);
        height: 100dvh;
        background: var(--color-bg-surface);
        border-left: 1px solid var(--color-border);
        z-index: 100;
        display: flex;
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: -4px 0 24px rgba(0,0,0,0.4);
    }
    .drawer.open { transform: translateX(0); }

    .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg-raised);
    }

    .drawer-title {
        font-family: var(--font-display);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-accent);
    }

    .close-btn {
        background: none;
        border: none;
        color: var(--color-text-muted);
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        transition: color 0.2s;
    }
    .close-btn:hover { color: var(--color-text); }

    .empty {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: var(--color-text-muted);
        text-align: center;
        padding: 2rem;
    }
    .hint { font-size: 0.85rem; color: var(--color-text-dim); }

    .item-list {
        flex: 1;
        overflow-y: auto;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .item {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--color-border);
        transition: background 0.15s;
    }
    .item:hover { background: var(--color-bg-raised); }

    .item-info {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }
    .item-label {
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 600;
    }
    .item-category {
        font-size: 0.72rem;
        color: var(--color-text-dim);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .item-controls {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        padding: 0.2rem 0.5rem;
    }
    .item-controls button {
        background: none;
        border: none;
        color: var(--color-accent);
        font-size: 1rem;
        cursor: pointer;
        width: 1.4rem;
        height: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s;
    }
    .item-controls button:hover { color: var(--color-text); }
    .qty {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--color-text);
        min-width: 1.2rem;
        text-align: center;
    }

    .item-price {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--color-accent);
        text-nowrap: nowrap;
        white-space: nowrap;
    }

    .remove-btn {
        background: none;
        border: none;
        color: var(--color-text-dim);
        font-size: 0.75rem;
        cursor: pointer;
        padding: 0.25rem;
        transition: color 0.2s;
    }
    .remove-btn:hover { color: var(--color-accent-2); }

    .drawer-footer {
        padding: 1.25rem 1.5rem;
        border-top: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        background: var(--color-bg-raised);
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
        color: var(--color-text-muted);
    }
    .total-price {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-accent);
    }

    .contact-btn {
        width: 100%;
        padding: 0.85rem 1.5rem;
        background: var(--color-accent);
        color: var(--color-bg);
        border: none;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.15s;
    }
    .contact-btn:hover { opacity: 0.88; transform: translateY(-1px); }

    .clear-btn {
        background: none;
        border: none;
        color: var(--color-text-dim);
        font-size: 0.75rem;
        cursor: pointer;
        text-align: center;
        text-decoration: underline;
        transition: color 0.2s;
    }
    .clear-btn:hover { color: var(--color-accent-2); }

    /* Floating action button */
    .cart-fab {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: var(--color-accent);
        color: var(--color-bg);
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 80;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        transition: transform 0.2s, opacity 0.2s;
    }
    .cart-fab:hover { transform: scale(1.1); }

    .fab-count {
        position: absolute;
        top: -4px;
        right: -4px;
        background: var(--color-accent-2);
        color: white;
        border-radius: 50%;
        width: 1.3rem;
        height: 1.3rem;
        font-size: 0.7rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-display);
    }
</style>
