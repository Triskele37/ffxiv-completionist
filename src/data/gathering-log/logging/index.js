import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Logs_Logging_Level } from "./level-based";
import { Gathering_Logs_Logging_Special } from "./special";

export const Gathering_Logs_Logging = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Logs_Logging_Level,
        Gathering_Logs_Logging_Special,
	]);

    return data;
};
