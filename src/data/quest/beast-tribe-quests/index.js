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

export const BeastTribeQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.beast-tribe`;

    return {
        name: "Beast Tribe",
        storageKey,
        subGroups: [
            //--------------------------------- ARR
            AmaljAaQuests(storageKey),
            SylphQuests(storageKey),
            KoboldQuests(storageKey),
            SahaginQuests(storageKey),
            IxalQuests(storageKey),
            //--------------------------------- HW
            VanuVanuQuests(storageKey),
            VathQuests(storageKey),
            MoogleQuests(storageKey),
            //--------------------------------- SB
            KojinQuests(storageKey),
            AnantaQuests(storageKey),
            NamazuQuests(storageKey),
            //--------------------------------- ShB
            PixieQuests(storageKey),
        ]
    };
};
