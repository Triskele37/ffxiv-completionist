import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War = function(parent) {
    return new DataGroup("Tales of the Dragonsong War", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "The Paths We Walk",
        npc: "House Fortemps Manservant",
        unlock: ""
    }, {
        level: "60",
        name: "The Oaths We Swear",
        npc: "Higiri",
        unlock: ""
    }, {
        level: "60",
        name: "The Legacies We Leave",
        npc: "Marcechamp",
        unlock: ""
    }, {
        level: "60",
        name: "The Triumphs We Share",
        npc: "Sultansworn Elite (NPC)",
        unlock: ""
    }, {
        level: "60",
        name: "The Burdens We Bear",
        npc: "Slowfix",
        unlock: ""
    }
];
