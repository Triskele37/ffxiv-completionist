import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Goldsmith&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_Goldsmith = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Successfully synthesize 50 times for level 1-10 goldsmithing recipes.",
        name: "Cutting the Carats: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 goldsmithing recipes.",
        name: "Cutting the Carats: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 goldsmithing recipes.",
        name: "Cutting the Carats: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 goldsmithing recipes.",
        name: "Cutting the Carats: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 goldsmithing recipes.",
        name: "Cutting the Carats: Artisan",
        points: 10,
        reward: "Title: Of the Golden Leaf"
    }, {
        description: "Obtain the first five \u201cCutting the Carats\u201d achievements.",
        reward: "Item: Gavel of the Luminary",
        name: "A Goldsmith's Life for Me",
        points: 30,
    }, {
        description: "Craft and record completion of 60 unique goldsmith recipes.",
        name: "I Made That: Goldsmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 130 unique goldsmith recipes.",
        name: "I Made That: Goldsmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 270 unique goldsmith recipes.",
        reward: "Item: Master Goldsmith's Ring",
        name: "I Made That: Goldsmith III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as a goldsmith.",
        name: "An Eye for Detail: Goldsmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a goldsmith.",
        name: "An Eye for Detail: Goldsmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a goldsmith.",
        name: "An Eye for Detail: Goldsmith III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 380 unique goldsmith recipes.",
        name: "I Made That: Goldsmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 goldsmithing recipes.",
        name: "Cutting the Carats: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a goldsmith.",
        name: "An Eye for Detail: Goldsmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a goldsmith.",
        name: "An Eye for Detail: Goldsmith V",
        points: 10,
        reward: "Title: Master Goldsmith"
    }, {
        description: "Craft and record completion of 550 unique goldsmith recipes.",
        reward: "Item: Blessed Gemkeep's Mallet",
        name: "I Made That: Goldsmith V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 goldsmithing recipes.",
        name: "Cutting the Carats: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 730 unique goldsmith recipes.",
        reward: "Item: Blessed Gemking's Mallet",
        name: "I Made That: Goldsmith VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 goldsmithing recipes.",
        name: "Cutting the Carats: Master",
        points: 10,
        reward: "-"
    }
];
