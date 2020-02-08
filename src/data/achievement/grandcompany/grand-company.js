import { DataGroup } from "../../DataGroup";

export const Achievements_Grand_Company_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Obtain a complete set of Grand Company soldier armor consisting of a soldier's cap, a soldier's overcoat, a pair of soldier's gloves, and a pair of soldier's boots.\n\n* Speak to Jonathas with all four items equipped.",
        name: "I Make This Look Good",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain a chocobo whistle.",
        name: "My Little Chocobo",
        points: 5,
        reward: "-"
    }, {
        description: "Purchase all three sets of Grand Company chocobo barding.",
        name: "Pimp Your Ride",
        points: 5,
        reward: "Title: Cavalier"
    }, {
        description: "Send your squadron on 10 successful assignments.",
        name: "The Mob Squad I",
        points: 5,
        reward: "-"
    }, {
        description: "Send your squadron on 30 successful assignments.",
        name: "The Mob Squad II",
        points: 5,
        reward: "-"
    }, {
        description: "Send your squadron on 100 successful assignments.",
        name: "The Mob Squad III",
        points: 10,
        reward: "-"
    }, {
        description: "Lead your squadron on 10 successful command missions.",
        name: "Dear Leader I",
        points: 5,
        reward: "-"
    }, {
        description: "Lead your squadron on 30 successful command missions.",
        name: "Dear Leader II",
        points: 5,
        reward: "-"
    }, {
        description: "Lead your squadron on 100 successful command missions.",
        name: "Dear Leader III",
        points: 10,
        reward: "-"
    }
];
