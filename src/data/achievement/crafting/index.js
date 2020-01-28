import { AlchemistCraftingAchievements } from "./alchemist";
import { ArmorerCraftingAchievements } from "./armorer";
import { BlacksmithCraftingAchievements } from "./blacksmith";
import { CarpenterCraftingAchievements } from "./carpenter";
import { CulinarianCraftingAchievements } from "./culinarian";
import { GoldsmithCraftingAchievements } from "./goldsmith";
import { LeatherworkerCraftingAchievements } from "./leatherworker";
import { WeaverCraftingAchievements } from "./weaver";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const CraftingAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crafting`;

    return {
        name: "Crafting",
        storageKey,
        groupKeys: [
            "Alchemist",
            "Armorer",
            "Blacksmith",
            "Carpenter",
            "Culinarian",
            "Goldsmith",
            "Leatherworker",
            "Weaver"
        ],
        // Groups
        Alchemist: AlchemistCraftingAchievements(storageKey),
        Armorer: ArmorerCraftingAchievements(storageKey),
        Blacksmith: BlacksmithCraftingAchievements(storageKey),
        Carpenter: CarpenterCraftingAchievements(storageKey),
        Culinarian: CulinarianCraftingAchievements(storageKey),
        Goldsmith: GoldsmithCraftingAchievements(storageKey),
        Leatherworker: LeatherworkerCraftingAchievements(storageKey),
        Weaver: WeaverCraftingAchievements(storageKey),
    };
};
