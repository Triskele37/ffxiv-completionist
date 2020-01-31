// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=23&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=24&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Beast_Tribe_Amalj_Aa = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "43",
        name: "Peace for Thanalan",
        npc: "Swift",
        rep: "Neutral",
        type: "Main"
    }, {
        level: "43",
        name: "Brotherhood of Ash",
        npc: "Hammujj Gah",
        rep: "Neutral",
        type: "Main"
    }, {
        level: "46",
        name: "Ranger Rescue",
        npc: "Hammujj Gah",
        rep: "Recognized",
        type: "Main"
    }, {
        level: "48",
        name: "An Eye on the Inside",
        npc: "Hammujj Gah",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "48",
        name: "Martial Perfection",
        npc: "Yadovv Gah",
        rep: "Trusted",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "43",
        name: "A Sappy Ending",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "A Shell to Scry On",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Arms of the U",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Borderline Slaughter",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Fighting Firesand with Fire",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Losing One's Tempered",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Luring Lacovie",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Ravage the Ravagers",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Blitzing the Beacons",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "43",
        name: "Smothering Instinct",
        npc: "Fibubb Gah",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "46",
        name: "Beacon Keepers",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Before They Are Tempered",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Douse Them While They're Down",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Forged in Flame",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Hard to Port",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Rite Where It Hurts",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Singed Fur Their Own Good",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "The Gland that Feeds You",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "Thinning the Ranks",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "46",
        name: "This Infernal Heat",
        npc: "Narujj Boh",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "48",
        name: "Demolition Drake",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Elite Beating",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Fire-spitting Image",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Fodder for the Flamefangs",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Hatchling Humiliation",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Nothing Sacred",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Pulling Fangs",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Raiding the Cache",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "The Beacon That Burns You",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Unholier than Thou",
        npc: "Yadovv Gah",
        rep: "Friendly",
        type: "Daily"
    }
];
