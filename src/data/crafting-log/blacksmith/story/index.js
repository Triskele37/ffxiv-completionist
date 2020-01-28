import { Blacksmith_Story_ClassQuests } from "./class-quests";
import { Blacksmith_Story_Crystarium } from "./crystarium-deliveries";

export const BlacksmithStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        groupKeys: [
            "ClassQuests",
            "CrystariumDeliveries"
        ],
        // Groups
        ClassQuests: Blacksmith_Story_ClassQuests(storageKey),
        CrystariumDeliveries: Blacksmith_Story_Crystarium(storageKey),
    };
};
