import { el } from "../utils/dom";
import restaurant from "../data/restaurant.json";

function reviewCard(review) {
  return el(
    "div",
    { class: "review-card" },
    el(
      "div",
      { class: "review-stars", "aria-label": `${review.stars} out of 5 stars` },
      "★".repeat(review.stars)
    ),
    el("blockquote", {}, `“${review.text}”`),
    el("p", {}, `— ${review.author}`)
  );
}

function aboutPage() {
  const about = el(
    "section",
    { class: "about-section" },
    el(
      "div",
      { class: "about-image" },
      el("img", {
        src: restaurant.aboutImage,
        alt: "Elegant restaurant table setting",
        loading: "lazy",
      })
    ),
    el(
      "div",
      { class: "about-copy" },
      el("p", { class: "eyebrow" }, "A PLACE TO GATHER"),
      el("h2", {}, "Good Food.", el("br"), el("em", {}, "Beautiful Moments.")),
      el(
        "p",
        {},
        `At ${restaurant.name}, we believe a memorable meal is about more than food. It is about warm hospitality, thoughtful preparation and sharing special moments around the table.`
      ),
      el("a", { href: "#menu", class: "text-link" }, "Discover our menu →")
    )
  );

  const reviews = el(
    "section",
    { class: "reviews-section" },
    el(
      "div",
      { class: "section-heading" },
      el("p", { class: "eyebrow" }, "KIND WORDS"),
      el("h2", {}, "Made for ", el("em", {}, "Memorable Moments")),
      el("p", {}, `We look forward to welcoming you to ${restaurant.name}.`)
    ),
    restaurant.reviews.map(reviewCard)
  );

  return el("div", { class: "page" }, about, reviews);
}

export default aboutPage;
