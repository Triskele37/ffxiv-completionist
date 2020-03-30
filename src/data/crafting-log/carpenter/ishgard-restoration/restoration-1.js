import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Ishgard_Restoration_Restoration_1 = function(parent) {
    return new DataGroup("Restoration (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 20,
        name: "Skybuilders' Plywood",
        mat1: "6 Skybuilders' Yew Log",
        mat2: "Yew Log",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 40,
        name: "Skybuilders' Wain",
        mat1: "4 Skybuilders' Ash Log",
        mat2: "4 Skybuilders' Rock Salt",
        mat3: "Mythril Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 60,
        name: "Skybuilders' Barrel",
        mat1: "6 Skybuilders' Camphorwood Log",
        mat2: "6 Skybuilders' Straw",
        mat3: "Titanium Nugget",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 70,
        name: "Skybuilders' Pedestal",
        mat1: "6 Skybuilders' Urunday Log",
        mat2: "6 Skybuilders' Molybdenum Ore",
        mat3: "6 Skybuilders' Horsetail",
        mat4: "Oroshigane Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 80,
        name: "Skybuilders' Bed",
        mat1: "8 Skybuilders' White Ash Log",
        mat2: "8 Skybuilders' Wheat",
        mat3: "8 Skybuilders' Cotton Boll",
        mat4: "Pixie Cotton",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    },
];
