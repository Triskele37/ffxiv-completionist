import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_The_Far_East = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Shirogane",
    	increase1: "Stormblood",
    	increase2: "-"
    }, {
    	name: "The Ruby Sea",
    	increase1: "The Lord of the Revel",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    }, {
    	name: "Yanxia",
    	increase1: "The Will to Live",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    }, {
    	name: "The Azim Steppe",
    	increase1: "Naadam",
    	increase2: "250 Centurio Seals (Estrild - Shiokaze Hostelry, Kugane or Leuekin - Rhalgr's Reach)"
    },
];
