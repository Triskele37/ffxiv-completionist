import { Leatherworker_Story_ClassQuests } from "./class-quests";
import { Leatherworker_Story_Crystarium } from "./crystarium-deliveries";

export const LeatherworkerStoryRecipe = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.story-recipes`;

    return {
        name: "Story Recipes",
        storageKey,
        groupKeys: [
            "ClassQuests",
            "CrystariumDeliveries"
        ],
        // Groups
        ClassQuests: Leatherworker_Story_ClassQuests(storageKey),
        CrystariumDeliveries: Leatherworker_Story_Crystarium(storageKey),
    };
};
