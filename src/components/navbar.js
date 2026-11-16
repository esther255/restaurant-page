import { el } from "../utils/dom";
import { getCount, subscribe } from "../store/cart";
import { pluralItems } from "../utils/format";

// The tabs shown in the navbar. `route` is the part after # in the URL.
const tabs = [
  { route: "home", label: "Home" },
  { route: "menu", label: "Menu" },
  { route: "about", label: "About Us" },
];

export function createNavbar() {
  const badge = el("span", { class: "cart-count" }, "0");

  const cartButton = el(
    "a",
    { href: "#cart", class: "cart-button", dataset: { route: "cart" } },
    el("span", { "aria-hidden": "true" }, "🛍"),
    badge
  );

  function updateBadge() {
    const count = getCount();
    badge.textContent = count;
    cartButton.setAttribute("aria-label", `Your cart, ${pluralItems(count)}`);
  }
  subscribe(updateBadge);
  updateBadge();

  return el(
    "header",
    { class: "navbar" },
    el(
      "a",
      { href: "#home", class: "logo" },
      el("span", { class: "logo-icon", "aria-hidden": "true" }, "✿"),
      el("span", { class: "logo-name" }, "Shekinah", el("small", {}, "DINING"))
    ),
    el(
      "nav",
      { class: "nav-links", "aria-label": "Main navigation" },
      tabs.map((tab) =>
        el("a", { href: `#${tab.route}`, dataset: { route: tab.route } }, tab.label)
      )
    ),
    cartButton
  );
}

// Highlight the link of the page that is open right now.
export function setActiveTab(navbar, route) {
  navbar.querySelectorAll("[data-route]").forEach((link) => {
    if (link.dataset.route === route) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
