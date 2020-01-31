import { DataGroup } from "../../../DataGroup";

export const Crafting_Logs_Alchemist_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "1",
        name: "Distilled Water",
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
        name: "Quicksilver",
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
        name: "Animal Glue",
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
        name: "Growth Formula Alpha",
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
        name: "Enchanted Copper Ink",
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
        name: "Maple Wand",
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
        name: "Leather Grimoire",
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
        name: "Antidote",
        "mat-1": "Grass Viper",
        "mat-2": "Rock Salt",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard, Lightning Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
];
