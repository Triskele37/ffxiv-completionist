import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_1 = function(parent) {
    return new DataGroup("Restoration (1)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "20",
        name: "Skybuilders' Alloy",
        mat1: "6 Skybuilders' Iron Ore",
        mat2: "Iron Ore",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 2 Earth Shard"
    }, {
        level: "40",
        name: "Skybuilders' Nails",
        mat1: "4 Skybuilders' Electrum Ore",
        mat2: "4 Skybuilders' Iron Sand",
        mat3: "2 Cobalt Ore",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Shard, 2 Earth Shard"
    }, {
        level: "60",
        name: "Skybuilders' Hammer",
        mat1: "6 Skybuilders' Hardsilver Ore",
        mat2: "6 Skybuilders' Mythrite Ore",
        mat3: "Dark Chestnut Lumber",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Earth Crystal"
    }, {
        level: "70",
        name: "Skybuilders' Crosscut Saw",
        mat1: "6 Skybuilders' Nightsteel Ore",
        mat2: "6 Skybuilders' Molybdenum Ore",
        mat3: "6 Skybuilders' Durium Sand",
        mat4: "Pine Lumber",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Earth Crystal"
    }, {
        level: "80",
        name: "Skybuilders' Oven",
        mat1: "8 Skybuilders' Reef Rock",
        mat2: "8 Skybuilders' Truegold Ore",
        mat3: "8 Skybuilders' White Ash Log",
        mat4: "Bluespirit Tile",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Fire Crystal, 2 Earth Crystal"
    },
];
