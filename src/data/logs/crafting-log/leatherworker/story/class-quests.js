import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Leatherworker_Story_Class_Quests = function(parent) {
    return new DataGroup("Class Quests", parent).initializeTasks(tasks);
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
        catalysts: "2 Earth Crystal, Wind Crystal"
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
        catalysts: "2 Earth Crystal, Wind Crystal"
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
        catalysts: "2 Earth Crystal, Wind Crystal"
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
        catalysts: "2 Earth Crystal, Wind Crystal"
    },
];
