import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Carpenter_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "1",
        name: "Maple Lumber",
        "mat-1": "3 Maple Log",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard",
        "special": "Buyable, Ingredient (ALC, ARM, BSM, CRP, LTW, WVR), Levequest"
    },
    {
        "level": "1",
        name: "Maple Clogs",
        "mat-1": "Maple Lumber",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Levequest, Provisioning"
    },
    {
        "level": "2",
        name: "Maple Shortbow",
        "mat-1": "Maple Lumber",
        "mat-2": "Hempen Yarn",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable, Ingredient (CRP), Levequest, Provisioning"
    },
    {
        "level": "3",
        name: "Bone Harpoon",
        "mat-1": "Maple Lumber",
        "mat-2": "Bone Chip",
        "mat-3": "Animal Glue",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "4",
        name: "Amateur's Grinding Wheel",
        "mat-1": "Maple Lumber",
        "mat-2": "Bronze Ingot",
        "mat-3": "Ragstone",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable"
    },
    {
        "level": "4",
        name: "Maple Pattens",
        "mat-1": "Maple Lumber",
        "mat-2": "Undyed Hempen Cloth",
        "mat-3": "Leather",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "5",
        name: "Amateur's Spinning Wheel",
        "mat-1": "2 Maple Lumber",
        "mat-2": "2 Bronze Rivets",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable, Provisioning"
    },
    {
        "level": "5",
        name: "Square Maple Shield",
        "mat-1": "Maple Lumber",
        "mat-2": "2 Bronze Rivets",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Ice Shard",
        "special": "Buyable, Levequest"
    },
];
