import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Distilled Water",
        mat1: "Muddy Water",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (ALC, CUL, GSM, LTW), Levequest"
    },
    {
        level: "1",
        name: "Quicksilver",
        mat1: "2 Cinnabar",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (ALC, GSM), Levequest"
    },
    {
        level: "2",
        name: "Animal Glue",
        mat1: "Animal Skin",
        mat2: "2 Bone Chip",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (BSM, CRP, LTW), Levequest"
    },
    {
        level: "3",
        name: "Growth Formula Alpha",
        mat1: "Shriekshroom",
        mat2: "Quicksilver",
        mat3: "Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Buyable, Ingredient (ALC, CRP), Levequest"
    },
    {
        level: "4",
        name: "Enchanted Copper Ink",
        mat1: "2 Copper Sand",
        mat2: "Beastkin Blood",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard",
        special: "Ingredient (ALC)"
    },
    {
        level: "4",
        name: "Maple Wand",
        mat1: "Maple Branch",
        mat2: "Growth Formula Alpha",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Ingredient (ALC), Levequest, Provisioning"
    },
    {
        level: "5",
        name: "Leather Grimoire",
        mat1: "Enchanted Copper Ink",
        mat2: "Leather",
        mat3: "Maple Log",
        mat4: "Hempen Yarn",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Ingredient (ALC), Levequest, Provisioning"
    },
    {
        level: "5",
        name: "Antidote",
        mat1: "Grass Viper",
        mat2: "Rock Salt",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Water Shard, Lightning Shard",
        special: "Buyable, Levequest, Provisioning"
    },
];
