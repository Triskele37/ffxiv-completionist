// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=20&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "YoRHa: Dark Apocalypse";
    return data;
};

const tasks = [
    {
        level: "70",
        name: "Word about Komra",
        npc: "Gossipy Dwarf",
        unlock: ""
    }, {
        level: "80",
        name: "A Scandal in Komra",
        npc: "Gossipy Dwarf",
        unlock: ""
    }, {
        level: "80",
        name: "On the Threshold",
        npc: "Dig Site Chief",
        unlock: ""
    }, {
        level: "80",
        name: "An Academic Dispute",
        npc: "Anogg",
        unlock: ""
    }, {
        level: "80",
        name: "Heads, I Win",
        npc: "Konogg",
        unlock: ""
    }, {
        level: "80",
        name: "Tails, You Lose",
        npc: "Anogg",
        unlock: ""
    }
];
