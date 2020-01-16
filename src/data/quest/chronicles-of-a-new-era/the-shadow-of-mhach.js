// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=15&columns=ID,Name&limit=7
import { QuestColumnConfig } from "../columnConfigs";

export const TheShadowOfMhach = {
    name: "The Shadow of Mhach",
	storageKey: "quest.chronicles",
	columns: QuestColumnConfig,
    tasks: [
        {
        	level: "60",
        	name: "Sky Pirates",
        	npc: "Unquiet Trader",
        	unlock: ""
        }, {
        	level: "60",
        	name: "To Rule the Skies",
        	npc: "Utata",
        	unlock: "The Void Arch"
        }, {
        	level: "60",
        	name: "The Weeping City",
        	npc: "Stacia",
        	unlock: "The Weeping City of Mhach"
        }, {
        	level: "60",
        	name: "Freedom for Our Skies",
        	npc: "Leofard",
        	unlock: ""
        }, {
        	level: "60",
        	name: "Unidentified Flying Object",
        	npc: "Slipslix",
        	unlock: ""
        }, {
        	level: "60",
        	name: "Where Shadows Reign",
        	npc: "Stacia",
        	unlock: "Dun Scaith"
        }, {
        	level: "60",
        	name: "A Redbill Farewell",
        	npc: "Leofard",
        	unlock: ""
        },
    ]
};
