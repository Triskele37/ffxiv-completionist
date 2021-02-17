import { DataGroup } from "../../DataGroup";

import { Character_Blue_Mage_Spellbook } from "./spellbook";
import { Character_Blue_Mage_The_Masked_Carnivale } from "./the-masked-carnivale";
import { Character_Blue_Mage_Log } from "./log";

export const Character_Blue_Mage = function(parent) {
    const data = new DataGroup("Blue Mage", parent);
    data.name_fr = "Mage Bleu";

    data.initializeSubGroups([
        Character_Blue_Mage_Spellbook,
        Character_Blue_Mage_The_Masked_Carnivale,
        Character_Blue_Mage_Log,
    ]);

    return data;
};
