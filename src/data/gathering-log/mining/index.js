import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Log_Mining_Level } from "./level-based";
import { Gathering_Log_Mining_Special } from "./special";

export const Gathering_Log_Mining = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Mining_Level,
        Gathering_Log_Mining_Special,
	]);

    return data;
};
