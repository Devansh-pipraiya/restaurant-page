import { insertElem, insertImage, insertList } from "./dom.js";
import burgerImg from "./assets/the-existential-crisis-burger.jpg";

export { menu };

const createMenuItem = (name, desc, price, img, width, height) => {
  const div = insertElem("div");
  insertImage(img, name, width, height, div);
  insertElem("h3", name, div);
  insertElem("p", desc, div);
  insertElem("p", price, div);
};

function menu() {
  insertElem("h2", "The Menu");
  insertElem("p", "Calories are temporary. Regret is forever");

  createMenuItem(
    "The Existential Crisis Burger",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
    "₹199",
    burgerImg,
    640,
    485,
  );

  createMenuItem(
    "Procrastination Fries",
    "Golden, crispy fries. Best enjoyed while putting off something important.",
    "₹99",
    burgerImg,
    640,
    485,
  );

  createMenuItem(
    "Deadline Destroyer Pizza",
    "A cheesy pizza that gives you the strength to ignore your responsibilities for another hour.",
    "₹299",
    burgerImg,
    640,
    485,
  );

  createMenuItem(
    "Emotional Support Shake",
    "A thick chocolate milkshake. Cheaper than therapy, but not a replacement.",
    "₹129",
    burgerImg,
    640,
    485,
  );

  insertElem("p", "Eat now, overthink later.");
}
