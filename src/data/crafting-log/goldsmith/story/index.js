import { Goldsmith_Story_ClassQuests } from "./class-quests";
import { Goldsmith_Story_Crystarium } from "./crystarium-deliveries";

export const GoldsmithStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        groupKeys: [
            "ClassQuests",
            "CrystariumDeliveries"
        ],
        // Groups
        ClassQuests: Goldsmith_Story_ClassQuests(storageKey),
        CrystariumDeliveries: Goldsmith_Story_Crystarium(storageKey),
    };
};
