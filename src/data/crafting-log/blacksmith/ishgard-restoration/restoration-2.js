import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_2 = function(parent) {
    return new DataGroup("Restoration (2)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Grade 2 Skybuilders' Alloy",
        mat1: "5 Approved Grade 2 Skybuilders' Ore",
        mat2: "Iron Ore",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "40",
        name: "Grade 2 Skybuilders' Nails",
        mat1: "5 Approved Grade 2 Skybuilders' Zinc Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Iron Sand",
        mat3: "Cobalt Ore",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "60",
        name: "Grade 2 Skybuilders' Hammer",
        mat1: "5 Approved Grade 2 Skybuilders' Cobalt Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Mythril Sand",
        mat3: "5 Approved Grade 2 Skybuilders' Mica",
        mat4: "Dark Chestnut Lumber",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "70",
        name: "Grade 2 Skybuilders' Crosscut Saw",
        mat1: "5 Approved Grade 2 Skybuilders' Mythrite Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Rock",
        mat3: "5 Approved Grade 2 Skybuilders' Silex",
        mat4: "Pine Lumber",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80",
        name: "Grade 2 Skybuilders' Oven",
        mat1: "10 Approved Grade 2 Skybuilders' Darksteel Ore",
        mat2: "10 Approved Grade 2 Skybuilders' Basalt",
        mat3: "10 Approved Grade 2 Skybuilders' Walnut Log",
        mat4: "Bluespirit Tile",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80★★★",
        name: "Grade 2 Artisanal Skybuilders' Chandelier",
        mat1: "5 Approved Grade 2 Skybuilders' Umbral Levinshard",
        mat2: "10 Approved Grade 2 Artisanal Skybuilders' Cloudstone",
        mat3: "10 Approved Grade 2 Artisanal Skybuilders' Aurum Regis Sand",
        mat4: "10 Approved Grade 2 Artisanal Skybuilders' Hardened Sap",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Cluster, 2 Ice Cluster"
    },
];
