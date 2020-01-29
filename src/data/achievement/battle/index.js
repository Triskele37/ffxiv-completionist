import { DataGroup } from "../../DataGroup";

import { Achievements_Battle_Battle } from "./battle";
import { Achievements_Battle_Dungeons } from "./dungeons";
import { Achievements_Battle_Trials } from "./trials";
import { Achievements_Battle_Raids } from "./raids";
import { Achievements_Battle_The_Hunt } from "./hunt";
import { Achievements_Battle_Treasure_Hunt } from "./treasurehunt";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const Achievements_Battle = function(name, parent) {
    const data = new DataGroup(name, parent);
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
