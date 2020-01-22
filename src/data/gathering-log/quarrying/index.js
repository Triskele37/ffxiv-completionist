import { LevelBasedQuarryingLogs } from "./level-based";
import { SpecialQuarryingLogs } from "./special";

export const QuarryingLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.quarrying`;

    return {
        name: "Quarrying",
        storageKey,
        subGroups: [
    		LevelBasedQuarryingLogs(storageKey),
            SpecialQuarryingLogs(storageKey),
        ],
    };
};
