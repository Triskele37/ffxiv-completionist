import { DataGroup } from "../../DataGroup";
import { GatheringColumnConfig } from "../columnConfigs";

import { Gathering_Logs_Mining_Level } from "./level-based";
import { Gathering_Logs_Mining_Special } from "./special";

export const Gathering_Logs_Mining = function(name, parent) {
    const data = new DataGroup(name, parent)
    data.columnConfig = GatheringColumnConfig;

    data.initializeSubGroups([
        Gathering_Logs_Mining_Level,
        Gathering_Logs_Mining_Special,
	]);

    return data;
};
