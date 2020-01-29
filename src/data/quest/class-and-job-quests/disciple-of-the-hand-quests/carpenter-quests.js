import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_The_Hand_Carpenter = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.carpenter`;

    return {
        name: "Carpenter",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Way of the Carpenter"
    }, {
        level: "1",
        name: "My First Saw"
    }, {
        level: "5",
        name: "To Be the Wood"
    }, {
        level: "10",
        name: "Supplies for the Sick"
    }, {
        level: "15",
        name: "A Carpenter in Need"
    }, {
        level: "20",
        name: "The Lance's Lesson"
    }, {
        level: "25",
        name: "A Crisis of Confidence"
    }, {
        level: "30",
        name: "Between Captain and Conjurer"
    }, {
        level: "35",
        name: "Growing Apart"
    }, {
        level: "40",
        name: "Memento Mori"
    }, {
        level: "45",
        name: "Gone till the Sixth Astral Moon"
    }, {
        level: "50",
        name: "Saving Captain Gairhard"
    }, {
        level: "50",
        name: "Lance of a Lifetime"
    }, {
        level: "53",
        name: "A-hunting He Will Go"
    }, {
        level: "55",
        name: "Ministers of Grace Defend Him"
    }, {
        level: "58",
        name: "The Son Also Rises"
    }, {
        level: "60",
        name: "More Fierce than Fire"
    }, {
        level: "60",
        name: "Uncharted Territory"
    }, {
        level: "63",
        name: "The Game of Confidence"
    }, {
        level: "65",
        name: "A Lesson in Listening"
    }, {
        level: "68",
        name: "Live and Let Dine"
    }, {
        level: "70",
        name: "Tea Party Rules"
    }
];
