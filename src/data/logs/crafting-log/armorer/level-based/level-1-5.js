import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Armorer_Level_Based_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Bronze Ingot",
        mat1: "2 Copper Ore",
        mat2: "Tin Ore",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard"
    },
    {
        level: "2",
        name: "Bronze Rings",
        mat1: "Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard"
    },
    {
        level: "2",
        name: "Bronze Rivets",
        mat1: "Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard"
    },
    {
        level: "3",
        name: "Bronze Plate",
        mat1: "2 Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard"
    },
    {
        level: "3",
        name: "Bronze Alembic",
        mat1: "Bronze Plate",
        mat2: "Bronze Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard"
    },
    {
        level: "4",
        name: "Bronze Skillet",
        mat1: "Bronze Plate",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard"
    },
    {
        level: "5",
        name: "Bronze Hoplon",
        mat1: "2 Bronze Plate",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard"
    },
];
