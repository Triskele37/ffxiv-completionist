import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_Magic_Job_Red_Mage = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.red-mage`;

    return {
        name: "Red Mage",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Taking the Red"
    }, {
        level: "50",
        name: "The Crimson Duelist"
    }, {
        level: "52",
        name: "A Rewarding Struggle"
    }, {
        level: "54",
        name: "Tracking the Cabal"
    }, {
        level: "56",
        name: "A Vermilion Vendetta"
    }, {
        level: "58",
        name: "On Lambard's Trail"
    }, {
        level: "60",
        name: "Stained in Scarlet"
    }, {
        level: "60",
        name: "The Color of Her Hair"
    }, {
        level: "63",
        name: "Traced in Blood"
    }, {
        level: "65",
        name: "Nightkin"
    }, {
        level: "68",
        name: "Child of Lilith"
    }, {
        level: "70",
        name: "With Heart and Steel"
    }, {
        level: "80",
        name: "Succession of Steel"
    }
];
