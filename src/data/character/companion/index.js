import { DataGroup } from "../../DataGroup";

import { Character_Companion_Rank } from "./companion-rank";
import { Character_Companion_Skills } from "./companion-skills";
import { Character_Companion_Barding } from "./barding";

export const Character_Companion = function(parent) {
    const data = new DataGroup("Companion", parent);

    data.initializeSubGroups([
        Character_Companion_Rank,
        Character_Companion_Skills,
        Character_Companion_Barding
    ]);

    return data;
};
