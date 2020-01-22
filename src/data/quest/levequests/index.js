import { BattlecraftLeves } from "./battlecraft-leves";
import { MiningLeves } from "./fieldcraft/mining-leves";
import { BotanyLeves } from "./fieldcraft/botany-leves";
import { FishingLeves } from "./fieldcraft/fishing-leves";
import { CarpentryLeves } from "./tradecraft/carpentry-leves";
import { BlacksmithingLeves } from "./tradecraft/blacksmithing-leves";
import { ArmoringLeves } from "./tradecraft/armoring-leves";
import { GoldsmithingLeves } from "./tradecraft/goldsmithing-leves";
import { LeatherworkingLeves } from "./tradecraft/leatherworking-leves";
import { ClothcraftingLeves } from "./tradecraft/clothcrafting-leves";
import { AlchemyLeves } from "./tradecraft/alchemy-leves";
import { CookingLeves } from "./tradecraft/cooking-leves";

/*
https://xivapi/search
    ?indexes=Leve
    &filters=ClassJobCategory.Name=CRP
    &columns=ID,Name,ClassJobLevel,PlaceNameStart.Name

    having trouble targeting the issuing npc
*/

export const Levequests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.levequest`;

    return {
        name: "Levequests",
        storageKey,
        subGroups: [
            BattlecraftLeves(storageKey),
            MiningLeves(storageKey),
            BotanyLeves(storageKey),
            FishingLeves(storageKey),
            CarpentryLeves(storageKey),
            BlacksmithingLeves(storageKey),
            ArmoringLeves(storageKey),
            GoldsmithingLeves(storageKey),
            LeatherworkingLeves(storageKey),
            ClothcraftingLeves(storageKey),
            AlchemyLeves(storageKey),
            CookingLeves(storageKey),
        ]
    };
};
