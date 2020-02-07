import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Rhalgr's Reach";
    return data;
};

const tasks = [
    {
        level: "60",
        name: "None Forgotten, None Forsaken",
        npc: "Galiena",
        unlock: ""
    }, {
        level: "60",
        name: "Not While Their Names Are Still Spoken",
        npc: "M'naago",
        unlock: ""
    }, {
        level: "61",
        name: "Hard Blow",
        npc: "Straight-arrow Sutler",
        unlock: ""
    }, {
        level: "61",
        name: "Mother's Boy",
        npc: "Wounded Resistance Fighter",
        unlock: ""
    }, {
        level: "69",
        name: "Ant Juice",
        npc: "Ranulf",
        unlock: ""
    }, {
        level: "69",
        name: "Dearest Daughter",
        npc: "Elderly Private",
        unlock: ""
    }, {
        level: "69",
        name: "Fallen Friend of Mine",
        npc: "Ananta Battlemaid",
        unlock: ""
    }, {
        level: "70",
        name: "Dreaming of Home",
        npc: "Wichard",
        unlock: ""
    }, {
        level: "70",
        name: "To Kill a Coeurl",
        npc: "Ortwin",
        unlock: ""
    }, {
        level: "70",
        name: "Another Striking Opportunity",
        npc: "Starry-eyed Ala Mhigan",
        unlock: ""
    }, {
        level: "70",
        name: "An Unwanted Truth",
        npc: "Philiot",
        unlock: "The Fractal Continuum (Hard)"
    }, {
        level: "70",
        name: "A Fortune in Salt",
        npc: "Perky Peddler",
        unlock: ""
    }, {
        level: "70",
        name: "Secret of the Ooze",
        npc: "Sawney",
        unlock: "Saint Mocianne's Arboretum (Hard)"
    }
];
