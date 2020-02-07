import { DataGroup } from "../../DataGroup";

export const Duty_Trials_ShB = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	level: "73",
    	iLvlReq: "-",
    	name: "The Dancing Plague",
    	boss: "Titania",
    	roulette: "Trials",
    	unlock: "Acht-la Ormh Inn"
    }, {
    	level: "79",
    	iLvlReq: "-",
    	name: "The Crown of the Immaculate",
    	boss: "Innocence",
    	roulette: "Trials",
    	unlock: "Extinguishing the Last Light"
    }, {
    	level: "80",
    	iLvlReq: "430",
    	name: "The Dancing Plague (Extreme)",
    	boss: "Titania",
    	roulette: "Trials",
    	unlock: "Minstrel from Another Mother"
    }, {
    	level: "80",
    	iLvlReq: "430",
    	name: "The Crown of the Immaculate (Extreme)",
    	boss: "Innocence",
    	roulette: "Trials",
    	unlock: "Minstrel from Another Mother"
    }, {
    	level: "80",
    	iLvlReq: "410",
    	name: "The Dying Gasp",
    	boss: "Hades",
    	roulette: "Trials",
    	unlock: "Shadowbringers"
    }, {
    	level: "80",
    	iLvlReq: "450",
    	name: "The Minstrel's Ballad: Hades's Elegy",
    	boss: "Hades",
    	roulette: "Trials",
    	unlock: "Shadowbringers"
    }
];
