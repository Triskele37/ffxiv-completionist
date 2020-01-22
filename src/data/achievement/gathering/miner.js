import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Miner&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const MinerGatheringAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.miner`;

    return {
        name: "Miner",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
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
            reward: "Item: Pick of the Luminary",
            name: "A Miner's Life for Me: Greater Eorzea",
            points: 30,
        }, {
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
            reward: "Item: Master Miner's Ring",
            name: "I Found That: Miner III",
            points: 10,
        }, {
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
            description: "Mine and record discovery of 100 unique items that can only be gathered as a miner.",
            name: "I Found That: Miner IV",
            points: 10,
            reward: "-"
        }, {
            description: "Gather 5,000 times at level 51-60 mineral deposits or rocky outcrops.",
            name: "Mining Heavensward",
            points: 10,
            reward: "-"
        }, {
            description: "Gather 20,000 high-quality items as a miner.",
            name: "An Eye for Quality: Miner IV",
            points: 10,
            reward: "Title: Master Miner"
        }, {
            description: "Mine and record discovery of 150 unique items that can only be gathered as a miner.",
            reward: "Item: Blessed Minekeep's Pickaxe",
            name: "I Found That: Miner V",
            points: 10,
        }, {
            description: "Gather 5,000 times at level 61-70 mineral deposits or rocky outcrops.",
            name: "Mining Stormblood",
            points: 10,
            reward: "-"
        }, {
            description: "Mine and record discovery of 180 unique items that can only be gathered as a miner.",
            reward: "Item: Blessed Mineking's Pickaxe",
            name: "I Found That: Miner VI",
            points: 10,
        }, {
            description: "Gather 5,000 times at level 71-80 mineral deposits or rocky outcrops.",
            name: "Mining Shadowbringers",
            points: 10,
            reward: "-"
        }]
    };
};
