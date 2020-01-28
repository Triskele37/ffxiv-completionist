import { Mining_Log_Level } from "./level-based";
import { Mining_Log_Special } from "./special";

export const Mining_Log = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.mining`;

    return {
        name: "Mining",
        storageKey,
        groupKeys: [
            "Level",
            "Special",
        ],
        // Groups
        Level: Mining_Log_Level(storageKey),
        Special: Mining_Log_Special(storageKey),
    };
};
