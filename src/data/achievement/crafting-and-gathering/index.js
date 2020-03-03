import { DataGroup } from "../../DataGroup";

import { Achievements_Crafting_and_Gathering_Miner } from "./miner";
import { Achievements_Crafting_and_Gathering_Botanist } from "./botanist";
import { Achievements_Crafting_and_Gathering_Fisher } from "./fisher";
import { Achievements_Crafting_and_Gathering_Carpenter } from "./carpenter";
import { Achievements_Crafting_and_Gathering_Blacksmith } from "./blacksmith";
import { Achievements_Crafting_and_Gathering_Armorer } from "./armorer";
import { Achievements_Crafting_and_Gathering_Goldsmith } from "./goldsmith";
import { Achievements_Crafting_and_Gathering_Leatherworker } from "./leatherworker";
import { Achievements_Crafting_and_Gathering_Weaver } from "./weaver";
import { Achievements_Crafting_and_Gathering_Alchemist } from "./alchemist";
import { Achievements_Crafting_and_Gathering_Culinarian } from "./culinarian";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_and_Gathering = function(parent) {
    return new DataGroup("Crafting & Gathering", parent).initializeSubGroups([
        Achievements_Crafting_and_Gathering_Miner,
        Achievements_Crafting_and_Gathering_Botanist,
        Achievements_Crafting_and_Gathering_Fisher,
        Achievements_Crafting_and_Gathering_Carpenter,
        Achievements_Crafting_and_Gathering_Blacksmith,
        Achievements_Crafting_and_Gathering_Armorer,
        Achievements_Crafting_and_Gathering_Goldsmith,
        Achievements_Crafting_and_Gathering_Leatherworker,
        Achievements_Crafting_and_Gathering_Weaver,
        Achievements_Crafting_and_Gathering_Alchemist,
        Achievements_Crafting_and_Gathering_Culinarian,
    ]);
};
