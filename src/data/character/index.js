import { DataGroup } from "../DataGroup";
import { loadJson } from "../loader";

import { Character_Character } from "./character";
import { Character_Companion } from "./companion";
import { Character_Mount_Guide } from "./mount";
import { Character_Minion_Guide } from "./minion";
import { Character_Fashion_Accessories } from "./fashion-accessories";
import { Character_Relic_Gear } from "./relic-gear";
import { Character_Blue_Mage } from "./blue-mage";
import { Character_Gold_Saucer } from "./gold-saucer";
import { Character_Achievements } from "./achievement";

export const Character = function(parent) {
    const json = loadJson('./character/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Character,
        Character_Companion,
        Character_Mount_Guide,
        Character_Minion_Guide,
        Character_Fashion_Accessories,
        Character_Relic_Gear,
        Character_Blue_Mage,
        Character_Gold_Saucer,
        Character_Achievements
    ]);

    return data;
};
