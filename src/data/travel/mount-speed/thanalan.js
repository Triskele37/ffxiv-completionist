import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Thanalan = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "The Goblet",
    	increase1: "The Ultimate Weapon",
    	increase2: "-"
    }, {
    	name: "Western Thanalan",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Central Thanalan",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Eastern Thanalan",
    	increase1: "Eyes on Me",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Southern Thanalan",
    	increase1: "When the Worm Turns",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Northern Thanalan",
    	increase1: "The Ultimate Weapon",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    },
];
