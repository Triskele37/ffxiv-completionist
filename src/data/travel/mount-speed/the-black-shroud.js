import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_The_Black_Shroud = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "The Lavender Beds",
    	increase1: "The Ultimate Weapon",
    	increase2: "-"
    }, {
    	name: "Central Shroud",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "East Shroud",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "South Shroud",
    	increase1: "Come Highly Recommended",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "North Shroud",
    	increase1: "Power of Deduction",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    },
];
