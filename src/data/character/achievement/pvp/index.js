import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Achievements_PvP_General } from "./general";
import { Character_Achievements_PvP_Ranking } from "./ranking";
import { Character_Achievements_PvP_The_Wolves_Den } from "./the-wolves-den";
import { Character_Achievements_PvP_Frontline } from "./frontline";
import { Character_Achievements_PvP_Rival_Wings } from "./rival-wings";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const Character_Achievements_PvP = function(parent) {
    const json = loadJson('./character/achievement/pvp/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Achievements_PvP_General,
        Character_Achievements_PvP_Ranking,
        Character_Achievements_PvP_The_Wolves_Den,
        Character_Achievements_PvP_Frontline,
        Character_Achievements_PvP_Rival_Wings,
    ]);

    return data;
};
