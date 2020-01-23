import { HuntingLogs } from "./hunting";
import { SightseeingLogs } from "./sightseeing";
import { BlueMage } from "./blue-mage";

export const Logs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.general-logs`;

    return {
        name: 'Logs',
        storageKey,
        subGroups: [
            HuntingLogs(storageKey),
            SightseeingLogs(storageKey),
            BlueMage(storageKey),
        ]
    };
};
