import { useState, useCallback, useSyncExternalStore } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

let cartItems: CartItem[] = [];
let listeners: Set<() => void> = new Set();

function emitChange() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return cartItems;
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const addItem = useCallback((product: Omit<CartItem, "quantity">) => {
    const existing = cartItems.find((i) => i.id === product.id);
    if (existing) {
      cartItems = cartItems.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      cartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    emitChange();
  }, []);

  const removeItem = useCallback((id: number) => {
    cartItems = cartItems.filter((i) => i.id !== id);
    emitChange();
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      cartItems = cartItems.filter((i) => i.id !== id);
    } else {
      cartItems = cartItems.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
    }
    emitChange();
  }, []);

  const clearCart = useCallback(() => {
    cartItems = [];
    emitChange();
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice };
}
