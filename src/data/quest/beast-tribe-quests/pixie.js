// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=21&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=22&columns=ID,Name
import { BeastTribeQuestColumnConfig } from "../columnConfigs";

export const Quest_Beast_Tribe_Pixie = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.pixie`;

    return {
        name: "Pixie",
    	storageKey,
        columns: BeastTribeQuestColumnConfig,
        tasks
    };
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "70",
        name: "Manic Pixie Dream Realm",
        npc: "Pink Pixie",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "70",
        name: "Sustenance for the Soul",
        npc: "Tyr Beq",
        rep: "Trusted",
        type: "Main"
    }, {
        level: "70",
        name: "The Heart's Oasis",
        npc: "Tyr Beq",
        rep: "Respected",
        type: "Main"
    }, {
        level: "70",
        name: "A Cry from the Ashes",
        npc: "Tyr Beq",
        rep: "Honored",
        type: "Main"
    }, {
        level: "70",
        name: "As the Heart Bids",
        npc: "Tyr Beq",
        rep: "Sworn",
        type: "Main"
    }, {
        level: "70",
        name: "Forever and a Dream",
        npc: "Tyr Beq",
        rep: "Bloodsworn",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "70",
        name: "Where There's Wool, There's a Way",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "A Flowery Frolick",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "Sharing Is Caring",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "The Aesthetician of Il Mheg",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "Sweet as Honey",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "I Dream of Shinies",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "The Wonder of Witchweed",
        npc: "Uin Nee",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "70",
        name: "Of Marvelous Mallow",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "The Moss Fungus Menace",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "Porxine Perfection",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "The Big Sleep",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "Best of Boat Worlds",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "Amazing Graze",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "Pure Imagination",
        npc: "Uin Nee",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "70",
        name: "Raiders of the Lost Pork",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "Pebble without a Cause",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "There's Always a Stupider Fish",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "Bring Your Water to the Slaughter",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "Not the Beavers",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "The Once and Future Marchioness",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "No Accounting for Taste",
        npc: "Uin Nee",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "70",
        name: "What the Phooka",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "No Grown-ups Allowed",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "Pride-and-Seek",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "A Porxie Before Swine",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "Snot My Problem",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "Aim High",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "70",
        name: "The Chaser",
        npc: "Uin Nee",
        rep: "Honored",
        type: "Daily"
    }
];
