export { insertElem, insertImage, insertList };

const contentDiv = document.getElementById("content");

const insertElem = (tag, txt = "", parent = contentDiv) => {
  const el = document.createElement(tag);
  el.textContent = txt;
  parent.appendChild(el);
  return el;
};

const insertImage = (src, alt = "", width, height, parent = contentDiv) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = width;
  img.height = height;
  parent.appendChild(img);
  return img;
};

const insertList = (li, parent = contentDiv) => {
  const ul = insertElem("ul", "", parent);
  li.forEach((item) => {
    insertElem("li", item, ul);
  });
};
