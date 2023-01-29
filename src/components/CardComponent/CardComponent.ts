import type { PokemonData } from "../../utils/PokemonData/types.js";
import Component from "../Component/Component.js";
import type ComponentStructure from "../types.js";

export class CardComponent extends Component implements ComponentStructure {
  pokemon: PokemonData;

  constructor(parentElement: Element, information: PokemonData) {
    super(
      parentElement,
      "li",
      `pokemon-card pokemon-card__type-${information.types[0].type.name}`
    );
    this.pokemon = information;
    this.render();
  }

  render() {
    super.render();

    this.element.innerHTML = `<div class="pokemon-card__image"><img class=card-image alt="${this.pokemon.name}" width=150 heigth=150 src="${this.pokemon.sprites.other["official-artwork"].front_default}"></div>
    <div class="pokemon-card__name"><h2>${this.pokemon.name}</h2></div>
    <div class="pokemon-card__information"><span>#${this.pokemon.id}</span><span>${this.pokemon.types[0].type.name}</span></div>`;
  }
}
