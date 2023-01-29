import type ComponentStructure from "../types.js";

class Component implements ComponentStructure {
  element: Element;
  parentElement: Element;

  constructor(
    parentElement: Element,
    public tagName: string,
    public className: string
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
