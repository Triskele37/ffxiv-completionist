import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

import { Character_Companion_Rank } from "./companion-rank";
import { Character_Companion_Skills } from "./companion-skills";
import { Character_Companion_Barding } from "./barding";

export const Character_Companion = function(parent) {
    const json = loadJson('./character/companion/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Companion_Rank,
        Character_Companion_Skills,
        Character_Companion_Barding
    ]);

    return data;
};
