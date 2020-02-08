// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=33&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=34&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Beast_Tribe_Vanu_Vanu = function(parent) {
    return new DataGroup("Vanu Vanu", parent).initializeTasks(tasks);
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "50",
        name: "Three Beaks to the Wind",
        npc: "Sonu Vanu",
        rep: "Neutral",
        type: "Main"
    }, {
        level: "50",
        name: "A Tribal Reunion",
        npc: "Linu Vali",
        rep: "Recognized",
        type: "Main"
    }, {
        level: "50",
        name: "Linu's Lovely Bones",
        npc: "Linu Vali",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "50",
        name: "In the Skycage over the Sea",
        npc: "Linu Vali",
        rep: "Trusted",
        type: "Main"
    }, {
        level: "50",
        name: "Fishing for Friendship",
        npc: "Linu Vali",
        rep: "Respected",
        type: "Main"
    }, {
        level: "50",
        name: "Sundrop the Beat",
        npc: "Linu Vali",
        rep: "Honored",
        type: "Main"
    }, {
        level: "50",
        name: "Nest Side Story",
        npc: "Linu Vali",
        rep: "Sworn",
        type: "Main"
    }, {
        level: "50",
        name: "The Nest of Honor",
        npc: "Linu Vali",
        rep: "Sworn",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "50",
        name: "Endymion Disco",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Hard-boiled Hustle",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Pussyfooting About",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Sanuwa Samba",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Veni, Vundu, Vici",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Water Crystal Waltz",
        npc: "Manu Vanu",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "50",
        name: "Bird Watching",
        npc: "Manu Vanu",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "50",
        name: "Chigoe Cha-Cha",
        npc: "Manu Vanu",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "50",
        name: "Comb and Get It",
        npc: "Manu Vanu",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "50",
        name: "Pilfering Pots from the Pantry",
        npc: "Manu Vanu",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "50",
        name: "The Binding Soil",
        npc: "Manu Vanu",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "50",
        name: "A Bone to Pick",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "A Hut to Dye For",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Fishing in Troubled Waters",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Flight of the Midges",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Reeling in the Vundu",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "The House That Ginu Built",
        npc: "Manu Vanu",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "50",
        name: "Gaelicat's Out of the Bag",
        npc: "Manu Vanu",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Nailed Down",
        npc: "Manu Vanu",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Pestered Ancestors",
        npc: "Manu Vanu",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Shady Premonitions",
        npc: "Manu Vanu",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Smooth as Silk, Cool as Air",
        npc: "Manu Vanu",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "50",
        name: "Easy as Paissa",
        npc: "Manu Vanu",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Gastornis Groove",
        npc: "Manu Vanu",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Rotten to the Korrigan",
        npc: "Manu Vanu",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "The Cat's Meow",
        npc: "Manu Vanu",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "50",
        name: "Dance Commander",
        npc: "Manu Vanu",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Electric Gunduloo",
        npc: "Manu Vanu",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Vanish, Vile Vundu",
        npc: "Manu Vanu",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "50",
        name: "Wildwort and Sundrop",
        npc: "Manu Vanu",
        rep: "Honored",
        type: "Daily"
    }
];
