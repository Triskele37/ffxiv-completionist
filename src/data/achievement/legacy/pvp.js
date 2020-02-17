import { DataGroup } from "../../DataGroup";

export const Achievements_Legacy_PvP = function(parent) {
    return new DataGroup("PvP", parent).initializeTasks(tasks);
};

const tasks = [
    //-----------------------------------------------------------------------------
    {
        name: "Fatal Feast",
        points: "10",
        description: "Emerge victorious in 30 Feast matches while using a title received from the disreputable priest. ",
        reward: "Goten Pipe"
    }, {
        name: "Frontline Fury",
        points: "10",
        description: "Emerge victorious in 10 Frontline or Rival Wings campaigns while using a title received from the disreputable priest.",
        reward: "Ginga Pipe"
    }, {
        name: "Furious Fatalities",
        points: "20",
        description: "Emerge victorious in 60 Frontline or Rival Wings campaigns or Feast matches while using a title received from the disreputable priest.",
        reward: "Raigo Pipe"
    },
    //----------------------------------------------------------------------------- Championships
    {
        description: "Emerge victorious in the 2018 Feast Regional Championship (Japan).",
        name: "Rhyme & Region 2018 (JP)",
        points: 0,
        reward: "Title: FRC 2018 Champion"
    }, {
        description: "Emerge victorious in the 2018 Feast Regional Championship (North America).",
        name: "Rhyme & Region 2018 (NA)",
        points: 0,
        reward: "Title: FRC 2018 Champion"
    }, {
        description: "Emerge victorious in the 2018 Feast Regional Championship (Europe).",
        name: "Rhyme & Region 2018 (EU)",
        points: 0,
        reward: "Title: FRC 2018 Champion"
    }, {
        description: "Reach the finals in the 2018 Feast Regional Championship.",
        name: "Rhyme & Region 2018 - Finalist",
        points: 0,
        reward: "Title: FRC 2018 Finalist"
    }, {
        description: "Place between 1st and 10th in the 2018 Feast Regional Championship preliminaries.",
        name: "Rhyme & Region 2018 - Placed",
        points: 0,
        reward: "Title: FRC 2018 Ranker"
    }
];
