import "./css/modern-normalize.css";
import "./css/styles.css";

import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const contentDiv = document.getElementById("content");
const tabBtns = document.querySelectorAll("nav button");

home();

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    if (btn.textContent === "Home") home();
    else if (btn.textContent === "Menu") menu();
    else if (btn.textContent === "About") about();
  });
});
