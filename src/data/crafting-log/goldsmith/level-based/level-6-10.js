import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Level_Based_6_10 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "Ragstone Whetstone",
        mat1: "2 Ragstone",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard",
        special: "Buyable, Ingredient (GSM,BSM)"
    },
    {
        level: "6",
        name: "Copper Earrings",
        mat1: "Copper Ingot",
        mat2: "Ragstone Whetstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "7",
        name: "Copper Ring",
        mat1: "Copper Ingot",
        mat2: "Ragstone Whetstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "7",
        name: "Bone Ring",
        mat1: "Bone Chip",
        mat2: "Ragstone Whetstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "8",
        name: "Copper Needle",
        mat1: "Copper Ingot",
        mat2: "Ragstone Whetstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "8",
        name: "Bone Necklace",
        mat1: "2 Soiled Femur",
        mat2: "Copper Rings",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "9",
        name: "Ramhorn Staff",
        mat1: "Marbled Eye",
        mat2: "2 Ram Horm",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Ingredient (GSM), Provisioning"
    },
    {
        level: "9",
        name: "Copper Choker",
        mat1: "2 Copper Ingot",
        mat2: "Hard Leather",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "10",
        name: "Ramhorn Claws",
        mat1: "2 Ram Horn",
        mat2: "Animal Sinew",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "10",
        name: "Copper Scepter",
        mat1: "Marbled Eye",
        mat2: "Copper Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Ingredient (GSM), Provisioning"
    },
    {
        level: "10",
        name: "Bone Armillae",
        mat1: "3 Soiled Femur",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Levequest, Provisioning"
    },
];
