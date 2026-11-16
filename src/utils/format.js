export function formatPrice(amount) {
  return `RWF ${amount.toLocaleString("en-US")}`;
}

export function pluralItems(count) {
  return `${count} ${count === 1 ? "item" : "items"}`;
}
