import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Hingan_Kugane = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.kugane`;

    return {
        name: "Kugane",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "A Lone Wolf No More",
        npc: "News Hawker",
        unlock: "Kamuy of the 9 Tails Mount"
    }, {
        level: "61",
        name: "I Dream of Shirogane",
        npc: "Tsurubami",
        unlock: "Unlocks Shirogane"
    }, {
        level: "61",
        name: "Dedication to the Craft",
        npc: "Near Eastern Merchant",
        unlock: ""
    }, {
        level: "61",
        name: "A Drink in the Tub",
        npc: "Amaji",
        unlock: ""
    }, {
        level: "61",
        name: "I'll Show You Angry",
        npc: "Modest Maiden",
        unlock: ""
    }, {
        level: "61",
        name: "A Picture Is Worth a Thousand Moms",
        npc: "Foreignly Lass",
        unlock: ""
    }, {
        level: "61",
        name: "Zero Tolerance Teahouse",
        npc: "Teahouse Serving Girl",
        unlock: ""
    }, {
        level: "61",
        name: "Where the Wild Pandas Are",
        npc: "Graceful Geiko",
        unlock: ""
    }, {
        level: "61",
        name: "A Bleak Diagnosis",
        npc: "Yamabiko",
        unlock: ""
    }, {
        level: "61",
        name: "To Bathe a Garlean",
        npc: "Peddler Of Peculiars",
        unlock: ""
    }, {
        level: "62",
        name: "The Seaweed is Always Greener",
        npc: "Kojin Hireling",
        unlock: "Kurenai Custom Deliveries"
    }, {
        level: "67",
        name: "The Perfect Woman",
        npc: "Ijin Merchant",
        unlock: ""
    }, {
        level: "67",
        name: "Child Labor",
        npc: "Keisetsu",
        unlock: ""
    }, {
        level: "67",
        name: "In the Line of Duty",
        npc: "Injured Sekiseigumi Blade",
        unlock: ""
    }, {
        level: "67",
        name: "The Weight of a Dream",
        npc: "Puissant Porter",
        unlock: ""
    }, {
        level: "61",
        name: "One-star Veteran Clan Hunt",
        npc: "Estrild",
        unlock: "Unlocks One-star Veteran Clan Hunt"
    }, {
        level: "63",
        name: "Two-star Veteran Clan Hunt",
        npc: "Estrild",
        unlock: "Unlocks Two-star Veteran Clan Hunt"
    }, {
        level: "66",
        name: "Three-star Veteran Clan Hunt",
        npc: "Estrild",
        unlock: "Unlocks Three-star Veteran Clan Hunt"
    }, {
        level: "70",
        name: "Elite Veteran Clan Hunt",
        npc: "Estrild",
        unlock: "Unlocks Elite Veteran Clan Hunt"
    }, {
        level: "70",
        name: "King of the Castle",
        npc: "East Aldenard Trading Company Associate",
        unlock: "Unlocks Kugane Castle"
    }
];
