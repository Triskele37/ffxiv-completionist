import { QuestColumnConfig } from "../../columnConfigs";

export const BlackMageQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.black-mage`;

    return {
        name: "Black Mage",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "Taking the Black"
        }, {
        	level: "35",
        	name: "You'll Never Go Back"
        }, {
        	level: "40",
        	name: "International Relations"
        }, {
        	level: "45",
        	name: "The Voidgate Breathes Gloomy"
        }, {
        	level: "45",
        	name: "The Blood Must Flow"
        }, {
        	level: "50",
        	name: "Always Bet on Black"
        }, {
        	level: "50",
        	name: "A Relic Reborn (Stardust Rod)"
        }, {
        	level: "50",
        	name: "Black Books"
        }, {
        	level: "52",
        	name: "An Unexpected Journey"
        }, {
        	level: "54",
        	name: "A Cunning Plan"
        }, {
        	level: "56",
        	name: "Black Squawk Down"
        }, {
        	level: "58",
        	name: "Destruction in the Name of Justice"
        }, {
        	level: "60",
        	name: "The Defiant Ones"
        }, {
        	level: "60",
        	name: "Shades of Shatotto"
        }, {
        	level: "63",
        	name: "Golems Gone Wild"
        }, {
        	level: "65",
        	name: "When the Golems Get Tough"
        }, {
        	level: "68",
        	name: "Unnatural Selection"
        }, {
        	level: "70",
        	name: "One Golem to Rule Them All"
        }, {
        	level: "80",
        	name: "A Home for a Tome"
        }]
    };
};
