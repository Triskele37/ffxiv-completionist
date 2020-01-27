import { CraftingLogColumnConfig } from "../../columnConfigs";

export const CarpenterLevels_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "1",
                "item": "Maple Lumber",
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
                "item": "Maple Clogs",
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
                "item": "Maple Shortbow",
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
                "item": "Bone Harpoon",
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
                "item": "Amateur's Grinding Wheel",
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
                "item": "Maple Pattens",
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
                "item": "Amateur's Spinning Wheel",
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
                "item": "Square Maple Shield",
                "mat-1": "Maple Lumber",
                "mat-2": "2 Bronze Rivets",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Levequest"
            },
        ]
    };
};
