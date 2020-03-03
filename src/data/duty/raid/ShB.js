import { DataGroup } from "../../DataGroup";

export const Duty_Raids_ShB = function(parent) {
    return new DataGroup("ShB", parent).initializeTasks(tasks);
};

const tasks = [
    //------------------------------------------------------- Tier 1
    {
    	level: "80",
    	iLvlReq: "425",
    	name: "Eden's Gate: Resurrection",
    	roulette: "Normal Raids",
    	unlock: "Deploy the Core"
    }, {
    	level: "80",
    	iLvlReq: "425",
    	name: "Eden's Gate: Descent",
    	roulette: "Normal Raids",
    	unlock: "One Fell Swoop"
    }, {
    	level: "80",
    	iLvlReq: "425",
    	name: "Eden's Gate: Inundation",
    	roulette: "Normal Raids",
    	unlock: "Nor Any Drop to Drink"
    }, {
    	level: "80",
    	iLvlReq: "425",
    	name: "Eden's Gate: Sepulture",
    	roulette: "Normal Raids",
    	unlock: "Super Seismic"
    }, {
    	level: "80",
    	iLvlReq: "440",
    	name: "Eden's Gate: Resurrection (Savage)",
    	roulette: "-",
    	unlock: "Super Seismic"
    }, {
    	level: "80",
    	iLvlReq: "445",
    	name: "Eden's Gate: Descent (Savage)",
    	roulette: "-",
    	unlock: "Super Seismic"
    }, {
    	level: "80",
    	iLvlReq: "450",
    	name: "Eden's Gate: Inundation (Savage)",
    	roulette: "-",
    	unlock: "Super Seismic"
    }, {
    	level: "80",
    	iLvlReq: "450",
    	name: "Eden's Gate: Sepulture (Savage)",
    	roulette: "-",
    	unlock: "Super Seismic"
    }, {
    	level: "80",
    	iLvlReq: "470",
    	name: "The Epic of Alexander (Ultimate)",
    	roulette: "-",
    	unlock: "Eden's Gate: Sepulture (Savage)"
    }, {
    	level: "80",
    	iLvlReq: "435",
    	name: "The Copied Factory",
    	roulette: "Alliance Raids",
    	unlock: "On the Threshold"
    },
    //------------------------------------------------------- Tier 2
    {
    	level: "80",
    	iLvlReq: "455",
    	name: "Eden's Verse: Fulmination",
    	roulette: "Normal Raids",
    	unlock: "Blood and Thunder"
    }, {
    	level: "80",
    	iLvlReq: "455",
    	name: "Eden's Verse: Furor",
    	roulette: "Normal Raids",
    	unlock: "Into the Firestorm"
    }, {
    	level: "80",
    	iLvlReq: "455",
    	name: "Eden's Verse: Iconoclasm",
    	roulette: "Normal Raids",
    	unlock: "Heart of Darkness"
    }, {
    	level: "80",
    	iLvlReq: "455",
    	name: "Eden's Verse: Refulgence",
    	roulette: "Normal Raids",
    	unlock: "On Thin Ice"
    }, {
    	level: "80",
    	iLvlReq: "470",
    	name: "Eden's Verse: Fulmination (Savage)",
    	roulette: "-",
    	unlock: "On Thin Ice"
    }, {
    	level: "80",
    	iLvlReq: "475",
    	name: "Eden's Verse: Furor (Savage)",
    	roulette: "-",
    	unlock: "On Thin Ice"
    }, {
    	level: "80",
    	iLvlReq: "480",
    	name: "Eden's Verse: Iconoclasm (Savage)",
    	roulette: "-",
    	unlock: "On Thin Ice"
    }, {
    	level: "80",
    	iLvlReq: "480",
    	name: "Eden's Verse: Refulgence (Savage)",
    	roulette: "-",
    	unlock: "On Thin Ice"
    },
];
