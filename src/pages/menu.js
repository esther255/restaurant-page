import { el } from "../utils/dom";
import { formatPrice } from "../utils/format";
import { addItem } from "../store/cart";
import menu from "../data/menu.json";

function dishCard(dish) {
  const addButton = el(
    "button",
    { class: "add-to-cart", type: "button" },
    "Add to Cart +"
  );

  addButton.addEventListener("click", () => {
    addItem(dish.id);

    // Short confirmation on the button itself.
    addButton.textContent = "Added ✓";
    setTimeout(() => (addButton.textContent = "Add to Cart +"), 1000);
  });

  return el(
    "article",
    { class: "food-card" },
    el(
      "div",
      { class: "food-card-image" },
      el("img", { src: dish.image, alt: dish.name, loading: "lazy" }),
      el("span", { class: "food-tag" }, dish.tag)
    ),
    el(
      "div",
      { class: "food-card-content" },
      el("h3", {}, dish.name),
      el("p", {}, dish.description),
      el(
        "div",
        { class: "food-card-bottom" },
        el("strong", {}, formatPrice(dish.price)),
        addButton
      )
    )
  );
}

function menuPage() {
  return el(
    "section",
    { class: "menu-section" },
    el(
      "div",
      { class: "section-heading" },
      el("p", { class: "eyebrow" }, "DISCOVER OUR SPECIALTIES"),
      el("h2", {}, "Our Popular ", el("em", {}, "Dishes")),
      el("p", {}, "Carefully prepared meals, made with fresh ingredients.")
    ),
    el("div", { class: "food-grid" }, menu.map(dishCard))
  );
}

export default menuPage;
