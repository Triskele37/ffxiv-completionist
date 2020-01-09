import { ARRLeves } from './ARR';
import { HWLeves } from './HW';
import { SBLeves } from "./SB";
import { ShBLeves } from "./ShB";

export const MiningLeves = {
    name: "Mining",
    subGroups: [
        ARRLeves,
        HWLeves,
        SBLeves,
        ShBLeves,
    ]
};
