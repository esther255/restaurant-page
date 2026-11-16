import "./style.css";
import { el } from "./utils/dom";
import { createNavbar, setActiveTab } from "./components/navbar";
import { createFooter } from "./components/footer";
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import aboutPage from "./pages/about";
import cartPage from "./pages/cart";

// Each tab = one module that returns the DOM for that page.
// The key is what appears after # in the URL (e.g. index.html#menu).
const routes = {
  home: { render: homePage, title: "Home" },
  menu: { render: menuPage, title: "Menu" },
  about: { render: aboutPage, title: "About Us" },
  cart: { render: cartPage, title: "Your Cart" },
};

const content = document.querySelector("#content");
const navbar = createNavbar();
const main = el("main", { id: "main" });

content.append(navbar, main, createFooter());

function currentRoute() {
  const name = window.location.hash.slice(1);
  return Object.hasOwn(routes, name) ? name : "home";
}

function showPage() {
  const name = currentRoute();

  main.replaceChildren(routes[name].render());
  setActiveTab(navbar, name);
  document.title = `${routes[name].title} · Shekinah Dining`;
  window.scrollTo(0, 0);
}

// Clicking a tab only changes the #hash; this redraws <main> without
// reloading the page, and the browser Back button works for free.
window.addEventListener("hashchange", showPage);
showPage();
