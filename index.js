//behind the scene of react
function customRender(child, parent) {
  const ele = document.createElement(child.type);
  ele.innerHTML = child.children;

  for (const prop in child.props) {
    if (prop === "children") continue;
    ele.setAttribute(prop, child.props[prop]);
  }
  parent.appendChild(ele);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "visit google",
};
const root = document.getElementById("root");

customRender(reactElement, root);
