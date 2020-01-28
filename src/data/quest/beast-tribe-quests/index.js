import { Quest_Beast_Tribe_Amalj_Aa } from "./amalj-aa";
import { Quest_Beast_Tribe_Sylph } from "./sylph";
import { Quest_Beast_Tribe_Kobold } from "./kobold";
import { Quest_Beast_Tribe_Sahagin } from "./sahagin";
import { Quest_Beast_Tribe_Ixal } from "./ixal";

import { Quest_Beast_Tribe_Vanu_Vanu } from "./vanu-vanu";
import { Quest_Beast_Tribe_Vath } from "./vath";
import { Quest_Beast_Tribe_Moogle } from "./moogle";

import { Quest_Beast_Tribe_Kojin } from "./kojin";
import { Quest_Beast_Tribe_Ananta } from "./ananta";
import { Quest_Beast_Tribe_Namazu } from "./namazu";

import { Quest_Beast_Tribe_Pixie } from "./pixie";

export const Quest_Beast_Tribe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.beast-tribe`;

    return {
        name: "Beast Tribe",
        storageKey,
        groupKeys: [
            "Amalj_Aa",
            "Sylph",
            "Kobold",
            "Sahagin",
            "Ixal",
            "Vanu_Vanu",
            "Vath",
            "Moogle",
            "Kojin",
            "Ananta",
            "Namazu",
            "Pixie",
        ],
        // Groups
        //--------------------------------- ARR
        Amalj_Aa: Quest_Beast_Tribe_Amalj_Aa(storageKey),
        Sylph: Quest_Beast_Tribe_Sylph(storageKey),
        Kobold: Quest_Beast_Tribe_Kobold(storageKey),
        Sahagin: Quest_Beast_Tribe_Sahagin(storageKey),
        Ixal: Quest_Beast_Tribe_Ixal(storageKey),

        //--------------------------------- HW
        Vanu_Vanu: Quest_Beast_Tribe_Vanu_Vanu(storageKey),
        Vath: Quest_Beast_Tribe_Vath(storageKey),
        Moogle: Quest_Beast_Tribe_Moogle(storageKey),

        //--------------------------------- SB
        Kojin: Quest_Beast_Tribe_Kojin(storageKey),
        Ananta: Quest_Beast_Tribe_Ananta(storageKey),
        Namazu: Quest_Beast_Tribe_Namazu(storageKey),

        //--------------------------------- ShB
        Pixie: Quest_Beast_Tribe_Pixie(storageKey),
    };
};
