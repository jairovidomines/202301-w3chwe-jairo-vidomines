import Component from "../Component/Component.js";

export class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML =
      "<img class='header__logo' src='pokemon-logo.svg'>";
  }
}
