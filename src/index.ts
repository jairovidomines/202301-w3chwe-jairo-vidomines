import Component from "./components/Component/Component.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonData } from "./utils/PokemonData/getPokemonData.js";
import { CardComponent } from "./components/CardComponent/CardComponent.js";

const { body } = document;
const header = new HeaderComponent(body, "header", "header");
header.render();

const container = new Component(body, "main", "main-container");
container.render();

const section = new Component(container.element, "section", "main-section");
section.render();

const pokemonList = new Component(section.element, "ul", "pokemon-list");
pokemonList.render();

(async () => {
  const allPokemonDataFromApi = await getPokemonData(21);

  const individualPokemon = allPokemonDataFromApi.map((pokemon) => {
    const card = new CardComponent(pokemonList.element, pokemon);
    return card;
  });
})();
