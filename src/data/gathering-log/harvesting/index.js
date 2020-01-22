import { LevelBasedHarvestingLogs } from "./level-based";
import { SpecialHarvestingLogs } from "./special";

export const HarvestingLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.harvesting`;

    return {
        name: "Harvesting",
        storageKey,
        subGroups: [
            LevelBasedHarvestingLogs(storageKey),
    		SpecialHarvestingLogs(storageKey),
        ],
    };
};
