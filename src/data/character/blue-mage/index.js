import { DataGroup } from "../../DataGroup";

import { Character_Blue_Mage_Log } from "./log";

const basePath = "./character/blue-mage";
export const Character_Blue_Mage = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/spellbook`, {
            number: { centered: true }
        }),
        DataGroup.fromJSON(group, `${basePath}/the-masked-carnivale`, {
            level: { centered: true }
        }),
        Character_Blue_Mage_Log(group),
    ];

    return group;
};
