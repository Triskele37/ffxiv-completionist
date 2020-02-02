import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_76_80 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "76",
        name: "Volcanic Tuff",
        zone: "Kholusia",
        location: "Amity"
    }, {
        level: "76",
        name: "Titancopper Sand",
        zone: "Amh Araeng",
        location: "Mount Biran Mines"
    }, {
        level: "79",
        name: "Dimythrite Sand",
        zone: "Amh Araeng",
        location: "Mount Biran Mines"
    }, {
        level: "80",
        name: "Shade Quartz",
        zone: "Kholusia",
        location: "Amity"
    },
];
