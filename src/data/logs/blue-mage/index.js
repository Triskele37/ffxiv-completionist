import { DataGroup } from "../../DataGroup";

import { General_Logs_Blue_Mage_Spellbook } from "./spellbook";
import { General_Logs_Blue_Mage_The_Masked_Carnivale } from "./the-masked-carnivale";
import { General_Logs_Blue_Mage_Log } from "./log";

export const General_Logs_Blue_Mage = function(parent) {
    const data = new DataGroup("Blue Mage", parent);
    data.name_fr = "Mage Bleu";

    data.initializeSubGroups([
        General_Logs_Blue_Mage_Spellbook,
        General_Logs_Blue_Mage_The_Masked_Carnivale,
        General_Logs_Blue_Mage_Log,
    ]);

    return data;
};
