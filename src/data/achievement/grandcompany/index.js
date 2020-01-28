import { GrandCompanyGrandCompanyAchievements } from "./grand-company";
import { ImmortalFlamesGrandCompanyAchievements } from "./immortalflames";
import { MaelstromGrandCompanyAchievements } from "./maelstrom";
import { TwinAdderGrandCompanyAchievements } from "./twinadder";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Grand%20Company&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const GrandCompanyAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.grand-company`;

    return {
        name: 'Grand Company',
    	storageKey,
        groupKeys: [
            "GrandCompany",
            "ImmortalFlames",
            "Maelstrom",
            "TwinAdder"
        ],
        // Groups
        GrandCompany: GrandCompanyGrandCompanyAchievements(storageKey),
        ImmortalFlames: ImmortalFlamesGrandCompanyAchievements(storageKey),
        Maelstrom: MaelstromGrandCompanyAchievements(storageKey),
        TwinAdder: TwinAdderGrandCompanyAchievements(storageKey),
    };
};
