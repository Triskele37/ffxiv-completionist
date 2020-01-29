import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_The_Forbidden_Land_Eureka = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eureka`;

    return {
        name: "The Forbidden Land, Eureka",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
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
