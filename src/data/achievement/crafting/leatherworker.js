import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Leatherworker&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_Leatherworker = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Successfully synthesize 50 times for level 1-10 leatherworking recipes.",
        name: "Hiding in Plain Sight: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 leatherworking recipes.",
        name: "Hiding in Plain Sight: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 leatherworking recipes.",
        name: "Hiding in Plain Sight: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 leatherworking recipes.",
        name: "Hiding in Plain Sight: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 leatherworking recipes.",
        name: "Hiding in Plain Sight: Artisan",
        points: 10,
        reward: "Title: Of the Golden Hide"
    }, {
        description: "Obtain the first five “Hiding in Plain Sight” achievements.",
        reward: "Item: Knife of the Luminary",
        name: "A Leatherworker's Life for Me",
        points: 30,
    }, {
        description: "Craft and record completion of 50 unique leatherworker recipes.",
        name: "I Made That: Leatherworker I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 110 unique leatherworker recipes.",
        name: "I Made That: Leatherworker II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 220 unique leatherworker recipes.",
        reward: "Item: Master Leatherworker's Ring",
        name: "I Made That: Leatherworker III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as a leatherworker.",
        name: "An Eye for Detail: Leatherworker I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a leatherworker.",
        name: "An Eye for Detail: Leatherworker II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a leatherworker.",
        name: "An Eye for Detail: Leatherworker III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 320 unique leatherworker recipes.",
        name: "I Made That: Leatherworker IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 leatherworking recipes.",
        name: "Hiding in Plain Sight: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a leatherworker.",
        name: "An Eye for Detail: Leatherworker IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a leatherworker.",
        name: "An Eye for Detail: Leatherworker V",
        points: 10,
        reward: "Title: Master Leatherworker"
    }, {
        description: "Craft and record completion of 420 unique leatherworker recipes.",
        reward: "Item: Blessed Hidekeep's Knife",
        name: "I Made That: Leatherworker V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 leatherworking recipes.",
        name: "Hiding in Plain Sight: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 550 unique leatherworker recipes.",
        reward: "Item: Blessed Hideking's Knife",
        name: "I Made That: Leatherworker VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 leatherworking recipes.",
        name: "Hiding in Plain Sight: Master",
        points: 10,
        reward: "-"
    }
];
