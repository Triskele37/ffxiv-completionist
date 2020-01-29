import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=2&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
// There are two AchievementCategories named Dungeons, will need to use IDs for these

export const Achievements_Character_Commendation = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Receive 10 player commendations.",
        name: "Leaving a Good Impression I",
        points: 0,
        reward: "Title: The Heart of the Party"
    }, {
        description: "Receive 50 player commendations.",
        name: "Leaving a Good Impression II",
        points: 0,
        reward: "Item: Princely Hatchling",
    }, {
        description: "Receive 100 player commendations.",
        name: "Leaving a Good Impression III",
        points: 0,
        reward: "Item: Partisan's Crown",
    }, {
        description: "Receive 300 player commendations.",
        name: "Leaving a Good Impression IV",
        points: 0,
        reward: "Item: Sovereign Barding",
    }, {
        description: "Receive 500 player commendations.",
        name: "Everybody's Darling",
        points: 0,
        reward: "Item: Gilded Armor Identification Key",
    }, {
        description: "Receive 1,500 player commendations.",
        name: "Leaving a Better Impression I",
        points: 0,
        reward: "Item: The Best Gown Ever",
    }, {
        description: "Receive 3,000 player commendations.",
        name: "Leaving a Better Impression II",
        points: 0,
        reward: "Item: Parade Chocobo Whistle",
    }
];
