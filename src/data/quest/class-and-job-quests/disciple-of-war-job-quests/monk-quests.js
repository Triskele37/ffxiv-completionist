import { QuestColumnConfig } from "../../columnConfigs";

export const MonkQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.monk`;

    return {
        name: "Monk",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "Brother from Another Mother"
        }, {
        	level: "35",
        	name: "Insulted Intelligence"
        }, {
        	level: "40",
        	name: "A Slave to the Aether"
        }, {
        	level: "45",
        	name: "The Pursuit of Power"
        }, {
        	level: "45",
        	name: "Good Vibrations"
        }, {
        	level: "50",
        	name: "Five Easy Pieces"
        }, {
        	level: "50",
        	name: "A Relic Reborn (Sphairai)"
        }, {
        	level: "50",
        	name: "The Legend Continues"
        }, {
        	level: "52",
        	name: "Let's Talk about Sects"
        }, {
        	level: "54",
        	name: "Against the Shadow"
        }, {
        	level: "56",
        	name: "Fight the Battle to Win"
        }, {
        	level: "58",
        	name: "Stop the Senseless Killing"
        }, {
        	level: "60",
        	name: "Appetite for Destruction"
        }, {
        	level: "60",
        	name: "A Fistful of Resolve"
        }, {
        	level: "63",
        	name: "Return of the Monk"
        }, {
        	level: "65",
        	name: "Cross-fist Training"
        }, {
        	level: "68",
        	name: "Choices and Paths"
        }, {
        	level: "70",
        	name: "The Power to Protect"
        }, {
        	level: "80",
        	name: "A Monk's Legacy"
        }]
    };
};
