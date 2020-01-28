import { FrontlinePVPAchievements } from "./frontline";
import { RankingsPVPAchievements } from "./ranking";
import { RivalWingsPVPAchievements } from "./rivalwing";
import { WolvesDenPVPAchievements } from "./wolvesden";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const PVPAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.pvp`;

    return {
        name: "PVP",
        storageKey,
        groupKeys: [
            "Frontline",
            "Rankings",
            "RivalWings",
            "WolvesDen"
        ],
        // Groups
        Frontline: FrontlinePVPAchievements(storageKey),
        Rankings: RankingsPVPAchievements(storageKey),
        RivalWings: RivalWingsPVPAchievements(storageKey),
        WolvesDen: WolvesDenPVPAchievements(storageKey),
    };
};
