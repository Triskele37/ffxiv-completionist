import { DataGroup } from "../DataGroup";

import { General_Logs_Hunting_Log } from "./hunting";
import { General_Logs_Sightseeing_Log } from "./sightseeing";
import { General_Logs_Blue_Mage } from "./blue-mage";

export const General_Logs = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        General_Logs_Hunting_Log,
        General_Logs_Sightseeing_Log,
        General_Logs_Blue_Mage,
    ]);
};
