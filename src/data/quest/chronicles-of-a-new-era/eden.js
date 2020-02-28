// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=19&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_Eden = function(parent) {
    return new DataGroup("Eden", parent).initializeTasks(tasks);
};

const tasks = [
    //------------------------------------------------------- Tier 1
    {
        level: "80",
        name: "In the Middle of Nowhere",
        npc: "Anxious Crystarium Guard",
        unlock: ""
    }, {
        level: "80",
        name: "Deploy the Core",
        npc: "Ryne",
        unlock: "Eden's Gate: Resurrection"
    }, {
        level: "80",
        name: "One Fell Swoop",
        npc: "Ryne",
        unlock: "Eden's Gate: Descent"
    }, {
        level: "80",
        name: "Nor Any Drop to Drink",
        npc: "Ryne",
        unlock: "Eden's Gate: Inundation"
    }, {
        level: "80",
        name: "Super Seismic",
        npc: "Ryne",
        unlock: "Eden's Gate: Sepulcher"
    }, {
        level: "80",
        name: "The Next Piece of the Puzzle",
        npc: "Ryne",
        unlock: ""
    },
    //------------------------------------------------------- Tier 2
    {
        level: "80",
        name: "Away with the Faerie",
        npc: "Yalfort",
        unlock: ""
    }, {
        level: "80",
        name: "Blood and Thunder",
        npc: "Gaia",
        unlock: "Eden's Verse: Fulmination"
    }, {
        level: "80",
        name: "Into the Firestorm",
        npc: "Urianger",
        unlock: "Eden's Verse: Furor"
    }, {
        level: "80",
        name: "Heart of Darkness",
        npc: "Thancred",
        unlock: "Eden's Verse: Iconoclasm"
    }, {
        level: "80",
        name: "On Thin Ice",
        npc: "Gaia",
        unlock: "Eden's Verse: Refulgence"
    }, {
        level: "80",
        name: "Life Finds A Way",
        npc: "Ryne",
        unlock: ""
    },
];
