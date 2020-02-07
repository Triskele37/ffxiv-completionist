import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Log_Harvesting_Level } from "./level-based";
import { Gathering_Log_Harvesting_Special } from "./special";

export const Gathering_Log_Harvesting = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Harvesting_Level,
        Gathering_Log_Harvesting_Special,
	]);

    return data;
};
