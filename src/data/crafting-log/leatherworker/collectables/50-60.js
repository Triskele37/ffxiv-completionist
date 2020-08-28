import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Leatherworker_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Archaeoskin Belt",
        mat1: "3 Archaeornis Leather",
        mat2: "Rainbow Thread",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Earth Crystal, Wind Crystal"
    },
    {
        level: "52",
        name: "Rarefied Archaeoskin Cloche",
        mat1: "2 Archaeornis Leather",
        mat2: "Rainbow Thread",
        mat3: "Chocobo Feather",
        mat4: "Wildfowl Feather",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Earth Crystal, 3 Wind Crystal"
    },
    {
        level: "54",
        name: "Rarefied Wyvernskin Mask",
        mat1: "2 Wyvern Leather",
        mat2: "Mythrite Ingot",
        mat3: "2 Yeti Fang",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Earth Crystal, 3 Wind Crystal"
    },
    {
        level: "56",
        name: "Rarefied Dhalmelskin Coat",
        mat1: "2 Dhalmel Leather",
        mat2: "Ramie Cloth",
        mat3: "Ramie Thread",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Earth Crystal, 4 Wind Crystal"
    },
    {
        level: "58",
        name: "Rarefied Dragonskin Ring",
        mat1: "2 Dragon Leather",
        mat2: "2 Hardsilver Ingot",
        mat3: "X",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Earth Crystal, 5 Wind Crystal"
    },
    {
        level: "60",
        name: "Rarefied Serpentskin Hat",
        mat1: "2 Amphipter Leather",
        mat2: "Hallowed Ramie Cloth",
        mat3: "Rose Gold Nugget",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Earth Crystal, 5 Wind Crystal"
    },
];
