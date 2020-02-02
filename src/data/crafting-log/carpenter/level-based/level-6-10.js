import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Level_Based_6_10 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "Bronze Spear",
        mat1: "Maple Lumber",
        mat2: "Fish Oil",
        mat3: "Bronze Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "6",
        name: "Maple Cane",
        mat1: "Maple Lumber",
        mat2: "Growth Formula Alpha",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "7",
        name: "Maple Longbow",
        mat1: "Maple Lumber",
        mat2: "Maple Branch",
        mat3: "Hempen Yarn",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Ingredient (CRP), Levequest, Provisioning"
    },
    {
        level: "8",
        name: "Maple Crook",
        mat1: "Maple Lumber",
        mat2: "Beastkin Blood",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "8",
        name: "Maple Fishing Rod",
        mat1: "Maple Lumber",
        mat2: "Maple Branch",
        mat3: "Bronze Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "9",
        name: "Plumed Maple Shortbow",
        mat1: "Maple Shortbow",
        mat2: "Maple Branch",
        mat3: "Cock Feather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable"
    },
    {
        level: "9",
        name: "Round Shield",
        mat1: "Maple Lumber",
        mat2: "2 Bronze Rivets",
        mat3: "Bronze Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "10",
        name: "Ash Lumber",
        mat1: "3 Ash Log",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard",
        special: "Buyable, Ingredient (ALC, ARM, GSM, BSM, CRP, LTW, CUL, FCC), Levequest, Provisioning"
    },
    {
        level: "10",
        name: "Ash Macuahuitl",
        mat1: "Ash Lumber",
        mat2: "Obsidian",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "10",
        name: "Ramhorn Harpoon",
        mat1: "Ash Lumber",
        mat2: "Ram Horn",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Ice Shard",
        special: "Buyable, Provisioning"
    },
];
