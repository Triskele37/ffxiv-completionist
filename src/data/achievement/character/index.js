import { CommendationCharacterAchievements } from "./commendation";
import { DiscipleOfHandCharacterAchievements } from "./doh";
import { DiscipleOfLandCharacterAchievements } from "./dol";
import { DiscipleOfMagicCharacterAchievements } from "./dom";
import { DiscipleOfWarCharacterAchievements } from "./dow";
import { GoldSaucerCharacterAchievements } from "./goldsaucer";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const CharacterAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.character`;

    return {
        name: "Character",
        storageKey,
        subGroups: [
            CommendationCharacterAchievements(storageKey),
            DiscipleOfHandCharacterAchievements(storageKey),
            DiscipleOfLandCharacterAchievements(storageKey),
            DiscipleOfMagicCharacterAchievements(storageKey),
            DiscipleOfWarCharacterAchievements(storageKey),
            GoldSaucerCharacterAchievements(storageKey),
    	],
    };
};
