import { DutyColumnConfig } from "../columnConfigs";

export const SBDungeons = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.SB`;

    return {
        name: "SB",
    	storageKey,
        columns: DutyColumnConfig,
        tasks: [{
        	level: "61",
        	iLvlReq: "240",
        	name: "The Sirensong Sea",
        	roulette: "Leveling",
        	unlock: "Not without Incident"
        }, {
        	level: "63",
        	iLvlReq: "245",
        	name: "Shisui of the Violet Tides",
        	roulette: "Leveling",
        	unlock: "The Palace of Lost Souls"
        }, {
        	level: "65",
        	iLvlReq: "250",
        	name: "Bardam's Mettle",
        	roulette: "Leveling",
        	unlock: "In the Footsteps of Bardam the Brave"
        }, {
        	level: "67",
        	iLvlReq: "255",
        	name: "Doma Castle",
        	roulette: "Leveling",
        	unlock: "The Die Is Cast"
        }, {
        	level: "69",
        	iLvlReq: "260",
        	name: "Castrum Abania",
        	roulette: "Leveling",
        	unlock: "The Price of Freedom"
        }, {
        	level: "70",
        	iLvlReq: "280",
        	name: "Ala Mhigo",
        	roulette: "Level 70",
        	unlock: "Stormblood"
        }, {
        	level: "70",
        	iLvlReq: "280",
        	name: "Kugane Castle",
        	roulette: "Level 70",
        	unlock: "King of the Castle"
        }, {
        	level: "70",
        	iLvlReq: "280",
        	name: "The Temple of the Fist",
        	roulette: "Level 70",
        	unlock: "To Kill a Coeurl"
        }, {
        	level: "70",
        	iLvlReq: "300",
        	name: "The Drowned City of Skalla",
        	roulette: "Level 70",
        	unlock: "The Mad King's Trove"
        }, {
        	level: "70",
        	iLvlReq: "310",
        	name: "Hells' Lid (Duty)",
        	roulette: "Expert",
        	unlock: "An Auspicious Encounter"
        }, {
        	level: "70",
        	iLvlReq: "310",
        	name: "The Fractal Continuum (Hard)",
        	roulette: "Expert",
        	unlock: "An Unwanted Truth"
        }, {
        	level: "70",
        	iLvlReq: "330",
        	name: "The Swallow's Compass",
        	roulette: "Expert",
        	unlock: "Tortoise in Time"
        }, {
        	level: "70",
        	iLvlReq: "340",
        	name: "The Burn",
        	roulette: "Expert",
        	unlock: "Feel the Burn"
        }, {
        	level: "70",
        	iLvlReq: "340",
        	name: "Saint Mocianne's Arboretum (Hard)",
        	roulette: "Expert",
        	unlock: "Secret of the Ooze"
        }, {
        	level: "70",
        	iLvlReq: "350",
        	name: "The Ghimlyt Dark",
        	roulette: "Expert",
        	unlock: "The Face of War"
        }]
    };
};
