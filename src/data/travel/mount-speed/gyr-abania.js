import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Gyr_Abania = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Rhalgr's Reach",
    	increase1: "Stormblood (Quest)",
    	increase2: "-"
    }, {
    	name: "The Fringes",
    	increase1: "The Lady of Bliss",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    }, {
    	name: "The Peaks",
    	increase1: "The Price of Freedom",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    }, {
    	name: "The Lochs",
    	increase1: "The Resonant",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    },
];
