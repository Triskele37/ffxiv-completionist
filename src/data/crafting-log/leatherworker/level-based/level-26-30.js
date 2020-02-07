import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Level_Based_26_30 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "26",
        name: "Toad Leather",
        mat1: "Gigantoad Skin",
        mat2: "Alumen",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Shard",
        special: "Ingredient (LTW, WVR, BSM, GSM, ARM, CRP, ALC, FCC), Levequest"
    },
    {
        level: "26",
        name: "Goatskin Crakows",
        mat1: "Aldgoat Leather",
        mat2: "Iron Ingot",
        mat3: "Diremite Sinew",
        mat4: "Rubber",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "26",
        name: "Goatskin Choker",
        mat1: "Aldgoat Leather",
        mat2: "Diremite Sinew",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Shard, 2 Wind Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "27",
        name: "Goatskin Ringbands",
        mat1: "Aldgoat Leather",
        mat2: "Steel Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "27",
        name: "Toadskin Survival Belt",
        mat1: "2 Toad Leather",
        mat2: "Undyed Cotton Cloth",
        mat3: "Iron Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable"
    },
    {
        level: "27",
        name: "Goatskin Crakows of Gathering",
        mat1: "Aldgoat Leather",
        mat2: "Iron Ingot",
        mat3: "Diremite Sinew",
        mat4: "Rubber",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "27",
        name: "Goatskin Boots",
        mat1: "Aldgoat Leather",
        mat2: "Undyed Velveteen",
        mat3: "Diremite Sinew",
        mat4: "Rubber",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "27",
        name: "Altered Goatskin Moccasins",
        mat1: "Aldgoat Leather",
        mat2: "Undyed Velveteen",
        mat3: "Diremite Sinew",
        mat4: "Rubber",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: ""
    },
    {
        level: "27",
        name: "Goatskin Wristbands of Gathering",
        mat1: "Aldgoat Leather",
        mat2: "Fish Glue",
        mat3: "2 White Coral",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable"
    },
    {
        level: "28",
        name: "Toadskin Cesti",
        mat1: "Toad Leather",
        mat2: "Steel Ingot",
        mat3: "Diremite Sinew",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "28",
        name: "Toadskin Hunting Belt",
        mat1: "Toad Leather",
        mat2: "Steel Ingot",
        mat3: "Aldgoat Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "29",
        name: "Goatskin Targe",
        mat1: "Aldgoat Leather",
        mat2: "Walnut Lumber",
        mat3: "Steel Rivets",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "29",
        name: "Toadskin Brais",
        mat1: "Toad Leather",
        mat2: "Undyed Cotton Cloth",
        mat3: "Cotton Yarn",
        mat4: "Diremite Sinew",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "29",
        name: "Goatskin Wristbands",
        mat1: "Aldgoat Leather",
        mat2: "Fish Glue",
        mat3: "2 White Coral",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 2 Wind Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "30",
        name: "Toadskin Jerkin",
        mat1: "3 Toad Leather",
        mat2: "Undyed Cotton Cloth",
        mat3: "Iron Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 3 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "30",
        name: "Toadskin Jacket",
        mat1: "2 Toad Leather",
        mat2: "Aldgoat Leather",
        mat3: "Diremite Sinew",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 3 Wind Shard",
        special: "Buyable, Levequest, Provisioning"
    },
    {
        level: "30",
        name: "Toadskin Armguards",
        mat1: "2 Toad Leather",
        mat2: "Steel Ingot",
        mat3: "Steel Rivets",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 3 Wind Shard",
        special: "Buyable, Provisioning"
    },
    {
        level: "30",
        name: "Toadskin Boots",
        mat1: "2 Toad Leather",
        mat2: "Dew Thread",
        mat3: "Rubber",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Shard, 3 Wind Shard",
        special: ""
    },
];
