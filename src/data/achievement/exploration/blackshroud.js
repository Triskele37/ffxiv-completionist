import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Black%20Shroud&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const BlackShroudExplorationAchievements = {
    name: 'Black Shroud',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Visit the Central Shroud and unlock the area map.",
        name: "Mapping the Realm: Central Shroud",
        points: 10,
        reward: "-"
    }, {
        description: "Visit the East Shroud and unlock the area map.",
        name: "Mapping the Realm: East Shroud",
        points: 10,
        reward: "-"
    }, {
        description: "Visit the South Shroud and unlock the area map.",
        name: "Mapping the Realm: South Shroud",
        points: 10,
        reward: "-"
    }, {
        description: "Visit the North Shroud and unlock the area map.",
        name: "Mapping the Realm: North Shroud",
        points: 10,
        reward: "-"
    }]
}
