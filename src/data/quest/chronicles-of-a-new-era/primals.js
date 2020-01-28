// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=10&columns=ID,Name&limit=15
import { QuestColumnConfig } from "../columnConfigs";

export const Quest_COANE_Primals = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.primals`;

    return {
        name: "Primals",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "50",
        	name: "A Recurring Problem",
        	npc: "Minfilia",
        	unlock: "Enable (Hard) Primals"
        }, {
        	level: "50",
        	name: "Ifrit Bleeds, We Can Kill It",
        	npc: "Thancred",
        	unlock: "The Bowl of Embers (Hard)"
        }, {
        	level: "50",
        	name: "In for Garuda Awakening",
        	npc: "Papalymo",
        	unlock: "The Howling Eye (Hard)"
        }, {
        	level: "50",
        	name: "In a Titan Spot",
        	npc: "Y'shtola",
        	unlock: "The Navel (Hard)"
        }, {
        	level: "50",
        	name: "Primal Nature",
        	npc: "Urianger",
        	unlock: "Enables (Extreme) Primals"
        }, {
        	level: "50",
        	name: "Gale-force Warning",
        	npc: "Vorsaile Heuloix",
        	unlock: "The Howling Eye (Extreme)"
        }, {
        	level: "50",
        	name: "Quake Me Up Before You O'Ghomoro",
        	npc: "Urianger",
        	unlock: "The Navel (Extreme)"
        }, {
        	level: "50",
        	name: "Ifrit Ain't Broke",
        	npc: "Urianger",
        	unlock: "The Bowl of Embers (Extreme)"
        }, {
        	level: "50",
        	name: "To Tussle with Gods",
        	npc: "Urianger",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Primal Focus",
        	npc: "Laraina",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The King Lives",
        	npc: "Urianger",
        	unlock: "Thornmarch (Extreme)"
        }, {
        	level: "50",
        	name: "Whorl of a Time",
        	npc: "Urianger",
        	unlock: "The Whorleater (Extreme)"
        }, {
        	level: "50",
        	name: "Judgment Bolts and Lightning",
        	npc: "Scarlet",
        	unlock: "The Striking Tree (Extreme)"
        }, {
        	level: "50",
        	name: "Drop Dead Shiva",
        	npc: "Urianger",
        	unlock: "The Akh Afah Amphitheatre (Extreme)"
        }, {
        	level: "50",
        	name: "Fear and Odin in the Shroud",
        	npc: "Scarlet",
        	unlock: "Urth's Fount"
        }]
    };
};
