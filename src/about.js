import { insertElem, insertImage, insertList } from "./dom.js";
import aboutImg from "./assets/about-img.jpg";

export { about };

function about() {
  const contentDiv = document.getElementById("content");

  // 1. Intro Section (Our Story)
  const introDiv = document.createElement("div");
  introDiv.classList.add("intro", "no-separator");
  insertElem("h2", "Our Story", introDiv);
  insertElem(
    "p",
    "Ctrl + Alt + Eat was born when three sleep-deprived friends realized they spent more time deciding what to eat than actually eating.",
    introDiv,
  );
  contentDiv.appendChild(introDiv);

  // 2. Restaurant Image
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("story-img-wrapper");
  insertImage(aboutImg, "Ctrl + Alt + Eat restaurant interior", 836, 470, imgWrapper);
  contentDiv.appendChild(imgWrapper);

  // 3. Philosophy Section (reuses .list-div)
  const philosophyDiv = document.createElement("div");
  philosophyDiv.classList.add("list-div");
  insertElem("h2", "👉 Our Philosophy", philosophyDiv);
  insertList(
    [
      "💡 Good food before good decisions.",
      "🍟 Zero judgment for ordering extra fries.",
      "🛋️ Maximum comfort, minimum effort.",
    ],
    philosophyDiv,
  );
  contentDiv.appendChild(philosophyDiv);

  // 4. Find Us Tagline (replaces old card & escape reality sentence)
  const note = insertElem(
    "p",
    "📍 Find Us: Somewhere between your home and your responsibilities.",
    contentDiv,
  );
  note.classList.add("menu-footer-note");
}
