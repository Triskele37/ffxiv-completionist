// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=25&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=26&columns=ID,Name
import { BeastTribeQuestColumnConfig } from "../columnConfigs";

export const Quest_Beast_Tribe_Sylph = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.sylph`;

    return {
        name: "Sylph",
    	storageKey,
        columns: BeastTribeQuestColumnConfig,
        tasks
    };
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "42",
        name: "Seeking Solace",
        npc: "Vorsaile Heuloix",
        rep: "Neutral",
        type: "Main"
    }, {
        level: "42",
        name: "Voyce of Concern",
        npc: "Olmxio",
        rep: "Neutral",
        type: "Main"
    }, {
        level: "45",
        name: "Pilfered Podlings",
        npc: "Voyce",
        rep: "Recognized",
        type: "Main"
    }, {
        level: "48",
        name: "Idle Hands",
        npc: "Olmxio",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "48",
        name: "Feathers and Folly",
        npc: "Olmxio",
        rep: "Trusted",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "42",
        name: "Deck the Hut",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Feed Me",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Giddy for Goobbues",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Gourd Grief",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Imperial Intruders",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Malodorous Mischief",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Not Who They Seem",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Now You See Me",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "Raising a Stink",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "42",
        name: "The Magitek Menace",
        npc: "Tonaxia",
        rep: "Neutral",
        type: "Daily"
    }, {
        level: "45",
        name: "Fungal Foulness",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "I Dream of Slimy",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "In the Sylphlands, Treasure Hunts You",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Milkroot in Moderation",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Mushroom Madness",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Perilous Pumpkins",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Shocking Developments",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Something to Sneeze At",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "Waterbringer",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "45",
        name: "With One Stone",
        npc: "Ponnixia",
        rep: "Recognized",
        type: "Daily"
    }, {
        level: "48",
        name: "A Sticky Situation",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Bane of the Barbs",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Boar Wars",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Clearing the Air",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Mist Opportunities",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Moxia's Magnum Opus",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "No Root for You",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Podling Peril",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Ripe for the Picking",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "48",
        name: "Sympathy for the Sentinel",
        npc: "Moxia",
        rep: "Friendly",
        type: "Daily"
    }
];
