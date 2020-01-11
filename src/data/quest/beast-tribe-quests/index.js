import { AmaljAaQuests } from "./amalj-aa";
import { SylphQuests } from "./sylph";
import { KoboldQuests } from "./kobold";
import { SahaginQuests } from "./sahagin";
import { IxalQuests } from "./ixal";

import { VanuVanuQuests } from "./vanu-vanu";
import { VathQuests } from "./vath";
import { MoogleQuests } from "./moogle";

import { KojinQuests } from "./kojin";
import { AnantaQuests } from "./ananta";
import { NamazuQuests } from "./namazu";

import { PixieQuests } from "./pixie";

export const BeastTribeQuests = {
    name: "Beast Tribe",
    subGroups: [
        //--------------------------------- ARR
        AmaljAaQuests,
        SylphQuests,
        KoboldQuests,
        SahaginQuests,
        IxalQuests,
        //--------------------------------- HW
        VanuVanuQuests,
        VathQuests,
        MoogleQuests,
        //--------------------------------- SB
        KojinQuests,
        AnantaQuests,
        NamazuQuests,
        //--------------------------------- ShB
        PixieQuests,
    ]
};
