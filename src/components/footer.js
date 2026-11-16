import { el } from "../utils/dom";
import restaurant from "../data/restaurant.json";

export function phoneHref() {
  return `tel:${restaurant.phone.replace(/\s/g, "")}`;
}

export function createFooter() {
  return el(
    "footer",
    { class: "site-footer", id: "contacts" },
    el(
      "div",
      {},
      el("a", { href: "#home", class: "footer-logo" }, restaurant.name),
      el("p", {}, restaurant.tagline)
    ),
    el(
      "div",
      { class: "footer-contact" },
      el("strong", {}, "Contact us"),
      el("a", { href: phoneHref() }, restaurant.phone),
      el("a", { href: `mailto:${restaurant.email}` }, restaurant.email)
    ),
    el(
      "p",
      { class: "copyright" },
      `© ${new Date().getFullYear()} ${restaurant.name}. All rights reserved.`
    )
  );
}
