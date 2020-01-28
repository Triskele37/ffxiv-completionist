import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.limsa-lominsa`;

    return {
        name: "Limsa Lominsa",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Close to Home",
        	npc: "Baderon",
        	unlock: "Return"
        }, {
        	level: "4",
        	name: "On to Summerford",
        	npc: "Baderon",
        	unlock: ""
        }, {
        	level: "5",
        	name: "Dressed to Call",
        	npc: "Staelwyrn",
        	unlock: ""
        }, {
        	level: "5",
        	name: "Lurkers in the Grotto",
        	npc: "Staelwyrn",
        	unlock: ""
        }, {
        	level: "6",
        	name: "Further Afield",
        	npc: "Gurcant",
        	unlock: ""
        }, {
        	level: "7",
        	name: "Washed Up",
        	npc: "Staelwyrn",
        	unlock: ""
        }, {
        	level: "8",
        	name: "Double Dealing",
        	npc: "Staelwyrn",
        	unlock: ""
        }, {
        	level: "9",
        	name: "Loam Maintenance",
        	npc: "Gurcant",
        	unlock: ""
        }, {
        	level: "9",
        	name: "Plowshares to Swords",
        	npc: "Pfrewahl",
        	unlock: ""
        }, {
        	level: "9",
        	name: "Just Deserts",
        	npc: "Staelwyrn",
        	unlock: "Inn Rooms"
        }, {
        	level: "10",
        	name: "Sky-high",
        	npc: "Baderon",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Courier for a Day",
        	npc: "Wyrkrhit",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Thanks a Million",
        	npc: "Wyrkrhit",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Relighting the Torch",
        	npc: "Fraeloef",
        	unlock: ""
        }, {
        	level: "11",
        	name: "Farmer of Fortune",
        	npc: "Lyulf",
        	unlock: ""
        }, {
        	level: "11",
        	name: "On to the Drydocks",
        	npc: "H'naanza",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Without a Doubt",
        	npc: "Ahtbyrm",
        	unlock: ""
        }, {
        	level: "12",
        	name: "Righting the Shipwright",
        	npc: "Haldbroda",
        	unlock: ""
        }, {
        	level: "13",
        	name: "Do Angry Pirates Dream",
        	npc: "Ahtbyrm",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Victory in Peril",
        	npc: "Ghimthota",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Men of the Blue Tattoos",
        	npc: "Ghimthota",
        	unlock: ""
        }, {
        	level: "14",
        	name: "Feint and Strike",
        	npc: "Baderon",
        	unlock: ""
        }, {
        	level: "14",
        	name: "High Society",
        	npc: "Reyner",
        	unlock: ""
        }, {
        	level: "14",
        	name: "A Mizzenmast Repast",
        	npc: "Baderon",
        	unlock: ""
        }, {
        	level: "15",
        	name: "The Lominsan Envoy",
        	npc: "Merlwyb Bloefhiswyn",
        	unlock: "Airships"
        }, {
        	level: "15",
        	name: "Call of the Sea",
        	npc: "Bartholomew",
        	unlock: ""
        }]
    };
};
