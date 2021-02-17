import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Shared_Custom_Deliveries_Kai_Shirr = function(parent) {
    return new DataGroup("Kai-Shirr", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Flyer Printing Set",
        mat1: "1 Flyer Printing Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "70★",
        name: "Kholusian Cuisine Set",
        mat1: "1 Kholusian Cuisine Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "71",
        name: "Honeybee Trappings",
        mat1: "1 Honeybee Trapping Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "72",
        name: "Airship Fittings",
        mat1: "1 Airship Fitting Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "73",
        name: "Beehive Souvenir",
        mat1: "1 Beehive Souvenir Materials",
        mat2: "X",
        catalysts: "Variable"
    },
];
