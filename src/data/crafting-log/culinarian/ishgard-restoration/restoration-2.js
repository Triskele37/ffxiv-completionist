import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Ishgard_Restoration_Restoration_2 = function(parent) {
    return new DataGroup("Restoration (2)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Grade 2 Skybuilders' Hemp Milk",
        mat1: "5 Approved Grade 2 Skybuilders' Hemp",
        mat2: "Maple Syrup",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "40",
        name: "Grade 2 Skybuilders' Bread",
        mat1: "5 Approved Grade 2 Skybuilders' Maple Sap",
        mat2: "5 Approved Grade 2 Skybuilders' Rock Salt",
        mat3: "Sunset Wheat Flour",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Ice Shard"
    }, {
        level: "60",
        name: "Grade 2 Skybuilders' Tea",
        mat1: "5 Approved Grade 2 Skybuilders' Tea Leaves",
        mat2: "5 Approved Grade 2 Skybuilders' Mistletoe",
        mat3: "5 Approved Grade 2 Skybuilders' Beehive",
        mat4: "Sun Lemon",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "70",
        name: "Grade 2 Skybuilders' All-purpose Infusion",
        mat1: "5 Approved Grade 2 Skybuilders' Toad",
        mat2: "5 Approved Grade 2 Skybuilders' Spring Water",
        mat3: "5 Approved Grade 2 Skybuilders' Vine",
        mat4: "Holy Basil",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80",
        name: "Grade 2 Skybuilders' Stew",
        mat1: "10 Approved Grade 2 Skybuilders' Wheat",
        mat2: "10 Approved Grade 2 Skybuilders' Cloud Drop Water",
        mat3: "10 Approved Grade 2 Skybuilders' Crystal-clear Rock Salt",
        mat4: "Rail Tenderloin",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Ice Crystal"
    }, {
        level: "80★★★",
        name: "Grade 2 Artisanal Skybuilders' Quiche",
        mat1: "5 Approved Grade 2 Skybuilders' Umbral Earthcarp",
        mat2: "10 Approved Grade 2 Aritisanal Skybuilders' Spring Water",
        mat3: "10 Approved Grade 2 Artisanal Skybuilders' Rock Salt",
        mat4: "10 Approved Grade 2 Artisanal Skybuilders' Wheat",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Cluster, 2 Ice Cluster"
    },
];
