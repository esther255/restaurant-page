import { el } from "../utils/dom";
import { formatPrice, pluralItems } from "../utils/format";
import { changeQuantity, getCount, getLines, getSubtotal, removeItem } from "../store/cart";

function emptyCart() {
  return el(
    "div",
    { class: "empty-cart" },
    el("div", { class: "empty-cart-icon", "aria-hidden": "true" }, "🛍️"),
    el("h3", {}, "Your cart is empty"),
    el("p", {}, "Discover something delicious from our menu."),
    el("a", { href: "#menu", class: "btn btn-primary" }, "Explore Our Menu")
  );
}

function cartLine(line, rerender) {
  const act = (action) => () => {
    action();
    rerender();
  };

  return el(
    "article",
    { class: "cart-item" },
    el("img", { src: line.image, alt: line.name }),
    el(
      "div",
      { class: "cart-item-info" },
      el("h4", {}, line.name),
      el("p", {}, `${formatPrice(line.price)} each`),
      el(
        "div",
        { class: "quantity-controls" },
        el(
          "button",
          {
            type: "button",
            "aria-label": `Decrease quantity of ${line.name}`,
            onClick: act(() => changeQuantity(line.id, -1)),
          },
          "−"
        ),
        el("span", {}, line.quantity),
        el(
          "button",
          {
            type: "button",
            "aria-label": `Increase quantity of ${line.name}`,
            onClick: act(() => changeQuantity(line.id, +1)),
          },
          "+"
        )
      )
    ),
    el(
      "div",
      { class: "cart-item-end" },
      el("strong", {}, formatPrice(line.price * line.quantity)),
      el(
        "button",
        {
          class: "remove-item",
          type: "button",
          onClick: act(() => removeItem(line.id)),
        },
        "Remove"
      )
    )
  );
}

function cartPage() {
  const itemsPanel = el("div", { class: "cart-panel" });
  const summaryPanel = el("aside", { class: "order-summary" });

  // Draw both panels from the current cart. Called once at the start and
  // again after every click on + / − / Remove.
  function render() {
    const lines = getLines();
    const count = getCount();
    const total = formatPrice(getSubtotal());

    itemsPanel.replaceChildren(
      el(
        "div",
        { class: "panel-heading" },
        el("h3", {}, "Your Items"),
        el("span", { class: "item-count-label" }, pluralItems(count))
      ),
      el(
        "div",
        { class: "cart-items", "aria-live": "polite" },
        lines.length ? lines.map((line) => cartLine(line, render)) : emptyCart()
      )
    );

    summaryPanel.replaceChildren(
      el("p", { class: "summary-eyebrow" }, "ORDER SUMMARY"),
      el("h3", {}, "Your Order"),
      el(
        "div",
        { class: "summary-row" },
        el("span", {}, "Subtotal"),
        el("strong", {}, total)
      ),
      el(
        "div",
        { class: "summary-row" },
        el("span", {}, "Delivery"),
        el("span", { class: "delivery-cost" }, "Calculated at checkout")
      ),
      el(
        "div",
        { class: "summary-row summary-total" },
        el("span", {}, "Total"),
        el("strong", {}, total)
      ),
      el(
        "button",
        {
          class: "checkout-button",
          type: "button",
          disabled: lines.length === 0,
          onClick: () =>
            alert("Your cart is ready. Online payment and order submission are not connected yet."),
        },
        "Proceed to Checkout →"
      ),
      el("p", { class: "summary-note" }, "♡ Freshly prepared with care")
    );
  }

  render();

  return el(
    "section",
    { class: "cart-section" },
    el(
      "div",
      { class: "section-heading" },
      el("p", { class: "eyebrow" }, "YOUR SELECTION"),
      el("h2", {}, "Your Shopping Cart"),
      el("p", {}, "Freshly prepared with love. Your chosen dishes will appear here.")
    ),
    el("div", { class: "cart-layout" }, itemsPanel, summaryPanel)
  );
}

export default cartPage;
