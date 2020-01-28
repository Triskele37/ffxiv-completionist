import { SightseeingARR } from "./ARR";
import { SightseeingHW } from "./HW";
import { SightseeingSB } from "./SB";
import { SightseeingShB } from "./ShB";

export const SightseeingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.sightseeing`;

    return {
        name: "Sightseeing",
        storageKey,
        groupKeys: [
            "ARR",
            "HW",
            "SB",
            "ShB",
        ],
        // Groups
        ARR: SightseeingARR(storageKey),
        HW: SightseeingHW(storageKey),
        SB: SightseeingSB(storageKey),
        ShB: SightseeingShB(storageKey),
    };
};
