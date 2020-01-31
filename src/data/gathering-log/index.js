import { DataGroup } from "../DataGroup";

import { Gathering_Logs_Logging } from "./logging";
import { Gathering_Logs_Harvesting } from "./harvesting";
import { Gathering_Logs_Mining } from "./mining";
import { Gathering_Logs_Quarrying } from "./quarrying";

import { Gathering_Logs_Fishing_Guide } from "./fishing-guide/fishing";
import { Gathering_Logs_Spearfishing_Guide } from "./fishing-guide/spearfishing";
import { Gathering_Logs_Fishing_Log } from "./fishing-log/fishing";
import { Gathering_Logs_Spearfishing_Log } from "./fishing-log/spearfishing";

export const Gathering_Logs = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Logs_Logging,
        Gathering_Logs_Harvesting,
        Gathering_Logs_Mining,
        Gathering_Logs_Quarrying,
        Gathering_Logs_Fishing_Guide,
        Gathering_Logs_Spearfishing_Guide,
        Gathering_Logs_Fishing_Log,
        Gathering_Logs_Spearfishing_Log,
	]);
};
