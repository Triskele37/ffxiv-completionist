import { DataGroup } from "../../DataGroup";

import { Achievements_Exploration_Sightseeing_Log } from "./sightseeing-log";
import { Achievements_Exploration_La_Noscea } from "./la-noscea";
import { Achievements_Exploration_The_Black_Shroud } from "./the-black-shroud";
import { Achievements_Exploration_Thanalan } from "./thanalan";
import { Achievements_Exploration_Coerthas } from "./coerthas";
import { Achievements_Exploration_Mor_Dhona } from "./mor-dhona";
import { Achievements_Exploration_Abalathias_Spine } from "./abalathias-spine";
import { Achievements_Exploration_Dravania } from "./dravania";
import { Achievements_Exploration_Gyr_Abania } from "./gyr-abania";
import { Achievements_Exploration_Othard } from "./othard";
import { Achievements_Exploration_Norvrandt } from "./norvrandt";
import { Achievements_Exploration_Duty } from "./duty";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration = function(parent) {
    const data = new DataGroup("Exploration", parent);
    data.name_en = "Exploration";
    data.name_fr = "d'Exploration";

    data.initializeSubGroups([
        Achievements_Exploration_Sightseeing_Log,
        Achievements_Exploration_La_Noscea,
        Achievements_Exploration_The_Black_Shroud,
        Achievements_Exploration_Thanalan,
        Achievements_Exploration_Coerthas,
        Achievements_Exploration_Mor_Dhona,
        Achievements_Exploration_Abalathias_Spine,
        Achievements_Exploration_Dravania,
        Achievements_Exploration_Gyr_Abania,
        Achievements_Exploration_Othard,
        Achievements_Exploration_Norvrandt,
        Achievements_Exploration_Duty,
    ]);

    return data;
};
