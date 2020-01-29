import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_War_Job_Dark_Knight = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dark-knight`;

    return {
        name: "Dark Knight",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Our End"
    }, {
        level: "30",
        name: "Ishgardian Justice"
    }, {
        level: "35",
        name: "The Voice in the Abyss"
    }, {
        level: "40",
        name: "Heroic Reprise"
    }, {
        level: "45",
        name: "Declaration of Blood"
    }, {
        level: "50",
        name: "Our Answer"
    }, {
        level: "50",
        name: "The Wages of Mercy"
    }, {
        level: "52",
        name: "The Knight and the Maiden Fair"
    }, {
        level: "54",
        name: "Kindred Spirits"
    }, {
        level: "56",
        name: "Original Sins"
    }, {
        level: "58",
        name: "The Flame in the Abyss"
    }, {
        level: "60",
        name: "Absolution"
    }, {
        level: "60",
        name: "In Memories We Walked"
    }, {
        level: "63",
        name: "The Widow and Her Love"
    }, {
        level: "65",
        name: "The Orphans and the Broken Blade"
    }, {
        level: "68",
        name: "We Can Never Go Home"
    }, {
        level: "70",
        name: "Our Compromise"
    }, {
        level: "80",
        name: "Our Closure"
    }
];
