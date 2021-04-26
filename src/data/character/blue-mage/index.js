import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

import { Character_Blue_Mage_Spellbook } from "./spellbook";
import { Character_Blue_Mage_The_Masked_Carnivale } from "./the-masked-carnivale";
import { Character_Blue_Mage_Log } from "./log";

export const Character_Blue_Mage = function(parent) {
    const json = loadJson('./character/blue-mage/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Blue_Mage_Spellbook,
        Character_Blue_Mage_The_Masked_Carnivale,
        Character_Blue_Mage_Log,
    ]);

    return data;
};
