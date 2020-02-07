import { DataGroup } from "../../../DataGroup";

export const Travel_Aether_Currents_SB_The_Peaks = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "1",
    	location: "Mount Yorn",
    	coordinates: "X: 23.8   Y: 31.8   Z: 2.5",
    	quest: "-",
    	notes: "Edge of a small cliff overlooking a tree and a lake "
    }, {
    	name: "2",
    	location: "Wightrock",
    	coordinates: "X: 21.2   Y: 22.0   Z: 2.5",
    	quest: "-",
    	notes: "At the edge of the terrace, slightly north of Specula Imperatoris"
    }, {
    	name: "3",
    	location: "Goodblade",
    	coordinates: "X: 16.7   Y: 31.9   Z: 2.2",
    	quest: "-",
    	notes: "Near some barrels overlooking a pond "
    }, {
    	name: "4",
    	location: "Wightrock",
    	coordinates: "X: 10.8   Y: 26.4   Z: 2.5",
    	quest: "-",
    	notes: "Edge of a cliff "
    }, {
    	name: "5",
    	location: "Wightrock",
    	coordinates: "X:   8.2   Y: 32.5   Z: 2.2",
    	quest: "-",
    	notes: "On top of a collapsed bridge section"
    }, {
    	name: "6",
    	location: "Momoroon's Milk",
    	coordinates: "X: 27.5   Y: 20.8   Z: 1.5",
    	quest: "-",
    	notes: "On a ledge"
    }, {
    	name: "7",
    	location: "The Ziggurat",
    	coordinates: "X: 15.8   Y: 16.9   Z: 0.8",
    	quest: "-",
    	notes: "Start at the stairs at (X: 15.8  Y:14.2), drop from about 2/3 of the way up"
    }, {
    	name: "8",
    	location: "Sleeping Stones",
    	coordinates: "X: 35.7   Y: 11.6   Z: 2.1",
    	quest: "-",
    	notes: "On a ledge "
    }, {
    	name: "9",
    	location: "Ala Gannha",
    	coordinates: "X: 26.7   Y:   6.9   Z: 0.8",
    	quest: "-",
    	notes: "From Ala Gannha head northwest up the ramps"
    }, {
    	name: "10",
    	location: "The Last Forest",
    	coordinates: "X: 11.8   Y:   5.8   Z: 0.1",
    	quest: "-",
    	notes: "On a ledge overlooking Rhalgr's Reach"
    }, {
    	name: "11",
    	location: "Sagar - Coldhearth",
    	coordinates: "X: 27.1   Y: 36.5   Z: 2.7",
    	quest: "Closing Up Shop",
    	notes: "Unlocks after completing MSQ \"Raubahn's Invitation\""
    }, {
    	name: "12",
    	location: "Ponderous Porter - Radiata",
    	coordinates: "X: 27.7   Y: 28.7   Z: 2.7",
    	quest: "A Hunger For Trade",
    	notes: "Unlocks after completing MSQ \"Where Courage Endures\""
    }, {
    	name: "13",
    	location: "Brazen Brook - Ala Ghiri",
    	coordinates: "X: 14.9   Y: 36.6   Z: 2.1",
    	quest: "Out of Sight",
    	notes: "Unlocks after completing MSQ \"The Path Forward\""
    }, {
    	name: "14",
    	location: "Raganfrid - Ala Gannha",
    	coordinates: "X: 24.3   Y:   6.8   Z: 0.7",
    	quest: "Saint Sayer",
    	notes: "Unlocks after completing MSQ \"The Fires Fade\""
    }, {
    	name: "15",
    	location: "Raubahn - Coldhearth",
    	coordinates: "X: 26.7   Y: 36.2   Z: 2.7",
    	quest: "Liberty or Death (MSQ)",
    	notes: "Unlocks after completing MSQ \"Raubahn's Invitation\""
    },
];
