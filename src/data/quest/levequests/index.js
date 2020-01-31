import { DataGroup } from "../../DataGroup";

import { Quests_Levequests_Battlecraft } from "./battlecraft-leves";
import { Quests_Levequests_Mining } from "./fieldcraft/mining-leves";
import { Quests_Levequests_Botany } from "./fieldcraft/botany-leves";
import { Quests_Levequests_Fishing } from "./fieldcraft/fishing-leves";
import { Quests_Levequests_Carpentry } from "./tradecraft/carpentry-leves";
import { Quests_Levequests_Blacksmithing } from "./tradecraft/blacksmithing-leves";
import { Quests_Levequests_Armoring } from "./tradecraft/armoring-leves";
import { Quests_Levequests_Goldsmithing } from "./tradecraft/goldsmithing-leves";
import { Quests_Levequests_Leatherworking } from "./tradecraft/leatherworking-leves";
import { Quests_Levequests_Clothcrafting } from "./tradecraft/clothcrafting-leves";
import { Quests_Levequests_Alchemy } from "./tradecraft/alchemy-leves";
import { Quests_Levequests_Cooking } from "./tradecraft/cooking-leves";

export const Quests_Levequests = function(name, parent) {
    const data = new DataGroup(name, parent).initializeSubGroups([
        Quests_Levequests_Battlecraft,
        Quests_Levequests_Mining,
        Quests_Levequests_Botany,
        Quests_Levequests_Fishing,
        Quests_Levequests_Carpentry,
        Quests_Levequests_Blacksmithing,
        Quests_Levequests_Armoring,
        Quests_Levequests_Goldsmithing,
        Quests_Levequests_Leatherworking,
        Quests_Levequests_Clothcrafting,
        Quests_Levequests_Alchemy,
        Quests_Levequests_Cooking,
    ]);

    data.columnConfig = [
        { header: "Level", key: "level", styles: { centered: true } },
        { header: "Name", key: "name" },
        { header: "Zone", key: "zone" },
        { header: "Location", key: "location" },
        { header: "NPC", key: "npc" },
    ];

    return data;
};

/*
https://xivapi/search
    ?indexes=Leve
    &filters=ClassJobCategory.Name=CRP
    &columns=ID,Name,ClassJobLevel,PlaceNameStart.Name

    having trouble targeting the issuing npc
*/
