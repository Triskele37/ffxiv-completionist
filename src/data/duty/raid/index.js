import { ARRRaids } from "./ARR";
import { HWRaids } from "./HW";
import { SBRaids } from "./SB";
import { ShBRaids } from "./ShB";

export const Raids = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.raids`;

    return {
        name: "Raid",
        storageKey,
        groupKeys: [
            "ARR",
            "HW",
            "SB",
            "ShB",
        ],
        // Groups
        ARR: ARRRaids(storageKey),
        HW: HWRaids(storageKey),
        SB: SBRaids(storageKey),
        ShB: ShBRaids(storageKey),
    };
};
