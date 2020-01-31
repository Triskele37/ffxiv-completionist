import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Role_Physical_DPS = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "No Greater Sport"
    }, {
        level: "72",
        name: "Vengeance in Defeat"
    }, {
        level: "74",
        name: "Freedom from Privilege"
    }, {
        level: "76",
        name: "The Hunter's Legacy"
    }, {
        level: "78",
        name: "Fellowship Restored"
    }, {
        level: "80",
        name: "Courage Born of Fear"
    }
];
