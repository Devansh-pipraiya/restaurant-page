// === Styles === //
import "./css/modern-normalize.css";
import "./css/styles.css";

// === Pages === //
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

// === DOM Elements === //
const contentDiv = document.getElementById("content");
const tabBtns = document.querySelectorAll("nav button");

// === Event Listeners === //
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    contentDiv.innerHTML = "";
    if (btn.textContent === "Home") home();
    else if (btn.textContent === "Menu") menu();
    else if (btn.textContent === "About") about();
  });
});

// === init === //
home();
if (tabBtns[0]) tabBtns[0].classList.add("active");
