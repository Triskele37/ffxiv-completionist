import { Goldsmith_Story_ClassQuests } from "./class-quests";
import { Goldsmith_Story_Crystarium } from "./crystarium-deliveries";

export const GoldsmithStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Goldsmith_Story_ClassQuests(storageKey),
            Goldsmith_Story_Crystarium(storageKey),
        ]
    };
};
