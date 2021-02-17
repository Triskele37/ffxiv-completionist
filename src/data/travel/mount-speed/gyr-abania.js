import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "Rhalgr's Reach", method: "Stormblood (Quest)" },
	{ name: "The Fringes - 1", method: "The Lady of Bliss", },
	{ name: "The Fringes - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" },
	{ name: "The Peaks - 1", method: "The Price of Freedom", },
	{ name: "The Peaks - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" },
	{ name: "The Lochs - 1", method: "The Resonant", },
	{ name: "The Lochs - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" }
];
