import { html, repeat, when } from "@microsoft/fast-element";

import { StarWarsCharacter } from "./components/StarWarsCharacter";
import { StarWarsCharacters } from "./StarWarsCharacters";

StarWarsCharacter;

export const StarWarsCharactersTemplate = html<StarWarsCharacters>`
<template role="feed">
    ${repeat(x => x.characters, html<any>`
        <star-wars-character :character=${character => character}></star-wars-character>
    `)}
</template>
`;