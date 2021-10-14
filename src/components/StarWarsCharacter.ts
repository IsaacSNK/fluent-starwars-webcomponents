import {
  FASTElement,
  attr,
  customElement,
  observable,
} from "@microsoft/fast-element";

import { StarWarsCharacterTemplate as template } from "./StarWarsCharacter.template";
import { StarWarsCharacterStyles as styles } from "./StarWarsCharacter.styles";
import { baseLayerLuminance, StandardLuminance } from "@fluentui/web-components";

@customElement({
  name: "star-wars-character",
  template,
  styles
})
export class StarWarsCharacter extends FASTElement {
  @observable character: any = undefined;

  connectedCallback() {
    super.connectedCallback();
    baseLayerLuminance.setValueFor(this, StandardLuminance.DarkMode);
  }
}
