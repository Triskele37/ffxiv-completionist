import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Weaver_Ishgard_Restoration_Restoration_1 = function(parent) {
    return new DataGroup("Restoration (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 20,
        name: "Skybuilders' Rope",
        mat1: "6 Skybuilders' Hemp",
        mat2: "1 Straw",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Lighning Shard, 2 Wind Shard"
    },
    {
        level: 40,
        name: "Skybuilders' Cloth",
        mat1: "4 Skybuilders' Flax",
        mat2: "4 Skybuilders' Spring Water",
        mat3: "2 Fleece",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Lightning Shard, 2 Wind Shard"
    },
    {
        level: 60,
        name: "Skybuilders' Broom",
        mat1: "6 Skybuilders' Straw",
        mat2: "6 Skybuilders' Camphorwood Log",
        mat3: "2 Ramie Thread",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Lightning Crystal, 2 Wind Crystal"
    },
    {
        level: 70,
        name: "Skybuilders' Gloves",
        mat1: "6 Skybuilders' Cocoon",
        mat2: "6 Skybuilders' Ruby Sea Water",
        mat3: "6 Skybuilders' Vine",
        mat4: "1 Tiger Leather",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Lightning Crystal, 2 Wind Crystal"
    },
    {
        level: 80,
        name: "Skybuilders' Waterproof Sheet",
        mat1: "8 Skybuilders' Cotton Boll",
        mat2: "8 Skybuilders' Highland Spring Water",
        mat3: "8 Skybuilders' Resin",
        mat4: "1 Atrociraptor Leather",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Lightning Crystal, 2 Wind Crystal"
    },
];
