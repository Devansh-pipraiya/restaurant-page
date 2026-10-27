import { insertElem, insertImage, insertList } from "./dom.js";
import aboutImg from "./assets/about-img.jpg";

export { about };

function about() {
  insertElem("h2", "Our Story");

  insertImage(aboutImg, "the existential crisis burger", 836, 470);

  insertElem(
    "p",
    "Ctrl + Alt + Eat was born when three sleep-deprived friends realized they spent more time deciding what to eat than actually eating.",
  );

  insertElem("h2", "Our Philosophy");
  insertList([
    "Good food before good decisions.",
    "Zero judgment for ordering extra fries.",
    "Maximum comfort, minimum effort.",
  ]);

  insertElem("h2", "Find Us");
  insertElem("p", "Somewhere between your home and your responsibilities.");

  insertElem("p", "Ctrl + Alt + Eat — Escape reality, one bite at a time.");
}
