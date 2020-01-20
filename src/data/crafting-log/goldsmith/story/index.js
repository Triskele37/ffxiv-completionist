import { Goldsmith_Story_ClassQuests } from "./class-quests";
import { Goldsmith_Story_Crystarium } from "./crystarium-deliveries";

export const GoldsmithStoryRecipe = {
    name: 'Story Recipes',
    subGroups: [
      Goldsmith_Story_ClassQuests,
      Goldsmith_Story_Crystarium,
    ]
};
