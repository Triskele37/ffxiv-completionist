import { CraftingLogColumnConfig } from "../../columnConfigs";

export const ArmorerLevels_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "1",
                "item": "Bronze Ingot",
                "mat-1": "2 Copper Ore",
                "mat-2": "Tin Ore",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard",
                "special": "Buyable, Ingredient (ARM, BSM, CRP, GSM, LTW, WVR), Levequest"
            },
            {
                "level": "2",
                "item": "Bronze Rings",
                "mat-1": "Bronze Ingot",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard",
                "special": "Ingredient (ARM)"
            },
            {
                "level": "2",
                "item": "Bronze Rivets",
                "mat-1": "Bronze Ingot",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard",
                "special": "Buyable, Ingredient (ALC, ARM, BSM, CRP, LTW, WVR), Levequest"
            },
            {
                "level": "3",
                "item": "Bronze Plate",
                "mat-1": "2 Bronze Ingot",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard",
                "special": "Buyable, Ingredient (ARM, BSM), Levequest"
            },
            {
                "level": "3",
                "item": "Bronze Alembic",
                "mat-1": "Bronze Plate",
                "mat-2": "Bronze Rivets",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "4",
                "item": "Bronze Skillet",
                "mat-1": "Bronze Plate",
                "mat-2": "Maple Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "5",
                "item": "Bronze Hoplon",
                "mat-1": "2 Bronze Plate",
                "mat-2": "Maple Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
        ]
    };
};
