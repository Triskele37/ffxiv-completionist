import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Shared_Custom_Deliveries_Ehll_Tou = function(parent) {
    return new DataGroup("Ehll Tou", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "71",
        name: "Custom Gathering Tool Components",
        mat1: "Printing Component Materials",
        mat2: "X",
        catalysts: "Variable"
    },
    {
        level: "72",
        name: "Custom Weaving Components",
        mat1: "Weaving Tool Component Materials",
        mat2: "X",
        catalysts: "Variable"
    },
    {
        level: "73",
        name: "Custom Crafting Tool Components",
        mat1: "Crafting Tool Component Materials",
        mat2: "X",
        catalysts: "Variable"
    },
    {
        level: "74",
        name: "Handpicked Culinary Essentials",
        mat1: "Handpicked Ingrediant Materials",
        mat2: "X",
        catalysts: "Variable"
    },
    {
        level: "75",
        name: "Printing Essentials",
        mat1: "Printing Component Materials",
        mat2: "X",
        catalysts: "Variable"
    },
];
