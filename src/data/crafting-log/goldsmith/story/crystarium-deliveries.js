import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Story_Crystarium_Deliveries = function(parent) {
    return new DataGroup("Crystarium Deliveries", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Metal Gauntlets",
        mat1: "2 Molybdenum Ingot",
        mat2: "2 Gazelle Leather",
        mat3: "Ruby Cotton Yarn",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    }, {
        level: "73",
        name: "Metal Worm Jar",
        mat1: "2 Deepgold Ingot",
        mat2: "2 Stonegold Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    }, {
        level: "75",
        name: "Metal Trident",
        mat1: "2 Bluespirit Tile",
        mat2: "2 White Ash Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    }, {
        level: "75",
        name: "Intricate Censer",
        mat1: "Intricate Censer Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    }, {
        level: "78",
        name: "Nullifying Neckpiece",
        mat1: "2 Dwarven Mythril Nugget",
        mat2: "Petalite",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    }, {
        level: "80",
        name: "Enchanting Ring",
        mat1: "Enchanting Ring Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, 2 Fire Crystal"
    },
];
