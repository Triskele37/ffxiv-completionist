import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Story_Crystarium_Deliveries = function(parent) {
    return new DataGroup("Crystarium Deliveries", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 70,
        name: "Canvas Repair Materials",
        mat1: "2 Zelkova Lumber",
        mat2: "Kudzu Cloth",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
    {
        level: 73,
        name: "Upholstery Repair Materials",
        mat1: "Miracle Apple Lumber",
        mat2: "Iridescent Silk",
        mat3: "Green Glider Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
    {
        level: 75,
        name: "Amaro Barding Repair Materials",
        mat1: "Atrociraptor Leather",
        mat2: "Pixie Cotton",
        mat3: "White Ash Lumber",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
    {
        level: 75,
        name: "Workshop Sign",
        mat1: "Workshop Sign Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
    {
        level: 78,
        name: "Lute Repair Materials",
        mat1: "Lignum Vitae Lumber",
        mat2: "Dwarven Cotton",
        mat3: "Sea Swallow Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
    {
        level: 80,
        name: "Lute Modification Component",
        mat1: "Lute Modification Component Materials",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, 2 Wind Crystal",
        special: ""
    },
];
