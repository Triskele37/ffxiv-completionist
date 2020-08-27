import { DataGroup } from "../../DataGroup";

export const Duty_Dungeons_ShB = function(parent) {
    return new DataGroup("ShB", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	level: "71",
    	iLvlReq: "370",
    	name: "Holminster Switch",
    	roulette: "Leveling",
    	unlock: "The Lightwardens"
    }, {
    	level: "73",
    	iLvlReq: "375",
    	name: "Dohn Mheg",
    	roulette: "Leveling",
    	unlock: "The Key to the Castle"
    }, {
    	level: "75",
    	iLvlReq: "380",
    	name: "The Qitana Ravel",
    	roulette: "Leveling",
    	unlock: "The Burden of Knowledge"
    }, {
    	level: "77",
    	iLvlReq: "385",
    	name: "Malikah's Well",
    	roulette: "Leveling",
    	unlock: "A Fresh Start"
    }, {
    	level: "79",
    	iLvlReq: "390",
    	name: "Mt. Gulg",
    	roulette: "Leveling",
    	unlock: "Extinguishing the Last Light"
    }, {
    	level: "80",
    	iLvlReq: "410",
    	name: "Amaurot",
    	roulette: "Level 80",
    	unlock: "Shadowbringers"
    }, {
    	level: "80",
    	iLvlReq: "410",
    	name: "The Twinning",
    	roulette: "Level 80",
    	unlock: "By the Time You Hear This"
    }, {
    	level: "80",
    	iLvlReq: "410",
    	name: "Akadaemia Anyder",
    	roulette: "Level 80",
    	unlock: "Akadaemia Anyder"
    }, {
		level: "80",
		iLvlReq: "430",
		name: "The Grand Cosmos",
		roulette: "Level 80",
		unlock: "A Grand Adventure"
	}, {
		level: "80",
		iLvlReq: "440",
		name: "Anamnesis Anyder",
		roulette: "Expert",
		unlock: "Beneath the Surface"
	}, {
		level: "80",
		iLvlReq: "460",
		name: "The Heroes' Gauntlet",
		roulette: "Expert",
		unlock: "The Converging Light"
	}
];
