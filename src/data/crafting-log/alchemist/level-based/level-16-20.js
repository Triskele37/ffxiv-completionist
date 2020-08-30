import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Level_Based_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Hard Leather Grimoire",
        mat1: "Enchanted Iron Ink",
        mat2: "Hard Leather",
        mat3: "Elm Log",
        mat4: "Cotton Yarn",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Ingredient (ALC), Levequest, Provisioning"
    },
    {
        level: "16",
        name: "Ash Wand",
        mat1: "Ash Branch",
        mat2: "Growth Formula Beta",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Ingredient (ALC), Levequest, Provisioning"
    },
    {
        level: "16",
        name: "Potion of Intelligence",
        mat1: "Red Landtrap Leaf",
        mat2: "Beastkin Blood",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "17",
        name: "Potion of Dexterity",
        mat1: "Bat Fang",
        mat2: "Rock Salt",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "18",
        name: "Firebricks",
        mat1: "Potter's Clay",
        mat2: "2 Mudstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Ingredient (GSM, FCC)"
    },
    {
        level: "18",
        name: "Potion of Vitality",
        mat1: "Goobbue Fang",
        mat2: "Lavender",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "19",
        name: "Jellyfish Humours",
        mat1: "2 Jellyfish Umbrella",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable (ALC, BSM, CRP)"
    },
    {
        level: "19",
        name: "Potion of Strength",
        mat1: "White Scorpion",
        mat2: "Yellow Yarzon Leg",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "20",
        name: "Mortar",
        mat1: "Distilled Water",
        mat2: "Fine Sand",
        mat3: "2 Limestone",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Ingredient (ALC, BSM, CRP, GSM, WVR, FCC)"
    },
    {
        level: "20",
        name: "Engraved Hard Leather Grimoire",
        mat1: "Hard Leather Grimoire",
        mat2: "Hard Leather",
        mat3: "Yew Log",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "20",
        name: "Potion of Mind",
        mat1: "Jellyfish Umbrella",
        mat2: "Viscous Secretions",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
];
