import type ComponentStructure from "../types.js";

class Component implements ComponentStructure {
  element: Element;

  constructor(
    private readonly parentElement: Element,
    className: string,
    tag = "div"
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
