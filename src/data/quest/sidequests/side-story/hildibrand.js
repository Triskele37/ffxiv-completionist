import { QuestColumnConfig } from "../../columnConfigs";

export const Hildibrand = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hildibrand-1`;

    return {
        name: "Hildibrand",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "50",
        	name: "The Rise and Fall of Gentlemen",
        	npc: "Wymond",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Back in the Saddle",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "After Her Own Heart",
        	npc: "Wymond",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Immaculate Deception",
        	npc: "Ellie",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Science of Deduction",
        	npc: "Ellie",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Hammer",
        	npc: "Hildibrand",
        	unlock: "Manderville Dance Emote"
        }, {
        	level: "50",
        	name: "Manderville Men",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Three Collectors",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Business of Betrothal",
        	npc: "Ellie",
        	unlock: ""
        }, {
        	level: "50",
        	name: "A Burst of Inspiration",
        	npc: "Briardien",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Seeds of Rebellion",
        	npc: "Tiny Trader",
        	unlock: ""
        }, {
        	level: "50",
        	name: "A Case of Indecency",
        	npc: "Hildibrand",
        	unlock: "Parley"
        }, {
        	level: "50",
        	name: "Eight-armed and Dangerous",
        	npc: "Ellie",
        	unlock: ""
        }, {
        	level: "50",
        	name: "What Price Victory",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Trouble with Truffles",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "The Coliseum Conundrum",
        	npc: "Briardien",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Shades of Sil'dih",
        	npc: "Ellie",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Sibling Strife",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Beneath the Mask",
        	npc: "Hildibrand",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Truths Untold",
        	npc: "Hyuran Woman",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Her Last Vow",
        	npc: "Julyan",
        	unlock: "Wind Up Gentleman, Most Gentlemanly Emote"
        }]
    };
};
