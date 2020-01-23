import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Thanalan&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const ThanalanExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.thanalan`;

    return {
        name: "Thanalan",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Visit western Thanalan and unlock the area map.",
            name: "Mapping the Realm: Western Thanalan",
            points: 10,
            reward: "-"
        }, {
            description: "Visit central Thanalan and unlock the area map.",
            name: "Mapping the Realm: Central Thanalan",
            points: 10,
            reward: "-"
        }, {
            description: "Visit eastern Thanalan and unlock the area map.",
            name: "Mapping the Realm: Eastern Thanalan",
            points: 10,
            reward: "-"
        }, {
            description: "Visit southern Thanalan and unlock the area map.",
            name: "Mapping the Realm: Southern Thanalan",
            points: 10,
            reward: "-"
        }, {
            description: "Visit northern Thanalan and unlock the area map.",
            name: "Mapping the Realm: Northern Thanalan",
            points: 10,
            reward: "-"
        }]
    };
};
