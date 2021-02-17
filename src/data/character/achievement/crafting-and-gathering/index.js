import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Crafting_and_Gathering_All_Disciplines } from './all-disciplines';
import { Character_Achievements_Crafting_and_Gathering_Carpenter } from "./carpenter";
import { Character_Achievements_Crafting_and_Gathering_Blacksmith } from "./blacksmith";
import { Character_Achievements_Crafting_and_Gathering_Armorer } from "./armorer";
import { Character_Achievements_Crafting_and_Gathering_Goldsmith } from "./goldsmith";
import { Character_Achievements_Crafting_and_Gathering_Leatherworker } from "./leatherworker";
import { Character_Achievements_Crafting_and_Gathering_Weaver } from "./weaver";
import { Character_Achievements_Crafting_and_Gathering_Alchemist } from "./alchemist";
import { Character_Achievements_Crafting_and_Gathering_Culinarian } from "./culinarian";
import { Character_Achievements_Crafting_and_Gathering_Miner } from "./miner";
import { Character_Achievements_Crafting_and_Gathering_Botanist } from "./botanist";
import { Character_Achievements_Crafting_and_Gathering_Fisher } from "./fisher";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Character_Achievements_Crafting_and_Gathering = function(parent) {
    const data = new DataGroup("Crafting & Gathering", parent);
    data.name_de = "Synthese und Sammeln";
    data.name_en = "Crafting & Gathering";
    data.name_fr = "Synthèse et récolte";
    data.name_ja = "製作・採集";

    data.initializeSubGroups([
        Character_Achievements_Crafting_and_Gathering_All_Disciplines,
        Character_Achievements_Crafting_and_Gathering_Carpenter,
        Character_Achievements_Crafting_and_Gathering_Blacksmith,
        Character_Achievements_Crafting_and_Gathering_Armorer,
        Character_Achievements_Crafting_and_Gathering_Goldsmith,
        Character_Achievements_Crafting_and_Gathering_Leatherworker,
        Character_Achievements_Crafting_and_Gathering_Weaver,
        Character_Achievements_Crafting_and_Gathering_Alchemist,
        Character_Achievements_Crafting_and_Gathering_Culinarian,
        Character_Achievements_Crafting_and_Gathering_Miner,
        Character_Achievements_Crafting_and_Gathering_Botanist,
        Character_Achievements_Crafting_and_Gathering_Fisher,
    ]);

    return data;
};
