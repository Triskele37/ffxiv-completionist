import { ARRTrials } from "./ARR";
import { HWTrials } from "./HW";
import { SBTrials } from "./SB";
import { ShBTrials } from "./ShB";

export const Trials = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.trials`;

    return {
        name: "Trial",
        storageKey,
        subGroups: [
            ARRTrials(storageKey),
            HWTrials(storageKey),
            SBTrials(storageKey),
            ShBTrials(storageKey),
        ]
    };
};
