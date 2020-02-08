// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=17&columns=ID,Name&limit=12
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_Return_to_Ivalice = function(parent) {
    return new DataGroup("Return to Ivalice", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Dramatis Personae",
        npc: "Keiten",
        unlock: ""
    }, {
        level: "70",
        name: "A City Fallen",
        npc: "Ramza bas Lexentale",
        unlock: "The Royal City of Rabanaster"
    }, {
        level: "70",
        name: "Uninvited",
        npc: "Lina Mewrilah",
        unlock: ""
    }, {
        level: "70",
        name: "My Power, My Pleasure, My Pain",
        npc: "Jenomis cen Lexentale",
        unlock: ""
    }, {
        level: "70",
        name: "Desire",
        npc: "Jenomis cen Lexentale",
        unlock: ""
    }, {
        level: "70",
        name: "Annihilation",
        npc: "Jenomis cen Lexentale",
        unlock: "The Ridorana Lighthouse"
    }, {
        level: "70",
        name: "The Path of Most Resistance",
        npc: "Lina Mewrilah",
        unlock: ""
    }, {
        level: "70",
        name: "Welcome to Their Jungle",
        npc: "Montblanc",
        unlock: ""
    }, {
        level: "70",
        name: "The City of Lost Angels",
        npc: "Jenomis cen Lexentale",
        unlock: "The Orbonne Monastery"
    }, {
        level: "70",
        name: "In Bad Taste",
        npc: "Company Belle",
        unlock: ""
    }, {
        level: "70",
        name: "Wok on By",
        npc: "Company Belle",
        unlock: ""
    }, {
        level: "1",
        name: "Makin' Bacon (Bread)",
        npc: "Company Belle",
        unlock: ""
    }
];
