import { DataGroup } from "../../DataGroup";

import { Achievements_Battle_Battle } from "./battle";
import { Achievements_Battle_Dungeons } from "./dungeons";
import { Achievements_Battle_Trials } from "./trials";
import { Achievements_Battle_Raids } from "./raids";
import { Achievements_Battle_The_Hunt } from "./the-hunt";
import { Achievements_Battle_Treasure_Hunt } from "./treasure-hunt";

export const Achievements_Battle = function(parent) {
    const data = new DataGroup("Battle", parent);
    data.name_en = "Battle";
    data.name_fr = "Combats";

    data.initializeSubGroups([
        Achievements_Battle_Battle,
        Achievements_Battle_Dungeons,
        Achievements_Battle_Trials,
        Achievements_Battle_Raids,
        Achievements_Battle_The_Hunt,
        Achievements_Battle_Treasure_Hunt,
    ]);

    return data;
};
