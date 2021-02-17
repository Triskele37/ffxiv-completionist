import { DataGroup } from "../../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Logs_Gathering_Log_Logging_Level } from "./level-based";
import { Logs_Gathering_Log_Logging_Special } from "./special";

export const Logs_Gathering_Log_Logging = function(parent) {
    const data = new DataGroup("Logging", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Logging_Level,
        Logs_Gathering_Log_Logging_Special,
	]);

    return data;
};
