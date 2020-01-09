import { SeventhUmbralEra } from "./seventh-umbral-era";
import { SeventhAstralEra } from "./seventh-astral-era";
import { Heavensward } from "./heavensward"
import { Dragonsong } from "./dragonsong";
import { PostDragonsong } from "./post-dragonsong";
import { Stormblood } from "./stormblood";
import { PostStormblood } from "./post-stormblood";
import { Shadowbringers } from "./shadowbringers";
import { PostShadowbringers } from "./post-shadowbringers";

export const MainScenario = {
    name: "Main Scenario",
    subGroups: [
        SeventhUmbralEra,
        SeventhAstralEra,
        Heavensward,
        Dragonsong,
        PostDragonsong,
        Stormblood,
        PostStormblood,
        Shadowbringers,
        PostShadowbringers,
    ]
};
