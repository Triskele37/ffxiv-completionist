import { DataGroup } from "../../DataGroup";

export const Achievements_Legacy_Currency = function(parent) {
    return new DataGroup("Currency", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Earn a cumulative total of 1,000 gil from defeating enemies.",
        name: "You Can't Take It with You I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000 gil from defeating enemies.",
        name: "You Can't Take It with You II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000 gil from defeating enemies.",
        name: "You Can't Take It with You III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000,000 gil from defeating enemies.",
        name: "You Can't Take It with You IV",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000,000 gil from defeating enemies.",
        name: "You Can't Take It with You V",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000,000 gil from defeating enemies.",
        name: "Never Met a Corpse I Couldn't Rifle",
        points: 10,
        reward: "Title: Ruthless Gillionaire"
    },
];
