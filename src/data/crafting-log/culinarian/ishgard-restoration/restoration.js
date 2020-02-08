import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Culinarian_Ishgard_Restoration_Restoration = function(parent) {
    return new DataGroup("Restoration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 20,
        name: "Skybuilders' Hemp Milk",
        mat1: "6 Skybuilders' Hemp",
        mat2: "Maple Syrup",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 2 Water Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 40,
        name: "Skybuilders' Uncooked Pasta",
        mat1: "4 Skybuilders' Rock Salt",
        mat2: "4 Skybuilders' Spring Water",
        mat3: "3 Sunset Wheat Flour",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 2 Water Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 60,
        name: "Skybuilders' Tea",
        mat1: "6 Skybuilders' Tea Leaves",
        mat2: "6 Skybuilders' Dravanian Spring Water",
        mat3: "2 Yak Milk",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Water Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 70,
        name: "Skybuilders' All-purpose Infusion",
        mat1: "6 Skybuilders' Adder",
        mat2: "6 Skybuilders' Ruby Sea Water",
        mat3: "6 Skybuilders' vine",
        mat4: "2 Holy Basil",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Water Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 80,
        name: "Skybuilders' Stew",
        mat1: "8 Skybuilders' Wheat",
        mat2: "8 Skybuilders' Highland Spring Water",
        mat3: "8 Skybuilders' Sea Salt",
        mat4: "2 Rail Tenderloin",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Water Crystal",
        special: "Ishgard, Collectable"
    },
];
