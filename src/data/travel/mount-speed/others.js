import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Others = function(parent) {
    return new DataGroup("Others", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Mor Dhona",
    	increase1: "Every Little Thing She Does Is Magitek",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    },
];
