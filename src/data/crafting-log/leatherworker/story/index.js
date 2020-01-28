import { Leatherworker_Story_ClassQuests } from "./class-quests";
import { Leatherworker_Story_Crystarium } from "./crystarium-deliveries";

export const LeatherworkerStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Leatherworker_Story_ClassQuests(storageKey),
            Leatherworker_Story_Crystarium(storageKey),
        ]
    };
};
