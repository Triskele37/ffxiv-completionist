import { DataGroup } from "../../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Logs_Gathering_Log_Quarrying_Level } from "./level-based";
import { Logs_Gathering_Log_Quarrying_Special } from "./special";

export const Logs_Gathering_Log_Quarrying = function(parent) {
    const data = new DataGroup("Quarrying", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Quarrying_Level,
        Logs_Gathering_Log_Quarrying_Special,
	]);

    return data;
};
