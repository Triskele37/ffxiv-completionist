import { DutyColumnConfig } from "../columnConfigs";

export const HWTrials = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.HW`;

    return {
        name: "HW",
    	storageKey,
        columns: DutyColumnConfig,
        tasks: [{
        	level: "53",
        	iLvlReq: "-",
        	name: "Thok ast Thok (Hard)",
        	boss: "Ravana",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "57",
        	iLvlReq: "-",
        	name: "The Limitless Blue (Hard)",
        	boss: "Bismarck",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "142",
        	name: "The Singularity Reactor",
        	boss: "King Thordan",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "205",
        	name: "The Final Steps of Faith",
        	boss: "Nidhogg",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "190",
        	name: "Containment Bay S1T7",
        	boss: "Sephirot",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "220",
        	name: "Containment Bay P1T6",
        	boss: "Sophia",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "235",
        	name: "Containment Bay Z1T9",
        	boss: "Zurvan",
        	roulette: "Trials",
        	unlock: "Trials"
        }, {
        	level: "60",
        	iLvlReq: "165",
        	name: "The Limitless Blue (Extreme)",
        	boss: "Bismarck",
        	roulette: "-",
        	unlock: "The Diabolical Bismarck"
        }, {
        	level: "60",
        	iLvlReq: "175",
        	name: "Thok ast Thok (Extreme)",
        	boss: "Ravana",
        	roulette: "-",
        	unlock: "Thok Around the Clock"
        }, {
        	level: "60",
        	iLvlReq: "190",
        	name: "The Minstrel's Ballad: Thordan's Reign",
        	boss: "King Thordan",
        	roulette: "-",
        	unlock: "Thordan's Reign"
        }, {
        	level: "60",
        	iLvlReq: "220",
        	name: "The Minstrel's Ballad: Nidhogg's Rage",
        	boss: "Nidhogg",
        	roulette: "-",
        	unlock: "Nidhogg's Rage"
        }, {
        	level: "60",
        	iLvlReq: "205",
        	name: "Containment Bay S1T7 (Extreme)",
        	boss: "Sephirot",
        	roulette: "-",
        	unlock: "A Fiendish Likeness"
        }, {
        	level: "60",
        	iLvlReq: "235",
        	name: "Containment Bay P1T6 (Extreme)",
        	boss: "Sophia",
        	roulette: "-",
        	unlock: "A Deific Simulacrum"
        }, {
        	level: "60",
        	iLvlReq: "250",
        	name: "Containment Bay Z1T9 (Extreme)",
        	boss: "Zurvan",
        	roulette: "-",
        	unlock: "A Demonic Duplicate"
        }]
    };
};
