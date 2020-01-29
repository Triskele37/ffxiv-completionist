import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Doman_Reconstruction = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.doman-reconstruction`;

    return {
        name: "Doman Reconstruction",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "70",
        name: "Precious Reclamation",
        npc: "Kozakura",
        unlock: ""
    }, {
        level: "70",
        name: "A Thousand and One Farewells",
        npc: "Hozan",
        unlock: ""
    }, {
        level: "70",
        name: "It Takes an Enclave",
        npc: "Kozakura",
        unlock: "Doman Enclave Reconstruction"
    }, {
        level: "70",
        name: "Doman Reconstruction: Mitsuba",
        npc: "Kozakura",
        unlock: ""
    }, {
        level: "70",
        name: "Doman Reconstruction: Kozakura",
        npc: "Kozakura",
        unlock: ""
    }, {
        level: "70",
        name: "Doman Reconstruction: Tsuranuki",
        npc: "Kozakura",
        unlock: ""
    }, {
        level: "70",
        name: "Doman Reconstruction: Araragi",
        npc: "Kozakura",
        unlock: ""
    }, {
        level: "70",
        name: "Lighting the Way",
        npc: "Kozakura",
        unlock: ""
    }
];
