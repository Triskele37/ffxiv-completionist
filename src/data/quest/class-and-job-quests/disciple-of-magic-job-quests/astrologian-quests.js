import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Class_And_Job_Disciple_Of_Magic_Job_Astrologian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.astrologian`;

    return {
        name: "Astrologian",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Stairway to the Heavens"
    }, {
        level: "30",
        name: "Fortune Favors the Bole"
    }, {
        level: "35",
        name: "Hanging in the Balance"
    }, {
        level: "40",
        name: "A Lesson in Patience"
    }, {
        level: "40",
        name: "Slings and Arrows"
    }, {
        level: "45",
        name: "Ewer Right"
    }, {
        level: "50",
        name: "Loved by the Sun"
    }, {
        level: "50",
        name: "Spearheading Initiatives"
    }, {
        level: "50",
        name: "Sharlayan Ascending"
    }, {
        level: "52",
        name: "Empty Nest"
    }, {
        level: "54",
        name: "Conviction"
    }, {
        level: "56",
        name: "Feather in the Cap"
    }, {
        level: "58",
        name: "Trumped"
    }, {
        level: "60",
        name: "The Hands of Fate"
    }, {
        level: "60",
        name: "East Meets West"
    }, {
        level: "63",
        name: "Ride Like the Wind"
    }, {
        level: "65",
        name: "Come Rain or Shrine"
    }, {
        level: "68",
        name: "Behind Door Number Two"
    }, {
        level: "70",
        name: "Foxfire"
    }, {
        level: "80",
        name: "Love, Astrologically"
    }
];
