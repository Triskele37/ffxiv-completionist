import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Gyr%20Abania&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const GyrAbaniaExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abania`;

    return {
        name: "Gyr Abania",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Discover every location within the Fringes.",
            name: "Mapping the Realm: The Fringes",
            points: 10,
            reward: "-"
        }, {
            description: "Discover every location within the Peaks.",
            name: "Mapping the Realm: The Peaks",
            points: 10,
            reward: "-"
        }, {
            description: "Discover every location within the Lochs.",
            name: "Mapping the Realm: The Lochs",
            points: 10,
            reward: "-"
        }]
    };
};
