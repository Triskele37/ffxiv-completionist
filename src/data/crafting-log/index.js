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
*/

export const CraftingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crafting-log`;

    return {
        name: "Crafting",
        storageKey,
        subGroups: [
            CarpenterCraftingLogs(storageKey),
            BlacksmithCraftingLogs(storageKey),
            ArmorerCraftingLogs(storageKey),
            GoldsmithCraftingLogs(storageKey),
            LeatherworkerCraftingLogs(storageKey),
            WeaverCraftingLogs(storageKey),
            AlchemistCraftingLogs(storageKey),
            CulinarianCraftingLogs(storageKey),
        ]
    };
};
