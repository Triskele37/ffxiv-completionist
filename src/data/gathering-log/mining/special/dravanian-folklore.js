import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Mining_Special_Dravanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Aurum Regis Ore",
        zone: "The Churning Mists",
        location: "Mother of the Sheave"
    }, {
        level: "60★",
        name: "Lumythrite Ore",
        zone: "The Churning Mists",
        location: "Sothton Walls"
    },
];
