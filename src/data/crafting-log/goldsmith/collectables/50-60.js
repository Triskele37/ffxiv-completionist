import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Mythrite Goggles",
        mat1: "2 Mythrite Nugget",
        mat2: "Crystal Glass",
        mat3: "Archaeornis Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Fire Crystal"
    },
    {
        level: "52",
        name: "Rarefied Mythrite Bangle",
        mat1: "Mythrite Nugget",
        mat2: "2 Tiger's Eye",
        mat3: "Jadeite",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Wind Crystal, 3 Fire Crystal"
    },
    {
        level: "54",
        name: "Rarefied Mythrite Needle",
        mat1: "2 Mythrite Nugget",
        mat2: "Cedar Lumber",
        mat3: "Basilisk Whetstone",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Cyrstal, 3 Fire Crystal"
    },
    {
        level: "56",
        name: "Rarefied Hardsilver Monocle",
        mat1: "2 Hardsilver Nugget",
        mat2: "Crystal Glass",
        mat3: "Larimar",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 4 Fire Crystal"
    },
    {
        level: "58",
        name: "Rarefied Hardsilver Pole",
        mat1: "2 Hardsilver Ingot",
        mat2: "Dragon Leather",
        mat3: "Tiger's Eye",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 5 Fire Crystal"
    },
    {
        level: "60",
        name: "Rarefied Aurum Regis Earrings",
        mat1: "2 Aurum Regis Nugget",
        mat2: "Hardsilver Ingot",
        mat3: "2 Gloaming Coral",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Wind Crystal, 5 Fire Crystal"
    },
];
