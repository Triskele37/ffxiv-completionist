import { DataGroup } from "../../../DataGroup";

export const Crafting_Log_Armorer_Story_Crystarium_Deliveries = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": 70,
        name: "Metal Gauntlets",
        "mat-1": "2 Molybdenum Ingot",
        "mat-2": "2 Gazelle Leather",
        "mat-3": "Ruby Cotton Yarn",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, Earth Crystal",
        "special": "X"
    },
    {
        "level": 73,
        name: "Metal Worm Jar",
        "mat-1": "2 Deepgold Ingot",
        "mat-2": "2 Stonegold Ingot",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, 2 Earth Crystal",
        "special": "X"
    },
    {
        "level": 75,
        name: "Metal Trident",
        "mat-1": "2 Bluespirit Tile",
        "mat-2": "2 White Ash Lumber",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, 2 Earth Crystal",
        "special": "X"
    },
    {
        "level": 75,
        name: "Intricate Censer",
        "mat-1": "Intricate Censer Materials",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, 2 Earth Crystal",
        "special": "X"
    },
    {
        "level": 78,
        name: "Nullifying Neckpiece",
        "mat-1": "2 Dwarven Mythril Nugget",
        "mat-2": "Petalite",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, 2 Earth Crystal",
        "special": "X"
    },
    {
        "level": 80,
        name: "Enchanting Ring",
        "mat-1": "Enchanting Ring Materials",
        "mat-2": "X",
        "mat-3": "X",
        "mat-4": "X",
        "mat-5": "X",
        "mat-6": "X",
        "catalysts": "2 Ice Crystal, 2 Earth Crystal",
        "special": ""
    },
];
