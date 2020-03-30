import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_1 = function(parent) {
    return new DataGroup("Restoration (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: 20,
        name: "Skybuilders' Ink",
        mat1: "6 Skybuilders' Fine Sand",
        mat2: "Acidic Secretions",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Shard, 2 Lightning Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 40,
        name: "Skybuilders' Plant Oil",
        mat1: "4 Skybuilders' Flax",
        mat2: "4 Skybuilders' Toad",
        mat3: "2 Mistletoe",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Shard, 2 Lightning Shard",
        special: "Ishgard, Collectable"
    },
    {
        level: 60,
        name: "Skybuilders' Charcoal",
        mat1: "6 Skybuilders' Straw",
        mat2: "6 Skybuilders' Camphorwood Log",
        mat3: "Lanolin",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Crystal, 2 Lightning Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 70,
        name: "Skybuilders' Soap",
        mat1: "6 Skybuilders' Cocoon",
        mat2: "6 Skybuilders' Ruby Sea Water",
        mat3: "6 Skybuilders' Urunday Log",
        mat4: "2 Bear Fat",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Crystal, 2 Lightning Crystal",
        special: "Ishgard, Collectable"
    },
    {
        level: 80,
        name: "Skybuilders' Alchemic",
        mat1: "8 Skybuilders' Dawn Lizard",
        mat2: "8 Skybuilders' Sea Salt",
        mat3: "8 Skybuilders' Highland Spring Water",
        mat4: "Golden Honey",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Crystal, 2 Lightning Crystal",
        special: "Ishgard, Collectable"
    }
];
