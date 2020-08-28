import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_76_80 = function(parent) {
    return new DataGroup("76-80", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "76",
        name: "Volcanic Tuff",
        zone: "Kholusia",
        closestAetheryte: "Tomra",
        coordinates: "(x22,y16)",
        nodeTimer: ""
    }, {
        level: "76",
        name: "Titancopper Sand",
        zone: "Amh Araeng",
        closestAetheryte: "Twine",
        coordinates: "(x15,y12)",
        nodeTimer: ""
    }, {
        level: "79",
        name: "Dimythrite Sand",
        zone: "Amh Araeng",
        closestAetheryte: "Twine",
        coordinates: "(x15,y12)",
        nodeTimer: ""
    }, {
        level: "80",
        name: "Shade Quartz",
        zone: "Kholusia",
        closestAetheryte: "Tomra",
        coordinates: "(x22,y18)",
        nodeTimer: "Ephemeral (4PM)"
    }, {
        level: "80★★",
        name: "Thunder Rock",
        zone: "Kholusia",
        closestAetheryte: "Tomra",
        coordinates: "(x13,y13)",
        nodeTimer: "Ephemeral (8PM)"
    },
];
