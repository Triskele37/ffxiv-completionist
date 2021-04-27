import { DataGroup } from "../../../DataGroup";

import { Duty_Quests_Beast_Tribe_Amalj_Aa } from "./amalj-aa";
import { Duty_Quests_Beast_Tribe_Sylph } from "./sylph";
import { Duty_Quests_Beast_Tribe_Kobold } from "./kobold";
import { Duty_Quests_Beast_Tribe_Sahagin } from "./sahagin";
import { Duty_Quests_Beast_Tribe_Ixal } from "./ixal";
import { Duty_Quests_Beast_Tribe_Vanu_Vanu } from "./vanu-vanu";
import { Duty_Quests_Beast_Tribe_Vath } from "./vath";
import { Duty_Quests_Beast_Tribe_Moogle } from "./moogle";
import { Duty_Quests_Beast_Tribe_Kojin } from "./kojin";
import { Duty_Quests_Beast_Tribe_Ananta } from "./ananta";
import { Duty_Quests_Beast_Tribe_Namazu } from "./namazu";
import { Duty_Quests_Beast_Tribe_Pixie } from "./pixie";
import { Duty_Quests_Beast_Tribe_Qitari } from "./qitari";
import { Duty_Quests_Beast_Tribe_Dwarf } from "./dwarf";

export const Duty_Quests_Beast_Tribe = function(parent) {
    const data = new DataGroup("Beast Tribe", parent);
    data.name_fr = "Tribale";

    data.columnConfig = [
        { header: "Level", key: "Level", filterable: true, centered: true },
        { header: "Name", key: "Name" },
        { header: "NPC", key: "Npc" },
        { header: "Reputation", key: "Reputation", filterable: true },
        { header: "Type", key: "type", filterable: true },
    ];

    data.initializeSubGroups([
        Duty_Quests_Beast_Tribe_Amalj_Aa,
        Duty_Quests_Beast_Tribe_Sylph,
        Duty_Quests_Beast_Tribe_Kobold,
        Duty_Quests_Beast_Tribe_Sahagin,
        Duty_Quests_Beast_Tribe_Ixal,
        Duty_Quests_Beast_Tribe_Vanu_Vanu,
        Duty_Quests_Beast_Tribe_Vath,
        Duty_Quests_Beast_Tribe_Moogle,
        Duty_Quests_Beast_Tribe_Kojin,
        Duty_Quests_Beast_Tribe_Ananta,
        Duty_Quests_Beast_Tribe_Namazu,
        Duty_Quests_Beast_Tribe_Pixie,
        Duty_Quests_Beast_Tribe_Qitari,
        Duty_Quests_Beast_Tribe_Dwarf,
    ]);

    return data;
};
