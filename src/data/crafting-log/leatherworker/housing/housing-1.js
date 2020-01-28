import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Leatherworker_Housing_1 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-1`;

    return {
        name: "Housing 1",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 30,
                "item": "Arbor Flooring",
                "mat-1": "2 Aldgoat Leather",
                "mat-2": "2 Chamomile",
                "mat-3": "4 Growth Formula Gama",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "3 Earth Shard, 3 Wind Shard",
                "special": "Housing (Flooring), Buyable"
            },
            {
                "level": 36,
                "item": "Oasis Banner",
                "mat-1": "2 Boar Leather",
                "mat-2": "2 Linen Canvas",
                "mat-3": "2 Walnut Lumber",
                "mat-4": "2 Steel Ingot",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Shard, 4 Wind Shard",
                "special": "Housing (Placard)"
            },
            {
                "level": 39,
                "item": "Retainer Counter",
                "mat-1": "2 Peiste Leather",
                "mat-2": "4 Oak Lumber",
                "mat-3": "2 Steel Ingot",
                "mat-4": "Ink & Quill",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "5 Earth Shard, 4 Wind Shard",
                "special": "Housing (Outdoor Furnishing)"
            },
            {
                "level": 40,
                "item": "Glade Banner",
                "mat-1": "2 Peiste Leather",
                "mat-2": "2 Linen Canvas",
                "mat-3": "2 Oak Lumber",
                "mat-4": "2 Steel Ingot",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "5 Earth Shard, 4 Wind Shard",
                "special": "Housing (Placard)"
            },
            {
                "level": 44,
                "item": "Riviera Banner",
                "mat-1": "2 Raptor Leather",
                "mat-2": "2 Linen Canvas",
                "mat-3": "2 Mahogany Lumber",
                "mat-4": "2 Steel Ingot",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "5 Earth Shard, 5 Wind Shard",
                "special": "Housing (Placard)"
            },
            {
                "level": 50,
                "item": "Morbol Chandelier",
                "mat-1": "4 Hippogryph Leather",
                "mat-2": "2 Rosewood Lumber",
                "mat-3": "2 Morbol Vine",
                "mat-4": "Morbol Seedling",
                "mat-5": "Morbol Saliva",
                "mat-6": "4 Tallow Candle",
                "catalysts": "6 Earth Shard, 6 Wind Shard",
                "special": "Housing (Ceiling Light)"
            }
        ]
    };
};
