import { DataGroup } from "../../DataGroup";

import { Achievements_Gathering_Miner } from "./miner";
import { Achievements_Gathering_Botanist } from "./botanist";
import { Achievements_Gathering_Fisher } from "./fisher";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Gathering&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Gathering = function(parent) {
    return new DataGroup("Gathering", parent).initializeSubGroups([
        Achievements_Gathering_Miner,
        Achievements_Gathering_Botanist,
        Achievements_Gathering_Fisher,
    ]);
};
