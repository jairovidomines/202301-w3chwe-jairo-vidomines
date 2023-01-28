interface ComponentStructure {
  element: Element;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
