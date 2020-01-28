import { Quarrying_Log_Level } from "./level-based";
import { Quarrying_Log_Special } from "./special";

export const Quarrying_Log = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.quarrying`;

    return {
        name: "Quarrying",
        storageKey,
        groupKeys: [
            "Level",
            "Special",
        ],
        // Groups
        Level: Quarrying_Log_Level(storageKey),
        Special: Quarrying_Log_Special(storageKey),
    };
};
