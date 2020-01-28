import { Weaver_Story_ClassQuests } from "./class-quests";
import { Weaver_Story_Crystarium } from "./crystarium-deliveries";

export const WeaverStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        subGroups: [
            Weaver_Story_ClassQuests(storageKey),
            Weaver_Story_Crystarium(storageKey),
        ]
    };
};
