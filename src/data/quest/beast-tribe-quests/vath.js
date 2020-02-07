// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=35&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=36&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Beast_Tribe_Vath = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "50",
        name: "The Naming of Vath",
        npc: "Vath Storyteller",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "50",
        name: "Adventurers Don't Get Cold Feet",
        npc: "Vath Deftarm",
        rep: "Trusted",
        type: "Main"
    }, {
        level: "50",
        name: "An Acquired Taste",
        npc: "Vath Deftarm",
        rep: "Respected",
        type: "Main"
    }, {
        level: "50",
        name: "Your Enemy and Mine",
        npc: "Vath Deftarm",
        rep: "Honored",
        type: "Main"
    }, {
        level: "50",
        name: "Resistance Is Futile",
        npc: "Vath Deftarm",
        rep: "Sworn",
        type: "Main"
    }, {
        level: "50",
        name: "A Symbiotic Friendship",
        npc: "Vath Deftarm",
        rep: "Bloodsworn",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "50",
        name: "Breath of Fresh Air",
        npc: "Vath Keeneye",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Bugging the Bugs",
        npc: "Vath Keeneye",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Getting the Shaft",
        npc: "Vath Keeneye",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "The Foodstuff of Champions",
        npc: "Vath Keeneye",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Too Much to Bear",
        npc: "Vath Keeneye",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "A Long Shot",
        npc: "Vath Keeneye",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "At Full Pelt",
        npc: "Vath Keeneye",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Ploughing Ahead",
        npc: "Vath Keeneye",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "The Caelumtree Wine Spree",
        npc: "Vath Keeneye",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Where the Silver Dew Grows",
        npc: "Vath Keeneye",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "All About the Eggs",
        npc: "Vath Keeneye",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Failure to Deliver",
        npc: "Vath Keeneye",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Shoo Fly, Don't Bother Me",
        npc: "Vath Keeneye",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Smells Like Trouble",
        npc: "Vath Keeneye",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "When Hunting Goes Wrong",
        npc: "Vath Keeneye",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "A Romp Around the Foothills",
        npc: "Vath Keeneye",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Fifty Shades of Yellow",
        npc: "Vath Keeneye",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Flea Troubles",
        npc: "Vath Keeneye",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Neighborhood Squabbles",
        npc: "Vath Keeneye",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Not for the Faint of Heart",
        npc: "Vath Keeneye",
        rep: "Honored",
        type: "Daily"
    }
];
