import { SeventhUmbralEraQuests } from "./seventh-umbral-era";
import { SeventhAstralEraQuests } from "./seventh-astral-era";
import { HeavenswardQuests } from "./heavensward"
import { DragonsongQuests } from "./dragonsong";
import { PostDragonsongQuests } from "./post-dragonsong";
import { StormbloodQuests } from "./stormblood";
import { PostStormbloodQuests } from "./post-stormblood";
import { ShadowbringersQuests } from "./shadowbringers";
import { PostShadowbringers } from "./post-shadowbringers";

export const MainScenarioQuests = {
    name: "Main Scenario",
    subGroups: [
        SeventhUmbralEraQuests,
        SeventhAstralEraQuests,
        HeavenswardQuests,
        DragonsongQuests,
        PostDragonsongQuests,
        StormbloodQuests,
        PostStormbloodQuests,
        ShadowbringersQuests,
        PostShadowbringers,
    ]
};
