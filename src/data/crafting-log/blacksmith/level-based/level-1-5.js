import { CraftingLogColumnConfig } from "../../columnConfigs";

export const BlacksmithLevels_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "1",
                name: "Bronze Ingot",
                "mat-1": "2 Copper Ore",
                "mat-2": "Tin Ore",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard",
                "special": "Buyable, Ingredient (BSM, CRP, GSM, LTW, ARM, WVR), Levequest"
            },
            {
                "level": "1",
                name: "Bronze Hatchet",
                "mat-1": "Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "2",
                name: "Bronze Bastard Sword",
                "mat-1": "Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "Bone Chip",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Ingredient (BSM), Levequest, Provisioning"
            },
            {
                "level": "2",
                name: "Amateur's File",
                "mat-1": "2 Bronze Ingot",
                "mat-2": "Leather",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "3",
                name: "Bronze Rivets",
                "mat-1": "Bronze Ingot",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard",
                "special": "Buyable, Ingredient (ARM, BSM, LTW, CRP, WVR, ALC, FCC), Levequest"
            },
            {
                "level": "3",
                name: "Bronze War Axe",
                "mat-1": "2 Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Ingredient (BSM), Levequest, Provisioning"
            },
            {
                "level": "3",
                name: "Amateur's Pliers",
                "mat-1": "Bronze Ingot",
                "mat-2": "Bronze Rivets",
                "mat-3": "Fish Oil",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "4",
                name: "Bronze Saw",
                "mat-1": "Bronze Ingot",
                "mat-2": "Bronze Rivets",
                "mat-3": "Maple Lumber",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "4",
                name: "Amateur's Awl",
                "mat-1": "Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "Fish Oil",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "5",
                name: "Bronze Daggers",
                "mat-1": "2 Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "Bone Chip",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable"
            },
            {
                "level": "5",
                name: "Amateur's Claw Hammer",
                "mat-1": "Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "Fish Oil",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "5",
                name: "Bronze Cross-pein Hammer",
                "mat-1": "Bronze Ingot",
                "mat-2": "Undyed Hempen Cloth",
                "mat-3": "Maple Lumber",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "5",
                name: "Bronze Doming Hammer",
                "mat-1": "Bronze Ingot",
                "mat-2": "Maple Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Fire Shard, Earth Shard",
                "special": "Buyable, Provisioning"
            },
        ]
    };
};
