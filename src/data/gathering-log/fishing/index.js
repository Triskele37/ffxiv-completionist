import { DataGroup } from "../../DataGroup";

import { Gathering_Log_Fishing_Log } from "./log";
import { Gathering_Log_Fishing_Guide } from "./guide";

export const Gathering_Log_Fishing = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Log_Fishing_Log,
        Gathering_Log_Fishing_Guide,
    ]);
};
