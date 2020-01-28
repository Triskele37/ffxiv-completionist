import { ARRTrials } from "./ARR";
import { HWTrials } from "./HW";
import { SBTrials } from "./SB";
import { ShBTrials } from "./ShB";

export const Trials = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.trials`;

    return {
        name: "Trial",
        storageKey,
        groupKeys: [
            "ARR",
            "HW",
            "SB",
            "ShB",
        ],
        // Groups
        ARR: ARRTrials(storageKey),
        HW: HWTrials(storageKey),
        SB: SBTrials(storageKey),
        ShB: ShBTrials(storageKey),
    };
};
