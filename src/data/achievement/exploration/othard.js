import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Othard&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const OthardExplorationAchievements = {
    name: 'Othard',
	storageKey: "achievement.exploration",
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Discover every location within the Ruby Sea.",
        name: "Mapping the Realm: The Ruby Sea",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within Yanxia.",
        name: "Mapping the Realm: Yanxia",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Azim Steppe.",
        name: "Mapping the Realm: The Azim Steppe",
        points: 10,
        reward: "-"
    }]
}
