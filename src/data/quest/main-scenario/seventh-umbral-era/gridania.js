import { QuestColumnConfig } from "../../columnConfigs";

export const GridaniaStartingQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gridania`;

    return {
        name: "Gridania",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Close to Home",
        	npc: "Mother Miounne",
        	unlock: "Return"
        }, {
        	level: "4",
        	name: "To the Bannock",
        	npc: "Mother Miounne",
        	unlock: ""
        }, {
        	level: "5",
        	name: "Passing Muster",
        	npc: "Galfrid",
        	unlock: ""
        }, {
        	level: "5",
        	name: "Chasing Shadows",
        	npc: "Galfrid",
        	unlock: ""
        }, {
        	level: "6",
        	name: "An Eft for Effort",
        	npc: "Galfrid",
        	unlock: ""
        }, {
        	level: "7",
        	name: "Eggs over Queasy",
        	npc: "Galfrid",
        	unlock: ""
        }, {
        	level: "8",
        	name: "Surveying the Damage",
        	npc: "Monranguin",
        	unlock: ""
        }, {
        	level: "9",
        	name: "Butcher of Greentear",
        	npc: "Pauline",
        	unlock: ""
        }, {
        	level: "9",
        	name: "A Soldier's Breakfast",
        	npc: "Pauline",
        	unlock: ""
        }, {
        	level: "9",
        	name: "Spirithold Broken",
        	npc: "Galfrid",
        	unlock: "Inn Rooms"
        }, {
        	level: "10",
        	name: "On to Bentbranch",
        	npc: "Mother Miounne",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Feeding Time",
        	npc: "Keitha",
        	unlock: ""
        }, {
        	level: "10",
        	name: "You Shall Not Trespass",
        	npc: "Keitha",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Don't Look Down",
        	npc: "Osha Jaab",
        	unlock: ""
        }, {
        	level: "11",
        	name: "In the Grim Darkness of the Forest",
        	npc: "Theodore",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Threat Level Elevated",
        	npc: "Roseline",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Ruffled Feathers",
        	npc: "Keitha",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Migrant Marauders",
        	npc: "Eylgar",
        	unlock: ""
        }, {
        	level: "13",
        	name: "Skeletons in My Deepcroft",
        	npc: "Lothaire",
        	unlock: ""
        }, {
        	level: "13",
        	name: "A Hearer Is Often Late",
        	npc: "Lothaire",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Lights Out",
        	npc: "Armelle",
        	unlock: ""
        }, {
        	level: "13",
        	name: "Salvaging the Scene",
        	npc: "Armelle",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Leia's Legacy",
        	npc: "Luquelot",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Dread Is in the Air",
        	npc: "Luquelot",
        	unlock: ""
        }, {
        	level: "14",
        	name: "To Guard a Guardian",
        	npc: "Mother Miounne",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Festive Endeavors",
        	npc: "Lewin",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Renewing the Covenant",
        	npc: "Mother Miounne",
        	unlock: ""
        }, {
        	level: "15",
        	name: "The Gridanian Envoy",
        	npc: "Kan-E-Senna",
        	unlock: "Airships"
        }, {
        	level: "15",
        	name: "Call of the Sea",
        	npc: "Bartholomew",
        	unlock: ""
        }]
    };
};
