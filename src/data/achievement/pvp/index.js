import { DataGroup } from "../../DataGroup";

import { Achievements_PvP_General } from "./general";
import { Achievements_PvP_Ranking } from "./ranking";
import { Achievements_PvP_The_Wolves_Den } from "./wolvesden";
import { Achievements_PvP_Frontline } from "./frontline";
import { Achievements_PvP_Rival_Wings } from "./rivalwing";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const Achievements_PvP = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Achievements_PvP_General,
        Achievements_PvP_Ranking,
        Achievements_PvP_The_Wolves_Den,
        Achievements_PvP_Frontline,
        Achievements_PvP_Rival_Wings,
    ]);
};
