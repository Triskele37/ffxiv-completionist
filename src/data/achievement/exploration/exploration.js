import { AchievementColumnConfig } from "../columnConfigs";

export const ExplorationExplorationAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.exploration`;

    return {
        name: "Exploration",
        storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Attune with all 19 aetheryte crystals and aetherial gates in La Noscea.",
            name: "Taking in the Sights: La Noscea",
            points: 5,
            reward: "-"
        }, {
            description: "Attune with all 23 aetheryte crystals and aetherial gates in the Black Shroud.",
            name: "Taking in the Sights: Black Shroud",
            points: 5,
            reward: "-"
        }, {
            description: "Attune with all 22 aetheryte crystals and aetherial gates in Thanalan.",
            name: "Taking in the Sights: Thanalan",
            points: 5,
            reward: "-"
        }, {
            description: "Attune with all 19 aetheryte crystals and aetherial gates in Coerthas.",
            name: "Taking in the Sights: Coerthas",
            points: 5,
            reward: "-"
        }, {
            description: "Attune with the 4 aetheryte crystals and aetherial gates in Mor Dhona at Revenant's Toll, Brittlebark, the Fogfens, and the Singing Shards.",
            name: "Taking in the Sights: Mor Dhona",
            points: 5,
            reward: "-"
        }, {
            description: "Complete the \u201cTaking in the Sights\u201d achievements for La Noscea, the Black Shroud, Thanalan, Coerthas, and Mor Dhona.",
            name: "Been There, Done That",
            points: 10,
            reward: "Title: The Wanderer's Shadow"
        }]
    };
};
