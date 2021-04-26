import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Blue_Mage_Log_Dungeons } from "./dungeon";
import { Character_Blue_Mage_Log_Trials } from "./trial";
import { Character_Blue_Mage_Log_Raids } from "./raid";

export const Character_Blue_Mage_Log = function(parent) {
    const json = loadJson('./character/blue-mage/log/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "name" },
        { key: "level", centered: true },
        { key: "iLvlReq", filterable: true, centered: true },
    ], json.headers);
    data.initializeSubGroups([
        Character_Blue_Mage_Log_Dungeons,
        Character_Blue_Mage_Log_Trials,
        Character_Blue_Mage_Log_Raids,
    ]);

    return data;
};
