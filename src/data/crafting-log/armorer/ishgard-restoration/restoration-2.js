import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Ishgard_Restoration_Restoration_2 = function(parent) {
    return new DataGroup("Restoration (2)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Grade 2 Skybuilders' Steel Plate",
        mat1: "5 Approved Grade 2 Skybuilders' Ore",
        mat2: "Iron Ore",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "40",
        name: "Grade 2 Skybuilders' Rivets",
        mat1: "5 Approved Grade 2 Skybuilders' Zinc Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Iron Sand",
        mat3: "Cobalt Ore",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "60",
        name: "Grade 2 Skybuilders' Still",
        mat1: "5 Approved Grade 2 Skybuilders' Cobalt Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Asphaltum",
        mat3: "5 Approved Grade 2 Skybuilders' Mica",
        mat4: "Dark Chestnut Lumber",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "70",
        name: "Grade 2 Skybuilders' Mesail",
        mat1: "5 Approved Grade 2 Skybuilders' Mythrite Ore",
        mat2: "5 Approved Grade 2 Skybuilders' Rock",
        mat3: "5 Approved Grade 2 Skybuilders' Silex",
        mat4: "Tiger Leather",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80",
        name: "Grade 2 Skybuilders' Lamppost",
        mat1: "10 Approved Grade 2 Skybuilders' Darksteel Ore",
        mat2: "10 Approved Grade 2 Skybuilders' Basalt",
        mat3: "10 Approved Grade 2 Skybuilders' Lutinite",
        mat4: "Manasilver Nugget",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80★★★",
        name: "Grade 2 Artisanal Skybuilders' Fireplace",
        mat1: "5 Approved Grade 2 Skybuilders' Umbral Flarestone",
        mat2: "10 Approved Grade 2 Artisanal Skybuilders' Cloudstone",
        mat3: "10 Approved Grade 2 Artisanal Skybuilders' Jade",
        mat4: "10 Approved Grade 2 Artisanal Skybuilders' Log",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Cluster, 2 Ice Cluster"
    },
];
