import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Blacksmith_Collectables_61_70 = function(parent) {
    return new DataGroup("61-70", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "62",
        name: "Rarefied High Steel Guillotine",
        mat1: "2 High Steel Nugget",
        mat2: "Titanium Nugget",
        mat3: "Gagana Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Fire Crystal, 3 Earth Crystal"
    },
    {
        level: "64",
        name: "Rarefied High Steel Claw Hammer",
        mat1: "2 High Steel Ingot",
        mat2: "2 Larch Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 3 Earth Crystal"
    },
    {
        level: "66",
        name: "Rarefied Doman Iron Uchigatana",
        mat1: "2 Oroshigane Ingot",
        mat2: "Larch Lumber",
        mat3: "Kudzu Cloth",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Fire Crystal, 4 Earth Crystal"
    },
    {
        level: "68",
        name: "Rarefied Doman Steel Patas",
        mat1: "2 Tama-hagane Ingot",
        mat2: "Persimmon Lumber",
        mat3: "Oroshigane Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Fire Crystal, 5 Earth Crystal"
    },
    {
        level: "70",
        name: "Rarefied Molybdenum Pliers",
        mat1: "3 Molybdenum Ingot",
        mat2: "Tama-hagane Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Fire Crystal, 5 Earth Crystal"
    },
];
