import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_War_Job_Paladin = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "30",
        name: "Paladin's Pledge"
    }, {
        level: "35",
        name: "Honor Lost"
    }, {
        level: "40",
        name: "Power Struggles"
    }, {
        level: "45",
        name: "Poisoned Hearts"
    }, {
        level: "45",
        name: "Parley in the Sagolii"
    }, {
        level: "50",
        name: "Keeping the Oath"
    }, {
        level: "50",
        name: "A Relic Reborn (Curtana)"
    }, {
        level: "50",
        name: "An Exemplary Example"
    }, {
        level: "52",
        name: "The Paladin Who Cried Wolf"
    }, {
        level: "54",
        name: "Big Sollerets to Fill"
    }, {
        level: "56",
        name: "Hey Soul Crystal"
    }, {
        level: "58",
        name: "All According to Plan"
    }, {
        level: "60",
        name: "This Little Sword of Mine"
    }, {
        level: "60",
        name: "Tournament of the Century"
    }, {
        level: "63",
        name: "In Thal's Name"
    }, {
        level: "65",
        name: "In Nald's Name"
    }, {
        level: "68",
        name: "Fade to Black Lotus"
    }, {
        level: "70",
        name: "Raising the Sword"
    }, {
        level: "80",
        name: "Worth Fighting For"
    }
];
