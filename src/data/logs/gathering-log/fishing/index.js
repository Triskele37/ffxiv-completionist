import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Fishing_Log } from "./log";
import { Logs_Gathering_Log_Fishing_Guide } from "./guide";

export const Logs_Gathering_Log_Fishing = function(parent) {
    return new DataGroup("Fishing", parent).initializeSubGroups([
        Logs_Gathering_Log_Fishing_Log,
        Logs_Gathering_Log_Fishing_Guide,
    ]);
};
