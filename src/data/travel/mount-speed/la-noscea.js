import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_La_Noscea = function(parent) {
    return new DataGroup("La Noscea", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Mist",
    	increase1: "The Ultimate Weapon",
    	increase2: "-"
    }, {
    	name: "Middle La Noscea",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Lower La Noscea",
    	increase1: "Brotherly Love",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Eastern La Noscea",
    	increase1: "In the Company of Heroes",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Western La Noscea",
    	increase1: "History Repeating",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Upper La Noscea",
    	increase1: "Lord of Crags",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Outer La Noscea",
    	increase1: "Lord of Crags",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    },
];
