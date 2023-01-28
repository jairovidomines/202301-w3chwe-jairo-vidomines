import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import { getPokemonData } from "./utils/PokemonData/getPokemonData.js";

const pokemon = await getPokemonData(19);

const { body } = document;

const header = new HeaderComponent(body, "header", "header");
header.render();
