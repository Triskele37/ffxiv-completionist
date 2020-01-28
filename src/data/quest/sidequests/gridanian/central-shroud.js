import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Gridanian_Central_Shroud = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.central`;

    return {
        name: "Central Shroud",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "5",
        	name: "Idle Initiatives",
        	npc: "Tsubh Khamazom",
        	unlock: ""
        }, {
        	level: "7",
        	name: "More than a Flesh Wound",
        	npc: "Arold",
        	unlock: ""
        }, {
        	level: "7",
        	name: "Splitting Shells",
        	npc: "Maurelin",
        	unlock: ""
        }, {
        	level: "8",
        	name: "Parasite Cleave",
        	npc: "Gabineaux",
        	unlock: ""
        }, {
        	level: "8",
        	name: "Soil Despoilers",
        	npc: "Gabineaux",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Simply the Hest (Gridania)",
        	npc: "Tierney",
        	unlock: "Unlocks Guildhests"
        }, {
        	level: "10",
        	name: "Not a Material Girl",
        	npc: "Kukuvachi",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Look, but Won't Touch",
        	npc: "Roseline",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Where the Heart Is (The Lavender Beds)",
        	npc: "Margeria",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Extending Fences",
        	npc: "Luquelot",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Walking the Planks",
        	npc: "Waltheof",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Sting in a Bottle",
        	npc: "Waltheof",
        	unlock: ""
        }, {
        	level: "12",
        	name: "If Ye Break Faith",
        	npc: "Finnea",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Favor for the Fisherwoman",
        	npc: "Berthe",
        	unlock: ""
        }, {
        	level: "13",
        	name: "Slimy Hollows",
        	npc: "Finnea",
        	unlock: ""
        }, {
        	level: "15",
        	name: "So You Think You Can Ride This Chocobo",
        	npc: "Katering",
        	unlock: "Unlocks Chocobo Racing"
        }, {
        	level: "29",
        	name: "Fungal Frolic",
        	npc: "Marcette",
        	unlock: ""
        }, {
        	level: "29",
        	name: "Shocking Discoveries",
        	npc: "Marcette",
        	unlock: ""
        }, {
        	level: "29",
        	name: "In Too Deep",
        	npc: "Hobriaut",
        	unlock: ""
        }, {
        	level: "29",
        	name: "Doing the Dirty Work",
        	npc: "Marcette",
        	unlock: ""
        }, {
        	level: "30",
        	name: "Bird in Hand",
        	npc: "Luquelot",
        	unlock: "Unlocks Chocobo Raising"
        }]
    };
};
