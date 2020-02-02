import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Gyr_Abanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Chromite Ore",
        zone: "The Peaks",
        location: "Wightrock"
    }, {
        level: "70★",
        name: "Gyr Abanian Spring Water",
        zone: "The Peaks",
        location: "Wightrock"
    }, {
        level: "70★★★",
        name: "Gyr Abanian Ore",
        zone: "The Fringes",
        location: "Virdjala"
    }, {
        level: "70★★★",
        name: "Evergleam Ore",
        zone: "The Lochs",
        location: "Loch Seld"
    },
];
