import { DataGroup } from "../../DataGroup";

export const Character_Character_Desynthesis = function(parent) {
    const data = new DataGroup("Desynthesis", parent);

    data.isNumericCompletion = true;
    data.defaultCompletion = "0";
    data.numericDecimal = 2;

    data.initializeTasks(tasks, [
        { header: "Level", key: "name", },
        { header: "Crafter", key: "name", },
        { header: "Starting Quest", key: "startingQuest", },
        { header: "Patch", key: "patch", filterable: true },
    ]);

    return data;
};

const tasks = [
    {
        name: "Carpenter",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Blacksmith",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Armorer",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Goldsmith",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Leatherworker",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Weaver",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Alchemist",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
    {
        name: "Culinarian",
        startingQuest: "Gone to Pieces - Syntgoht - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 510
    },
];