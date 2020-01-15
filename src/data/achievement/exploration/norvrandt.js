import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Norvrandt&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const NorvrandtExplorationAchievements = {
    name: 'Norvrandt',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Discover every location in Lakeland.",
        name: "Mapping the Realm: Lakeland",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location on Kholusia.",
        name: "Mapping the Realm: Kholusia",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Amh Araeng.",
        name: "Mapping the Realm: Amh Araeng",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in Il Mheg.",
        name: "Mapping the Realm: Il Mheg",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location within the Rak'tika Greatwood.",
        name: "Mapping the Realm: The Rak'tika Greatwood",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Tempest.",
        name: "Mapping the Realm: The Tempest",
        points: 10,
        reward: "-"
    }]
}
