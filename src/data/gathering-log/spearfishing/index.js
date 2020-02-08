import { DataGroup } from "../../DataGroup";

import { Gathering_Log_Spearfishing_Log } from "./log";
import { Gathering_Log_Spearfishing_Guide } from "./guide";

export const Gathering_Log_Spearfishing = function(parent) {
    return new DataGroup("Spearfishing", parent).initializeSubGroups([
        Gathering_Log_Spearfishing_Log,
        Gathering_Log_Spearfishing_Guide,
    ]);
};
