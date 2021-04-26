import { DataGroup } from "../DataGroup";

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
    const group = DataGroup.fromJSON(parent, "./character/index");

    group.subGroups = [
        Character_Character(group),
        Character_Companion(group),
        Character_Mount_Guide(group),
        Character_Minion_Guide(group),
        Character_Fashion_Accessories(group),
        Character_Relic_Gear(group),
        Character_Blue_Mage(group),
        Character_Gold_Saucer(group),
        Character_Achievements(group),
    ];

    return group;
};
