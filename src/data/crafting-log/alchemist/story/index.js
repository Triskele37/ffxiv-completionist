import { Alchemist_Story_ClassQuests } from "./class-quests";
import { Alchemist_Story_Crystarium } from "./crystarium-deliveries";

export const AlchemistStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        groupKeys: [
            "ClassQuests",
            "CrystariumDeliveries"
        ],
        // Groups
        ClassQuests: Alchemist_Story_ClassQuests(storageKey),
        CrystariumDeliveries: Alchemist_Story_Crystarium(storageKey),
    };
};
