import { Logging_Log_Level } from "./level-based";
import { Logging_Log_Special } from "./special";

export const Logging_Log = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.logging`;

    return {
        name: "Logging",
        storageKey,
        groupKeys: [
            "Level",
            "Special",
        ],
        // Groups
        Level: Logging_Log_Level(storageKey),
        Special: Logging_Log_Special(storageKey),
    };
};
