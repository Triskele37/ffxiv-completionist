import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Ishgard_Restoration_Restoration_2 = function(parent) {
    return new DataGroup("Restoration (2)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Grade 2 Skybuilders' Plywood",
        mat1: "5 Approved Grade 2 Skybuilders' Switch",
        mat2: "Yew Log",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard",
        special: "Ishgard, Collectable"
    }, {
        level: "40",
        name: "Grade 2 Skybuilders' Crate",
        mat1: "5 Approved Grade 2 Skybuilders' Maple Log",
        mat2: "5 Approved Grade 2 Skybuilders' Rock Salt",
        mat3: "Mythril Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard",
        special: "Ishgard, Collectable"
    }, {
        level: "60",
        name: "Grade 2 Skybuilders' Grindstone",
        mat1: "5 Approved Grade 2 Skybuilders' Teak Log",
        mat2: "5 Approved Grade 2 Skybuilders' Mythril Sand",
        mat3: "5 Approved Grade 2 Skybuilders' Mica",
        mat4: "Titanium Nugget",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    }, {
        level: "70",
        name: "Grade 2 Skybuilders' Stepladder",
        mat1: "5 Approved Grade 2 Skybuilders' Oak Log",
        mat2: "5 Approved Grade 2 Skybuilders' Barbgrass",
        mat3: "5 Approved Grade 2 Skybuilders' Alumen",
        mat4: "Oroshigane Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    }, {
        level: "80",
        name: "Grade 2 Skybuilders' Bed",
        mat1: "10 Approved Grade 2 Skybuilders' Walnut Log",
        mat2: "10 Approved Grade 2 Skybuilders' Wheat",
        mat3: "10 Approved Grade 2 Skybuilders' Cotton Boll",
        mat4: "Pixie Cotton",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal",
        special: "Ishgard, Collectable"
    }, {
        level: "80★★★",
        name: "Grade 2 Artisanal Skybuilders' Wardrobe",
        mat1: "5 Approved Grade 2 Skybuilders' Umbral Galewood Log",
        mat2: "10 Grade 2 Artisanal Skybuilders' Log",
        mat3: "10 Approved Grade 2 Artisanal Skybuilders' Wheat",
        mat4: "10 Approved Grade 2 Artisanal Skybuildres' Hardened Sap",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Cluster, 2 Ice Cluster",
        special: "Ishgard, Collectable, Expert Craft"
    },
];
