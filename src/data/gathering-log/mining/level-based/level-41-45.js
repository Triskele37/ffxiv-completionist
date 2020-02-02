import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_41_45 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "41",
        name: "Raw Turquoise",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "43",
        name: "Electrum Ore",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "GSM, Provisioning",
        special: "",
    }, {
        level: "44",
        name: "Raw Amber",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "45",
        name: "Raw Rubellite",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "ALC, GSM, Provisioning",
        special: "",
    },
];
