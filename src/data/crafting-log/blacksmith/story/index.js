import { Blacksmith_Story_ClassQuests } from "./class-quests";
import { Blacksmith_Story_Crystarium } from "./crystarium-deliveries";

export const BlacksmithStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Blacksmith_Story_ClassQuests(storageKey),
            Blacksmith_Story_Crystarium(storageKey),
        ]
    };
};
