import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_The_Hand_Armorer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.armorer`;

    return {
        name: "Armorer",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Way of the Armorer"
    }, {
        level: "1",
        name: "My First Doming Hammer"
    }, {
        level: "5",
        name: "From Thigh to Neck"
    }, {
        level: "10",
        name: "The Base Fundamentals"
    }, {
        level: "15",
        name: "One's Own Worst Critic"
    }, {
        level: "20",
        name: "An Armorer's Pride"
    }, {
        level: "25",
        name: "Showing Your Steel"
    }, {
        level: "30",
        name: "May the Best Armorer Win"
    }, {
        level: "35",
        name: "Pans of Steel"
    }, {
        level: "40",
        name: "Best of Three"
    }, {
        level: "45",
        name: "For the Good of the Guild"
    }, {
        level: "50",
        name: "Rivalry and Respect"
    }, {
        level: "50",
        name: "The Breaking of Blanstyr"
    }, {
        level: "53",
        name: "Light-Headed"
    }, {
        level: "55",
        name: "Fancy Lancer"
    }, {
        level: "58",
        name: "The Reforging of Blanstyr"
    }, {
        level: "60",
        name: "The Pride of Vymelli"
    }, {
        level: "60",
        name: "Original Blanstyr"
    }, {
        level: "63",
        name: "Eastern Apprentice"
    }, {
        level: "65",
        name: "Forging with Scales"
    }, {
        level: "68",
        name: "Head to Head Contest"
    }, {
        level: "70",
        name: "A Confluence of Style"
    }
];
