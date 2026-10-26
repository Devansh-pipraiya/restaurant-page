import burgerImg from "./assets/the-existential-crisis-burger.jpg";
export { pageload };

const contentDiv = document.getElementById("content");

const insertElem = (tag, txt, parent = contentDiv) => {
  const el = document.createElement(tag);
  el.textContent = txt;
  parent.appendChild(el);
  return el;
};

function pageload() {
  insertElem("h2", "Because life is hard. Cooking shouldn't be.");

  insertElem(
    "p",
    "Welcome to Ctrl + Alt + Eat, the only restaurant where the food is hot, the Wi-Fi is free," +
      "and your life choices are none of our business.",
  );

  const img = document.createElement("img");
  img.src = burgerImg;
  img.alt = "the existential crisis burger";
  img.width = 500;
  contentDiv.appendChild(img);

  insertElem("h2", "Today's Special: The Existential Crisis Burger");

  insertElem(
    "p",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
  );

  insertElem("p", "Only ₹199. Your financial problems can wait.");

  insertElem("h2", "Why Choose Us?");

  const ul = insertElem("ul", "");
  insertElem("li", "🍟 Fries that understand you better than your friends.", ul);
  insertElem("li", "🍔 Burgers bigger than your career prospects.", ul);
  insertElem("li", "☕ Coffee strong enough to revive your motivation.", ul);
  insertElem("li", "🛋️ Comfortable seating for people avoiding their responsibilities.", ul);
}
