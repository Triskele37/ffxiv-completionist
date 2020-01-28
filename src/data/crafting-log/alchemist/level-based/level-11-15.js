import { CraftingLogColumnConfig } from "../../columnConfigs";

export const AlchemistLevels_11_15 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-11-15`;

    return {
        name: "Levels 11-15",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "11",
                "item": "Roof Tile",
                "mat-1": "2 Potter's Clay",
                "mat-2": "Straw",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Ingredient (ALC, CRP, GSM), Levequest"
            },
            {
                "level": "11",
                "item": "Budding Maple Wand",
                "mat-1": "Whispering Maple Wand",
                "mat-2": "Growth Formula Alpha",
                "mat-3": "Beastkin Blood",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "12",
                "item": "Potion",
                "mat-1": "Distilled Water",
                "mat-2": "Tinolqa Mistletoe",
                "mat-3": "Chanterelle",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "13",
                "item": "Ash Picatrix",
                "mat-1": "Enchanted Copper Ink",
                "mat-2": "Ash Lumber",
                "mat-3": "Ash Log",
                "mat-4": "Cotton Yarn",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "14",
                "item": "Clove Oil",
                "mat-1": "2 Cloves",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (ARM, BSM, CRP, CUL)"
            },
            {
                "level": "14",
                "item": "Enchanted Iron Ink",
                "mat-1": "2 Iron Sand",
                "mat-2": "Viscous Secretions",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Ingredient (ALC)"
            },
            {
                "level": "15",
                "item": "Growth Formula Beta",
                "mat-1": "Jellyfish Umbrella",
                "mat-2": "Quicksilver",
                "mat-3": "Rock Salt",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (ALC, CRP), Levequest"
            },
        ]
    };
};
