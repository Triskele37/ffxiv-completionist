import { DataGroup } from "../../../DataGroup";

export const Quests_Main_Scenario_Stormblood_Meffrid = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "A Familiar Face Forgotten",
        npc: "Meffrid",
        unlock: "The Peaks"
    }, {
        level: "60",
        name: "The Prodigal Daughter",
        npc: "Meffrid",
        unlock: ""
    }, {
        level: "60",
        name: "Hard Country",
        npc: "Griseldis",
        unlock: ""
    }, {
        level: "60",
        name: "Death by a Thousand Rocks",
        npc: "Angry Coeurl",
        unlock: ""
    }, {
        level: "60",
        name: "A Life More Ordinary",
        npc: "Meffrid",
        unlock: ""
    }, {
        level: "60",
        name: "The Color of Angry Qiqirn",
        npc: "Meffrid",
        unlock: ""
    }, {
        level: "60",
        name: "The Black Wolf's Pups",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "60",
        name: "Homeward Bound",
        npc: "Meffrid",
        unlock: ""
    }
];
