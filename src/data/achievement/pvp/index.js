import { DataGroup } from "../../DataGroup";

import { Achievements_PVP_General } from "./general";
import { Achievements_PVP_Ranking } from "./ranking";
import { Achievements_PVP_The_Wolves_Den } from "./wolvesden";
import { Achievements_PVP_Frontline } from "./frontline";
import { Achievements_PVP_Rival_Wings } from "./rivalwing";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const Achievements_PVP = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Achievements_PVP_General,
        Achievements_PVP_Ranking,
        Achievements_PVP_The_Wolves_Den,
        Achievements_PVP_Frontline,
        Achievements_PVP_Rival_Wings,
    ]);
};
