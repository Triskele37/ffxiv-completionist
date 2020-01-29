import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Main_Scenario_Heavensward_Artoirel = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.artoirel`;

    return {
        name: "Artoirel",
    	storageKey,
        columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Over the Wall",
        npc: "Artoirel de Fortemps",
        unlock: "Coerthas Western Highlands"
    }, {
        level: "50",
        name: "Work in Progress",
        npc: "Redwald",
        unlock: ""
    }, {
        level: "50",
        name: "The First and Foremost",
        npc: "Rothe",
        unlock: ""
    }, {
        level: "50",
        name: "From on High",
        npc: "Thierremont",
        unlock: ""
    }, {
        level: "50",
        name: "Reconnaissance Lost",
        npc: "Redwald",
        unlock: ""
    }, {
        level: "50",
        name: "At the End of Our Hope",
        npc: "Artoirel de Fortemps",
        unlock: ""
    }, {
        level: "50",
        name: "Knights Be Not Proud",
        npc: "Artoirel de Fortemps",
        unlock: ""
    }
];
