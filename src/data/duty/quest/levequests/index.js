import { DataGroup } from "../../../DataGroup";

import { Duty_Quests_Levequests_Battlecraft } from "./battlecraft-leves";
import { Duty_Quests_Levequests_Mining } from "./fieldcraft/mining-leves";
import { Duty_Quests_Levequests_Botany } from "./fieldcraft/botany-leves";
import { Duty_Quests_Levequests_Fishing } from "./fieldcraft/fishing-leves";
import { Duty_Quests_Levequests_Carpentry } from "./tradecraft/carpentry-leves";
import { Duty_Quests_Levequests_Blacksmithing } from "./tradecraft/blacksmithing-leves";
import { Duty_Quests_Levequests_Armoring } from "./tradecraft/armoring-leves";
import { Duty_Quests_Levequests_Goldsmithing } from "./tradecraft/goldsmithing-leves";
import { Duty_Quests_Levequests_Leatherworking } from "./tradecraft/leatherworking-leves";
import { Duty_Quests_Levequests_Clothcrafting } from "./tradecraft/clothcrafting-leves";
import { Duty_Quests_Levequests_Alchemy } from "./tradecraft/alchemy-leves";
import { Duty_Quests_Levequests_Cooking } from "./tradecraft/cooking-leves";

export const Duty_Quests_Levequests = function(parent) {
    const data = new DataGroup("Levequests", parent);
    data.name_fr = "Mandats";

    data.columnConfig = [
        { header: "Level", key: "level", centered: true },
        { header: "Name", key: "name" },
        { header: "Zone", key: "zone" },
        { header: "Location", key: "location" },
        { header: "NPC", key: "npc" },
    ];

    data.initializeSubGroups([
        Duty_Quests_Levequests_Battlecraft,
        Duty_Quests_Levequests_Mining,
        Duty_Quests_Levequests_Botany,
        Duty_Quests_Levequests_Fishing,
        Duty_Quests_Levequests_Carpentry,
        Duty_Quests_Levequests_Blacksmithing,
        Duty_Quests_Levequests_Armoring,
        Duty_Quests_Levequests_Goldsmithing,
        Duty_Quests_Levequests_Leatherworking,
        Duty_Quests_Levequests_Clothcrafting,
        Duty_Quests_Levequests_Alchemy,
        Duty_Quests_Levequests_Cooking,
    ]);

    return data;
};

/*
https://xivapi/search
    ?indexes=Leve
    &filters=ClassJobCategory.Name=CRP
    &columns=ID,Name,ClassJobLevel,PlaceNameStart.Name

    having trouble targeting the issuing npc
*/
