import { DataGroup } from "../../DataGroup";

export const Travel_Porter_The_Black_Shroud = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Chocobokeep",
    	region: "Gridania",
    	name: "New Gridania"
    }, {
    	type: "Chocobokeep",
    	region: "Central Shroud",
    	name: "Bentbranch Meadows"
    }, {
    	type: "Chocobokeep",
    	region: "North Shroud",
    	name: "Fallgourd Float"
    }, {
    	type: "Chocobokeep",
    	region: "North Shroud",
    	name: "Peacegarden"
    }, {
    	type: "Chocobokeep",
    	region: "East Shroud",
    	name: "Hawthorne Hut"
    }, {
    	type: "Chocobokeep",
    	region: "South Shroud",
    	name: "Quarrymill"
    }, {
    	type: "Chocobokeep",
    	region: "South Shroud",
    	name: "Buscarron's Druthers"
    }, {
    	type: "Chocobokeep",
    	region: "South Shroud",
    	name: "Camp Tranquil"
    },
];
