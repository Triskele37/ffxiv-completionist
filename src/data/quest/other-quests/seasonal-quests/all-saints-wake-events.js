import { DataGroup } from "../../../DataGroup";

export const Quests_Other_Seasonal_All_Saints_Wake = function(parent) {
    return new DataGroup("All Saints' Wake", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "The Sinister Soiree"
    }, {
        level: "15",
        name: "The Parlous Ploy"
    }, {
        level: "15",
        name: "The Sordid Cipher"
    }, {
        level: "15",
        name: "The Macabre Manor"
    }, {
        level: "15",
        name: "Fear and Delight"
    }, {
        level: "15",
        name: "A Glamourous Guise"
    }, {
        level: "15",
        name: "Haunting Grounds"
    }
];
