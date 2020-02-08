import { DataGroup } from "../../DataGroup";

export const Achievements_Legacy_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Complete level 20 caravan security in less than 12 minutes (Earth time).",
        name: "Twelve Minutes or Less or Your Cargo's Free",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 20 caravan security in less than 10 minutes (Earth time).",
        name: "Ten Minutes or Less or Your Cargo's Free",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 20 caravan security in less than 8 minutes (Earth time).",
        name: "Eight Minutes or Less or Your Cargo's Free",
        points: 10,
        reward: "Title: Featherfoot"
    }, {
        description: "Complete level 40 caravan security in less than 12 minutes (Earth time).",
        name: "Gone in Twelve Minutes",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 40 caravan security in less than 10 minutes (Earth time).",
        name: "Gone in Ten Minutes",
        points: 5,
        reward: "-"
    }, {
        description: "Complete level 40 caravan security in less than 8 minutes (Earth time).",
        name: "Gone in Eight Minutes",
        points: 10,
        reward: "Title: Lightning"
    }, {
        description: "Protect a total of 100 packs of chocobo cargo.",
        name: "Handle with Care I",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 500 packs of chocobo cargo.",
        name: "Handle with Care II",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 1,000 packs of chocobo cargo.",
        name: "Handle with Care III",
        points: 5,
        reward: "-"
    }, {
        description: "Protect a total of 5,000 packs of chocobo cargo.",
        name: "Handle with Care IV",
        points: 10,
        reward: "Title: A Bo's Best Friend"
    }, {
        description: "Protect a total of 10,000 packs of chocobo cargo.",
        name: "Chocobo Shrugged",
        points: 20,
        reward: "-"
    },
];
