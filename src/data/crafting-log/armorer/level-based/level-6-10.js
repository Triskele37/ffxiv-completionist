import { CraftingLogColumnConfig } from "../../columnConfigs";

export const ArmorerLevels_6_10 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-6-10`;

    return {
        name: "Levels 6-10",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "6",
                "item": "Bronze Haubergeon",
                "mat-1": "3 Bronze Rings",
                "mat-2": "Undyed Hempen Cloth",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "7",
                "item": "Bronze Sollerets",
                "mat-1": "Bronze Plate",
                "mat-2": "Bronze Rings",
                "mat-3": "Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "8",
                "item": "Bronze Chain Coif",
                "mat-1": "Bronze Plate",
                "mat-2": "Bronze Rings",
                "mat-3": "Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "8",
                "item": "Bronze Sallet",
                "mat-1": "Bronze Ingot",
                "mat-2": "Bronze Plate",
                "mat-3": "Bronze Rivets",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "9",
                "item": "Amateur's Alembic",
                "mat-1": "Copper Ingot",
                "mat-2": "Bronze Plate",
                "mat-3": "Bronze Rivets",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Ingredient (ARM), Provisioning"
            },
            {
                "level": "9",
                "item": "Bronze Mitt Gauntlets",
                "mat-1": "Bronze Plate",
                "mat-2": "Bronze Rivets",
                "mat-3": "Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Ingredient (ARM), Provisioning"
            },
            {
                "level": "10",
                "item": "Bronze Scutum",
                "mat-1": "2 Bronze Plate",
                "mat-2": "3 Bronze Rivets",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Provisioning, Levequest"
            },
            {
                "level": "10",
                "item": "Bronze Barbut",
                "mat-1": "Copper Ingot",
                "mat-2": "Bronze Plate",
                "mat-3": "Bronze Rivets",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Ice Shard, Earth Shard",
                "special": "Buyable, Ingredient (ARM), Provisioning, Levequest"
            },
        ]
    };
};
