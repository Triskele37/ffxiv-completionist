// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=14&columns=ID,Name&limit=10
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_The_Warring_Triad = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "Gods of Eld",
        npc: "Torsefers",
        unlock: ""
    }, {
        level: "60",
        name: "When the Bough Wakes",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "The Fate of Stars",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "Balance unto All",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "The Last Pillar to Fall",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "The Diabolical Bismarck",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "Thok Around the Clock",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "A Fiendish Likeness",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "A Deific Simulacrum",
        npc: "Unukalhai",
        unlock: ""
    }, {
        level: "60",
        name: "A Demonic Duplicate",
        npc: "Unukalhai",
        unlock: ""
    }
];
