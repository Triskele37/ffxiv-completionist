import { LevelBasedLoggingLogs } from "./level-based";
import { SpecialLoggingLogs } from "./special";

export const LoggingLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.logging`;

    return {
        name: "Logging",
        storageKey,
        subGroups: [
    		LevelBasedLoggingLogs(storageKey),
            SpecialLoggingLogs(storageKey),
        ],
    };
};
