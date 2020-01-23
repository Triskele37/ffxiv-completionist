import { LevelBasedMiningLogs } from "./level-based";
import { SpecialMiningLogs } from "./special";

export const MiningLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.mining`;

    return {
        name: "Mining",
        storageKey,
        subGroups: [
            LevelBasedMiningLogs(storageKey),
            SpecialMiningLogs(storageKey),
        ],
    };
};
