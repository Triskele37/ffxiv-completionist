import { DataGroup } from "../../DataGroup";

export const Travel_Porter_Thanalan = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Chocobokeep",
    	region: "Ul'dah",
    	name: "Steps of Nald"
    }, {
    	type: "Chocobokeep",
    	region: "Central Thanalan",
    	name: "Black Brush Station"
    }, {
    	type: "Chocobokeep",
    	region: "Western Thanalan",
    	name: "The Silver Bazaar"
    }, {
    	type: "Chocobokeep",
    	region: "Western Thanalan",
    	name: "Horizon"
    }, {
    	type: "Chocobokeep",
    	region: "Western Thanalan",
    	name: "Vesper Bay"
    }, {
    	type: "Chocobokeep",
    	region: "Eastern Thanalan",
    	name: "Camp Drybone"
    }, {
    	type: "Chocobokeep",
    	region: "Eastern Thanalan",
    	name: "The Golden Bazaar"
    }, {
    	type: "Chocobokeep",
    	region: "Southern Thanalan",
    	name: "Forgotten Springs"
    }, {
    	type: "Chocobokeep",
    	region: "Southern Thanalan",
    	name: "Little Ala Mhigo"
    }, {
    	type: "Chocobokeep",
    	region: "Northern Thanalan",
    	name: "Camp Bluefog"
    }, {
    	type: "Chocobokeep",
    	region: "Northern Thanalan",
    	name: "Ceruleum Processing Plant"
    },
];
