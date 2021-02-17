import { DataGroup } from "../../DataGroup";
import { SightseeingLogColumnConfig } from "../columnConfigs";

import { Logs_Sightseeing_Log_ARR } from "./ARR";
import { Logs_Sightseeing_Log_HW } from "./HW";
import { Logs_Sightseeing_Log_SB } from "./SB";
import { Logs_Sightseeing_Log_ShB } from "./ShB";

export const Logs_Sightseeing_Log = function(parent) {
    const data = new DataGroup("Sightseeing Log", parent);
    data.name_fr = "Carnet d'Exploration";

    data.columnConfig = SightseeingLogColumnConfig;

    data.initializeSubGroups([
        Logs_Sightseeing_Log_ARR,
        Logs_Sightseeing_Log_HW,
        Logs_Sightseeing_Log_SB,
        Logs_Sightseeing_Log_ShB,
    ]);

    return data;
};
