import { QuestColumnConfig } from "../../columnConfigs";

export const WeaverQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.weaver`;

    return {
        name: "Weaver",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Way of the Weaver"
        }, {
        	level: "1",
        	name: "My First Needle"
        }, {
        	level: "5",
        	name: "Once More unto the Breeches"
        }, {
        	level: "10",
        	name: "Alternative Applications"
        }, {
        	level: "15",
        	name: "Practical Needs"
        }, {
        	level: "20",
        	name: "Materia Concerns"
        }, {
        	level: "25",
        	name: "That Velveteen Dress"
        }, {
        	level: "30",
        	name: "Miner on a Mission"
        }, {
        	level: "35",
        	name: "Designed by Committee"
        }, {
        	level: "40",
        	name: "A Subtle Inquiry"
        }, {
        	level: "45",
        	name: "The Intervention"
        }, {
        	level: "50",
        	name: "A Miner Reborn"
        }, {
        	level: "50",
        	name: "The Social Knitwork"
        }, {
        	level: "53",
        	name: "Tomboy Foolery"
        }, {
        	level: "55",
        	name: "For Lover and Country"
        }, {
        	level: "58",
        	name: "Spinning the Truth"
        }, {
        	level: "60",
        	name: "Never Leave without a Good-bye"
        }, {
        	level: "60",
        	name: "When East Meets West"
        }, {
        	level: "63",
        	name: "The Butterfly Effect"
        }, {
        	level: "65",
        	name: "The Crane's Caveat"
        }, {
        	level: "68",
        	name: "A Geiko for All Seasons"
        }, {
        	level: "70",
        	name: "Send Me an Angel"
        }]
    };
};
