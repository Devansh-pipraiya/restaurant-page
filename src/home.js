import { insertElem, insertImage, insertList } from "./dom.js";
import burgerImg from "./assets/the-existential-crisis-burger.jpg";

export { home };

function home() {
  insertElem("h2", "Because life is hard. Cooking shouldn't be.");

  insertElem(
    "p",
    "Welcome to Ctrl + Alt + Eat, the only restaurant where the food is hot, the Wi-Fi is free," +
      "and your life choices are none of our business.",
  );

  insertImage(burgerImg, "the existential crisis burger", 640, 485);

  insertElem("h2", "Today's Special: The Existential Crisis Burger");

  insertElem(
    "p",
    "A juicy burger stacked with cheese, regret, and a sauce made from questionable life decisions.",
  );

  insertElem("p", "Only ₹199. Your financial problems can wait.");

  insertElem("h2", "Why Choose Us?");

  insertList([
    "🍟 Fries that understand you better than your friends.",
    "🍔 Burgers bigger than your career prospects.",
    "☕ Coffee strong enough to revive your motivation.",
    "🛋️ Comfortable seating for people avoiding their responsibilities.",
  ]);
}
