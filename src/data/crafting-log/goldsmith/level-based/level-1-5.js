import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Level_Based_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Copper Ingot",
        mat1: "3 Copper Ore",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard",
        special: "Buyable, Ingredient (GSM, ARM, WVR, CRP, LTW), Levequest"
    },
    {
        level: "2",
        name: "Bone Hora",
        mat1: "2 Bone Chip",
        mat2: "Animal Sinew",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "3",
        name: "Bone Brand",
        mat1: "Marbled Eye",
        mat2: "Bone Chip",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "4",
        name: "Copper Rings",
        mat1: "Copper Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard",
        special: "Ingredient (GSM), Levequest"
    },
    {
        level: "5",
        name: "Bone Staff",
        mat1: "Marbled Eye",
        mat2: "Soiled Femur",
        mat3: "Bone Chip",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Ingredient (GSM), Levequest, Provisioning"
    },
    {
        level: "5",
        name: "Copper Gorget",
        mat1: "2 Copper Ingot",
        mat2: "Leather",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "5",
        name: "Copper Wristlets",
        mat1: "Copper Ingot",
        mat2: "2 Copper Rings",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Wind Shard, Fire Shard",
        special: "Buyable, Levequest, Provisioning"
    },
];
