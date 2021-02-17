import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_The_Far_East = function(parent) {
    return new DataGroup("The Far East", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "Shirogane", method: "Stormblood" },
    { name: "The Ruby Sea - 1", method: "The Lord of the Revel" },
    { name: "The Ruby Sea - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" }, 
    { name: "Yanxia - 1", method: "The Will to Live" },
    { name: "Yanxia - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" }, 
    { name: "The Azim Steppe - 1", method: "Naadam" },
    { name: "The Azim Steppe - 2", method: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)" },
];
