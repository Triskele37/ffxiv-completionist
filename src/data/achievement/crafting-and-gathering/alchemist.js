import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Alchemist&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_and_Gathering_Alchemist = function(parent) {
    return new DataGroup("Alchemist", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Synthesis
    {
        description: "Successfully synthesize 50 times for level 1-10 alchemy recipes.",
        name: "Mixing It Up: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 alchemy recipes.",
        name: "Mixing It Up: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 alchemy recipes.",
        name: "Mixing It Up: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 alchemy recipes.",
        name: "Mixing It Up: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 alchemy recipes.",
        name: "Mixing It Up: Artisan",
        points: 10,
        reward: "Title: Of the Golden Lead"
    }, {
        description: "Obtain the first five “Mixing it Up” achievements.",
        name: "An Alchemist's Life for Me",
        points: 30,
        reward: "Item: Alembic of the Luminary",
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 alchemy recipes.",
        name: "Mixing It Up: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 alchemy recipes.",
        name: "Mixing It Up: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 alchemy recipes.",
        name: "Mixing It Up: Master",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique Recipes
    {
        description: "Craft and record completion of 30 unique alchemist recipes.",
        name: "I Made That: Alchemist I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 60 unique alchemist recipes.",
        name: "I Made That: Alchemist II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 110 unique alchemist recipes.",
        name: "I Made That: Alchemist III",
        points: 10,
        reward: "Item: Master Alchemist's Ring",
    }, {
        description: "Craft and record completion of 170 unique alchemist recipes.",
        name: "I Made That: Alchemist IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 270 unique alchemist recipes.",
        name: "I Made That: Alchemist V",
        points: 10,
        reward: "Item: Blessed Cauldronkeep's Alembic",
    }, {
        description: "Craft and record completion of 370 unique alchemist recipes.",
        name: "I Made That: Alchemist VI",
        points: 10,
        reward: "Item: Blessed Cauldronking's Alembic",
    },
    //----------------------------------------------------------------------------- HQ Synthesis
    {
        description: "Craft 100 high-quality items as an alchemist.",
        name: "An Eye for Detail: Alchemist I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as an alchemist.",
        name: "An Eye for Detail: Alchemist II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as an alchemist.",
        name: "An Eye for Detail: Alchemist III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as an alchemist.",
        name: "An Eye for Detail: Alchemist IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as an alchemist.",
        name: "An Eye for Detail: Alchemist V",
        points: 10,
        reward: "Title: Master Alchemist"
    },
    //----------------------------------------------------------------------------- Ishgardian Restoration
    {
        description: "Earn 50,000 points toward your skyward score as a alchemist.",
        name: "Skyward Science I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 150,000 points toward your skyward score as a alchemist.",
        name: "Skyward Science II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 500,000 points toward your skyward score as a alchemist.",
        name: "Skyward Science III",
        points: 10,
        reward: "Title: Panacea of the Firmament"
    }, {
        description: "As a alchemist, craft and submit 100 expert recipe items for the second phase of the Ishgardian Restoration.",
        name: "The Height of Alchemy",
        points: 10,
        reward: "Title: The Nest's Own Alchemist"
    },
];
