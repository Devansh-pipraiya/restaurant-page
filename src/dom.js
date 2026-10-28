// Shared DOM helpers for building page content

export { insertElem, insertImage, insertList, contentDiv };

const contentDiv = document.getElementById("content");

// Create an element, set its text/class, append it to a parent, and return it.
const insertElem = (tag, txt = "", parent = contentDiv, className) => {
  const el = document.createElement(tag);
  el.textContent = txt;
  if (className) el.classList.add(className);
  parent.appendChild(el);
  return el;
};

// Create an <img> with src/alt/size, append it, and return it.
const insertImage = (src, alt = "", width, height, parent = contentDiv, className) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = width;
  img.height = height;
  img.loading = "lazy";
  if (className) img.classList.add(className);
  parent.appendChild(img);
  return img;
};

// Create a <ul> with one <li> per item, appended under the given parent.
const insertList = (li, parent = contentDiv) => {
  const ul = insertElem("ul", "", parent);
  li.forEach((item) => {
    insertElem("li", item, ul);
  });
};
