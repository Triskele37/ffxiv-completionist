import { DataGroup } from "../../DataGroup";

import { Quests_Beast_Tribe_Amalj_Aa } from "./amalj-aa";
import { Quests_Beast_Tribe_Sylph } from "./sylph";
import { Quests_Beast_Tribe_Kobold } from "./kobold";
import { Quests_Beast_Tribe_Sahagin } from "./sahagin";
import { Quests_Beast_Tribe_Ixal } from "./ixal";
import { Quests_Beast_Tribe_Vanu_Vanu } from "./vanu-vanu";
import { Quests_Beast_Tribe_Vath } from "./vath";
import { Quests_Beast_Tribe_Moogle } from "./moogle";
import { Quests_Beast_Tribe_Kojin } from "./kojin";
import { Quests_Beast_Tribe_Ananta } from "./ananta";
import { Quests_Beast_Tribe_Namazu } from "./namazu";
import { Quests_Beast_Tribe_Pixie } from "./pixie";
import { Quests_Beast_Tribe_Qitari } from "./qitari";

export const Quests_Beast_Tribe = function(parent) {
    const data = new DataGroup("Beast Tribe", parent);
    data.columnConfig = [
        {
            header: "Level",
            key: "level",
            filterable: true,
            centered: true,
        },
        { header: "Name", key: "name" },
        { header: "NPC", key: "npc" },
        { header: "Reputation", key: "reputation", filterable: true },
        { header: "Type", key: "type", filterable: true },
    ];

    data.initializeSubGroups([
        Quests_Beast_Tribe_Amalj_Aa,
        Quests_Beast_Tribe_Sylph,
        Quests_Beast_Tribe_Kobold,
        Quests_Beast_Tribe_Sahagin,
        Quests_Beast_Tribe_Ixal,
        Quests_Beast_Tribe_Vanu_Vanu,
        Quests_Beast_Tribe_Vath,
        Quests_Beast_Tribe_Moogle,
        Quests_Beast_Tribe_Kojin,
        Quests_Beast_Tribe_Ananta,
        Quests_Beast_Tribe_Namazu,
        Quests_Beast_Tribe_Pixie,
        Quests_Beast_Tribe_Qitari,
    ]);

    return data;
};
