import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Carpenter&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_Carpenter = function(parent) {
    return new DataGroup("Carpenter", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Synthesis
    {
        description: "Successfully synthesize 50 times for level 1-10 woodworking recipes.",
        name: "Going with the Grain: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 woodworking recipes.",
        name: "Going with the Grain: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 woodworking recipes.",
        name: "Going with the Grain: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 woodworking recipes.",
        name: "Going with the Grain: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 woodworking recipes.",
        name: "Going with the Grain: Artisan",
        points: 10,
        reward: "Title: Of the Golden Saw"
    }, {
        description: "Obtain the first five “Going with the Grain” achievements.",
        name: "A Carpenter's Life for Me",
        points: 30,
        reward: "Item: Saw of the Luminary",
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 woodworking recipes.",
        name: "Going with the Grain: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 woodworking recipes.",
        name: "Going with the Grain: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 woodworking recipes.",
        name: "Going with the Grain: Master",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique Recipes
    {
        description: "Craft and record completion of 30 unique carpenter recipes.",
        name: "I Made That: Carpenter I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 50 unique carpenter recipes.",
        name: "I Made That: Carpenter II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 100 unique carpenter recipes.",
        name: "I Made That: Carpenter III",
        points: 10,
        reward: "Item: Master Carpenter's Ring",
    }, {
        description: "Craft and record completion of 200 unique carpenter recipes.",
        name: "I Made That: Carpenter IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 320 unique carpenter recipes.",
        name: "I Made That: Carpenter V",
        points: 10,
        reward: "Item: Blessed Millkeep's Saw",
    }, {
        description: "Craft and record completion of 410 unique carpenter recipes.",
        name: "I Made That: Carpenter VI",
        points: 10,
        reward: "Item: Blessed Millking's Saw",
    },
    //----------------------------------------------------------------------------- HQ Synthesis
    {
        description: "Craft 100 high-quality items as a carpenter.",
        name: "An Eye for Detail: Carpenter I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a carpenter.",
        name: "An Eye for Detail: Carpenter II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a carpenter.",
        name: "An Eye for Detail: Carpenter III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a carpenter.",
        name: "An Eye for Detail: Carpenter IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a carpenter.",
        name: "An Eye for Detail: Carpenter V",
        points: 10,
        reward: "Title: Master Carpenter"
    },
];
