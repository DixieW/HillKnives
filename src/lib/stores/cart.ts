import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type CartItem = {
    id: string;
    label: string;
    category: string;
    price: string;
    quantity: number;
};

function createCart() {
    const stored = browser ? localStorage.getItem('hillknives-cart') : null;
    const initial: CartItem[] = stored ? JSON.parse(stored) : [];
    const { subscribe, set, update } = writable<CartItem[]>(initial);

    if (browser) {
        subscribe(items => {
            localStorage.setItem('hillknives-cart', JSON.stringify(items));
        });
    }

    return {
        subscribe,
        add(item: Omit<CartItem, 'quantity'>) {
            update(items => {
                const existing = items.find(i => i.id === item.id);
                if (existing) {
                    return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
                }
                return [...items, { ...item, quantity: 1 }];
            });
        },
        increment(id: string) {
            update(items => items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
        },
        decrement(id: string) {
            update(items => {
                const item = items.find(i => i.id === id);
                if (item && item.quantity <= 1) return items.filter(i => i.id !== id);
                return items.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
            });
        },
        remove(id: string) {
            update(items => items.filter(i => i.id !== id));
        },
        clear() { set([]); }
    };
}

export const cart = createCart();

export function cartToMessage(items: CartItem[]): string {
    if (items.length === 0) return '';
    const lines = items.map(i => `  - ${i.quantity}× ${i.label} (${i.category}): ${i.price}`);
    return `Gewenste slijpdiensten:\n${lines.join('\n')}\n\nAanvullende opmerkingen:\n`;
}
