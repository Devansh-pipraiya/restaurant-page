import { insertElem, insertImage, insertList } from "./dom.js";
import burgerImg from "./assets/burger-icon.jpg";
import friesImg from "./assets/fries-icon.jpg";
import pizzaImg from "./assets/pizza-icon.jpg";
import shakeImg from "./assets/shake-icon.jpg";

export { menu };
const contentDiv = document.getElementById("content");

const createMenuItem = (name, desc, price, img, width, height, parentContainer) => {
  const item = insertElem("div", "", parentContainer);
  item.classList.add("menu-item");

  const image = insertImage(img, name, width, height, item);
  image.classList.add("menu-item-img");

  const info = insertElem("div", "", item);
  info.classList.add("menu-item-info");

  insertElem("h3", name, info);
  const descElem = insertElem("p", desc, info);
  descElem.classList.add("menu-item-desc");

  const priceElem = insertElem("p", price, info);
  priceElem.classList.add("menu-item-price");
};

function menu() {
  const introDiv = document.createElement("div");
  introDiv.classList.add("intro");
  insertElem("h2", "The Menu", introDiv);
  insertElem("p", "Calories are temporary. Regret is forever", introDiv);
  contentDiv.appendChild(introDiv);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  createMenuItem(
    "The Existential Crisis Burger",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
    "₹199",
    burgerImg,
    512,
    512,
    menuContainer,
  );

  createMenuItem(
    "Procrastination Fries",
    "Golden, crispy fries. Best enjoyed while putting off something important.",
    "₹99",
    friesImg,
    512,
    512,
    menuContainer,
  );

  createMenuItem(
    "Deadline Destroyer Pizza",
    "A cheesy pizza that gives you the strength to ignore your responsibilities for another hour.",
    "₹299",
    pizzaImg,
    512,
    512,
    menuContainer,
  );

  createMenuItem(
    "Emotional Support Shake",
    "A thick chocolate milkshake. Cheaper than therapy, but not a replacement.",
    "₹129",
    shakeImg,
    512,
    512,
    menuContainer,
  );
  contentDiv.appendChild(menuContainer);

  const note = insertElem("p", "Eat now, overthink later.");
  note.classList.add("menu-footer-note");
}
