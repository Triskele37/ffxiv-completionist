import { Culinarian_Story_ClassQuests } from "./class-quests";
import { Culinarian_Story_Crystarium } from "./crystarium-deliveries";

export const CulinarianStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        groupKeys: [
            "ClassQuests",
            "CrystariumDeliveries"
        ],
        // Groups
        ClassQuests: Culinarian_Story_ClassQuests(storageKey),
        CrystariumDeliveries: Culinarian_Story_Crystarium(storageKey),
    };
};
