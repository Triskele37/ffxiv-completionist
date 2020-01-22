import { SeventhUmbralEraQuests } from "./seventh-umbral-era";
import { SeventhAstralEraQuests } from "./seventh-astral-era";
import { HeavenswardQuests } from "./heavensward"
import { DragonsongQuests } from "./dragonsong";
import { PostDragonsongQuests } from "./post-dragonsong";
import { StormbloodQuests } from "./stormblood";
import { PostStormbloodQuests } from "./post-stormblood";
import { ShadowbringersQuests } from "./shadowbringers";
import { PostShadowbringers } from "./post-shadowbringers";

export const MainScenarioQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.main-scenario`;

    return {
        name: "Main Scenario",
        storageKey,
        subGroups: [
            SeventhUmbralEraQuests(storageKey),
            SeventhAstralEraQuests(storageKey),
            HeavenswardQuests(storageKey),
            DragonsongQuests(storageKey),
            PostDragonsongQuests(storageKey),
            StormbloodQuests(storageKey),
            PostStormbloodQuests(storageKey),
            ShadowbringersQuests(storageKey),
            PostShadowbringers(storageKey),
        ]
    };
};
