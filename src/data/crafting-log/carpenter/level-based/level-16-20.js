import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Level_Based_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Elm Lumber",
        mat1: "3 Elm Log",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard"
    },
    {
        level: "16",
        name: "Elm Fishing Rod",
        mat1: "Elm Lumber",
        mat2: "Ash Branch",
        mat3: "Iron Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "17",
        name: "Iron Spear",
        mat1: "Elm Lumber",
        mat2: "Iron Ingot",
        mat3: "Clove Oil",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "18",
        name: "Elm Cane",
        mat1: "Elm Lumber",
        mat2: "Growth Formula Beta",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "19",
        name: "Elm Longbow",
        mat1: "Elm Lumber",
        mat2: "2 Ash Branch",
        mat3: "Cotton Yarn",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "19",
        name: "Elm Crook",
        mat1: "Elm Lumber",
        mat2: "Beastkin Blood",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "19",
        name: "Initiate's Spinning Wheel",
        mat1: "Elm Lumber",
        mat2: "2 Bronze Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "20",
        name: "Blank Grade 1 Orchestrion Roll",
        mat1: "Moko Grass",
        mat2: "Elm Log",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard"
    },
    {
        level: "20",
        name: "Iron Lance",
        mat1: "Elm Lumber",
        mat2: "2 Iron Ingot",
        mat3: "Hard Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "20",
        name: "Initiate's Fishing Rod",
        mat1: "Elm Lumber",
        mat2: "Yew Branch",
        mat3: "Iron Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
    {
        level: "20",
        name: "Ash Mask (Lapis Lazuli)",
        mat1: "Ash Lumber",
        mat2: "Lapis Lazulis",
        mat3: "Clove Oil",
        mat4: "Leather",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard"
    },
];
