import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Log_Quarrying_Level } from "./level-based";
import { Gathering_Log_Quarrying_Special } from "./special";

export const Gathering_Log_Quarrying = function(parent) {
    const data = new DataGroup("Quarrying", parent);
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Quarrying_Level,
        Gathering_Log_Quarrying_Special,
	]);

    return data;
};
