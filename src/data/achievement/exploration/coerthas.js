import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Coerthas&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const CoerthasExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthas`;

    return {
        name: "Coerthas",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Visit the Coerthas central highlands and unlock the area map.",
            name: "Mapping the Realm: Coerthas Central Highlands",
            points: 10,
            reward: "-"
        }, {
            description: "Discover every location in the Coerthas western highlands.",
            name: "Mapping the Realm: Coerthas Western Highlands",
            points: 10,
            reward: "-"
        }]
    };
};
