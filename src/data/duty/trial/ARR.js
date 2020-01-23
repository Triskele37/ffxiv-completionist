import { DutyColumnConfig } from "../columnConfigs";

export const ARRTrials = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ARR`;

    return {
        name: "ARR",
    	storageKey,
        columns: DutyColumnConfig,
        tasks: [{
        	level: "20",
        	iLvlReq: "-",
        	name: "The Bowl of Embers",
        	boss: "Ifrit",
        	roulette: "Leveling",
        	unlock: "Lord of the Inferno"
        }, {
        	level: "34",
        	iLvlReq: "-",
        	name: "The Navel",
        	boss: "Titan",
        	roulette: "Leveling",
        	unlock: "Lord of Crags"
        }, {
        	level: "44",
        	iLvlReq: "-",
        	name: "The Howling Eye",
        	boss: "Garuda",
        	roulette: "Leveling",
        	unlock: "Lady of the Vortex"
        }, {
        	level: "49",
        	iLvlReq: "-",
        	name: "Cape Westwind",
        	boss: "Rihtahtyn sas Arvina",
        	roulette: "Trials",
        	unlock: "Operation Archon"
        }, {
        	level: "50",
        	iLvlReq: "90",
        	name: "The Chrysalis",
        	boss: "Nabriales",
        	roulette: "Trials",
        	unlock: "An Uninvited Ascian"
        }, {
        	level: "50",
        	iLvlReq: "90",
        	name: "The Steps of Faith",
        	boss: "Vishap",
        	roulette: "Trials",
        	unlock: "The Steps of Faith (Quest)"
        }, {
        	level: "50",
        	iLvlReq: "52",
        	name: "A Relic Reborn: The Chimera",
        	boss: "Chimera",
        	roulette: "Trials",
        	unlock: "A Relic Reborn"
        }, {
        	level: "50",
        	iLvlReq: "52",
        	name: "A Relic Reborn: The Hydra",
        	boss: "Hydra",
        	roulette: "Trials",
        	unlock: "A Relic Reborn"
        }, {
        	level: "50",
        	iLvlReq: "50",
        	name: "Battle on the Big Bridge",
        	boss: "Gilgamesh",
        	roulette: "Trials",
        	unlock: "The Three Collectors"
        }, {
        	level: "50",
        	iLvlReq: "80",
        	name: "The Dragon's Neck",
        	boss: "Ultros & Typhon",
        	roulette: "Trials",
        	unlock: "The Coliseum Conundrum"
        }, {
        	level: "50",
        	iLvlReq: "90",
        	name: "Battle in the Big Keep",
        	boss: "Gilgamesh",
        	roulette: "Trials",
        	unlock: "Her Last Vow"
        }, {
        	level: "50",
        	iLvlReq: "49",
        	name: "The Bowl of Embers (Hard)",
        	boss: "Ifrit",
        	roulette: "Trials",
        	unlock: "Ifrit Bleeds, We Can Kill It"
        }, {
        	level: "50",
        	iLvlReq: "52",
        	name: "The Howling Eye (Hard)",
        	boss: "Garuda",
        	roulette: "Trials",
        	unlock: "In For Garuda Awakening"
        }, {
        	level: "50",
        	iLvlReq: "57",
        	name: "The Navel (Hard)",
        	boss: "Titan",
        	roulette: "Trials",
        	unlock: "In a Titan Spot"
        }, {
        	level: "50",
        	iLvlReq: "54",
        	name: "Thornmarch (Hard)",
        	boss: "Good King Moggle Mog XII",
        	roulette: "Trials",
        	unlock: "You Have Selected Regicide"
        }, {
        	level: "50",
        	iLvlReq: "60",
        	name: "The Whorleater (Hard)",
        	boss: "Leviathan",
        	roulette: "Trials",
        	unlock: "Lord of the Whorl"
        }, {
        	level: "50",
        	iLvlReq: "65",
        	name: "The Striking Tree (Hard)",
        	boss: "Ramuh",
        	roulette: "Trials",
        	unlock: "Levin an Impression"
        }, {
        	level: "50",
        	iLvlReq: "80",
        	name: "Akh Afah Amphitheatre (Hard)",
        	boss: "Shiva",
        	roulette: "Trials",
        	unlock: "The Instruments of Our Deliverance‎"
        }, {
        	level: "50",
        	iLvlReq: "95",
        	name: "Urth's Fount",
        	boss: "Odin",
        	roulette: "Trials",
        	unlock: "Fear and Odin in the Shroud"
        }, {
        	level: "50",
        	iLvlReq: "61",
        	name: "The Minstrel's Ballad: Ultima's Bane",
        	boss: "Ultima Weapon",
        	roulette: "-",
        	unlock: "The Ultimate Ballad"
        }, {
        	level: "50",
        	iLvlReq: "65",
        	name: "The Howling Eye (Extreme)",
        	boss: "Garuda",
        	roulette: "-",
        	unlock: "Gale-force Warning"
        }, {
        	level: "50",
        	iLvlReq: "67",
        	name: "The Navel (Extreme)",
        	boss: "Titan",
        	roulette: "-",
        	unlock: "Quake Me Up Before You O'Ghomoro"
        }, {
        	level: "50",
        	iLvlReq: "67",
        	name: "The Bowl of Embers (Extreme)",
        	boss: "Ifrit",
        	roulette: "-",
        	unlock: "Ifrit Ain't Broke"
        }, {
        	level: "50",
        	iLvlReq: "80",
        	name: "Thornmarch (Extreme)",
        	boss: "Good King Moggle Mog XII",
        	roulette: "-",
        	unlock: "The King Lives"
        }, {
        	level: "50",
        	iLvlReq: "80",
        	name: "The Whorleater (Extreme)",
        	boss: "Leviathan",
        	roulette: "-",
        	unlock: "Whorl of a Time"
        }, {
        	level: "50",
        	iLvlReq: "85",
        	name: "The Striking Tree (Extreme)",
        	boss: "Ramuh",
        	roulette: "-",
        	unlock: "Judgment Bolts and Lightning"
        }, {
        	level: "50",
        	iLvlReq: "95",
        	name: "Akh Afah Amphitheatre (Extreme)",
        	boss: "Shiva",
        	roulette: "-",
        	unlock: "Drop Dead Shiva"
        }]
    };
};
