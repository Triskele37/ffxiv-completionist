import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Dravanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Old-growth Camphorwood Log",
        zone: "The Churning Mists",
        location: "Weston Waters"
    }, {
        level: "60★",
        name: "Crystalized Sap",
        zone: "The Churning Mists",
        location: "Eil Tohm"
    }, {
        level: "60★★★",
        name: "Brown Mushroom",
        zone: "The Churning Mists",
        location: "Greensward"
    }, {
        level: "60★★★",
        name: "Teak Log",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter"
    },
];
