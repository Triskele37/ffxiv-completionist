import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Ishgardian_Ishgard = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard`;

    return {
        name: "Ishgard",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Remembering Ishgard",
        npc: "Fury-fearing Elezen",
        unlock: ""
    }, {
        level: "50",
        name: "The Best Laid Plans",
        npc: "Cliaux",
        unlock: ""
    }, {
        level: "50",
        name: "Drinking the Pain Away",
        npc: "Gibrillont",
        unlock: ""
    }, {
        level: "50",
        name: "Landing a Stable Job",
        npc: "Mathye",
        unlock: ""
    }, {
        level: "50",
        name: "Cold Days, Colder Nights",
        npc: "Brictt",
        unlock: ""
    }, {
        level: "50",
        name: "Dinner for Four",
        npc: "Torsefers",
        unlock: ""
    }, {
        level: "50",
        name: "Mum's the Word",
        npc: "House Durendaire Knight",
        unlock: ""
    }, {
        level: "50",
        name: "An Unwanted Delivery",
        npc: "Torsefers",
        unlock: ""
    }, {
        level: "51",
        name: "Homesick",
        npc: "Bohemondas",
        unlock: ""
    }, {
        level: "51",
        name: "Looking to the Future",
        npc: "Hyur on Hard Times",
        unlock: ""
    }, {
        level: "56",
        name: "Enlisted",
        npc: "Languid Noblewoman",
        unlock: ""
    }, {
        level: "56",
        name: "Honoring the Past",
        npc: "House Haillenarte Knight",
        unlock: ""
    }, {
        level: "56",
        name: "Caught in the Act",
        npc: "Elaisse",
        unlock: ""
    }, {
        level: "56",
        name: "Into the Mists",
        npc: "Unflinching Temple Knight",
        unlock: ""
    }, {
        level: "57",
        name: "A Full Stomach and Happy Heart",
        npc: "Ermiance",
        unlock: ""
    }, {
        level: "57",
        name: "Unfulfilled Dreams",
        npc: "Brictt",
        unlock: ""
    }, {
        level: "59",
        name: "Moogles in the Sky",
        npc: "House Fortemps Knight (NPC)",
        unlock: ""
    }, {
        level: "50",
        name: "Inscrutable Tastes",
        npc: "Morgayne",
        unlock: "Collectable Action"
    }, {
        level: "52",
        name: "I Believe I Can Fly",
        npc: "Arnoulain",
        unlock: "Flyer Shaffron"
    }, {
        level: "53",
        name: "Let the Clan Hunt Begin",
        npc: "Aytienne",
        unlock: ""
    }, {
        level: "56",
        name: "Better Bill Hunting",
        npc: "Eustacia",
        unlock: ""
    }, {
        level: "60",
        name: "Elite and Dangerous",
        npc: "Ardolain",
        unlock: ""
    }, {
        level: "60",
        name: "Do It for Gilly",
        npc: "Notrelchamps",
        unlock: "Accompaniment Node Minion"
    }
];
