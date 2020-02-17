import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Botanist&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Gathering_Botanist = function(parent) {
    return new DataGroup("Botanist", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Gather
    {
        description: "Log 20 times from level 1-10 mature trees in La Noscea.",
        name: "Logging the Hours: La Noscea I",
        points: 5,
        reward: "-"
    }, {
        description: "Log 300 times from level 11-20 mature trees in La Noscea.",
        name: "Logging the Hours: La Noscea II",
        points: 5,
        reward: "-"
    }, {
        description: "Log 1,000 times from level 21-30 mature trees in La Noscea.",
        name: "Logging the Hours: La Noscea III",
        points: 5,
        reward: "-"
    }, {
        description: "Log 2,000 times from level 31-40 mature trees in La Noscea.",
        name: "Logging the Hours: La Noscea IV",
        points: 5,
        reward: "-"
    }, {
        description: "Log 4,000 times from level 41-50 mature trees in La Noscea.",
        name: "Logging the Hours: La Noscea V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cLogging the Hours: La Noscea\u201d achievements.",
        name: "A Botanist's Life for Me: La Noscea",
        points: 10,
        reward: "Title: Meadowreaper"
    }, {
        description: "Log 20 times from level 1-10 mature trees in the Black Shroud.",
        name: "Logging the Hours: Black Shroud I",
        points: 5,
        reward: "-"
    }, {
        description: "Log 300 times from level 11-20 mature trees in the Black Shroud.",
        name: "Logging the Hours: Black Shroud II",
        points: 5,
        reward: "-"
    }, {
        description: "Log 1,000 times from level 21-30 mature trees in the Black Shroud.",
        name: "Logging the Hours: Black Shroud III",
        points: 5,
        reward: "-"
    }, {
        description: "Log 2,000 times from level 31-40 mature trees in the Black Shroud.",
        name: "Logging the Hours: Black Shroud IV",
        points: 5,
        reward: "-"
    }, {
        description: "Log 4,000 times from level 41-50 mature trees in the Black Shroud.",
        name: "Logging the Hours: Black Shroud V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cLogging the Hours: Black Shroud\u201d achievements.",
        name: "A Botanist's Life for Me: Black Shroud",
        points: 10,
        reward: "Title: Forestreaper"
    }, {
        description: "Log 20 times from level 1-10 mature trees in Thanalan.",
        name: "Logging the Hours: Thanalan I",
        points: 5,
        reward: "-"
    }, {
        description: "Log 300 times from level 11-20 mature trees in Thanalan.",
        name: "Logging the Hours: Thanalan II",
        points: 5,
        reward: "-"
    }, {
        description: "Log 1,000 times from level 21-30 mature trees in Thanalan.",
        name: "Logging the Hours: Thanalan III",
        points: 5,
        reward: "-"
    }, {
        description: "Log 2,000 times from level 31-40 mature trees in Thanalan.",
        name: "Logging the Hours: Thanalan IV",
        points: 5,
        reward: "-"
    }, {
        description: "Log 4,000 times from level 41-50 mature trees in Thanalan.",
        name: "Logging the Hours: Thanalan V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cLogging the Hours: Thanalan\u201d achievements.",
        name: "A Botanist's Life for Me: Thanalan",
        points: 10,
        reward: "Title: Desertreaper"
    }, {
        description: "Obtain the \u201cA Botanist's Life for Me\u201d achievements for La Noscea, the Black Shroud, and Thanalan.",
        name: "A Botanist's Life for Me: Greater Eorzea",
        points: 30,
        reward: "Item: Axe of the Luminary",
    }, {
        description: "Gather 5,000 times from level 51-60 mature trees or lush vegetation.",
        name: "Reaping Heavensward",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 5,000 times from level 61-70 mature trees or lush vegetation.",
        name: "Reaping Stormblood",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 5,000 times from level 71-80 mature trees or lush vegetation.",
        name: "Reaping Shadowbringers",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique
    {
        description: "Harvest and record discovery of 25 unique items that can only be gathered as a botanist.",
        name: "I Found That: Botanist I",
        points: 5,
        reward: "-"
    }, {
        description: "Harvest and record discovery of 50 unique items that can only be gathered as a botanist.",
        name: "I Found That: Botanist II",
        points: 5,
        reward: "-"
    }, {
        description: "Harvest and record discovery of 100 unique items that can only be gathered as a botanist.",
        reward: "Item: Master Botanist's Ring",
        name: "I Found That: Botanist III",
        points: 10,
    }, {
        description: "Harvest and record discovery of 150 unique items that can only be gathered as a botanist.",
        name: "I Found That: Botanist IV",
        points: 10,
        reward: "-"
    }, {
        description: "Harvest and record discovery of 230 unique items that can only be gathered as a botanist.",
        name: "I Found That: Botanist V",
        points: 10,
        reward: "Item: Blessed Fieldkeep's Hatchet",
    }, {
        description: "Harvest and record discovery of 280 unique items that can only be gathered as a botanist.",
        name: "I Found That: Botanist VI",
        points: 10,
        reward: "Item: Blessed Fieldking's Hatchet",
    },
    //----------------------------------------------------------------------------- HQ Gather
    {
        description: "Gather 300 high-quality items as a botanist.",
        name: "An Eye for Quality: Botanist I",
        points: 5,
        reward: "-"
    }, {
        description: "Gather 1,500 high-quality items as a botanist.",
        name: "An Eye for Quality: Botanist II",
        points: 5,
        reward: "-"
    }, {
        description: "Gather 10,000 high-quality items as a botanist.",
        name: "An Eye for Quality: Botanist III",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 20,000 high-quality items as a botanist.",
        name: "An Eye for Quality: Botanist IV",
        points: 10,
        reward: "Title: Master Botanist"
    },
];
