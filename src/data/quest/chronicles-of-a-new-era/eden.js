// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=19&columns=ID,Name
import { QuestColumnConfig } from "../columnConfigs";

export const Quest_COANE_Eden = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eden`;

    return {
        name: "Eden",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "80",
        	name: "In the Middle of Nowhere",
        	npc: "Anxious Crystarium Guard",
        	unlock: ""
        }, {
        	level: "80",
        	name: "Deploy the Core",
        	npc: "Ryne",
        	unlock: "Eden's Gate: Resurrection"
        }, {
        	level: "80",
        	name: "One Fell Swoop",
        	npc: "Ryne",
        	unlock: "Eden's Gate: Descent"
        }, {
        	level: "80",
        	name: "Nor Any Drop to Drink",
        	npc: "Ryne",
        	unlock: "Eden's Gate: Inundation"
        }, {
        	level: "80",
        	name: "Super Seismic",
        	npc: "Ryne",
        	unlock: "Eden's Gate: Sepulcher"
        }, {
        	level: "80",
        	name: "The Next Piece of the Puzzle",
        	npc: "Ryne",
        	unlock: ""
        }]
    };
};
