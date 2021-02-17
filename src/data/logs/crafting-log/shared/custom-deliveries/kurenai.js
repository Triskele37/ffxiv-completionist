import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Shared_Custom_Deliveries_Kurenai = function(parent) {
    return new DataGroup("Kurenai", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "62",
        name: "Gyr Abanian Remedy Components",
        mat1: "Raw Medicinal Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "62",
        name: "Gyr Abanian Remedies",
        mat1: "2 Gyr Abanian Remedy Components",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "62",
        name: "Harpoon Materials",
        mat1: "Raw Harpoon Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "62",
        name: "Anti-shark Harpoon",
        mat1: "2 Harpoon Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "63",
        name: "Cold-weather Gear Components",
        mat1: "Raw Cold-weather Gear Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "63",
        name: "Coerthan Cold-weather Gear",
        mat1: "3 Cold-weather Gear Components",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "63",
        name: "Sui-no-Sato Special Components",
        mat1: "Raw Sui-no-Sato Special Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "63",
        name: "Sui-no-Sato Special",
        mat1: "3 Sui-no-Sato Special Components",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "64",
        name: "Cloud Pearl Components",
        mat1: "Raw Cloud Pearl Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "64",
        name: "Cloud Pearl",
        mat1: "4 Cloud Pearl Materials",
        mat2: "X",
        catalysts: "Variable"
    },
];
