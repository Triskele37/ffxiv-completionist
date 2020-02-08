import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Grand_Company_Order_of_the_Twin_Adder = function(parent) {
    return new DataGroup("Order of the Twin Adder", parent).initializeTasks(tasks);
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
