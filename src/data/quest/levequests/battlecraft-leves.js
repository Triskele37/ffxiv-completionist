import { DataGroup } from "../../DataGroup";

export const Quests_Levequests_Battlecraft = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Company", key: "company" }
    );
    return data;
};

const tasks = [
    //------------------------------------------------------------------ 1-5
    {
        level: "1",
        name: "A Long and Winding Road",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "1",
        name: "Ain't Nobody Got Time for Rats",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "1",
        name: "Bug Bites",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "1",
        name: "Bug Looks Like a Lady",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "1",
        name: "On the Lamb (Leve)",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "1",
        name: "Berries Got Bucked",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "1",
        name: "Either Love Them or Kill Them",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "1",
        name: "Nothing Compares to Shrews",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "1",
        name: "Observe and Protect",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "1",
        name: "Road Rage",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "1",
        name: "Nutbreaker Suite",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "1",
        name: "Picking up the Piercers",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "1",
        name: "Scourge of the Saplings",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "1",
        name: "Stay for a Vile",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "1",
        name: "Water, Water Everywhere",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "5",
        name: "Far from the Vine",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "5",
        name: "March of the Mandragoras",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "5",
        name: "No Pain, No Grain",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "5",
        name: "Red Stead Redemption",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "5",
        name: "The Cure",
        zone: "Lower La Noscea",
        location: "Red Rooster Stead",
        npc: "Wyrkholsk",
        company: ""
    }, {
        level: "5",
        name: "A Spoonful of Poison",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "5",
        name: "Needles to Say",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "5",
        name: "Procession of the Noble",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "5",
        name: "The Ore the Better",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "5",
        name: "Two Yalms Under",
        zone: "Western Thanalan",
        location: "Scorpion Crossing",
        npc: "Graceful Song",
        company: ""
    }, {
        level: "5",
        name: "A Full Stomach",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "5",
        name: "A Vine Finer than Twine",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "5",
        name: "Compost with the Most",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "5",
        name: "River Raid",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    }, {
        level: "5",
        name: "Wrangling Raptors",
        zone: "Central Shroud",
        location: "The Bannock",
        npc: "Muriaule",
        company: ""
    },
    //------------------------------------------------------------------ 10-15
    {
        level: "10",
        name: "A Tall Odor",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "At the Gates",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "Fresh Meat",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "Grabbing Crabs",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "Jackal and the Livestock",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "No Egg to Stand On",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "Shock Therapy",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "The Sprite of Competition",
        zone: "Western La Noscea",
        location: "Swiftperch",
        npc: "Swygskyf",
        company: ""
    }, {
        level: "10",
        name: "Beak to Beak",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "Field of Beans",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "From Ruins to Riches",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "Out of Body, Out of Mind",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "Reeking Havoc",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "Skin Deep",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "What Peistes Crave",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "You Cannot Kill the Metal",
        zone: "Western Thanalan",
        location: "Horizon",
        npc: "Totonowa",
        company: ""
    }, {
        level: "10",
        name: "A Shroom with a View",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Bump in the Night",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Going Green",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Infestation Cessation",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Scent of a Roselet",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Too Close to Home",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Turning Out the Blight",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "10",
        name: "Wail of a Tale",
        zone: "Central Shroud",
        location: "Bentbranch Meadows",
        npc: "Tierney",
        company: ""
    }, {
        level: "15",
        name: "A Glamourous Life",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "Barley Legal",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "Beasts of Bourbon",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "Field Testing",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "First to Reave",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "Sucked Dry",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "Tail in Tow",
        zone: "Western La Noscea",
        location: "Aleport",
        npc: "Orwen",
        company: ""
    }, {
        level: "15",
        name: "A Simple Solution",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "Death with Indignity",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "Earthbound",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "Going for Goat",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "The Enterprise of Undeath",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "The Law Won",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "The Missing Merchant",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Poponagu",
        company: ""
    }, {
        level: "15",
        name: "A Guest for Supper",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "Can't Say No to Gnat",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "Monkey Business",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "Ochus Bite, Leaves Bleed",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "Something in the Mead",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "Stew for Two",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    }, {
        level: "15",
        name: "The Transporter",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Qina Lyehga",
        company: ""
    },
    //------------------------------------------------------------------ 20-25
    {
        level: "20",
        name: "Another Egg Gone",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "Claw-struck",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "Man the Ore",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "Strand by Me",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "The Deathliest Catch",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "The Light Stripes",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Ourawann",
        company: ""
    }, {
        level: "20",
        name: "Belly Up",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "It's a Trap",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "It's Hard Being Moogle",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "Killing Beasts Softly",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "No Leaves Left Behind",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "The Root of the Problem",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "Treevenge",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "20",
        name: "What's Yours Is Mine",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Dead Men Lie",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "Drakes' Misfortune",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "Flower Power",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "Necrologos: Fluid Corruption",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "Necrologos: The Noctambulist",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "Run, Run Away",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Esmond",
        company: ""
    }, {
        level: "25",
        name: "More than Meets the Eye",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Necrologos: Olidious Separation",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Necrologos: The Beholders",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Refugee Raw",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Revisiting Raimdelle",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Rope a 'Lope",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    }, {
        level: "25",
        name: "Up the Creek",
        zone: "South Shroud",
        location: "Quarrymill",
        npc: "Nyell",
        company: ""
    },
    //------------------------------------------------------------------ 30-35
    {
        level: "30",
        name: "Birds of a Feather",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Call Me Mating",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Clearing Steer",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Necrologos: Igneous Toil",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Out to Sea",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Sol Survivors",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "Under Foot",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "Nahctahr",
        company: ""
    }, {
        level: "30",
        name: "A Feast in the Forest",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "30",
        name: "Adamantoise Tears",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "30",
        name: "Black Market Down",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "30",
        name: "Necrologos: Brand of the Impure",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "30",
        name: "Where the Fur's At",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "30",
        name: "Woodcross Busydeal",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "Merthelin",
        company: ""
    }, {
        level: "35",
        name: "Cower to the People",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Have a Nice Trip",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Little Lost Lamb",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Meat and Bleat",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Necrologos: Cinerary Rite",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Now We're Even",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Saving Bessy",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Cimeaurant",
        company: ""
    }, {
        level: "35",
        name: "Appetite for Abduction",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    }, {
        level: "35",
        name: "Bud Bait",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    }, {
        level: "35",
        name: "Coeurl Scratch Fever",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    }, {
        level: "35",
        name: "Necrologos: Igneous Moil",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    }, {
        level: "35",
        name: "Walk Like a Mandragora",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    }, {
        level: "35",
        name: "Wonder Wine",
        zone: "Eastern La Noscea",
        location: "Wineport",
        npc: "Aileen",
        company: ""
    },
    //------------------------------------------------------------------ 40-45
    {
        level: "40",
        name: "Got a Gut Feeling about This",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "Necrologos: Whispers of the Gem",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "Pets Are Family Too",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "The Area's a Bit Sketchy",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "The Tropes of the Trade",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "We Can Dismember It for You Wholesale",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "You Look Good Enough to Eat",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Voilinaut",
        company: ""
    }, {
        level: "40",
        name: "Blow-up Incubator",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "40",
        name: "Circling the Ceruleum",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "40",
        name: "Don't Forget to Cry",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "40",
        name: "Necrologos: Pale Oblation",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "40",
        name: "Someone's in the Doghouse",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "40",
        name: "Subduing the Subprime",
        zone: "Northern Thanalan",
        location: "Camp Bluefog",
        npc: "Rurubana",
        company: ""
    }, {
        level: "45",
        name: "A Toad Less Taken",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    }, {
        level: "45",
        name: "Big, Bad Idea",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    }, {
        level: "45",
        name: "Necrologos: The Liminal Ones",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    }, {
        level: "45",
        name: "One of Our Naturalists Is Missing",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    }, {
        level: "45",
        name: "Put Your Stomp on It",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    }, {
        level: "45",
        name: "Turnabout's Fair Play",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "K'leytai",
        company: ""
    },
    //------------------------------------------------------------------ 50-58
    {
        level: "50",
        name: "Don't Come Back",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "50",
        name: "Necrologos: Of Sallow Vizards",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "50",
        name: "The Unexpected Tourist",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Feathers Unsullied",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Jailbird Break",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Quit Loafing Around",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "Cry Home",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "Puppet Show",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "Show Your Work",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Don't Eat the Shrooms",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Marl-ementary Procedure",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Two Birds, One Culling",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Dance, Magic Dance",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Necrologos: His Treasure Forhelen",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Wihither the Morbol Goeth",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    },
    //------------------------------------------------------------------ Large-scale
    {
        level: "50",
        name: "Necrologos: Of Sallow Vizards (L)",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "50",
        name: "The Second Coming of Yak (L)",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "50",
        name: "We're So Above This (L)",
        zone: "Coerthas Western Highlands",
        location: "Falcon's Nest",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Last Priest Profaned (L)",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Return to Sender (L)",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "52",
        name: "Scavenger Hunt (L)",
        zone: "The Dravanian Forelands",
        location: "Tailfeather",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "Family Comes First (L)",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "Hello, Cousin (L)",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "54",
        name: "More Than One Way (L)",
        zone: "The Churning Mists",
        location: "Moghome",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Just Washed (L)",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Needs More Fervor (L)",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "56",
        name: "Nobody Can Farm Marl, but Marl (L)",
        zone: "The Sea of Clouds",
        location: "Camp Cloudtop",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Bareback Riding (L)",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Goblin Up Sharlayan (L)",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    }, {
        level: "58",
        name: "Necrologos: His Treasure Forhelen (L)",
        zone: "The Dravanian Hinterlands",
        location: "The Paths of Creation",
        npc: "Eloin",
        company: ""
    },
    //------------------------------------------------------------------ Maelstrom
    {
        level: "20",
        name: "Don't Touch Our Stuff",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "20",
        name: "The Creeps from Work",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "20",
        name: "Throw the Book at Him",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "20",
        name: "Victory Is Mine, Not Yours",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "25",
        name: "Double Dose of Impin'",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "25",
        name: "Of Mice and Demons",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "25",
        name: "Wrong and Rite",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "25",
        name: "You're a Liar, Mansel Black",
        zone: "Lower La Noscea",
        location: "Moraby Drydocks",
        npc: "Eugene",
        company: "Maelstrom"
    }, {
        level: "30",
        name: "It's Better (for You) Under the Sea",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "C'lafumyn",
        company: "Maelstrom"
    }, {
        level: "30",
        name: "Road Worriers",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "C'lafumyn",
        company: "Maelstrom"
    }, {
        level: "30",
        name: "Twenty-nine Was the Cutoff",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "C'lafumyn",
        company: "Maelstrom"
    }, {
        level: "30",
        name: "You Are NOT a Pirate",
        zone: "Eastern La Noscea",
        location: "Costa del Sol",
        npc: "C'lafumyn",
        company: "Maelstrom"
    }, {
        level: "35",
        name: "Fanning the Flames",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Maelstrom"
    }, {
        level: "35",
        name: "Fishing Off the Company Pier",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Maelstrom"
    }, {
        level: "35",
        name: "Mad about You",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Maelstrom"
    }, {
        level: "40",
        name: "An Imp Mobile",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Maelstrom"
    }, {
        level: "40",
        name: "Papal Dispensation",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Maelstrom"
    }, {
        level: "40",
        name: "Someone's Got a Big Mouth",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Maelstrom"
    }, {
        level: "45",
        name: "Go Home to Mama",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Maelstrom"
    }, {
        level: "45",
        name: "Kill the Messenger",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Maelstrom"
    }, {
        level: "45",
        name: "One Big Problem Solved",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Maelstrom"
    },
    //------------------------------------------------------------------ Twin Adder
    {
        level: "20",
        name: "A Little Constructive Exorcism",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "20",
        name: "Burn It Down",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "20",
        name: "Mortal Munchies",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "20",
        name: "She's So Mean",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "25",
        name: "A Real Wingnut",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "25",
        name: "Blinded by the Wight",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "25",
        name: "Go with the Flow",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "25",
        name: "Sylph Strands",
        zone: "East Shroud",
        location: "The Hawthorne Hut",
        npc: "Cedrepierre",
        company: "Twin Adder"
    }, {
        level: "30",
        name: "Creature Feature",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "H'amneko",
        company: "Twin Adder"
    }, {
        level: "30",
        name: "Dead Man Walking",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "H'amneko",
        company: "Twin Adder"
    }, {
        level: "30",
        name: "It Goes with the Territory",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "H'amneko",
        company: "Twin Adder"
    }, {
        level: "30",
        name: "This Is Going to Sting, A Lot",
        zone: "South Shroud",
        location: "Camp Tranquil",
        npc: "H'amneko",
        company: "Twin Adder"
    }, {
        level: "35",
        name: "Feathered Foes",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Twin Adder"
    }, {
        level: "35",
        name: "Just Making an Observation",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Twin Adder"
    }, {
        level: "35",
        name: "Roast Lamb with Mint and Hellfire",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Twin Adder"
    }, {
        level: "40",
        name: "Talk to My Voidsent",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Twin Adder"
    }, {
        level: "40",
        name: "The Bloodhounds of Coerthas",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Twin Adder"
    }, {
        level: "40",
        name: "Yellow Is The New Black",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Twin Adder"
    }, {
        level: "45",
        name: "Amateur Hour",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Twin Adder"
    }, {
        level: "45",
        name: "Get Off Our Lake",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Twin Adder"
    }, {
        level: "45",
        name: "The Awry Salvages",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Twin Adder"
    },
    //------------------------------------------------------------------ Immortal Flames
    {
        level: "20",
        name: "A Cold-blooded Business",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "20",
        name: "Blood in the Water",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "20",
        name: "The Burning Reason",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "20",
        name: "Watch Me If You Can",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "25",
        name: "A Heart Aflame",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "25",
        name: "Don't Tear Down This Wall",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "25",
        name: "Food for Thought",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "25",
        name: "The Third Prize Is that You're Slain",
        zone: "Eastern Thanalan",
        location: "Camp Drybone",
        npc: "Kikiri",
        company: "Flames"
    }, {
        level: "30",
        name: "And Then There Were None",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Blue Herring",
        company: "Flames"
    }, {
        level: "30",
        name: "Bridges of Qiqirn Country",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Blue Herring",
        company: "Flames"
    }, {
        level: "30",
        name: "Grapevine of Wrath",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Blue Herring",
        company: "Flames"
    }, {
        level: "30",
        name: "The Cost of Living",
        zone: "Southern Thanalan",
        location: "Little Ala Mhigo",
        npc: "Blue Herring",
        company: "Flames"
    }, {
        level: "35",
        name: "Dress for Aggress",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Flames"
    }, {
        level: "35",
        name: "Pick Your Poison",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Flames"
    }, {
        level: "35",
        name: "The Baddest Brigade in Town",
        zone: "Coerthas Central Highlands",
        location: "Observatorium",
        npc: "Haisie",
        company: "Flames"
    }, {
        level: "40",
        name: "If You Put It That Way",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Flames"
    }, {
        level: "40",
        name: "No Big Whoop",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Flames"
    }, {
        level: "40",
        name: "You Dropped Something",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim Front",
        npc: "Lodille",
        company: "Flames"
    }, {
        level: "45",
        name: "Science Shindig",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Flames"
    }, {
        level: "45",
        name: "The Museum Is Closed",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Flames"
    }, {
        level: "45",
        name: "Who Writes History",
        zone: "Mor Dhona",
        location: "Saint Coinach's Find",
        npc: "Eidhart",
        company: "Flames"
    }
];
