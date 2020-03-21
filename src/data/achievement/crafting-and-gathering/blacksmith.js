import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Blacksmith&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_and_Gathering_Blacksmith = function(parent) {
    return new DataGroup("Blacksmith", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Synthesis
    {
        description: "Successfully synthesize 50 times for level 1-10 smithing recipes.",
        name: "Working the Bellows: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 smithing recipes.",
        name: "Working the Bellows: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 smithing recipes.",
        name: "Working the Bellows: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 smithing recipes.",
        name: "Working the Bellows: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 smithing recipes.",
        name: "Working the Bellows: Artisan",
        points: 10,
        reward: "Title: Of the Golden Anvil"
    }, {
        description: "Obtain the first five “Working the Bellows” achievements.",
        name: "A Blacksmith's Life for Me",
        points: 30,
        reward: "Item: Hammer of the Luminary",
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 smithing recipes.",
        name: "Working the Bellows: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 smithing recipes.",
        name: "Working the Bellows: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 smithing recipes.",
        name: "Working the Bellows: Master",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique Recipes
    {
        description: "Craft and record completion of 40 unique blacksmith recipes.",
        name: "I Made That: Blacksmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 90 unique blacksmith recipes.",
        name: "I Made That: Blacksmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 190 unique blacksmith recipes.",
        name: "I Made That: Blacksmith III",
        points: 10,
        reward: "Item: Master Blacksmith's Ring",
    }, {
        description: "Craft and record completion of 270 unique blacksmith recipes.",
        name: "I Made That: Blacksmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 380 unique blacksmith recipes.",
        name: "I Made That: Blacksmith V",
        points: 10,
        reward: "Item: Blessed Forgekeep's Hammer",
    }, {
        description: "Craft and record completion of 480 unique blacksmith recipes.",
        name: "I Made That: Blacksmith VI",
        points: 10,
        reward: "Item: Blessed Forgeking's Hammer",
    },
    //----------------------------------------------------------------------------- HQ Synthesis
    {
        description: "Craft 100 high-quality items as a blacksmith.",
        name: "An Eye for Detail: Blacksmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a blacksmith.",
        name: "An Eye for Detail: Blacksmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a blacksmith.",
        name: "An Eye for Detail: Blacksmith III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a blacksmith.",
        name: "An Eye for Detail: Blacksmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a blacksmith.",
        name: "An Eye for Detail: Blacksmith V",
        points: 10,
        reward: "Title: Master Blacksmith"
    },
    //----------------------------------------------------------------------------- Ishgardian Restoration
    {
        description: "Earn 50,000 points toward your skyward score as a blacksmith.",
        name: "Skyward Smithy I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 150,000 points toward your skyward score as a blacksmith.",
        name: "Skyward Smithy II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 500,000 points toward your skyward score as a blacksmith.",
        name: "Skyward Smithy III",
        points: 10,
        reward: "Title: Forge of the Firmament"
    }, {
        description: "As a blacksmith, craft and submit 100 expert recipe items for the second phase of the Ishgardian Restoration.",
        name: "The Height of Smithing",
        points: 10,
        reward: "Title: The Nest's Own Blacksmith"
    },
];
