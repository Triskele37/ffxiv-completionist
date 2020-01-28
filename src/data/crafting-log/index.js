import { CarpenterCraftingLogs } from "./carpenter";
import { BlacksmithCraftingLogs } from "./blacksmith";
import { ArmorerCraftingLogs } from "./armorer";
import { GoldsmithCraftingLogs } from "./goldsmith";
import { LeatherworkerCraftingLogs } from "./leatherworker";
import { WeaverCraftingLogs } from "./weaver";
import { AlchemistCraftingLogs } from "./alchemist";
import { CulinarianCraftingLogs } from "./culinarian";

/* TODO:
BSM - Housing, Master Recipes, Restoration, Story
GSM - Housing, Master Recipes, Restoration, Story
Shared Log
*/

export const CraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crafting-log`;

    return {
        name: "Crafting",
        storageKey,
        groupKeys: [
            "Carpenter",
            "Blacksmith",
            "Armorer",
            "Goldsmith",
            "Leatherworker",
            "Weaver",
            "Alchemist",
            "Culinarian",
        ],
        // Groups
        Carpenter: CarpenterCraftingLogs(storageKey),
        Blacksmith: BlacksmithCraftingLogs(storageKey),
        Armorer: ArmorerCraftingLogs(storageKey),
        Goldsmith: GoldsmithCraftingLogs(storageKey),
        Leatherworker: LeatherworkerCraftingLogs(storageKey),
        Weaver: WeaverCraftingLogs(storageKey),
        Alchemist: AlchemistCraftingLogs(storageKey),
        Culinarian: CulinarianCraftingLogs(storageKey),
    };
};
