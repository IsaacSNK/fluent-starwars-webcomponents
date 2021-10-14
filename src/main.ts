import { fillColor, fluentCard, fluentDesignSystemProvider, fluentMenu, fluentMenuItem, provideFluentDesignSystem } from "@fluentui/web-components";
import { Registration } from "@microsoft/fast-foundation";
import { ServiceBaseURL } from "./Configuration";
import { StarWarsCharacters } from "./StarWarsCharacters";

StarWarsCharacters;

provideFluentDesignSystem().register(
    Registration.instance(ServiceBaseURL, "https://www.fast.design/"),
    fluentCard(), 
    fluentMenu(), 
    fluentMenuItem()
);