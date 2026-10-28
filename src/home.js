import { insertElem, insertImage, insertList, contentDiv } from "./dom.js";
import burgerImg from "./assets/the-existential-crisis-burger.jpg";

export { home };

function home() {
  // Intro Section
  const introDiv = insertElem("div", "", contentDiv, "intro");
  insertElem("h2", "Because life is hard. Cooking shouldn't be.", introDiv);
  insertElem(
    "p",
    "Welcome to Ctrl + Alt + Eat, the only restaurant where the food is hot, the Wi-Fi is free," +
      " and your life choices are none of our business.",
    introDiv,
  );

  // Special Section
  const specialDiv = insertElem("div", "", contentDiv, "special");

  const imgWrapper = insertElem("div", "", specialDiv, "special-img-wrapper");
  insertImage(burgerImg, "the existential crisis burger", 640, 485, imgWrapper, "special-img");

  const info = insertElem("div", "", specialDiv, "special-info");
  insertElem("span", "★ Today's Special", info, "special-badge");
  insertElem("h2", "The Existential Crisis Burger", info);
  insertElem(
    "p",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
    info,
    "special-desc",
  );

  const pricing = insertElem("div", "", info, "special-pricing");
  insertElem("span", "₹199", pricing, "price-val");
  insertElem("span", "Your financial problems can wait.", pricing, "price-note");

  // List Section
  const listDiv = insertElem("div", "", contentDiv, "list-div");
  insertElem("h2", "👉 Why Choose Us?", listDiv);
  insertList(
    [
      "🍟 Fries that understand you better than your friends.",
      "🍔 Burgers bigger than your career prospects.",
      "☕ Coffee strong enough to revive your motivation.",
      "🛋️ Comfortable seating for people avoiding their responsibilities.",
    ],
    listDiv,
  );
}
