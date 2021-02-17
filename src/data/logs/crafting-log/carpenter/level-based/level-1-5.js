import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Carpenter_Level_Based_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Maple Lumber",
        mat1: "3 Maple Log",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard"
    },
    {
        level: "1",
        name: "Maple Clogs",
        mat1: "Maple Lumber",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "2",
        name: "Maple Shortbow",
        mat1: "Maple Lumber",
        mat2: "Hempen Yarn",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "3",
        name: "Bone Harpoon",
        mat1: "Maple Lumber",
        mat2: "Bone Chip",
        mat3: "Animal Glue",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "4",
        name: "Amateur's Grinding Wheel",
        mat1: "Maple Lumber",
        mat2: "Bronze Ingot",
        mat3: "Ragstone",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "4",
        name: "Maple Pattens",
        mat1: "Maple Lumber",
        mat2: "Undyed Hempen Cloth",
        mat3: "Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "5",
        name: "Amateur's Spinning Wheel",
        mat1: "2 Maple Lumber",
        mat2: "2 Bronze Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "5",
        name: "Square Maple Shield",
        mat1: "Maple Lumber",
        mat2: "2 Bronze Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
];
