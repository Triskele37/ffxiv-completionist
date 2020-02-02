import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Level_Based_6_10 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "6",
        name: "Eye Drops",
        "mat-1": "Yellow Ginseng",
        "mat-2": "Rock Salt",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard, Lightning Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "7",
        name: "Rubber",
        "mat-1": "Latex",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard",
        "special": "Buyable, Ingredient (LTW, WVR), Levequest"
    },
    {
        "level": "8",
        name: "Maple Picatrix",
        "mat-1": "Enchanted Copper Ink",
        "mat-2": "Maple Lumber",
        "mat-3": "Maple Log",
        "mat-4": "Hempen Yarn",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard, Lightning Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "8",
        name: "Whispering Maple Wand",
        "mat-1": "Maple Wand",
        "mat-2": "2 Growth Formula Alpha",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard, Lightning Shard",
        "special": "Buyable, Ingredient (ALC), Levequest"
    },
    {
        "level": "10",
        name: "Fish Oil",
        "mat-1": "2 Princess Trout",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard",
        "special": "Buyable, Ingredient (BSM, CRP)"
    },
    {
        "level": "10",
        name: "Fish Glue",
        "mat-1": "2 Coral Butterfly",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard",
        "special": "Ingredient (BSM, CRP, LTW)"
    },
    {
        "level": "10",
        name: "Beeswax",
        "mat-1": "3 Beehive Chip",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard",
        "special": "Buyable, Ingredient (ALC, ARM, BSM, CRP, CUL, WVR), Levequest"
    },
    {
        "level": "10",
        name: "Engraved Leather Grimoire",
        "mat-1": "Leather Grimoire",
        "mat-2": "2 Leather",
        "mat-3": "Ash Log",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Water Shard, Lightning Shard",
        "special": "Buyable, Provisioning"
    },
];
