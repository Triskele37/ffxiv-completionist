// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=18&columns=ID,Name&limit=5
import { QuestColumnConfig } from "../columnConfigs";

export const Quest_COANE_The_Four_Lords = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-four-lords`;

    return {
        name: "The Four Lords",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "70",
        	name: "An Auspicious Encounter",
        	npc: "Soroban",
        	unlock: "Hell's Lid (Duty), The Jade Stoa"
        }, {
        	level: "70",
        	name: "Tortoise in Time",
        	npc: "Bunchin",
        	unlock: "The Swallow's Company (Duty)"
        }, {
        	level: "70",
        	name: "The Fire-bird Down Below",
        	npc: "Bunchin",
        	unlock: "Hell's Kier"
        }, {
        	level: "70",
        	name: "Surpassing the Samurai",
        	npc: "Bunchin",
        	unlock: "The Wreath of Snakes"
        }, {
        	level: "70",
        	name: "The Fifth Lord",
        	npc: "Seiryu",
        	unlock: ""
        }]
    };
};
