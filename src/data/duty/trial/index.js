import { ARRTrials } from "./ARR";
import { HWTrials } from "./HW";
import { SBTrials } from "./SB";
import { ShBTrials } from "./ShB";

export const Trials = {
    name: "Trial",
    subGroups: [
        ARRTrials,
        HWTrials,
        SBTrials,
        ShBTrials
    ]
};
