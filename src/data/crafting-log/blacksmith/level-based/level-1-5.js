import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Blacksmith_Level_Based_1_5 = function(parent) {
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
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (BSM, CRP, GSM, LTW, ARM, WVR), Levequest"
    },
    {
        level: "1",
        name: "Bronze Hatchet",
        mat1: "Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "2",
        name: "Bronze Bastard Sword",
        mat1: "Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "Bone Chip",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Ingredient (BSM), Levequest, Provisioning"
    },
    {
        level: "2",
        name: "Amateur's File",
        mat1: "2 Bronze Ingot",
        mat2: "Leather",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "3",
        name: "Bronze Rivets",
        mat1: "Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard",
        special: "Buyable, Ingredient (ARM, BSM, LTW, CRP, WVR, ALC, FCC), Levequest"
    },
    {
        level: "3",
        name: "Bronze War Axe",
        mat1: "2 Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Ingredient (BSM), Levequest, Provisioning"
    },
    {
        level: "3",
        name: "Amateur's Pliers",
        mat1: "Bronze Ingot",
        mat2: "Bronze Rivets",
        mat3: "Fish Oil",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "4",
        name: "Bronze Saw",
        mat1: "Bronze Ingot",
        mat2: "Bronze Rivets",
        mat3: "Maple Lumber",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "4",
        name: "Amateur's Awl",
        mat1: "Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "Fish Oil",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "5",
        name: "Bronze Daggers",
        mat1: "2 Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "Bone Chip",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable"
    },
    {
        level: "5",
        name: "Amateur's Claw Hammer",
        mat1: "Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "Fish Oil",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "5",
        name: "Bronze Cross-pein Hammer",
        mat1: "Bronze Ingot",
        mat2: "Undyed Hempen Cloth",
        mat3: "Maple Lumber",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "5",
        name: "Bronze Doming Hammer",
        mat1: "Bronze Ingot",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Fire Shard, Earth Shard",
        special: "Buyable, Provisioning"
    },
];
