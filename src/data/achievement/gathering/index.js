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
        subGroups: [
            GatheringGatheringAchievements(storageKey),
            BotanistGatheringAchievements(storageKey),
            FisherGatheringAchievements(storageKey),
            MinerGatheringAchievements(storageKey),
    	],
    };
};
