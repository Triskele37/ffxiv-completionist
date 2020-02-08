import { DataGroup } from "../../../DataGroup";

import { Quests_Main_Scenario_Stormblood_M_Naago } from "./m-naago";
import { Quests_Main_Scenario_Stormblood_Meffrid } from "./meffrid";

export const Quests_Main_Scenario_Stormblood = function(parent) {
    return new DataGroup("Stormblood", parent).initializeSubGroups([
        Quests_Main_Scenario_Stormblood_M_Naago,
        Quests_Main_Scenario_Stormblood_Meffrid,
    ]).initializeTasks(tasks);
};

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=6&columns=ID,Name&limit=122

const tasks = [
    {
        level: "60",
        name: "Beyond the Great Wall",
        npc: "Alphinaud Leveilleur",
        unlock: "The Fringes"
    }, {
        level: "60",
        name: "Lyse Takes the Lead",
        npc: "Lyse Hext",
        unlock: "Rhalgr's Reach"
    }, {
        level: "60",
        name: "The Promise of a New Beginning",
        npc: "Conrad Kemp",
        unlock: ""
    }, {
        level: "60",
        name: "A Haven for the Bold",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "60",
        name: "A Bargain Struck",
        npc: "Alisaie Leveilleur",
        unlock: "Aether Compass"
    }, {
        level: "60",
        name: "Where Men Go as One",
        npc: "Conrad Kemp",
        unlock: ""
    }, {
        level: "60",
        name: "Future Rust, Future Dust",
        npc: "Beves",
        unlock: ""
    }, {
        level: "60",
        name: "A Dash of Green",
        npc: "Ahelissa",
        unlock: ""
    }, {
        level: "60",
        name: "Ye Wayward Brothers",
        npc: "Ananta Battlemaid",
        unlock: ""
    }, {
        level: "60",
        name: "Token of Faith",
        npc: "Swarthy Resistance Fighter",
        unlock: ""
    }, {
        level: "61",
        name: "Crossing the Velodyna",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "61",
        name: "In Crimson It Began",
        npc: "Pipin Tarupin",
        unlock: ""
    }, {
        level: "61",
        name: "The Fires Fade",
        npc: "Raubahn",
        unlock: ""
    }, {
        level: "61",
        name: "Bereft of Hearth and Home",
        npc: "Pipin Tarupin",
        unlock: ""
    }, {
        level: "61",
        name: "Divide and Conquer",
        npc: "Conrad Kemp",
        unlock: ""
    }, {
        level: "61",
        name: "Lies, Damn Lies, and Pirates",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "61",
        name: "Tales from the Far East",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "61",
        name: "Not without Incident",
        npc: "Lyse Hext",
        unlock: "Kugane, The Sirensong Sea"
    }, {
        level: "61",
        name: "The Man from Ul'dah",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "61",
        name: "Where the Streets Are Paved with Koban",
        npc: "Hancock",
        unlock: ""
    }, {
        level: "61",
        name: "By the Grace of Lord Lolorito",
        npc: "Hancock",
        unlock: ""
    }, {
        level: "61",
        name: "A Good Samurai Is Hard to Find",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "61",
        name: "It's Probably a Trap",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "61",
        name: "Making the Catfish Sing",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "62",
        name: "Once More, to the Ruby Sea",
        npc: "Gosetsu",
        unlock: "The Ruby Sea"
    }, {
        level: "62",
        name: "Open Water",
        npc: "Soroban",
        unlock: ""
    }, {
        level: "62",
        name: "Boys with Boats",
        npc: "Tansui",
        unlock: ""
    }, {
        level: "62",
        name: "To Bend with the Wind",
        npc: "Soroban",
        unlock: ""
    }, {
        level: "62",
        name: "Confederate Consternation",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "62",
        name: "The Solace of the Sea",
        npc: "Afumi",
        unlock: ""
    }, {
        level: "62",
        name: "The Arrows of Misfortune",
        npc: "Kajika",
        unlock: ""
    }, {
        level: "62",
        name: "The Last Voyage",
        npc: "Aranami",
        unlock: ""
    }, {
        level: "62",
        name: "Alisaie's Stones",
        npc: "Hirase",
        unlock: ""
    }, {
        level: "62",
        name: "Under the Sea",
        npc: "Rasho",
        unlock: ""
    }, {
        level: "62",
        name: "Of Kojin and Kami",
        npc: "Soroban",
        unlock: ""
    }, {
        level: "63",
        name: "In Soroban We Trust",
        npc: "Soroban",
        unlock: "Diving"
    }, {
        level: "63",
        name: "Forever and Ever Apart",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "63",
        name: "In Darkness the Magatama Dreams",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "63",
        name: "The Whims of the Divine",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "63",
        name: "Breaking and Delivering",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "63",
        name: "The Lord of the Revel",
        npc: "Alisaie Leveilleur",
        unlock: "The Pool of Tribute, Mount Speed Increase"
    }, {
        level: "63",
        name: "Tide Goes in, Imperials Go Out",
        npc: "Lyse Hext",
        unlock: "Aether Current"
    }, {
        level: "63",
        name: "A Silence in Three Parts",
        npc: "Gosetsu",
        unlock: "Yanxia"
    }, {
        level: "64",
        name: "Life after Doma",
        npc: "Gosetsu",
        unlock: ""
    }, {
        level: "64",
        name: "A Glimpse of Madness",
        npc: "Liberation Front Guard",
        unlock: ""
    }, {
        level: "64",
        name: "The Stubborn Remainder",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "64",
        name: "The Ones We Leave Behind",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "64",
        name: "A New Ruby Tithe",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "64",
        name: "The Will to Live",
        npc: "Yugiri",
        unlock: "Mount Speed Increase"
    }, {
        level: "64",
        name: "Daughter of the Deep",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "64",
        name: "Path of No Return",
        npc: "Gosetsu",
        unlock: ""
    }, {
        level: "64",
        name: "The Time between the Seconds",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "64",
        name: "All the Little Angels",
        npc: "Isse",
        unlock: "Aether Current"
    }, {
        level: "65",
        name: "Here There Be Xaela",
        npc: "Yugiri",
        unlock: "The Azim Steppe"
    }, {
        level: "65",
        name: "The Search for Lord Hien",
        npc: "Yugiri",
        unlock: ""
    }, {
        level: "65",
        name: "A Season for War",
        npc: "Cirina",
        unlock: ""
    }, {
        level: "65",
        name: "An Impossible Dream",
        npc: "Cirina",
        unlock: ""
    }, {
        level: "65",
        name: "Stars in the Dark",
        npc: "Hien",
        unlock: ""
    }, {
        level: "65",
        name: "A Warrior's Welcome",
        npc: "Cirina",
        unlock: ""
    }, {
        level: "65",
        name: "The Heart of Nations",
        npc: "Cirina",
        unlock: ""
    }, {
        level: "65",
        name: "A Trial Before the Trial",
        npc: "Hien",
        unlock: ""
    }, {
        level: "65",
        name: "In the Footsteps of Bardam the Brave",
        npc: "Hien",
        unlock: "Bardam's Mettle"
    }, {
        level: "65",
        name: "The Children of Azim",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "66",
        name: "The Labors of Magnai",
        npc: "Baatu",
        unlock: ""
    }, {
        level: "66",
        name: "For Love of the Moon",
        npc: "Hien",
        unlock: ""
    }, {
        level: "66",
        name: "Sworn Enemies of the Sun",
        npc: "Magnai",
        unlock: ""
    }, {
        level: "66",
        name: "The Undying Ones",
        npc: "Gosetsu",
        unlock: ""
    }, {
        level: "66",
        name: "A Final Peace",
        npc: "Gosetsu",
        unlock: ""
    }, {
        level: "66",
        name: "As the Gods Will",
        npc: "Gosetsu",
        unlock: ""
    }, {
        level: "66",
        name: "Naadam",
        npc: "Cirina",
        unlock: "Mount Speed Increase"
    }, {
        level: "66",
        name: "Glory to the Khagan",
        npc: "Hien",
        unlock: "Aether Current"
    }, {
        level: "66",
        name: "In Crimson They Walked",
        npc: "Hien",
        unlock: ""
    }, {
        level: "66",
        name: "The Hour of Reckoning",
        npc: "Hien",
        unlock: "The House of the Fierce"
    }, {
        level: "67",
        name: "The Room Where It Happened",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "How Tataru Got Her Groove Back",
        npc: "Tataru",
        unlock: ""
    }, {
        level: "67",
        name: "Seeds of Despair",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "The Limits of Our Endurance",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "Broken Steel, Broken Men",
        npc: "Tsuranuki",
        unlock: ""
    }, {
        level: "67",
        name: "The Doma Within",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "67",
        name: "On the Eve of Destiny",
        npc: "Hien",
        unlock: ""
    }, {
        level: "67",
        name: "The Die Is Cast",
        npc: "Hien",
        unlock: "Doma Castle"
    }, {
        level: "67",
        name: "The World Turned Upside Down",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "A Swift and Secret Departure",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "While You Were Away",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "Rhalgr's Beacon",
        npc: "Raubahn",
        unlock: ""
    }, {
        level: "67",
        name: "The Fortunes of War",
        npc: "Conrad Kemp",
        unlock: ""
    }, {
        level: "67",
        name: "Rising Fortunes, Rising Spirits",
        npc: "Conrad Kemp",
        unlock: "The Peering Stones"
    }, {
        level: "67",
        name: "The Lure of the Dream",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "67",
        name: "The Lady of Bliss",
        npc: "Vajra",
        unlock: "Emanation, Mount Speed Increase"
    }, {
        level: "67",
        name: "The Silence of the Gods",
        npc: "Vajra",
        unlock: "Aether Current"
    }, {
        level: "68",
        name: "The First of Many",
        npc: "Alphinaud Leveilleur",
        unlock: "Ala Ghiri"
    }, {
        level: "68",
        name: "Strong and Unified",
        npc: "M'naago Rahz",
        unlock: ""
    }, {
        level: "68",
        name: "Hells Open",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "68",
        name: "Heavens Weep",
        npc: "Alisaie Leveilleur",
        unlock: ""
    }, {
        level: "68",
        name: "The Road Home",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "68",
        name: "For the Living and the Dead",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "68",
        name: "Above the Churning Waters",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "68",
        name: "The Path Forward",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "68",
        name: "With Tired Hands We Toil",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "68",
        name: "Where Courage Endures",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "69",
        name: "The Price of Freedom",
        npc: "Alphinaud Leveilleur",
        unlock: "Castrum Abania, Mount Speed Increase"
    }, {
        level: "69",
        name: "Raubahn's Invitation",
        npc: "Raubahn",
        unlock: ""
    }, {
        level: "69",
        name: "Liberty or Death",
        npc: "Raubahn",
        unlock: "Aether Current"
    }, {
        level: "69",
        name: "The Lady in Red",
        npc: "Lyse Hext",
        unlock: ""
    }, {
        level: "69",
        name: "Upon the Great Loch's Shore",
        npc: "Lyse Hext",
        unlock: "The Lochs"
    }, {
        level: "69",
        name: "The Key to Victory",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "69",
        name: "The Resonant",
        npc: "Lyse Hext",
        unlock: "Mount Speed Increase"
    }, {
        level: "69",
        name: "The Legacy of Our Fathers",
        npc: "Alphinaud Leveilleur",
        unlock: ""
    }, {
        level: "70",
        name: "The Measure of His Reach",
        npc: "Raubahn",
        unlock: ""
    }, {
        level: "70",
        name: "Stormblood",
        npc: "Pipin Tarupin",
        unlock: "Ala Mhigo, The Royal Menageriem, Aether Current, Mount Speed Increase"
    }
];
