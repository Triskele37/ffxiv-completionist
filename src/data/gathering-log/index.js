import { Logging_Log } from "./logging";
import { Harvesting_Log } from "./harvesting";
import { Mining_Log } from "./mining";
import { Quarrying_Log } from "./quarrying";

import { Fishing_Guide_Fishing } from "./fishing-guide/fishing";
import { Fishing_Guide_Spearfishing } from "./fishing-guide/spearfishing";
import { Fishing_Log } from "./fishing-log";

export const Gathering_Logs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gathering-logs`;

    return {
        name: "Gathering Logs",
        storageKey,
        groupKeys: [
            "Logging_Log",
            "Harvesting_Log",
            "Mining_Log",
            "Quarrying_Log",
            "Fishing_Guide_Fishing",
            "Fishing_Guide_Spearfishing",
            "Fishing_Log",
        ],
        // Groups
        Logging_Log: Logging_Log(storageKey),
        Harvesting_Log: Harvesting_Log(storageKey),
        Mining_Log: Mining_Log(storageKey),
        Quarrying_Log: Quarrying_Log(storageKey),
        Fishing_Guide_Fishing: Fishing_Guide_Fishing(storageKey),
        Fishing_Guide_Spearfishing: Fishing_Guide_Spearfishing(storageKey),
        Fishing_Log: Fishing_Log(storageKey),
    };
};
