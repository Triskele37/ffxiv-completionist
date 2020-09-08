import { DataGroup } from "../../DataGroup";
import { SightseeingLogColumnConfig } from "../columnConfigs";

import { General_Logs_Sightseeing_Log_ARR } from "./ARR";
import { General_Logs_Sightseeing_Log_HW } from "./HW";
import { General_Logs_Sightseeing_Log_SB } from "./SB";
import { General_Logs_Sightseeing_Log_ShB } from "./ShB";

export const General_Logs_Sightseeing_Log = function(parent) {
    const data = new DataGroup("Sightseeing Log", parent);
    data.name_fr = "Carnet d'Exploration";

    data.columnConfig = SightseeingLogColumnConfig;

    data.initializeSubGroups([
        General_Logs_Sightseeing_Log_ARR,
        General_Logs_Sightseeing_Log_HW,
        General_Logs_Sightseeing_Log_SB,
        General_Logs_Sightseeing_Log_ShB,
    ]);

    return data;
};
