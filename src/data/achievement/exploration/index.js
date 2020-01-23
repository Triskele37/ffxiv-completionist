import { ExplorationExplorationAchievements } from "./exploration";
import { AbalathiasSpineExplorationAchievements } from "./abalathiaspine";
import { BlackShroudExplorationAchievements } from "./blackshroud";
import { CoerthasExplorationAchievements } from "./coerthas";
import { DravaniaExplorationAchievements } from "./dravania";
import { DutyExplorationAchievements } from "./duty";
import { LaNosceaExplorationAchievements } from "./lanoscea";
import { MorDhonaExplorationAchievements } from "./mordhona";
import { NorvrandtExplorationAchievements } from "./norvrandt";
import { OthardExplorationAchievements } from "./othard";
import { SightseeingExplorationAchievements } from "./sightseeing";
import { ThanalanExplorationAchievements } from "./thanalan";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const ExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.exploration`;

    return {
        name: "Exploration",
    	storageKey,
        subGroups: [
            ExplorationExplorationAchievements(storageKey),
            AbalathiasSpineExplorationAchievements(storageKey),
            BlackShroudExplorationAchievements(storageKey),
            CoerthasExplorationAchievements(storageKey),
            DravaniaExplorationAchievements(storageKey),
            DutyExplorationAchievements(storageKey),
            LaNosceaExplorationAchievements(storageKey),
            MorDhonaExplorationAchievements(storageKey),
            NorvrandtExplorationAchievements(storageKey),
            OthardExplorationAchievements(storageKey),
            SightseeingExplorationAchievements(storageKey),
            ThanalanExplorationAchievements(storageKey),
    	],
    };
};
