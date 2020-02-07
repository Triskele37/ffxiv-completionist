import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "The Forbidden Land, Eureka";
    return data;
};

const tasks = [
    {
        level: "70",
        name: "And We Shall Call It Eureka",
        npc: "Galiena",
        unlock: "Eureka"
    }, {
        level: "70",
        name: "And We Shall Call It Pyros",
        npc: "Rodney",
        unlock: "Eureka Pyros"
    }, {
        level: "70",
        name: "And We Shall Call It Pagos",
        npc: "Rodney",
        unlock: "Eureka Pagos"
    }, {
        level: "70",
        name: "And We Shall Call It Hydatos",
        npc: "Rodney",
        unlock: "Eureka Hydatos"
    }
];
