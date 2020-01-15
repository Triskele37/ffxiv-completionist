import { FrontlinePVPAchievements } from "./frontline";
import { RankingsPVPAchievements } from "./ranking";
import { RivalWingsPVPAchievements } from "./rivalwing";
import { WolvesDenPVPAchievements } from "./wolvesden";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const PVPAchievements = {
    name: 'PVP',
    subGroups: [
        FrontlinePVPAchievements,
        RankingsPVPAchievements,
        RivalWingsPVPAchievements,
        WolvesDenPVPAchievements,
	]
};
