import { insertElem, insertImage, insertList, contentDiv } from "./dom.js";
import aboutImg from "./assets/about-img.jpg";

export { about };

function about() {
  // 1. Intro Section (Our Story)
  const introDiv = insertElem("div", "", contentDiv, "intro");
  introDiv.classList.add("no-separator");
  insertElem("h2", "Our Story", introDiv);
  insertElem(
    "p",
    "Ctrl + Alt + Eat was born when three sleep-deprived friends realized they spent more time deciding what to eat than actually eating.",
    introDiv,
  );

  // 2. Restaurant Image
  const imgWrapper = insertElem("div", "", contentDiv, "story-img-wrapper");
  insertImage(aboutImg, "Ctrl + Alt + Eat restaurant interior", 836, 470, imgWrapper);

  // 3. Philosophy Section (reuses .list-div)
  const philosophyDiv = insertElem("div", "", contentDiv, "list-div");
  insertElem("h2", "👉 Our Philosophy", philosophyDiv);
  insertList(
    [
      "💡 Good food before good decisions.",
      "🍟 Zero judgment for ordering fries.",
      "🛋️ Maximum comfort, minimum effort.",
    ],
    philosophyDiv,
  );

  // 4. Find Us
  insertElem(
    "p",
    "📍 Find Us: Somewhere between your home and your responsibilities.",
    contentDiv,
    "menu-footer-note",
  );
}
