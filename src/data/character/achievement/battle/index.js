import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Battle_Battle } from "./battle";
import { Character_Achievements_Battle_Dungeons } from "./dungeons";
import { Character_Achievements_Battle_Trials } from "./trials";
import { Character_Achievements_Battle_Raids } from "./raids";
import { Character_Achievements_Battle_The_Hunt } from "./the-hunt";
import { Character_Achievements_Battle_Treasure_Hunt } from "./treasure-hunt";
import { Character_Achievements_Battle_Field_Operations } from "./field-operations";

export const Character_Achievements_Battle = function(parent) {
    const data = new DataGroup("Battle", parent);
    data.name_de = "Kamferfolge";
    data.name_en = "Battle";
    data.name_fr = "Combats";
    data.name_ja = "バトル";

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
