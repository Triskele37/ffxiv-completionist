import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Grand_Company_Order_Of_The_Twin_Adder = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.twin-adder`;

    return {
        name: "Order of the Twin Adder",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "30",
        name: "A Pup No Longer (Twin Adder)",
        npc: "Vorsaile Heuloix",
        unlock: ""
    }, {
        level: "44",
        name: "Shadows Uncast (Twin Adder)",
        npc: "Vorsaile Heuloix",
        unlock: ""
    }, {
        level: "47",
        name: "Gilding the Bilious (Twin Adder)",
        npc: "Vorsaile Heuloix",
        unlock: ""
    }, {
        level: "47",
        name: "Squadron and Commander (Twin Adder)",
        npc: "Serpent Personnel Officer",
        unlock: "Unlocks Adventurer Squadrons"
    }, {
        level: "50",
        name: "Like Civilized Men and Women (Twin Adder)",
        npc: "Scarlet",
        unlock: "Unlocks Frontline"
    }, {
        level: "50",
        name: "Let the Hunt Begin (Twin Adder)",
        npc: "Scarlet",
        unlock: "Unlocks The Hunt"
    }
];
