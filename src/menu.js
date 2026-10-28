import { insertElem, insertImage, contentDiv } from "./dom.js";
import burgerImg from "./assets/burger-icon.jpg";
import friesImg from "./assets/fries-icon.jpg";
import pizzaImg from "./assets/pizza-icon.jpg";
import shakeImg from "./assets/shake-icon.jpg";

export { menu };

const createMenuItem = (name, desc, price, img, parentContainer) => {
  const item = insertElem("div", "", parentContainer, "menu-item");

  insertImage(img, name, 512, 512, item, "menu-item-img");

  const info = insertElem("div", "", item, "menu-item-info");
  insertElem("h3", name, info);
  insertElem("p", desc, info, "menu-item-desc");
  insertElem("p", price, info, "menu-item-price");
};

function menu() {
  // Intro Section
  const introDiv = insertElem("div", "", contentDiv, "intro");
  insertElem("h2", "The Menu", introDiv);
  insertElem("p", "Calories are temporary. Regret is forever", introDiv);

  // Menu Section
  const menuContainer = insertElem("div", "", contentDiv, "menu-container");
  createMenuItem(
    "The Existential Crisis Burger",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
    "₹199",
    burgerImg,
    menuContainer,
  );

  createMenuItem(
    "Procrastination Fries",
    "Golden, crispy fries. Best enjoyed while putting off something important.",
    "₹99",
    friesImg,
    menuContainer,
  );

  createMenuItem(
    "Deadline Destroyer Pizza",
    "A cheesy pizza that gives you the strength to ignore your responsibilities for another hour.",
    "₹299",
    pizzaImg,
    menuContainer,
  );

  createMenuItem(
    "Emotional Support Shake",
    "A thick chocolate milkshake. Cheaper than therapy, but not a replacement.",
    "₹129",
    shakeImg,
    menuContainer,
  );

  // Footer Note
  insertElem("p", "Eat now, overthink later.", contentDiv, "menu-footer-note");
}
