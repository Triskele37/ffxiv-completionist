import { GatheringGatheringAchievements } from "./gathering";
import { BotanistGatheringAchievements } from "./botanist";
import { FisherGatheringAchievements } from "./fisher";
import { MinerGatheringAchievements } from "./miner";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Gathering&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const GatheringAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gathering`;

    return {
        name: 'Gathering',
    	storageKey,
        groupKeys: [
            "Gathering",
            "Botanist",
            "Fisher",
            "Miner"
        ],
        // Groups
        Gathering: GatheringGatheringAchievements(storageKey),
        Botanist: BotanistGatheringAchievements(storageKey),
        Fisher: FisherGatheringAchievements(storageKey),
        Miner: MinerGatheringAchievements(storageKey),
    };
};
