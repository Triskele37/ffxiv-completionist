// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=11&columns=ID,Name&limit=6
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_Bahamut = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        name: "Primal Awakening",
        npc: "Urianger",
        unlock: "The Binding Coil of Bahamut"
    }, {
        level: "50",
        name: "Alisaie's Pledge",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Another Turn in the Coil",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Alisaie's Resolve",
        npc: "Alisaie",
        unlock: ""
    }, {
        level: "50",
        name: "Fragments of Truth",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Alisaie's Path",
        npc: "Alisaie",
        unlock: ""
    }
];
