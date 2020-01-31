import { DataGroup } from "../../../DataGroup";

export const Crafting_Logs_Goldsmith_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "1",
        name: "Copper Ingot",
        "mat-1": "3 Copper Ore",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard",
        "special": "Buyable, Ingredient (GSM, ARM, WVR, CRP, LTW), Levequest"
    },
    {
        "level": "2",
        name: "Bone Hora",
        "mat-1": "2 Bone Chip",
        "mat-2": "Animal Sinew",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Fire Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "3",
        name: "Bone Brand",
        "mat-1": "Marbled Eye",
        "mat-2": "Bone Chip",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Fire Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
    {
        "level": "4",
        name: "Copper Rings",
        "mat-1": "Copper Ingot",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard",
        "special": "Ingredient (GSM), Levequest"
    },
    {
        "level": "5",
        name: "Bone Staff",
        "mat-1": "Marbled Eye",
        "mat-2": "Soiled Femur",
        "mat-3": "Bone Chip",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Fire Shard",
        "special": "Buyable, Ingredient (GSM), Levequest, Provisioning"
    },
    {
        "level": "5",
        name: "Copper Gorget",
        "mat-1": "2 Copper Ingot",
        "mat-2": "Leather",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Fire Shard",
        "special": "Buyable, Provisioning"
    },
    {
        "level": "5",
        name: "Copper Wristlets",
        "mat-1": "Copper Ingot",
        "mat-2": "2 Copper Rings",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "Wind Shard, Fire Shard",
        "special": "Buyable, Levequest, Provisioning"
    },
];
