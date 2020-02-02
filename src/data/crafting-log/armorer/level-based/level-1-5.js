import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Level_Based_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Bronze Ingot",
        mat1: "2 Copper Ore",
        mat2: "Tin Ore",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard",
        special: "Buyable, Ingredient (ARM, BSM, CRP, GSM, LTW, WVR), Levequest"
    },
    {
        level: "2",
        name: "Bronze Rings",
        mat1: "Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard",
        special: "Ingredient (ARM)"
    },
    {
        level: "2",
        name: "Bronze Rivets",
        mat1: "Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard",
        special: "Buyable, Ingredient (ALC, ARM, BSM, CRP, LTW, WVR), Levequest"
    },
    {
        level: "3",
        name: "Bronze Plate",
        mat1: "2 Bronze Ingot",
        mat2: "X",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard",
        special: "Buyable, Ingredient (ARM, BSM), Levequest"
    },
    {
        level: "3",
        name: "Bronze Alembic",
        mat1: "Bronze Plate",
        mat2: "Bronze Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard",
        special: "Buyable, Provisioning, Levequest"
    },
    {
        level: "4",
        name: "Bronze Skillet",
        mat1: "Bronze Plate",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard",
        special: "Buyable, Provisioning, Levequest"
    },
    {
        level: "5",
        name: "Bronze Hoplon",
        mat1: "2 Bronze Plate",
        mat2: "Maple Lumber",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "Ice Shard, Earth Shard",
        special: "Buyable, Provisioning, Levequest"
    },
];
