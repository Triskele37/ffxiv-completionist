import { CraftingLogColumnConfig } from "../../columnConfigs";

export const AlchemistLevels_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "1",
                "item": "Distilled Water",
                "mat-1": "Muddy Water",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (ALC, CUL, GSM, LTW), Levequest"
            },
            {
                "level": "1",
                "item": "Quicksilver",
                "mat-1": "2 Cinnabar",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (ALC, GSM), Levequest"
            },
            {
                "level": "2",
                "item": "Animal Glue",
                "mat-1": "Animal Skin",
                "mat-2": "2 Bone Chip",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (BSM, CRP, LTW), Levequest"
            },
            {
                "level": "3",
                "item": "Growth Formula Alpha",
                "mat-1": "Shriekshroom",
                "mat-2": "Quicksilver",
                "mat-3": "Rock Salt",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Buyable, Ingredient (ALC, CRP), Levequest"
            },
            {
                "level": "4",
                "item": "Enchanted Copper Ink",
                "mat-1": "2 Copper Sand",
                "mat-2": "Beastkin Blood",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard",
                "special": "Ingredient (ALC)"
            },
            {
                "level": "4",
                "item": "Maple Wand",
                "mat-1": "Maple Branch",
                "mat-2": "Growth Formula Alpha",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Ingredient (ALC), Levequest, Provisioning"
            },
            {
                "level": "5",
                "item": "Leather Grimoire",
                "mat-1": "Enchanted Copper Ink",
                "mat-2": "Leather",
                "mat-3": "Maple Log",
                "mat-4": "Hempen Yarn",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Ingredient (ALC), Levequest, Provisioning"
            },
            {
                "level": "5",
                "item": "Antidote",
                "mat-1": "Grass Viper",
                "mat-2": "Rock Salt",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Water Shard, Lightning Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
        ]
    };
};
