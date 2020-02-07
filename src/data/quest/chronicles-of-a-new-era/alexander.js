// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=13&columns=ID,Name&limit=15
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_Alexander = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "Disarmed",
        npc: "Slowfix",
        unlock: "Alexander - The Fist of the Father"
    }, {
        level: "60",
        name: "Steel and Steam",
        npc: "Biggs",
        unlock: "Alexander - The Cuff of the Father"
    }, {
        level: "60",
        name: "Tinker, Seeker, Soldier, Spy",
        npc: "Biggs",
        unlock: "Alexander - The Arm of the Father"
    }, {
        level: "60",
        name: "The Pulsing Heart",
        npc: "Mide",
        unlock: "Alexander - The Burden of the Father"
    }, {
        level: "60",
        name: "Enigma",
        npc: "Redbrix",
        unlock: ""
    }, {
        level: "60",
        name: "Rearmed",
        npc: "Roundrox",
        unlock: "Alexander - The Fist of the Son"
    }, {
        level: "60",
        name: "The Folly of Youth",
        npc: "Biggs",
        unlock: "Alexander - The Cuff of the Son"
    }, {
        level: "60",
        name: "Toppling the Tyrant",
        npc: "Mide",
        unlock: "Alexander - The Arm of the Son"
    }, {
        level: "60",
        name: "One Step Behind",
        npc: "Backrix",
        unlock: "Alexander - The Burden of the Son"
    }, {
        level: "60",
        name: "A Gob in the Machine",
        npc: "Backrix",
        unlock: ""
    }, {
        level: "60",
        name: "The Coeurl and the Colossus",
        npc: "Mide",
        unlock: "Alexander - The Eyes of the Creator"
    }, {
        level: "60",
        name: "Biggs and Wedge's Excellent Adventure",
        npc: "Biggs",
        unlock: "Alexander - The Breath of the Creator"
    }, {
        level: "60",
        name: "Thus Spake Quickthinx",
        npc: "Biggs",
        unlock: "Alexander - The Heart of the Creator"
    }, {
        level: "60",
        name: "Judgment Day",
        npc: "Biggs",
        unlock: "Alexander - The Soul of the Creator"
    }, {
        level: "60",
        name: "Of Endings and Beginnings",
        npc: "Biggs",
        unlock: ""
    }
];
