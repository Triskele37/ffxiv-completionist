import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Role_Magical_DPS = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Hollow Pursuits"
    }, {
        level: "72",
        name: "A Voice from the Void"
    }, {
        level: "74",
        name: "Echoes of the Past"
    }, {
        level: "76",
        name: "Nyelbert's Lament"
    }, {
        level: "78",
        name: "Taynor's Training Day"
    }, {
        level: "80",
        name: "A Tearful Reunion"
    }
];
