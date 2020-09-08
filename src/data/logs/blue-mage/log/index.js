import { DataGroup } from "../../../DataGroup";
import { BlueMageLogColumnConfig } from "../../columnConfigs";

import { General_Logs_Blue_Mage_Log_Dungeons } from "./dungeon";
import { General_Logs_Blue_Mage_Log_Trials } from "./trial";
import { General_Logs_Blue_Mage_Log_Raids } from "./raid";

export const General_Logs_Blue_Mage_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.name_fr = "Carnet";

    data.columnConfig = BlueMageLogColumnConfig;

    data.initializeSubGroups([
        General_Logs_Blue_Mage_Log_Dungeons,
        General_Logs_Blue_Mage_Log_Trials,
        General_Logs_Blue_Mage_Log_Raids,
    ]);

    return data;
};
