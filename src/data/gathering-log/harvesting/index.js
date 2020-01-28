import { Harvesting_Log_Level } from "./level-based";
import { Harvesting_Log_Special } from "./special";

export const Harvesting_Log = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.harvesting`;

    return {
        name: "Harvesting",
        storageKey,
        groupKeys: [
            "Level",
            "Special",
        ],
        // Groups
        Level: Harvesting_Log_Level(storageKey),
        Special: Harvesting_Log_Special(storageKey),
    };
};
