import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Quarrying_Level_41_45 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "42",
        name: "Electrum Sand",
        zone: "Upper La Noscea",
        location: "Bronze Lake"
    }, {
        level: "45",
        name: "Marble",
        zone: "Upper La Noscea",
        location: "Bronze Lake"
    },
];
