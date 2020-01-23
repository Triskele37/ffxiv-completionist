import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Dravania&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const DravaniaExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravania`;

    return {
        name: "Dravania",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Discover every location in the Dravanian forelands.",
            name: "Mapping the Realm: Dravanian Forelands",
            points: 10,
            reward: "-"
        }, {
            description: "Discover every location in the Dravanian hinterlands.",
            name: "Mapping the Realm: Dravanian Hinterlands",
            points: 10,
            reward: "-"
        }, {
            description: "Discover every location in the Churning Mists.",
            name: "Mapping the Realm: Churning Mists",
            points: 10,
            reward: "-"
        }]
    };
};
