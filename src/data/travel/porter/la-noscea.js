import { DataGroup } from "../../DataGroup";

export const Travel_Porter_La_Noscea = function(parent) {
    return new DataGroup("La Noscea", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Chocobokeep",
    	region: "Limsa Lominsa",
    	name: "Limsa Lominsa Lower Decks"
    }, {
    	type: "Chocobokeep",
    	region: "Lower La Noscea",
    	name: "Moraby Drydocks"
    }, {
    	type: "Chocobokeep",
    	region: "Lower La Noscea",
    	name: "Red Rooster Stead"
    }, {
    	type: "Chocobokeep",
    	region: "Middle La Noscea",
    	name: "Summerford Farms"
    }, {
    	type: "Chocobokeep",
    	region: "Upper La Noscea",
    	name: "Camp Bronze Lake"
    }, {
    	type: "Chocobokeep",
    	region: "Western La Noscea",
    	name: "Aleport"
    }, {
    	type: "Chocobokeep",
    	region: "Western La Noscea",
    	name: "Swiftperch"
    }, {
    	type: "Chocobokeep",
    	region: "Eastern la Noscea",
    	name: "Wineport"
    }, {
    	type: "Chocobokeep",
    	region: "Eastern la Noscea",
    	name: "Costa Del Sol"
    },
];
