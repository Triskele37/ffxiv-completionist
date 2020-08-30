import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Alchemist_Collectables_61_70 = function(parent) {
    return new DataGroup("61-70", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "62",
        name: "Rarefied Koppranickel Index",
        mat1: "2 Koppranickel Nugget",
        mat2: "Beech Lumber",
        mat3: "Enchanted Koppranickel Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Water Crystal, 3 Lightning Crystal"
    },
    {
        level: "64",
        name: "Rarefied Reisui",
        mat1: "2 Gyr Abanian Mineral Water",
        mat2: "2 Holy Basil",
        mat3: "2 Dandelion",
        mat4: "2 Diaomite",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Crystal, 3 Lightning Crystal"
    },
    {
        level: "66",
        name: "Rarefied Tigerskin Grimoire",
        mat1: "2 Tiger Leather",
        mat2: "Pine Lumber",
        mat3: "Enchanted Durium Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Water Crystal, 4 Lightning Crystal"
    },
    {
        level: "68",
        name: "Rarefied Growth Formula",
        mat1: "3 Windtea Leaves",
        mat2: "2 Persimmon Tannin",
        mat3: "Perlite",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Water Crystal, 5 Lightning Crystal"
    },
    {
        level: "70",
        name: "Rarefied Gazelleskin Codex",
        mat1: "2 Gazelle Leather",
        mat2: "Zelkova Lumber",
        mat3: "Enchanted Palladium Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Water Crystal, 5 Lightning Crystal"
    },
];
