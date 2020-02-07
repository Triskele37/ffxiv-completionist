import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Level_41_45 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "41",
        name: "Sagolii Sage",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "ALC, CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "42",
        name: "Black Scorpion",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "ALC, Provisioning",
        special: "",
    }, {
        level: "43",
        name: "Rolanberry",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "CUL, Provisioning",
        special: "",
    }, {
        level: "43",
        name: "Rolanberry Seeds",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "Gardening",
        special: "Hidden",
    }, {
        level: "45",
        name: "Dart Frog",
        zone: "Upper La Noscea",
        location: "Bronze Lake",
        usage: "ALC, Provisioning",
        special: "",
    },
];
