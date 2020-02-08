import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Ul_Dahn_Chocobo_Square = function(parent) {
    return new DataGroup("Chocobo Square", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "So You Want to Be a Jockey",
        npc: "Race Chocobo Registrar",
        unlock: ""
    }, {
        level: "15",
        name: "Like Sire Like Fledgling",
        npc: "Chocobo Keep",
        unlock: ""
    }
];
