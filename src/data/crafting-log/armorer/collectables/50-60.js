import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Mythrite Sallet",
        mat1: "2 Mythrite Nugget",
        mat2: "Archaeornis Leather",
        mat3: "Electrum Ingot",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Ice Crystal, 1 Earth Crystal"
    },
    {
        level: "52",
        name: "Rarefied Mythrite Hauberk",
        mat1: "3 Mythrite Nugget",
        mat2: "Archaeornis Leather",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Ice Crystal, 3 Earth Crystal"
    },
    {
        level: "54",
        name: "Rarefied Mythrite Bladed Lantern Shield",
        mat1: "3 Mythite Ingot",
        mat2: "Mythrite Rivets",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Ice Crystal, 3 Earth Crystal"
    },
    {
        level: "56",
        name: "Rarefied Titanium Frypan",
        mat1: "2 Titanium Nugget",
        mat2: "Dark Chestnut Lumber",
        mat3: "Titanium Rivets",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Ice Crystal, 4 Earth Crystal"
    },
    {
        level: "58",
        name: "Rarefied Titanium Vambraces",
        mat1: "Titanium Ingot",
        mat2: "Dragon Leather",
        mat3: "Dhalmel Leather",
        mat4: "Hardsilver Ingot",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Ice Crystal, 5 Earth Crystal"
    },
    {
        level: "60",
        name: "Rarefied Adamantite Scutum",
        mat1: "2 Adamantite Nugget",
        mat2: "Titanium Ingot",
        mat3: "Amphiptere Leather",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Ice Crystal, 5 Earth Crystal"
    },
];
