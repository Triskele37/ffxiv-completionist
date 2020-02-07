import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Sightseeing&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_Sightseeing_Log = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Complete entries 1-20 in your sightseeing log.",
        name: "Out of Sight",
        points: 5,
        reward: "-"
    }, {
        description: "Complete entries 1-80 in your sightseeing log.",
        reward: "Item: Fledgling Apkallu",
        name: "Out of Sight Out of Mind",
        points: 10,
    }, {
        description: "Complete entries 1-42 in your Heavensward sightseeing log.",
        name: "Out of Sight Out of Bounds I",
        points: 10,
        reward: "-"
    }, {
        description: "Complete entries 43-62 in your Heavensward sightseeing log.",
        name: "Out of Sight Out of Bounds II",
        points: 10,
        reward: "Title: Veteran Explorer"
    }, {
        description: "Complete entries 1-45 in your Stormblood sightseeing log.",
        name: "Oh, the Sights We'll See I",
        points: 10,
        reward: "-"
    }, {
        description: "Complete entries 46-62 in your Stormblood sightseeing log.",
        name: "Oh, the Sights We'll See II",
        points: 10,
        reward: "Title: Crimson Explorer"
    }, {
        description: "Complete entries 1-45 in your Shadowbringers sightseeing log.",
        name: "Darksighters I",
        points: 10,
        reward: "-"
    }
];
