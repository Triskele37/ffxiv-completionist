import { ARRRaids } from "./ARR";
import { HWRaids } from "./HW";
import { SBRaids } from "./SB";
import { ShBRaids } from "./ShB";

export const Raids = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.raids`;

    return {
        name: "Raid",
        storageKey,
        subGroups: [
            ARRRaids(storageKey),
            HWRaids(storageKey),
            SBRaids(storageKey),
            ShBRaids(storageKey),
        ]
    };
};
