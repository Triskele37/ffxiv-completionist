import { BattleBattleAchievements } from "./battle";
import { DungeonBattleAchievements } from "./dungeons";
import { HuntBattleAchievements } from "./hunt";
import { RaidBattleAchievements } from "./raids";
import { TrialBattleAchievements } from "./trials";
import { TreasureHuntBattleAchievements } from "./treasurehunt";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

export const BattleAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.battle`;

    return {
        name: "Battle",
    	storageKey,
        groupKeys: [
            "Battle",
            "Dungeon",
            "Hunt",
            "Raid",
            "Trial",
            "TreasureHunt"
        ],
        // Groups
        Battle: BattleBattleAchievements(storageKey),
        Dungeon: DungeonBattleAchievements(storageKey),
        Hunt: HuntBattleAchievements(storageKey),
        Raid: RaidBattleAchievements(storageKey),
        Trial: TrialBattleAchievements(storageKey),
        TreasureHunt: TreasureHuntBattleAchievements(storageKey),
    };
};
