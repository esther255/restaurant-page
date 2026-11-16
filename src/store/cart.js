import menu from "../data/menu.json";

// The cart is kept in one place so every tab (Menu, Cart, navbar badge) sees
// the same data. It is saved to localStorage as JSON, so it survives a refresh.
//
// Only { id, quantity } is saved. Name, price and image are always looked up
// from menu.json, so a price change in the JSON is never overridden by old
// saved data.

const STORAGE_KEY = "shekinah-cart";

let items = load();
const listeners = new Set();

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return [];

    // Ignore anything that is no longer valid (dish removed from the menu,
    // broken quantity, hand-edited storage...).
    return saved
      .filter(
        (item) =>
          menu.some((dish) => dish.id === item.id) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0
      )
      .map(({ id, quantity }) => ({ id, quantity }));
  } catch {
    // Storage blocked or JSON broken: start with an empty cart.
    return [];
  }
}

function commit() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Private mode / storage full: the cart still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

// Call `listener` every time the cart changes. Returns an unsubscribe function.
export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Cart lines with the full dish details, e.g. { id, name, price, image, quantity }
export function getLines() {
  return items.map(({ id, quantity }) => ({
    ...menu.find((dish) => dish.id === id),
    quantity,
  }));
}

export function getCount() {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getSubtotal() {
  return getLines().reduce((sum, line) => sum + line.price * line.quantity, 0);
}

export function addItem(id) {
  if (!menu.some((dish) => dish.id === id)) return;

  const existing = items.find((item) => item.id === id);
  if (existing) existing.quantity++;
  else items.push({ id, quantity: 1 });
  commit();
}

export function changeQuantity(id, change) {
  const item = items.find((entry) => entry.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) items = items.filter((entry) => entry.id !== id);
  commit();
}

export function removeItem(id) {
  items = items.filter((item) => item.id !== id);
  commit();
}
