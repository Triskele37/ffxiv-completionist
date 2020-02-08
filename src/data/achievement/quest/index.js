import { DataGroup } from "../../DataGroup";

import { Achievements_Quests_Quests } from "./quest";
import { Achievements_Quests_Levequests } from "./levequests";
import { Achievements_Quests_Beast_Tribe_Quests } from "./beast";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Quest&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Quests = function(parent) {
    return new DataGroup("Quests", parent).initializeSubGroups([
        Achievements_Quests_Quests,
        Achievements_Quests_Levequests,
        Achievements_Quests_Beast_Tribe_Quests,
    ]);
};
