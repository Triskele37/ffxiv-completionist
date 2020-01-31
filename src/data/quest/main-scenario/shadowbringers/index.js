import { DataGroup } from "../../../DataGroup";

import { Quests_Main_Scenario_Shadowbringers_Alphinaud } from "./alphinaud";
import { Quests_Main_Scenario_Shadowbringers_Alisaie } from "./alisaie";

export const Quests_Main_Scenario_Shadowbringers = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Main_Scenario_Shadowbringers_Alphinaud,
        Quests_Main_Scenario_Shadowbringers_Alisaie,
    ]).initializeTasks(tasks);
};

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=8&columns=ID,Name&limit=106

const tasks = [
    {
        level: "70",
        name: "The Syrcus Trench",
        npc: "Tataru Taru",
        unlock: ""
    }, {
        level: "70",
        name: "City of the First",
        npc: "Crystal Exarch",
        unlock: ""
    }, {
        level: "70",
        name: "Travelers of Norvrandt",
        npc: "Crystal Exarch",
        unlock: ""
    }, {
        level: "71",
        name: "The Lightwardens",
        npc: "Crystal Exarch",
        unlock: "Holminster Switch"
    }, {
        level: "71",
        name: "Warrior of Darkness",
        npc: "Crystal Exarch",
        unlock: ""
    }, {
        level: "72",
        name: "An Unwelcome Guest",
        npc: "Manager of Suites",
        unlock: ""
    }, {
        level: "72",
        name: "The Crystarium's Resolve",
        npc: "Crystal Exarch",
        unlock: ""
    }, {
        level: "72",
        name: "Logistics of War",
        npc: "Szem Dzenmai",
        unlock: "Aether Current",
        xivapi: "/Quest/68840"
    }, {
        level: "72",
        name: "The Oracle of Light",
        npc: "Lyna",
        unlock: ""
    }, {
        level: "72",
        name: "Il Mheg, the Faerie Kingdom",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "72",
        name: "Sul Uin's Request",
        npc: "Sul Uin",
        unlock: ""
    }, {
        level: "72",
        name: "Ys Iala's Errand",
        npc: "Ys Iala",
        unlock: ""
    }, {
        level: "72",
        name: "Oul Sigun's Plea",
        npc: "Oul Sigun",
        unlock: ""
    }, {
        level: "72",
        name: "Unto the Truth",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "72",
        name: "Courting Cooperation",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "73",
        name: "The Key to the Castle",
        npc: "Sul Uin",
        unlock: "Dohn Mheg"
    }, {
        level: "73",
        name: "A Visit to the Nu Mou",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "73",
        name: "A Fitting Payment",
        npc: "Wyd Aenc",
        unlock: ""
    }, {
        level: "73",
        name: "Spore Sweeper",
        npc: "Ys Gyuf",
        unlock: ""
    }, {
        level: "73",
        name: "The Lawless Ones",
        npc: "Wyd Lad",
        unlock: ""
    }, {
        level: "73",
        name: "The Elder's Answer",
        npc: "Wyd Lad",
        unlock: ""
    }, {
        level: "73",
        name: "A Resounding Roar",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "73",
        name: "Memento of a Friend",
        npc: "Seto",
        unlock: ""
    }, {
        level: "73",
        name: "Acht-la Ormh Inn",
        npc: "Seto",
        unlock: "The Dancing Plague, Aether Current",
        xivapi: "/Quest/68856"
    }, {
        level: "73",
        name: "The Wheel Turns",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "74",
        name: "A Party Soon Divided",
        npc: "Manager of Suites",
        unlock: ""
    }, {
        level: "74",
        name: "A Little Faith",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "74",
        name: "Into the Dark",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "74",
        name: "A Day in the Neighborhood",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "74",
        name: "A Helping Hand",
        npc: "Runar",
        unlock: ""
    }, {
        level: "74",
        name: "Lost but Not Forgotten",
        npc: "Runar",
        unlock: ""
    }, {
        level: "74",
        name: "Saying Goodbye",
        npc: "Runar",
        unlock: ""
    }, {
        level: "74",
        name: "Stirring up Trouble",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "74",
        name: "A Beeautiful Plan",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "74",
        name: "An Unwanted Proposal",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "74",
        name: "Put to the Proof",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "75",
        name: "Into the Wood",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "75",
        name: "Top of the Tree",
        npc: "Cymet",
        unlock: ""
    }, {
        level: "75",
        name: "Look to the Stars",
        npc: "Almet",
        unlock: ""
    }, {
        level: "75",
        name: "Mi Casa, Toupasa",
        npc: "Almet",
        unlock: ""
    }, {
        level: "75",
        name: "Legend of the Not-so-hidden Temple",
        npc: "Almet",
        unlock: ""
    }, {
        level: "75",
        name: "The Aftermath",
        npc: "Almet",
        unlock: ""
    }, {
        level: "75",
        name: "In Good Faith",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "75",
        name: "The Burden of Knowledge",
        npc: "Almet",
        unlock: "The Qitana Ravel"
    }, {
        level: "75",
        name: "Bearing With It",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "76",
        name: "Out of the Wood",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "76",
        name: "When It Rains",
        npc: "Manager of Suites",
        unlock: ""
    }, {
        level: "76",
        name: "Word from On High",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "76",
        name: "Small Favors",
        npc: "Lyna",
        unlock: ""
    }, {
        level: "76",
        name: "The Best Way Out",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "76",
        name: "Free Trade",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "76",
        name: "The Trolley Problem",
        npc: "Zhun Zun",
        unlock: ""
    }, {
        level: "76",
        name: "Rust and Ruin",
        npc: "Thaffe",
        unlock: ""
    }, {
        level: "76",
        name: "On Track",
        npc: "Minfilia",
        unlock: ""
    }, {
        level: "76",
        name: "Down for Maintenance",
        npc: "Jeryk",
        unlock: ""
    }, {
        level: "76",
        name: "The Truth Hurts",
        npc: "Jeryk",
        unlock: ""
    }, {
        level: "77",
        name: "A Convenient Distraction",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "77",
        name: "A Dirty Job",
        npc: "Guthjon",
        unlock: ""
    }, {
        level: "77",
        name: "Have a Heart",
        npc: "Guthjon",
        unlock: ""
    }, {
        level: "77",
        name: "Full Steam Ahead",
        npc: "Magnus",
        unlock: ""
    }, {
        level: "77",
        name: "Crossroad",
        npc: "Minfilia",
        unlock: ""
    }, {
        level: "77",
        name: "A Fresh Start",
        npc: "Ryne",
        unlock: "Malikah's Well, Aether Current",
        xivapi: "/Quest/59157"
    }, {
        level: "77",
        name: "More than a Hunch",
        npc: "Ryne",
        unlock: ""
    }, {
        level: "77",
        name: "Return to Eulmore",
        npc: "Manager of Suites",
        unlock: ""
    }, {
        level: "77",
        name: "A Feast of Lies",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "77",
        name: "Paradise Fallen",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "78",
        name: "The Ladder",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "78",
        name: "The View from Above",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "78",
        name: "In Mt. Gulg's Shadow",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "78",
        name: "A Gigantic Undertaking",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "78",
        name: "Meet the Tholls",
        npc: "Tristol",
        unlock: ""
    }, {
        level: "78",
        name: "A-Digging We Will Go",
        npc: "Xamott",
        unlock: ""
    }, {
        level: "78",
        name: "The Duergar's Tewel",
        npc: "Korutt",
        unlock: ""
    }, {
        level: "78",
        name: "Rich Veins of Hope",
        npc: "Crystal Exarch",
        unlock: ""
    }, {
        level: "78",
        name: "That None Shall Ever Again",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "78",
        name: "A Breath of Respite",
        npc: "Chai-Nuzz",
        unlock: ""
    }, {
        level: "79",
        name: "Extinguishing the Last Light",
        npc: "Chai-Nuzz",
        unlock: "Mt. Gulg, The Crown of the Immaculate, Aether Current",
        xivapi: "/Quest/69179"
    }, {
        level: "79",
        name: "Reassuring the Masses",
        npc: "Manager of Suites",
        unlock: ""
    }, {
        level: "79",
        name: "In His Garden",
        npc: "Katliss",
        unlock: ""
    }, {
        level: "79",
        name: "The Unbroken Thread",
        npc: "Lyna",
        unlock: ""
    }, {
        level: "79",
        name: "To Storm-tossed Seas",
        npc: "Urianger Augurelt",
        unlock: ""
    }, {
        level: "79",
        name: "Waiting in the Depths",
        npc: "Thancred Waters",
        unlock: ""
    }, {
        level: "79",
        name: "City of the Ancients",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "79",
        name: "The Light of Inspiration",
        npc: "Y'shtola Rhul",
        unlock: ""
    }, {
        level: "80",
        name: "The Illuminated Land",
        npc: "Grenoldt",
        unlock: ""
    }, {
        level: "80",
        name: "The End of a World",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "80",
        name: "A Greater Purpose",
        npc: "Alphinaud Leveilleur",
        unlock: "Aether Current"
    }, {
        level: "80",
        name: "Shadowbringers",
        npc: "Alisaie Leveilleur",
        unlock: "Amaurot, The Dying Gasp"
    }
];
