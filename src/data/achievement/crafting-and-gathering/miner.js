import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Miner&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_and_Gathering_Miner = function(parent) {
    return new DataGroup("Miner", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Gather
    {
        description: "Mine 20 times at level 1-10 mineral deposits in La Noscea.",
        name: "Mining Your Own Business: La Noscea I",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 300 times at level 11-20 mineral deposits in La Noscea.",
        name: "Mining Your Own Business: La Noscea II",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 1,000 times at level 21-30 mineral deposits in La Noscea.",
        name: "Mining Your Own Business: La Noscea III",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 2,000 times at level 31-40 mineral deposits in La Noscea.",
        name: "Mining Your Own Business: La Noscea IV",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 4,000 times at level 41-50 mineral deposits in La Noscea.",
        name: "Mining Your Own Business: La Noscea V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cMining Your Own Business: La Noscea\u201d achievements.",
        name: "A Miner's Life for Me: La Noscea",
        points: 10,
        reward: "Title: Meadowbreaker"
    }, {
        description: "Mine 20 times at level 1-10 mineral deposits in the Black Shroud.",
        name: "Mining Your Own Business: Black Shroud I",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 300 times at level 11-20 mineral deposits in the Black Shroud.",
        name: "Mining Your Own Business: Black Shroud II",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 1,000 times at level 21-30 mineral deposits in the Black Shroud.",
        name: "Mining Your Own Business: Black Shroud III",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 2,000 times at level 31-40 mineral deposits in the Black Shroud.",
        name: "Mining Your Own Business: Black Shroud IV",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 4,000 times at level 41-50 mineral deposits in the Black Shroud.",
        name: "Mining Your Own Business: Black Shroud V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cMining Your Own Business: Black Shroud\u201d achievements.",
        name: "A Miner's Life for Me: Black Shroud",
        points: 10,
        reward: "Title: Forestbreaker"
    }, {
        description: "Mine 20 times at level 1-10 mineral deposits in Thanalan.",
        name: "Mining Your Own Business: Thanalan I",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 300 times at level 11-20 mineral deposits in Thanalan.",
        name: "Mining Your Own Business: Thanalan II",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 1,000 times at level 21-30 mineral deposits in Thanalan.",
        name: "Mining Your Own Business: Thanalan III",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 2,000 times at level 31-40 mineral deposits in Thanalan.",
        name: "Mining Your Own Business: Thanalan IV",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 4,000 times at level 41-50 mineral deposits in Thanalan.",
        name: "Mining Your Own Business: Thanalan V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cMining Your Own Business: Thanalan\u201d achievements.",
        name: "A Miner's Life for Me: Thanalan",
        points: 10,
        reward: "Title: Desertbreaker"
    }, {
        description: "Obtain the \u201cA Miner's Life for Me\u201d achievements for La Noscea, the Black Shroud, and Thanalan.",
        name: "A Miner's Life for Me: Greater Eorzea",
        points: 30,
        reward: "Item: Pick of the Luminary",
    }, {
        description: "Gather 5,000 times at level 51-60 mineral deposits or rocky outcrops.",
        name: "Mining Heavensward",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 5,000 times at level 61-70 mineral deposits or rocky outcrops.",
        name: "Mining Stormblood",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 5,000 times at level 71-80 mineral deposits or rocky outcrops.",
        name: "Mining Shadowbringers",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique
    {
        description: "Mine and record discovery of 15 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner I",
        points: 5,
        reward: "-"
    }, {
        description: "Mine and record discovery of 30 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner II",
        points: 5,
        reward: "-"
    }, {
        description: "Mine and record discovery of 50 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner III",
        points: 10,
        reward: "Item: Master Miner's Ring",
    }, {
        description: "Mine and record discovery of 100 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner IV",
        points: 10,
        reward: "-"
    }, {
        description: "Mine and record discovery of 150 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner V",
        points: 10,
        reward: "Item: Blessed Minekeep's Pickaxe",
    }, {
        description: "Mine and record discovery of 180 unique items that can only be gathered as a miner.",
        name: "I Found That: Miner VI",
        points: 10,
        reward: "Item: Blessed Mineking's Pickaxe",
    },
    //----------------------------------------------------------------------------- HQ Gather
    {
        description: "Gather 300 high-quality items as a miner.",
        name: "An Eye for Quality: Miner I",
        points: 5,
        reward: "-"
    }, {
        description: "Gather 1,500 high-quality items as a miner.",
        name: "An Eye for Quality: Miner II",
        points: 5,
        reward: "-"
    }, {
        description: "Gather 10,000 high-quality items as a miner.",
        name: "An Eye for Quality: Miner III",
        points: 10,
        reward: "-"
    }, {
        description: "Gather 20,000 high-quality items as a miner.",
        name: "An Eye for Quality: Miner IV",
        points: 10,
        reward: "Title: Master Miner"
    },
    //----------------------------------------------------------------------------- Ishgardian Restoration
    {
        description: "Earn 50,000 points toward your skyward score as a miner.",
        name: "Skyward Sledgehammer I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 150,000 points toward your skyward score as a miner.",
        name: "Skyward Sledgehammer II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 500,000 points toward your skyward score as a miner.",
        name: "Skyward Sledgehammer III",
        points: 10,
        reward: "Title: Pick of the Firmament"
    }, {
        description: "Mine 50 clouded mineral deposits or rocky outcrops.",
        name: "With Mines Unclouded I",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 500 clouded mineral deposits or rocky outcrops.",
        name: "With Mines Unclouded II",
        points: 5,
        reward: "-"
    }, {
        description: "Mine 1000 clouded mineral deposits or rocky outcrops.",
        name: "With Mines Unclouded III",
        points: 10,
        reward: "-"
    }, {
        description: "As a miner, submit 50,000 expert recipe materials for the second phase of the Ishgardian Restoration.",
        name: "The Height of Mining",
        points: 10,
        reward: "Title: The Nest's Own Miner"
    },
];
