import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Carpenter_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Cedar Longbow",
        mat1: "2 Cedar Branch",
        mat2: "Cedar Lumber",
        mat3: "Mythril Ingot",
        mat4: "Rainbow Thread",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Wind Crystal, Ice Crystal"
    },
    {
        level: "52",
        name: "Rarefied Cedar Fishing Rod",
        mat1: "2 Cedar Lumber",
        mat2: "2 Mythrite Nugget",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Wind Crystal, 3 Ice Crystal"
    },
    {
        level: "54",
        name: "Raefied Holy Cedar Spinning Wheel",
        mat1: "3 Holy Cedar Lumber",
        mat2: "Mythrite Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 3 Ice Crystal"
    },
    {
        level: "56",
        name: "Rarefied Dark Chestnut Rod",
        mat1: "Dark Chestnut Lumber",
        mat2: "3 Growth Formula Epsilon",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 4 Ice Crystal"
    },
    {
        level: "58",
        name: "Rarefied Hallowed Chestnut Ring",
        mat1: "3 Hallowed Chestnut Lumber",
        mat2: "Varnish",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 5 Ice Crystal"
    },
    {
        level: "60",
        name: "Rarefied Birch Signum",
        mat1: "Birch Lumber",
        mat2: "2 Birch Branch",
        mat3: "Chimerical Felt",
        mat4: "Growth Formula Zeta",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Wind Crystal, 5 Ice Crystal"
    },
];
