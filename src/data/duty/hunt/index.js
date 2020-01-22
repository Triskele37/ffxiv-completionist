import { ARRHunts } from "./ARR";
import { HWHunts } from "./HW";
import { SBHunts } from "./SB";
import { ShBHunts } from "./ShB"

export const Hunts = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-hunt`;

    return {
        name: "Hunt",
        storageKey,
        subGroups: [
            ARRHunts(storageKey),
            HWHunts(storageKey),
            SBHunts(storageKey),
            ShBHunts(storageKey),
        ]
    };
};
