import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Achievements_Battle_Battle } from "./battle";
import { Character_Achievements_Battle_Dungeons } from "./dungeons";
import { Character_Achievements_Battle_Trials } from "./trials";
import { Character_Achievements_Battle_Raids } from "./raids";
import { Character_Achievements_Battle_The_Hunt } from "./the-hunt";
import { Character_Achievements_Battle_Treasure_Hunt } from "./treasure-hunt";
import { Character_Achievements_Battle_Field_Operations } from "./field-operations";

export const Character_Achievements_Battle = function(parent) {
    const json = loadJson('./character/achievement/battle/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Achievements_Battle_Battle,
        Character_Achievements_Battle_Dungeons,
        Character_Achievements_Battle_Trials,
        Character_Achievements_Battle_Raids,
        Character_Achievements_Battle_The_Hunt,
        Character_Achievements_Battle_Treasure_Hunt,
        Character_Achievements_Battle_Field_Operations,
    ]);

    return data;
};
