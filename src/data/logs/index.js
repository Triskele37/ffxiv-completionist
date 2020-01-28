import { HuntingLogs } from "./hunting";
import { SightseeingLogs } from "./sightseeing";
import { BlueMage } from "./blue-mage";

export const Logs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.general-logs`;

    return {
        name: 'Logs',
        storageKey,
        groupKeys: [
            "Hunting",
            "Sightseeing",
            "BlueMage",
        ],
        // Groups
        Hunting: HuntingLogs(storageKey),
        Sightseeing: SightseeingLogs(storageKey),
        BlueMage: BlueMage(storageKey),
    };
};
