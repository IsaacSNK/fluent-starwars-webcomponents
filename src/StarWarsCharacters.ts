import {
  customElement, FASTElement, observable
} from "@microsoft/fast-element";
import { ServiceBaseURL } from "./Configuration";
import { StarWarsCharactersStyle as styles } from "./StarWarsCharacters.styles";
import { StarWarsCharactersTemplate as template } from "./StarWarsCharacters.template";


@customElement({
  name: "star-wars-characters",
  template,
  styles
})
export class StarWarsCharacters extends FASTElement {
  @observable characters: any = [];

  @ServiceBaseURL baseURL!: string;

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
    console.log(this.baseURL);
  }

  private async loadData() {
    const response = await fetch("https://swapi.dev/api/people/");
    const parsedResponse = await response.json();
    this.characters = parsedResponse.results;
  }
}
