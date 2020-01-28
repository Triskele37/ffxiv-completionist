import { Quest_Levequests_Battlecraft } from "./battlecraft-leves";
import { Quest_Levequests_Mining } from "./fieldcraft/mining-leves";
import { Quest_Levequests_Botany } from "./fieldcraft/botany-leves";
import { Quest_Levequests_Fishing } from "./fieldcraft/fishing-leves";
import { Quest_Levequests_Carpentry } from "./tradecraft/carpentry-leves";
import { Quest_Levequests_Blacksmithing } from "./tradecraft/blacksmithing-leves";
import { Quest_Levequests_Armoring } from "./tradecraft/armoring-leves";
import { Quest_Levequests_Goldsmithing } from "./tradecraft/goldsmithing-leves";
import { Quest_Levequests_Leatherworking } from "./tradecraft/leatherworking-leves";
import { Quest_Levequests_Clothcrafting } from "./tradecraft/clothcrafting-leves";
import { Quest_Levequests_Alchemy } from "./tradecraft/alchemy-leves";
import { Quest_Levequests_Cooking } from "./tradecraft/cooking-leves";

/*
https://xivapi/search
    ?indexes=Leve
    &filters=ClassJobCategory.Name=CRP
    &columns=ID,Name,ClassJobLevel,PlaceNameStart.Name

    having trouble targeting the issuing npc
*/

export const Quest_Levequests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.levequest`;

    return {
        name: "Levequests",
        storageKey,
        groupKeys: [
            "Battlecraft",
            "Mining",
            "Botany",
            "Fishing",
            "Carpentry",
            "Blacksmithing",
            "Armoring",
            "Goldsmithing",
            "Leatherworking",
            "Clothcrafting",
            "Alchemy",
            "Cooking",
        ],
        // Groups
        Battlecraft: Quest_Levequests_Battlecraft(storageKey),
        Mining: Quest_Levequests_Mining(storageKey),
        Botany: Quest_Levequests_Botany(storageKey),
        Fishing: Quest_Levequests_Fishing(storageKey),
        Carpentry: Quest_Levequests_Carpentry(storageKey),
        Blacksmithing: Quest_Levequests_Blacksmithing(storageKey),
        Armoring: Quest_Levequests_Armoring(storageKey),
        Goldsmithing: Quest_Levequests_Goldsmithing(storageKey),
        Leatherworking: Quest_Levequests_Leatherworking(storageKey),
        Clothcrafting: Quest_Levequests_Clothcrafting(storageKey),
        Alchemy: Quest_Levequests_Alchemy(storageKey),
        Cooking: Quest_Levequests_Cooking(storageKey),
    };
};
