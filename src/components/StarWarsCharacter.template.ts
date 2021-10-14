import { html, repeat, when } from "@microsoft/fast-element";

import { StarWarsCharacter } from "./StarWarsCharacter";

export const StarWarsCharacterTemplate = html<StarWarsCharacter>`
    ${when(x => x.character, html<StarWarsCharacter>`
        <fluent-card class="card">
            ${x => x.character.name}
            <fluent-menu>
                <fluent-menu-item>Option A</fluent-menu-item>
                <fluent-menu-item>Option B</fluent-menu-item>
            </fluent-menu>
        </fluent-card>
    `)}
`;