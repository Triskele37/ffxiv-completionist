import { DataGroup } from "../../../DataGroup";
import { BlueMageLogColumnConfig } from "../../../logs/columnConfigs";

import { Character_Blue_Mage_Log_Dungeons } from "./dungeon";
import { Character_Blue_Mage_Log_Trials } from "./trial";
import { Character_Blue_Mage_Log_Raids } from "./raid";

export const Character_Blue_Mage_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.name_fr = "Carnet";

    data.columnConfig = BlueMageLogColumnConfig;

    data.initializeSubGroups([
        Character_Blue_Mage_Log_Dungeons,
        Character_Blue_Mage_Log_Trials,
        Character_Blue_Mage_Log_Raids,
    ]);

    return data;
};
