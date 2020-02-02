import { DataGroup } from "../../DataGroup";

export const Crafting_Log_Blacksmith_Others = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50★",
        name: "Wolf Winglet",
        mat1: "Darksteel Nugget",
        mat2: "Cobalt Ingot",
        mat3: "Mahogany Lumber",
        mat4: "Horn Glue",
        mat5: "Sunrise Tellin",
        mat6: "X",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    }, {
        level: "50★",
        name: "Wolf Labrys",
        mat1: "Darksteel Nugget",
        mat2: "Cobalt Ingot",
        mat3: "Rosewood Lumber",
        mat4: "2 Silver Ingot",
        mat5: "Raptor Leather",
        mat6: "X",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    }, {
        level: "50★",
        name: "Wolf Zweihander",
        mat1: "Darksteel Nugget",
        mat2: "2 Cobalt Ingot",
        mat3: "Electrum Ingot",
        mat4: "Rosewood Lumber",
        mat5: "Raptor Leather",
        mat6: "X",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    }, {
        level: "50★",
        name: "Wolf Claws",
        mat1: "Darksteel Nugget",
        mat2: "Cobalt Plate",
        mat3: "Mahogany Lumber",
        mat4: "Horn Glue",
        mat5: "Brass Ingot",
        mat6: "X",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    }, {
        level: "50★",
        name: "Wolf Pugiones",
        mat1: "2 Darksteel Nugget",
        mat2: "2 Rosewood Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    }, {
        level: "50★",
        name: "Wolf Musketoon",
        mat1: "Darksteel Nugget",
        mat2: "2 Cobalt Ingot",
        mat3: "Electrum Ingot",
        mat4: "Rosewood Lumber",
        mat5: "Wyvern Obsidian",
        mat6: "Black Firesand",
        catalysts: "3 Fire Crystal, 2 Earth Crystal",
        special: "X"
    },
];
