import { DataGroup } from "../../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Logs_Gathering_Log_Mining_Level } from "./level-based";
import { Logs_Gathering_Log_Mining_Special } from "./special";

export const Logs_Gathering_Log_Mining = function(parent) {
    const data = new DataGroup("Mining", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Mining_Level,
        Logs_Gathering_Log_Mining_Special,
	]);

    return data;
};
