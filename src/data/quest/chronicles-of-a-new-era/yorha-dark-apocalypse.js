// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=20&columns=ID,Name
import { QuestColumnConfig } from "../columnConfigs";

export const YoRHaDarkApocalypse = {
    name: "YoRHa: Dark Apocalypse",
	storageKey: "quest.chronicles",
	columns: QuestColumnConfig,
    tasks: [
        {
        	level: "70",
        	name: "Word about Komra",
        	npc: "Gossipy Dwarf",
        	unlock: ""
        }, {
        	level: "80",
        	name: "A Scandal in Komra",
        	npc: "Gossipy Dwarf",
        	unlock: ""
        }, {
        	level: "80",
        	name: "On the Threshold",
        	npc: "Dig Site Chief",
        	unlock: ""
        }, {
        	level: "80",
        	name: "An Academic Dispute",
        	npc: "Anogg",
        	unlock: ""
        }, {
        	level: "80",
        	name: "Heads, I Win",
        	npc: "Konogg",
        	unlock: ""
        }, {
        	level: "80",
        	name: "Tails, You Lose",
        	npc: "Anogg",
        	unlock: ""
        },
    ]
};
