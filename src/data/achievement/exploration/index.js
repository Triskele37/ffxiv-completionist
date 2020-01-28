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
        groupKeys: [
            "Exploration",
            "AbalathiasSpine",
            "BlackShroud",
            "Coerthas",
            "Dravania",
            "Duty",
            "LaNoscea",
            "MorDhona",
            "Norvrandt",
            "Othard",
            "Sightseeing",
            "Thanalan"
        ],
        // Groups
        Exploration: ExplorationExplorationAchievements(storageKey),
        AbalathiasSpine: AbalathiasSpineExplorationAchievements(storageKey),
        BlackShroud: BlackShroudExplorationAchievements(storageKey),
        Coerthas: CoerthasExplorationAchievements(storageKey),
        Dravania: DravaniaExplorationAchievements(storageKey),
        Duty: DutyExplorationAchievements(storageKey),
        LaNoscea: LaNosceaExplorationAchievements(storageKey),
        MorDhona: MorDhonaExplorationAchievements(storageKey),
        Norvrandt: NorvrandtExplorationAchievements(storageKey),
        Othard: OthardExplorationAchievements(storageKey),
        Sightseeing: SightseeingExplorationAchievements(storageKey),
        Thanalan: ThanalanExplorationAchievements(storageKey),
    };
};
