import { DataGroup } from "../../DataGroup";

import { Achievements_Crafting_Carpenter } from "./carpenter";
import { Achievements_Crafting_Blacksmith } from "./blacksmith";
import { Achievements_Crafting_Armorer } from "./armorer";
import { Achievements_Crafting_Goldsmith } from "./goldsmith";
import { Achievements_Crafting_Leatherworker } from "./leatherworker";
import { Achievements_Crafting_Weaver } from "./weaver";
import { Achievements_Crafting_Alchemist } from "./alchemist";
import { Achievements_Crafting_Culinarian } from "./culinarian";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting = function(parent) {
    return new DataGroup("Crafting", parent).initializeSubGroups([
        Achievements_Crafting_Carpenter,
        Achievements_Crafting_Blacksmith,
        Achievements_Crafting_Armorer,
        Achievements_Crafting_Goldsmith,
        Achievements_Crafting_Leatherworker,
        Achievements_Crafting_Weaver,
        Achievements_Crafting_Alchemist,
        Achievements_Crafting_Culinarian,
    ]);
};
