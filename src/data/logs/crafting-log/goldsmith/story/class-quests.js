import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Goldsmith_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "63",
        name: "Sample Silver Ring",
        mat1: "Ring Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Fire Crystal"
    }, {
        level: "65",
        name: "Precision Spectacles",
        mat1: "Eyewear Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Fire Crystal"
    }, {
        level: "68",
        name: "Sample Chronometer",
        mat1: "Chronometer Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Fire Crystal"
    }, {
        level: "70",
        name: "Tribute Orchestrion",
        mat1: "Orchestration Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Fire Crystal"
    },
];
