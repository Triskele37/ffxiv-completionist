import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Housing_Housing_1 = function(parent) {
    return new DataGroup("Housing (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 78,
        name: "Baker's Stall",
        mat1: "Walnut Dining Table",
        mat2: "Glade Pendant Lamp",
        mat3: "Dwarven Cotton",
        mat4: "Upland Wheat Flour",
        mat5: "Highland Spring Water",
        mat6: "Ala Mhigan Salt Crystal",
        catalysts: "28 Fire Crystal, 28 Water Crystal"
    },
    {
        level: 78,
        name: "Fruiterer's Stall",
        mat1: "Walnut Dining Table",
        mat2: "Glade Pendant Lamp",
        mat3: "Dwarven Cotton",
        mat4: "Royal Grapes",
        mat5: "Pixie Apple",
        mat6: "Prickly Pineapple",
        catalysts: "28 Fire Crystal, 28 Water Crystal"
    },
    {
        level: 78,
        name: "Greengrocer's Stall",
        mat1: "Walnut Dining Table",
        mat2: "Glade Pendant Lamp",
        mat3: "Dwarven Cotton",
        mat4: "Blood Tomato",
        mat5: "Russet Popoto",
        mat6: "Sun Cabbage",
        catalysts: "28 Fire Crystal, 28 Water Crystal"
    },
    {
        level: 78,
        name: "Butcher's Stall",
        mat1: "Walnut Dining Table",
        mat2: "Glade Pendant Lamp",
        mat3: "Dwarven Cotton",
        mat4: "Ovim Meat",
        mat5: "Rail Tenderloin",
        mat6: "Dzo Chuck",
        catalysts: "28 Fire Crystal, 28 Water Crystal"
    },
];
