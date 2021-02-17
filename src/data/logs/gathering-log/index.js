import { DataGroup } from "../../DataGroup";

import { Logs_Gathering_Log_Folklore_Gathering_Books } from "./folklore-gathering-books";

import { Logs_Gathering_Log_Mining } from "./mining";
import { Logs_Gathering_Log_Quarrying } from "./quarrying";
import { Logs_Gathering_Log_Logging } from "./logging";
import { Logs_Gathering_Log_Harvesting } from "./harvesting";

import { Logs_Gathering_Log_Fishing } from "./fishing";
import { Logs_Gathering_Log_Spearfishing } from "./spearfishing";

export const Logs_Gathering_Log = function(parent) {
    const data = new DataGroup("Gathering Log", parent);
    data.name_fr = "Carnet de Récolte";

    data.initializeSubGroups([
        Logs_Gathering_Log_Folklore_Gathering_Books,
        Logs_Gathering_Log_Mining,
        Logs_Gathering_Log_Quarrying,
        Logs_Gathering_Log_Logging,
        Logs_Gathering_Log_Harvesting,
        Logs_Gathering_Log_Fishing,
        Logs_Gathering_Log_Spearfishing,
	]);

    return data;
};
