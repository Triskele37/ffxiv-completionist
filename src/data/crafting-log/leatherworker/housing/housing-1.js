import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Housing_Housing_1 = function(parent) {
    return new DataGroup("Housing (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 30,
        name: "Arbor Flooring",
        mat1: "2 Aldgoat Leather",
        mat2: "2 Chamomile",
        mat3: "4 Growth Formula Gama",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 3 Wind Shard"
    },
    {
        level: 36,
        name: "Oasis Banner",
        mat1: "2 Boar Leather",
        mat2: "2 Linen Canvas",
        mat3: "2 Walnut Lumber",
        mat4: "2 Steel Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Earth Shard, 4 Wind Shard"
    },
    {
        level: 39,
        name: "Retainer Counter",
        mat1: "2 Peiste Leather",
        mat2: "4 Oak Lumber",
        mat3: "2 Steel Ingot",
        mat4: "Ink & Quill",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Earth Shard, 4 Wind Shard"
    },
    {
        level: 40,
        name: "Glade Banner",
        mat1: "2 Peiste Leather",
        mat2: "2 Linen Canvas",
        mat3: "2 Oak Lumber",
        mat4: "2 Steel Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Earth Shard, 4 Wind Shard"
    },
    {
        level: 44,
        name: "Riviera Banner",
        mat1: "2 Raptor Leather",
        mat2: "2 Linen Canvas",
        mat3: "2 Mahogany Lumber",
        mat4: "2 Steel Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Earth Shard, 5 Wind Shard"
    },
    {
        level: 50,
        name: "Morbol Chandelier",
        mat1: "4 Hippogryph Leather",
        mat2: "2 Rosewood Lumber",
        mat3: "2 Morbol Vine",
        mat4: "Morbol Seedling",
        mat5: "Morbol Saliva",
        mat6: "4 Tallow Candle",
        catalysts: "6 Earth Shard, 6 Wind Shard"
    },
];
