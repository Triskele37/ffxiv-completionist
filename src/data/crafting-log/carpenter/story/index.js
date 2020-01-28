import { Carpenter_Story_ClassQuests } from "./class-quests";
import { Carpenter_Story_Crystarium } from "./crystarium-deliveries";

export const CarpenterStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Carpenter_Story_ClassQuests(storageKey),
            Carpenter_Story_Crystarium(storageKey),
        ]
    };
};
