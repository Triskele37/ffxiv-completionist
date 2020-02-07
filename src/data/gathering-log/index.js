import { DataGroup } from "../DataGroup";

import { Gathering_Log_Mining } from "./mining";
import { Gathering_Log_Quarrying } from "./quarrying";
import { Gathering_Log_Logging } from "./logging";
import { Gathering_Log_Harvesting } from "./harvesting";

import { Gathering_Log_Fishing } from "./fishing";
import { Gathering_Log_Spearfishing } from "./spearfishing";

export const Gathering_Log = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Log_Mining,
        Gathering_Log_Quarrying,
        Gathering_Log_Logging,
        Gathering_Log_Harvesting,
        Gathering_Log_Fishing,
        Gathering_Log_Spearfishing,
	]);
};
