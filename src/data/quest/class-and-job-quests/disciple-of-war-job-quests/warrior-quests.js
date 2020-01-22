import { QuestColumnConfig } from "../../columnConfigs";

export const WarriorQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.warrior`;

    return {
        name: "Warrior",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "30",
        	name: "Pride and Duty (Will Take You from the Mountain)"
        }, {
        	level: "35",
        	name: "Embracing the Beast"
        }, {
        	level: "40",
        	name: "Curious Gorge Goes to Wineport"
        }, {
        	level: "45",
        	name: "Looking the Part"
        }, {
        	level: "45",
        	name: "Proof Is the Pudding"
        }, {
        	level: "50",
        	name: "How to Quit You"
        }, {
        	level: "50",
        	name: "A Relic Reborn (Bravura)"
        }, {
        	level: "50",
        	name: "Better Axe Around"
        }, {
        	level: "52",
        	name: "Duty and the Beast"
        }, {
        	level: "54",
        	name: "The Bear Necessity"
        }, {
        	level: "56",
        	name: "Pirates of Shallow Water"
        }, {
        	level: "56",
        	name: "How to Train Your Warrior"
        }, {
        	level: "58",
        	name: "Slap an' Chop"
        }, {
        	level: "60",
        	name: "And My Axe"
        }, {
        	level: "60",
        	name: "Curious Gorge Meets His Match"
        }, {
        	level: "63",
        	name: "Field Training"
        }, {
        	level: "65",
        	name: "When Push Comes to Shove"
        }, {
        	level: "68",
        	name: "Going the Distance"
        }, {
        	level: "70",
        	name: "The Heart of the Problem"
        }, {
        	level: "80",
        	name: "Once, Twice, Three Times a Warrior"
        }]
    };
};
