import { ARRHunts } from "./ARR";
import { HWHunts } from "./HW";
import { SBHunts } from "./SB";
import { ShBHunts } from "./ShB"

export const Hunts = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-hunt`;

    return {
        name: "Hunt",
        storageKey,
        groupKeys: [
            "ARR",
            "HW",
            "SB",
            "ShB",
        ],
        // Groups
        ARR: ARRHunts(storageKey),
        HW: HWHunts(storageKey),
        SB: SBHunts(storageKey),
        ShB: ShBHunts(storageKey),
    };
};
