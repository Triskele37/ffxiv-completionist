import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Level_Based_11_15 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "11",
        name: "Roof Tile",
        mat1: "2 Potter's Clay",
        mat2: "Straw",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Ingredient (ALC, CRP, GSM), Levequest"
    },
    {
        level: "11",
        name: "Budding Maple Wand",
        mat1: "Whispering Maple Wand",
        mat2: "Growth Formula Alpha",
        mat3: "Beastkin Blood",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "12",
        name: "Potion",
        mat1: "Distilled Water",
        mat2: "Tinolqa Mistletoe",
        mat3: "Chanterelle",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "13",
        name: "Ash Picatrix",
        mat1: "Enchanted Copper Ink",
        mat2: "Ash Lumber",
        mat3: "Ash Log",
        mat4: "Cotton Yarn",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "14",
        name: "Clove Oil",
        mat1: "2 Cloves",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (ARM, BSM, CRP, CUL)"
    },
    {
        level: "14",
        name: "Enchanted Iron Ink",
        mat1: "2 Iron Sand",
        mat2: "Viscous Secretions",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Ingredient (ALC)"
    },
    {
        level: "15",
        name: "Growth Formula Beta",
        mat1: "Jellyfish Umbrella",
        mat2: "Quicksilver",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (ALC, CRP), Levequest"
    },
];
