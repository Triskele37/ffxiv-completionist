import { SightseeingARR } from "./ARR";
import { SightseeingHW } from "./HW";
import { SightseeingSB } from "./SB";
import { SightseeingShB } from "./ShB";

export const SightseeingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.sightseeing`;

    return {
        name: "Sightseeing",
        storageKey,
        subGroups: [
            SightseeingARR(storageKey),
            SightseeingHW(storageKey),
            SightseeingSB(storageKey),
            SightseeingShB(storageKey),
        ]
    };
};
