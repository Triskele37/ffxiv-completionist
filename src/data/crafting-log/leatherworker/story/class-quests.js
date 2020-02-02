import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Story_Class_Quests = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 63,
        name: "Large Dhalmel Cape",
        mat1: "Hengr Dhalmel Hide",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, Wind Crystal",
        special: "X"
    },
    {
        level: 65,
        name: "Grizzly Bear Gloves",
        mat1: "Velodyna Grizzly Bear Hide",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "x",
        mat6: "X",
        catalysts: "2 Earth Crystal, Wind Crystal",
        special: "X"
    },
    {
        level: 68,
        name: "Dashing Dhalmelskin Jacket",
        mat1: "Jacket Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, Wind Crystal",
        special: "X"
    },
    {
        level: 70,
        name: "Large Gagana Cape",
        mat1: "Large Gagana Skin",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, Wind Crystal",
        special: "X"
    },
];
