// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=15&columns=ID,Name&limit=7
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach = function(parent) {
    return new DataGroup("The Shadow of Mhach", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "Sky Pirates",
        npc: "Unquiet Trader",
        unlock: ""
    }, {
        level: "60",
        name: "To Rule the Skies",
        npc: "Utata",
        unlock: "The Void Arch"
    }, {
        level: "60",
        name: "The Weeping City",
        npc: "Stacia",
        unlock: "The Weeping City of Mhach"
    }, {
        level: "60",
        name: "Freedom for Our Skies",
        npc: "Leofard",
        unlock: ""
    }, {
        level: "60",
        name: "Unidentified Flying Object",
        npc: "Slipslix",
        unlock: ""
    }, {
        level: "60",
        name: "Where Shadows Reign",
        npc: "Stacia",
        unlock: "Dun Scaith"
    }, {
        level: "60",
        name: "A Redbill Farewell",
        npc: "Leofard",
        unlock: ""
    }
];
