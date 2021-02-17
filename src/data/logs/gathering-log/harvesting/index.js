import { DataGroup } from "../../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Logs_Gathering_Log_Harvesting_Level } from "./level-based";
import { Logs_Gathering_Log_Harvesting_Special } from "./special";

export const Logs_Gathering_Log_Harvesting = function(parent) {
    const data = new DataGroup("Harvesting", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Harvesting_Level,
        Logs_Gathering_Log_Harvesting_Special,
	]);

    return data;
};
