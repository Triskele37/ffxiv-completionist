import { QuestQuestAchievements } from "./quest";
import { BeastQuestAchievements } from "./beast";
import { LeveQuestAchievements } from "./levequests";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Quest&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const QuestAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.quest`;

    return {
        name: "Quest",
    	storageKey,
        groupKeys: [
            "Quest",
            "Beast",
            "Leve"
        ],
        // Groups
        Quest: QuestQuestAchievements(storageKey),
        Beast: BeastQuestAchievements(storageKey),
        Leve: LeveQuestAchievements(storageKey),
    };
};
