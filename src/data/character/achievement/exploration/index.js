import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Exploration_Sightseeing_Log } from "./sightseeing-log";
import { Character_Achievements_Exploration_La_Noscea } from "./la-noscea";
import { Character_Achievements_Exploration_The_Black_Shroud } from "./the-black-shroud";
import { Character_Achievements_Exploration_Thanalan } from "./thanalan";
import { Character_Achievements_Exploration_Coerthas } from "./coerthas";
import { Character_Achievements_Exploration_Mor_Dhona } from "./mor-dhona";
import { Character_Achievements_Exploration_Abalathias_Spine } from "./abalathias-spine";
import { Character_Achievements_Exploration_Dravania } from "./dravania";
import { Character_Achievements_Exploration_Gyr_Abania } from "./gyr-abania";
import { Character_Achievements_Exploration_Othard } from "./othard";
import { Character_Achievements_Exploration_Norvrandt } from "./norvrandt";
import { Character_Achievements_Exploration_Duty } from "./duty";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Character_Achievements_Exploration = function(parent) {
    const data = new DataGroup("Exploration", parent);
    data.name_de = "Erkundungen";
    data.name_en = "Exploration";
    data.name_fr = "Exploration";
    data.name_fr = "探検";

    data.initializeSubGroups([
        Character_Achievements_Exploration_Sightseeing_Log,
        Character_Achievements_Exploration_La_Noscea,
        Character_Achievements_Exploration_The_Black_Shroud,
        Character_Achievements_Exploration_Thanalan,
        Character_Achievements_Exploration_Coerthas,
        Character_Achievements_Exploration_Mor_Dhona,
        Character_Achievements_Exploration_Abalathias_Spine,
        Character_Achievements_Exploration_Dravania,
        Character_Achievements_Exploration_Gyr_Abania,
        Character_Achievements_Exploration_Othard,
        Character_Achievements_Exploration_Norvrandt,
        Character_Achievements_Exploration_Duty,
    ]);

    return data;
};
