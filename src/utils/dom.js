// Small helper to build DOM elements without writing long innerHTML strings.
//
//   el("a", { href: "#menu", class: "btn" }, "Explore Our Menu")
//
// attrs:    class, dataset, onClick (any on<Event>), or any normal HTML attribute
// children: strings, DOM nodes, arrays of them (null / false are skipped)
//
// Text is added with createTextNode, so data coming from JSON can never be
// interpreted as HTML.
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (value === null || value === undefined || value === false) continue;

    if (key === "class") {
      node.className = value;
    } else if (key === "dataset") {
      Object.assign(node.dataset, value);
    } else if (key.startsWith("on")) {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      node.setAttribute(key, value === true ? "" : value);
    }
  }

  append(node, children);
  return node;
}

function append(parent, children) {
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    if (Array.isArray(child)) append(parent, child);
    else parent.append(child); // strings become text nodes, nodes are moved in
  }
}
