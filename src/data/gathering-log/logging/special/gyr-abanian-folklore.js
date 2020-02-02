import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Gyr_Abanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Torreya Log",
        zone: "The Lochs",
        location: "Stacks"
    }, {
        level: "70★★",
        name: "Black Willow Log",
        zone: "The Fringes",
        location: "Pike Falls"
    }, {
        level: "70★★",
        name: "Hardened Veteran Tree Sap",
        zone: "The Fringer",
        location: "Pike Falls"
    }, {
        level: "70★★★",
        name: "Urunday Log",
        zone: "The Peaks",
        location: "Sleeping Stones"
    },
];
