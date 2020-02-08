import { DataGroup } from "../../DataGroup";

import { Achievements_Exploration_Sightseeing_Log } from "./sightseeing";
import { Achievements_Exploration_La_Noscea } from "./lanoscea";
import { Achievements_Exploration_The_Black_Shroud } from "./blackshroud";
import { Achievements_Exploration_Thanalan } from "./thanalan";
import { Achievements_Exploration_Coerthas } from "./coerthas";
import { Achievements_Exploration_Mor_Dhona } from "./mordhona";
import { Achievements_Exploration_Abalathias_Spine } from "./abalathiaspine";
import { Achievements_Exploration_Dravania } from "./dravania";
import { Achievements_Exploration_Gyr_Abania } from "./gyrabania";
import { Achievements_Exploration_Othard } from "./othard";
import { Achievements_Exploration_Norvrandt } from "./norvrandt";
import { Achievements_Exploration_Duty } from "./duty";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration = function(parent) {
    return new DataGroup("Exploration", parent).initializeSubGroups([
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
};
