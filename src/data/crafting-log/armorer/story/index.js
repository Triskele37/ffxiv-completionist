import { Armorer_Story_ClassQuests } from "./class-quests";
import { Armorer_Story_Crystarium } from "./crystarium-deliveries";

export const ArmorerStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Armorer_Story_ClassQuests(storageKey),
            Armorer_Story_Crystarium(storageKey),
        ]
    };
};
