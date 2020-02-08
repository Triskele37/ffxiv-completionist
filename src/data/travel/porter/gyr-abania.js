import { DataGroup } from "../../DataGroup";

export const Travel_Porter_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Chocobokeep",
    	region: "Rhalgr's Reach",
    	name: "Rhalgr's Reach"
    }, {
    	type: "Chocobokeep",
    	region: "The Fringes",
    	name: "Castrum Oriens"
    }, {
    	type: "Chocobokeep",
    	region: "The Fringes",
    	name: "The Peering Stones"
    }, {
    	type: "Chocobokeep",
    	region: "The Peaks",
    	name: "Ala Gannha"
    }, {
    	type: "Chocobokeep",
    	region: "The Peaks",
    	name: "Ala Ghiri"
    }, {
    	type: "Chocobokeep",
    	region: "The Lochs",
    	name: "Porta Praetoria"
    }, {
    	type: "Chocobokeep",
    	region: "The Lochs",
    	name: "The Ala Mhigan Quarter"
    },
];
