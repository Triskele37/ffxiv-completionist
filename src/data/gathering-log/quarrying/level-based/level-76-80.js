import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_76_80 = function(parent) {
    return new DataGroup("76-80", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "76",
        name: "Volcanic Tuff",
        zone: "Kholusia",
        location: "Amity",
        usage: "GSM",
        special: "",
    }, {
        level: "76",
        name: "Titancopper Sand",
        zone: "Amh Araeng",
        location: "Mount Biran Mines",
        usage: "GSM, Provisioning",
        special: "",
    }, {
        level: "79",
        name: "Dimythrite Sand",
        zone: "Amh Araeng",
        location: "Mount Biran Mines",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "80",
        name: "Shade Quartz",
        zone: "Kholusia",
        location: "Amity",
        usage: "Reducible",
        special: "Ephemeral (4 PM)",
    },
];
