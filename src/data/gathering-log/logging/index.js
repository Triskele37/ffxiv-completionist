import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Log_Logging_Level } from "./level-based";
import { Gathering_Log_Logging_Special } from "./special";

export const Gathering_Log_Logging = function(parent) {
    const data = new DataGroup("Logging", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Logging_Level,
        Gathering_Log_Logging_Special,
	]);

    return data;
};
