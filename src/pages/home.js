import { el } from "../utils/dom";
import restaurant from "../data/restaurant.json";
import { phoneHref } from "../components/footer";

function homePage() {
  return el(
    "section",
    { class: "hero" },
    el(
      "div",
      { class: "hero-content" },
      el("p", { class: "eyebrow" }, "WELCOME TO SHEKINAH DINING"),
      el(
        "h1",
        {},
        "Taste the Tradition,",
        el("br"),
        el("em", {}, "Served Fresh Daily")
      ),
      el(
        "p",
        { class: "hero-description" },
        "Where authentic taste meets modern dining — experience freshness, tradition, and a touch of luxury in every meal."
      ),
      el(
        "div",
        { class: "hero-buttons" },
        el("a", { href: "#menu", class: "btn btn-primary" }, "Explore Our Menu"),
        el("a", { href: phoneHref(), class: "btn btn-outline" }, "Book A Table")
      ),
      el(
        "div",
        { class: "hero-contact" },
        el(
          "span",
          { class: "social-circles", "aria-hidden": "true" },
          el("span", {}, "f"),
          el("span", {}, "♪"),
          el("span", {}, "◎")
        ),
        el("span", { class: "contact-divider" }),
        el("a", { href: phoneHref() }, restaurant.phone)
      )
    ),
    el(
      "div",
      { class: "hero-visual" },
      el(
        "div",
        { class: "hero-image-frame" },
        el("img", { src: restaurant.heroImage, alt: "Freshly prepared restaurant meal" })
      ),
      el(
        "div",
        { class: "delivery-card" },
        el("span", { class: "delivery-icon", "aria-hidden": "true" }, "✦"),
        el(
          "span",
          {},
          el("strong", {}, "Made with care"),
          el("small", {}, "Fresh food, happy moments")
        )
      ),
      el("span", { class: "hero-decoration", "aria-hidden": "true" }, "✳")
    )
  );
}

export default homePage;
