import { DataGroup } from "../../../../DataGroup";

export const Logs_Crafting_Log_Alchemist_Collectables_50_60 = function(parent) {
    return new DataGroup("50-60", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Rarefied Archaeoskin Grimoire",
        mat1: "2 Archaeornis Leather",
        mat2: "Electrum Ingot",
        mat3: "Enchanted Mythrite Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "2 Water Crystal, Lightning Crystal"
    },
    {
        level: "52",
        name: "Rarefied Archaeoskin Codex",
        mat1: "2 Archaeornis Leather",
        mat2: "Hippogryph Leather",
        mat3: "Enchanted Mythrite Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "3 Water Crystal, 3 Lightning Crystal"
    },
    {
        level: "54",
        name: "Rarefied Dissolvent",
        mat1: "4 Deepeye Tears",
        mat2: "3 Mist Dill",
        mat3: "Volcanic Rock Salt",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "4 Water Crystal, 3 Lightning Crystal"
    },
    {
        level: "56",
        name: "Rarefied Dhalmelskin Codex",
        mat1: "2 Dhalmel Leather",
        mat2: "Hardsilver Nugget",
        mat3: "Enchanted Hardsilver Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Water Crystal, 4 Lightning Crystal"
    },
    {
        level: "58",
        name: "Rarefied Max-Potion",
        mat1: "2 Alalathian Spring Water",
        mat2: "2 Highland Oregano",
        mat3: "2 Coneflower",
        mat4: "2 Cow Bitter",
        mat5: "X",
        mat6: "X",
        catalysts: "5 Water Crystal, 5 Lightning Crystal"
    },
    {
        level: "60",
        name: "Rarefied Book of Aurum Regis",
        mat1: "2 Aurum Regis Nugget",
        mat2: "Hardsilver Ingot",
        mat3: "Enchanted Aurum Regis Ink",
        mat4: "X",
        mat5: "X",
        mat6: "X",
        catalysts: "6 Water Crystal, 5 Lightning Crystal"
    },
];
