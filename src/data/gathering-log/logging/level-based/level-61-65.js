import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_61_65 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "61",
        name: "Loquat",
        zone: "The Fringes",
        location: "East End",
        usage: "ALC, CUL, Provisioning",
        special: "",
    }, {
        level: "61",
        name: "Beech Log",
        zone: "The Fringes",
        location: "East End",
        usage: "CRP, Collectable, Provisioning",
        special: "",
    }, {
        level: "63",
        name: "Bamboo Shoot",
        zone: "Yanxia",
        location: "Kusakari",
        usage: "CUL, Collectable",
        special: "Unspoiled (10AM/PM)",
    }, {
        level: "63",
        name: "Larch Log",
        zone: "The Ruby Sea",
        location: "Onokoro",
        usage: "CRP, Collectable, Provisioning",
        special: "",
    }, {
        level: "64",
        name: "Pine Resin",
        zone: "Yanxia",
        location: "The Heron's Flight",
        usage: "ALC, Provisioning",
        special: "",
    }, {
        level: "64",
        name: "Sparkstone",
        zone: "The Ruby Sea",
        location: "Onokoro",
        usage: "Collectable",
        special: "",
    }, {
        level: "65",
        name: "Shiitake Mushroom",
        zone: "The Ruby Sea",
        location: "Onokoro",
        usage: "CUL, Provisioning",
        special: "",
    }, {
        level: "65",
        name: "Pine Log",
        zone: "Yanxia",
        location: "The Heron's Flight",
        usage: "CRP",
        special: "",
    }, {
        level: "65",
        name: "Malleable Still Material",
        zone: "Yanxia",
        location: "The Heron's Flight",
        usage: "Collectable",
        special: "",
    },
];
