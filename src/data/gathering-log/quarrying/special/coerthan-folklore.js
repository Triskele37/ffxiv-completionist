import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Quarrying_Special_Coerthan_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Violet Quartz",
        zone: "Coerthas Western Highlands",
        location: "The Convictory"
    }, {
        level: "60★",
        name: "Astral Moraine",
        zone: "Coerthas Western Highlands",
        location: "Hemlock"
    },
];
