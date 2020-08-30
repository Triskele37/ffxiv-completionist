import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Ishgard_Restoration_Restoration_1 = function(parent) {
    return new DataGroup("Restoration (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Skybuilders' Ingot",
        mat1: "6 Skybuilders' Fine Sand",
        mat2: "Mudstone",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Fire Shard",
        special: "Ishgard, Collectable"
    }, {
        level: "40",
        name: "Skybuilders' Rings",
        mat1: "4 Skybuilders' Electrum Ore",
        mat2: "4 Skybuilders' Iron Sand",
        mat3: "2 Electrum Ore",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Shard, 2 Fire Shard",
        special: "Ishgard, Collectable"
    }, {
        level: "60",
        name: "Skybuilders' Candelabra",
        mat1: "6 Skybuilders' Hardsilver Ore",
        mat2: "6 Skybuilders' Mythrite Sand",
        mat3: "2 Tallow Candle",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Fire Crystal",
        special: "Ishgard, Collectable"
    }, {
        level: "70",
        name: "Skybuilders' Stone",
        mat1: "6 Skybuilders' Molybdenum Ore",
        mat2: "6 Skybuilders' Durium Sand",
        mat3: "6 Skybuilders' Horsetail",
        mat4: "Slate Whetstone",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Fire Crystal",
        special: "Ishgard, Collectable"
    }, {
        level: "80",
        name: "Skybuilders' Brazier",
        mat1: "8 Skybuilders' Truegold Ore",
        mat2: "8 Skybuilders' Truegold Sand",
        mat3: "8 Skybuilders' Resin",
        mat4: "Manasilver Nugget",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 2 Fire Crystal",
        special: "Ishgard, Collectable"
    },
];
