import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Shared_Custom_Deliveries_Adkiragh = function(parent) {
    return new DataGroup("Adkiragh", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "66",
        name: "Ishgardian Culinary Materials",
        mat1: "Raw Ishgardian Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "66",
        name: "Ishgardian Culinary Essentials",
        mat1: "2 Ishgardian Culinary Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "66",
        name: "Juice Fermenting Supplies",
        mat1: "Raw Fermenting Supplies",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "66",
        name: "Fermented Juice",
        mat1: "2 Juice Fermenting Supplies",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "67",
        name: "Signature Buuz Cookware Materials",
        mat1: "Raw Steppe Cookware Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "67",
        name: "Signature Buuz Cookware",
        mat1: "3 Signature Buuz Cookware Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "67",
        name: "Decorative Tavern Furnishing Materials",
        mat1: "Raw Tavern Furnishing Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "67",
        name: "Hard Place Decorative Furnishings",
        mat1: "3 Decorative Tavern Furnishing Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "68",
        name: "Arkhi Brewing Vat Materials",
        mat1: "Raw Brewing Vat Materials",
        mat2: "X",
        catalysts: "Variable"
    }, {
        level: "68",
        name: "Arkhi Brewing Set",
        mat1: "4 Arkhi Brewing Vat Materials",
        mat2: "X",
        catalysts: "Variable"
    },
];
