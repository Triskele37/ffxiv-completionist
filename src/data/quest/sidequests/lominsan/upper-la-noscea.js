import { QuestColumnConfig } from "../../columnConfigs";

export const UpperLaNoscea = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.upper`;

    return {
        name: "Upper La Noscea",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "23",
        	name: "The Hottest of Box Lunches",
        	npc: "Gegeroon",
        	unlock: ""
        }, {
        	level: "23",
        	name: "Buried Truth",
        	npc: "Tanga Tonga",
        	unlock: ""
        }, {
        	level: "34",
        	name: "One Swallow Does Not a Victory Make",
        	npc: "Blaugybal",
        	unlock: ""
        }, {
        	level: "34",
        	name: "The Monster of Bronze Lake",
        	npc: "Rukusa Farusa",
        	unlock: ""
        }, {
        	level: "34",
        	name: "Red, Red Wine",
        	npc: "A'rhunlika",
        	unlock: ""
        }, {
        	level: "34",
        	name: "The Adventure of the Fainting Goldsmith",
        	npc: "Rukusa Farusa",
        	unlock: ""
        }]
    };
};
