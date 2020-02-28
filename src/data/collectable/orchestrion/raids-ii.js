import { DataGroup } from "../../DataGroup";

export const Collectables_Orchestrion_List_Raids_II = function(parent) {
    return new DataGroup("Raids II", parent).initializeTasks(tasks);
};

const tasks = [
    {
        number: 1,
        name: "Significance",
        method: "Quest Reward",
        unlock: "YoRHa: Dark Apocalypse Quests"
    }, {
        number: 2,
        name: "City Ruins (Rays of Light)",
        method: "Raid Reward",
        unlock: "The Copied Factory"
    }, {
        number: 3,
        name: "Voice of no Return",
        method: "Quest Reward",
        unlock: "YoRHa: Dark Apocalypse Quests"
    }, {
        number: 4,
        name: "Alien Manifestation",
        method: "Raid Reward",
        unlock: "The Copied Factory"
    }, {
        number: 5,
        name: "Song of the Ancients (Atonement)",
        method: "Raid Reward",
        unlock: "The Copied Factory"
    }, {
        number: 6,
        name: "Bipolar Nightmare",
        method: "Raid Reward",
        unlock: "The Copied Factory"
    }, {
        number: 7,
        name: "Weight of the World (Prelude Version)",
        method: "Raid Reward",
        unlock: "The Copied Factory"
    }, {
        number: 8,
        name: "Crumbling Lies - Front",
        method: "Quest Reward",
        unlock: ""
    }, {
        number: 9,
        name: "Blue Fields",
        method: "Quest Reward",
        unlock: "Worlds Apart (Eden's Verse)"
    }, {
        number: 10,
        name: "Force Your Way",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Gate: Resurrection or Descent."
    }, {
        number: 11,
        name: "Blinding Indigo",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Gate: Inundation."
    }, {
        number: 12,
        name: "Landslide",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Gate: Sepulture."
    }, {
        number: 13,
        name: "Twice Stricken",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Verse"
    }, {
        number: 14,
        name: "Primal Angel",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Verse"
    }, {
        number: 15,
        name: "Return to Oblivion",
        method: "Raid Reward",
        unlock: "Obtained in Eden's Verse"
    },
];
