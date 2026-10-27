import { insertElem, insertImage, insertList } from "./dom.js";
import burgerImg from "./assets/the-existential-crisis-burger.jpg";

export { home };

function home() {
  const contentDiv = document.getElementById("content");

  const div1 = document.createElement("div");
  div1.classList.add("intro");
  insertElem("h2", "Because life is hard. Cooking shouldn't be.", div1);
  insertElem(
    "p",
    "Welcome to Ctrl + Alt + Eat, the only restaurant where the food is hot, the Wi-Fi is free," +
      " and your life choices are none of our business.",
    div1,
  );
  contentDiv.appendChild(div1);

  const div2 = document.createElement("div");
  div2.classList.add("special");

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("special-img-wrapper");
  const burger = insertImage(burgerImg, "the existential crisis burger", 640, 485, imgWrapper);
  burger.classList.add("special-img");
  div2.appendChild(imgWrapper);

  const info = document.createElement("div");
  info.classList.add("special-info");

  const badge = insertElem("span", "★ Today's Special", info);
  badge.classList.add("special-badge");

  insertElem("h2", "The Existential Crisis Burger", info);
  const desc = insertElem(
    "p",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
    info,
  );
  desc.classList.add("special-desc");

  const pricing = document.createElement("div");
  pricing.classList.add("special-pricing");
  const priceVal = insertElem("span", "₹199", pricing);
  priceVal.classList.add("price-val");
  const priceNote = insertElem("span", "Your financial problems can wait.", pricing);
  priceNote.classList.add("price-note");
  info.appendChild(pricing);

  div2.appendChild(info);
  contentDiv.appendChild(div2);

  const div3 = document.createElement("div");
  div3.classList.add("list-div");
  insertElem("h2", "👉 Why Choose Us?", div3);
  insertList(
    [
      "🍟 Fries that understand you better than your friends.",
      "🍔 Burgers bigger than your career prospects.",
      "☕ Coffee strong enough to revive your motivation.",
      "🛋️ Comfortable seating for people avoiding their responsibilities.",
    ],
    div3,
  );
  contentDiv.appendChild(div3);
}
