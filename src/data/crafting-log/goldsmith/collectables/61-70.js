import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Goldsmith_Collectables_61_70 = function(parent) {
    return new DataGroup("61-70", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "62",
        name: "Rarefied Koppranickel Planisphere",
        mat1: "2 Koppranickel Nugget",
        mat2: "High Steel Nugget",
        mat3: "Mormorion",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Wind Crystal, 3 Fire Crystal"
    },
    {
        level: "64",
        name: "Rarefied Koppranickel Necklace",
        mat1: "2 Koppranickel Nugget",
        mat2: "Kyanite",
        mat3: "Ruby Cotton Yarn",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Wind Crystal, 3 Fire Crystal"
    },
    {
        level: "66",
        name: "Rarefied Durium Chaplets",
        mat1: "Durium Nugget",
        mat2: "2 Star Ruby",
        mat3: "Azurite",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 4 Fire Crystal"
    },
    {
        level: "68",
        name: "Rarefied Durium Rod",
        mat1: "2 Durium Ingot",
        mat2: "Persimmon Lumber",
        mat3: "Durium Nugget",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Wind Crystal, 5 Fire Crystal"
    },
    {
        level: "70",
        name: "Rarefied Palladium Needle",
        mat1: "2 Palladium Nugget",
        mat2: "Zelkova Lumber",
        mat3: "Slate Whetstone",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Wind Crystal, 5 Fire Crystal"
    },
];
