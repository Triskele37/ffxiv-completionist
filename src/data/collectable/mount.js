import { DataGroup } from "../DataGroup";

export const Collectables_Mount_Guide = function(parent) {
    const data = new DataGroup("Mount Guide", parent);
    data.name_fr = "Montures";

    data.initializeTasks(tasks, [
        { header: "Mount", key: "name", },
        { header: "Category", key: "category", filterable: true },
        { header: "Source", key: "source" },
        { header: "Patch", key: "patch", filterable: true },
    ]);

    return data;
};

const tasks = [
    {
        "name_en": "Adamantoise",
        "category": "Purchase",
        "source": "200,000 MGP",
        "patch": "2.51"
    },
    {
        "name_en": "Aerodynamics System",
        "category": "Achievement",
        "source": "In a Blaze of Glory V",
        "patch": "3.3"
    },
    {
        "name_en": "Ahriman",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 6 Achievement Certificates",
        "patch": "2.0"
    },
    {
        "name_en": "Air Force",
        "category": "Raid",
        "source": "Sigmascape V4.0 (Savage)",
        "patch": "4.2"
    },
    {
        "name_en": "Aithon",
        "category": "Trial",
        "source": "The Bowl of Embers (Extreme)",
        "patch": "2.2"
    },
    {
        "name_en": "Albino Karakul",
        "category": "Purchase",
        "source": "8,400 Skybuilders' Scrips",
        "patch": "5.21"
    },
    {
        "name_en": "Alte Roite",
        "category": "Raid",
        "source": "Deltascape V4.0 (Savage)",
        "patch": "4.05"
    },
    {
        "name_en": "Amaro",
        "category": "Achievement",
        "source": "A Life of Adventure IV",
        "patch": "5.0"
    },
    {
        "name_en": "Amber Draught Chocobo",
        "category": "Premium",
        "source": "Calamity Salvager - 8 Gold Chocobo Feathers (Recruit a Friend Campaign)",
        "patch": "3.0"
    },
    {
        "name_en": "Aquamarine Carbuncle",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.15"
    },
    {
        "name_en": "Archon Throne",
        "category": "Purchase",
        "source": "750,000 MGP",
        "patch": "3.5"
    },
    {
        "name_en": "Arrhidaeus",
        "category": "Raid",
        "source": "Alexander - The Soul of the Creator (Savage)",
        "patch": "3.4"
    },
    {
        "name_en": "Astrope",
        "category": "Achievement",
        "source": "I Hope Mentor Will Notice Me VI",
        "patch": "3.3"
    },
    {
        "name_en": "Auspicious Kamuy",
        "category": "Trial",
        "source": "The Jade Stoa (Extreme)",
        "patch": "4.2"
    },
    {
        "name_en": "Battle Bear",
        "category": "Achievement",
        "source": "Tank You, Warrior III",
        "patch": "4.0"
    },
    {
        "name_en": "Battle Lion",
        "category": "Achievement",
        "source": "Tank You, Paladin III",
        "patch": "4.0"
    },
    {
        "name_en": "Battle Panther",
        "category": "Achievement",
        "source": "Tank You, Dark Knight III",
        "patch": "4.0"
    },
    {
        "name_en": "Battle Tiger",
        "category": "Achievement",
        "source": "Tank You, Gunbreaker III",
        "patch": "5.0"
    },
    {
        "name_en": "Behemoth",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 6 Achievement Certificates",
        "patch": "2.1"
    },
    {
        "name_en": "Bennu",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.25"
    },
    {
        "name_en": "Black Chocobo",
        "category": "Quest",
        "source": "Divine Intervention",
        "patch": "3.0"
    },
    {
        "name_en": "Black Pegasus",
        "category": "Deep Dungeon",
        "source": "The Palace of the Dead",
        "patch": "3.4"
    },
    {
        "name_en": "Blissful Kamuy",
        "category": "Trial",
        "source": "Emanation (Extreme)",
        "patch": "4.0"
    },
    {
        "name_en": "Bomb Palanquin",
        "category": "Purchase",
        "source": "Kobold Vendor - 789th Order Dig - 120,000 Gil",
        "patch": "2.2"
    },
    {
        "name_en": "Boreas",
        "category": "Trial",
        "source": "Akh Afah Amphitheatre (Extreme)",
        "patch": "2.4"
    },
    {
        "name_en": "Broken Heart (Left)",
        "category": "Event / Premium",
        "source": "Valentione's Day (2018) / Final Fantasy XIV Online Store",
        "patch": "4.2"
    },
    {
        "name_en": "Broken Heart (Right)",
        "category": "Event / Premium",
        "source": "Valentione's Day (2018) / Final Fantasy XIV Online Store",
        "patch": "4.2"
    },
    {
        "name_en": "Cavalry Drake",
        "category": "Purchase",
        "source": "Amalj'aa Vendor - Ring of Ash - 120,000 Gil",
        "patch": "2.1"
    },
    {
        "name_en": "Cavalry Elbst",
        "category": "Purchase",
        "source": "Sahagin Vendor - Novv's Nursery - 120,000 Gil",
        "patch": "2.2"
    },
    {
        "name_en": "Centurio Tiger",
        "category": "Achievement",
        "source": "You Got Game",
        "patch": "4.0"
    },
    {
        "name_en": "Ceremony Chocobo",
        "category": "Quest",
        "source": "The Ties That Bind",
        "patch": "2.45"
    },
    {
        "name_en": "Chocobo Carriage",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "5.3"
    },
    {
        "name_en": "Circus Ahriman",
        "category": "Event",
        "source": "All Saints' Wake (2019)",
        "patch": "5.0"
    },
    {
        "name_en": "Citrine Carbuncle",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.15"
    },
    {
        "name_en": "Cloud Mallow",
        "category": "Purchase",
        "source": "Mogmul Mogbelly - Bahrr Lehs - 200,000 Gil",
        "patch": "3.3"
    },
    {
        "name_en": "Coeurl",
        "category": "Premium",
        "source": "A Realm Reborn Collector's Edition",
        "patch": "2.0"
    },
    {
        "name_en": "Company Chocobo",
        "category": "Quest",
        "source": "My Little Chocobo (Immortal Flames) / My Little Chocobo (Maelstrom) / My Little Chocobo (Twin Adder)",
        "patch": "2.0"
    },
    {
        "name_en": "Construct VII",
        "category": "Achievement",
        "source": "One Steppe at a Time V",
        "patch": "5.15"
    },
    {
        "name_en": "Dark Lanner",
        "category": "Trial",
        "source": "The Minstrel's Ballad: Nidhogg's Rage",
        "patch": "3.3"
    },
    {
        "name_en": "Demi-Ozma",
        "category": "Achievement",
        "source": "We're on Your Side I",
        "patch": "4.5"
    },
    {
        "name_en": "Demonic Lanner",
        "category": "Trial",
        "source": "Containment Bay Z1T9 (Extreme)",
        "patch": "3.5"
    },
    {
        "name_en": "Dhalmel",
        "category": "Other",
        "source": "Kupo of Fortune",
        "patch": "5.21"
    },
    {
        "name_en": "Direwolf",
        "category": "Purchase",
        "source": "Ixali Vendor - Ehcatl - 120,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Disembodied Head",
        "category": "Purchase",
        "source": "E-Una-Kotor - Quarrymill - 10 Gelmorran Potsherds",
        "patch": "3.35"
    },
    {
        "name_en": "Dodo",
        "category": "Deep Dungeon",
        "source": "Heaven-on-High",
        "patch": "4.35"
    },
    {
        "name_en": "Draught Chocobo",
        "category": "Premium",
        "source": "Recruit a Friend Campaign Reward",
        "patch": "2.3"
    },
    {
        "name_en": "Eggshilaration System",
        "category": "Event / Premium",
        "source": "Hatching-tide (2017) / Final Fantasy XIV Online Store",
        "patch": "3.5"
    },
    {
        "name_en": "Ehll Tou",
        "category": "Quest",
        "source": "On Ehll Tou's Wings",
        "patch": "5.3"
    },
    {
        "name_en": "Eldthurs",
        "category": "Eureka",
        "source": "Happy Bunny Lockbox - Eureka Pyros",
        "patch": "4.45"
    },
    {
        "name_en": "Enbarr",
        "category": "Trial",
        "source": "The Whorleater (Extreme)",
        "patch": "2.2"
    },
    {
        "name_en": "Epimetheus",
        "category": "Feast",
        "source": "The Feast: Season 14",
        "patch": "5.2"
    },
    {
        "name_en": "Euphonious Kamuy",
        "category": "Trial",
        "source": "Hells' Kier (Extreme)",
        "patch": "4.4"
    },
    {
        "name_en": "Eurekan Petrel",
        "category": "Eureka",
        "source": "Happy Bunny Lockbox - Eureka Hydatos",
        "patch": "4.5"
    },
    {
        "name_en": "Fae Gwiber",
        "category": "Trial",
        "source": "The Dancing Plague (Extreme)",
        "patch": "5.0"
    },
    {
        "name_en": "Falcon",
        "category": "Limited",
        "source": "Fly the Falcon Mount Campaign",
        "patch": "4.05"
    },
    {
        "name_en": "Fat Black Chocobo",
        "category": "Premium",
        "source": "In-Game Item Campaign",
        "patch": "4.45"
    },
    {
        "name_en": "Fat Chocobo",
        "category": "Premium",
        "source": "A Realm Reborn Collector's Edition",
        "patch": "2.2"
    },
    {
        "name_en": "Fat Moogle",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.35"
    },
    {
        "name_en": "Fatter Cat",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.45"
    },
    {
        "name_en": "Fenrir",
        "category": "Purchase",
        "source": "1,000,000 MGP",
        "patch": "2.51"
    },
    {
        "name_en": "Firebird",
        "category": "Quest",
        "source": "Fiery Wings, Fiery Hearts",
        "patch": "3.5"
    },
    {
        "name_en": "Flame Warsteed",
        "category": "Achievement",
        "source": "A Line in the Sand IV",
        "patch": "2.3"
    },
    {
        "name_en": "Flying Chair",
        "category": "Crafting",
        "source": "Crafted by Alchemist",
        "patch": "4.1"
    },
    {
        "name_en": "Flying Cumulus",
        "category": "Limited",
        "source": "In-Game Item Campaign",
        "patch": "3.5"
    },
    {
        "name_en": "Forgiven Reticence",
        "category": "Purchase",
        "source": "3,200 Sacks of Nuts",
        "patch": "5.1"
    },
    {
        "name_en": "Gilded Magitek Armor",
        "category": "Achievement",
        "source": "Everybody's Darling",
        "patch": "2.1"
    },
    {
        "name_en": "Ginga",
        "category": "Event",
        "source": "GARO Collaboration",
        "patch": "3.5"
    },
    {
        "name_en": "Gloria-class Airship",
        "category": "Achievement",
        "source": "You Are What You Eat IV",
        "patch": "3.2"
    },
    {
        "name_en": "Gobwalker",
        "category": "Raid",
        "source": "Alexander - The Burden of the Father (Savage)",
        "patch": "3.05"
    },
    {
        "name_en": "Goobbue",
        "category": "Limited",
        "source": "At level 30 or above, speak with the Wandering Minstrel in Eastern La Noscea (1.0)",
        "patch": "2.0"
    },
    {
        "name_en": "Goten",
        "category": "Event",
        "source": "GARO Collaboration",
        "patch": "3.5"
    },
    {
        "name_en": "Grani",
        "category": "Premium",
        "source": "Shadowbringers Collector's Edition",
        "patch": "5.0"
    },
    {
        "name_en": "Great Vessel Of Ronka",
        "category": "Purchase",
        "source": "Yuqurl Manl - The Rak'tika Greatwood - 18 Qitari Compliments",
        "patch": "5.2"
    },
    {
        "name_en": "Griffin",
        "category": "Premium",
        "source": "Heavensward Collector's Edition",
        "patch": "3.0"
    },
    {
        "name_en": "Gullfaxi",
        "category": "Trial",
        "source": "The Navel (Extreme)",
        "patch": "2.2"
    },
    {
        "name_en": "Gwiber of Light",
        "category": "Trial",
        "source": "The Seat of Sacrifice (Extreme)",
        "patch": "5.3"
    },
    {
        "name_en": "Hallowed Kamuy",
        "category": "Trial",
        "source": "The Wreath of Snakes (Extreme)",
        "patch": "4.45"
    },
    {
        "name_en": "Hybodus",
        "category": "Achievement",
        "source": "No More Fish in the Sea II",
        "patch": "5.2"
    },
    {
        "name_en": "Incitatus",
        "category": "Purchase",
        "source": "600 Faux Leaves / 1 Khloe's Gold Certificate of Commendation",
        "patch": "5.3"
    },
    {
        "name_en": "Indigo Whale",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.4"
    },
    {
        "name_en": "Innocent Gwiber",
        "category": "Trial",
        "source": "The Crown of the Immaculate (Extreme)",
        "patch": "5.0"
    },
    {
        "name_en": "Ironfrog Mover",
        "category": "Purchase",
        "source": "Fathard - Eulmore - 12 Formidable Cog (FATE \"A Finale Most Formidable\")",
        "patch": "5.0"
    },
    {
        "name_en": "Ixion",
        "category": "Purchase",
        "source": "Eschina - Rhalgr's Reach - 12 Ixion Horns (FATE \"A Horse Outside\")",
        "patch": "4.0"
    },
    {
        "name_en": "Jibanyan Couch",
        "category": "Event",
        "source": "Yo-kai Watch Collaboration - Acquire 17 Yo-kai Weapons",
        "patch": "5.3"
    },
    {
        "name_en": "Juedi",
        "category": "Achievement",
        "source": "Dressed For Heaven",
        "patch": "4.35"
    },
    {
        "name_en": "Kamuy of the Nine Tails",
        "category": "Quest",
        "source": "A Lone Wolf No More",
        "patch": "4.45"
    },
    {
        "name_en": "Kingly Peacock",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "5.2"
    },
    {
        "name_en": "Kirin",
        "category": "Quest",
        "source": "A Legend for a Legend",
        "patch": "2.5"
    },
    {
        "name_en": "Kongamato",
        "category": "Purchase",
        "source": "Vath Stickpeddler - Loth ast Vath - 200,000 Gil",
        "patch": "3.2"
    },
    {
        "name_en": "Korpokkur Kolossus",
        "category": "Purchase",
        "source": "750,000 MGP",
        "patch": "4.1"
    },
    {
        "name_en": "Laurel Goobbue",
        "category": "Purchase",
        "source": "Sylphic Vendor - Little Solace - 120,000 Gil",
        "patch": "2.1"
    },
    {
        "name_en": "Legacy Chocobo",
        "category": "Limited",
        "source": "Legacy Campaign",
        "patch": "2.0"
    },
    {
        "name_en": "Legendary Kamuy",
        "category": "Trial",
        "source": "The Minstrel's Ballad: Shinryu's Domain",
        "patch": "4.1"
    },
    {
        "name_en": "Logistics System",
        "category": "Achievement",
        "source": "Behind Enemy Lines I",
        "patch": "2.5"
    },
    {
        "name_en": "Lone Faehound",
        "category": "Feast",
        "source": "The Feast: Season 4",
        "patch": "4.0"
    },
    {
        "name_en": "Lone Hellhound",
        "category": "Feast",
        "source": "The Feast: Season 3",
        "patch": "3.55a"
    },
    {
        "name_en": "Lunar Kamuy",
        "category": "Trial",
        "source": "The Minstrel's Ballad: Tsukuyomi's Pain",
        "patch": "4.3"
    },
    {
        "name_en": "Magicked Bed",
        "category": "Crafting",
        "source": "Crafted by Carpenter",
        "patch": "5.05"
    },
    {
        "name_en": "Magicked Carpet",
        "category": "Premium",
        "source": "Final Fantasy XIV Online",
        "patch": "4.45"
    },
    {
        "name_en": "Magitek Armor",
        "category": "Quest",
        "source": "The Ultimate Weapon",
        "patch": "2.0"
    },
    {
        "name_en": "Magitek Avenger",
        "category": "Achievement",
        "source": "Die Another Day III",
        "patch": "4.1"
    },
    {
        "name_en": "Magitek Avenger A-1",
        "category": "Achievement",
        "source": "Out of Hiding",
        "patch": "4.5"
    },
    {
        "name_en": "Magitek Conveyer",
        "category": "Feast",
        "source": "The Feast: Season 7",
        "patch": "4.3"
    },
    {
        "name_en": "Magitek Death Claw",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 6 Achievement Certificates",
        "patch": "4.2"
    },
    {
        "name_en": "Magitek Hyperconveyor",
        "category": "Feast",
        "source": "The Feast: Season 16",
        "patch": "5.3"
    },
    {
        "name_en": "Magitek Predator",
        "category": "Dungeon",
        "source": "Ala Mhigo",
        "patch": "4.0"
    },
    {
        "name_en": "Magitek Sky Armor",
        "category": "Purchase",
        "source": "20,000 Wolf Marks",
        "patch": "4.4"
    },
    {
        "name_en": "Magna Roader",
        "category": "Feast",
        "source": "The Feast: Season 11",
        "patch": "4.45"
    },
    {
        "name_en": "Manacutter",
        "category": "Quest",
        "source": "Into the Aery",
        "patch": "3.0"
    },
    {
        "name_en": "Managarm",
        "category": "Premium",
        "source": "Calamity Salvager - 8 Gold Chocobo Feathers (Recruit a Friend Campaign)",
        "patch": "4.1"
    },
    {
        "name_en": "Marid",
        "category": "Purchase",
        "source": "Madhura - Castellum Velodyna - 18 Ananta Dreamstaffs",
        "patch": "4.2"
    },
    {
        "name_en": "Markab",
        "category": "Trial",
        "source": "The Striking Tree (Extreme)",
        "patch": "2.3"
    },
    {
        "name_en": "Maxima Roader",
        "category": "Feast",
        "source": "The Feast: Season 12",
        "patch": "4.45"
    },
    {
        "name_en": "Megalotragus",
        "category": "Purchase",
        "source": "8,400 Skybuilders' Scrips",
        "patch": "5.31"
    },
    {
        "name_en": "Menoetius",
        "category": "Feast",
        "source": "The Feast: Season 15",
        "patch": "5.2"
    },
    {
        "name_en": "Midgardsormr",
        "category": "Quest",
        "source": "Fetters of Lament",
        "patch": "3.0"
    },
    {
        "name_en": "Mikoshi",
        "category": "Purchase",
        "source": "Gyosho - Dhoro Iloh - 20 Namazu Koban",
        "patch": "4.3"
    },
    {
        "name_en": "Model O",
        "category": "Raid",
        "source": "Alphascape V4.0 (Savage)",
        "patch": "4.4"
    },
    {
        "name_en": "Morbol",
        "category": "Achievement",
        "source": "True Blue",
        "patch": "5.15"
    },
    {
        "name_en": "Mystic Panda",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.1"
    },
    {
        "name_en": "Nezha Chariot",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.2"
    },
    {
        "name_en": "Nightmare",
        "category": "Trial",
        "source": "The Bowl of Embers (Extreme) / The Howling Eye (Extreme) / The Navel (Extreme)",
        "patch": "2.1"
    },
    {
        "name_en": "Original Fat Chocobo",
        "category": "Limited",
        "source": "In-Game Item Campaign",
        "patch": "3.2"
    },
    {
        "name_en": "Pack Faehound",
        "category": "Feast",
        "source": "The Feast: Season 4",
        "patch": "4.0"
    },
    {
        "name_en": "Pack Hellhound",
        "category": "Feast",
        "source": "The Feast: Season 3",
        "patch": "3.55a"
    },
    {
        "name_en": "Parade Chocobo",
        "category": "Achievement",
        "source": "Leaving a Better Impression II",
        "patch": "2.4"
    },
    {
        "name_en": "Pegasus",
        "category": "Purchase",
        "source": "4,200 Skybuilders' Scrips",
        "patch": "3.1"
    },
    {
        "name_en": "Portly Porxie",
        "category": "Purchase",
        "source": "Jul Oul - Il Mheg - 18 Fae Fancy",
        "patch": "5.1"
    },
    {
        "name_en": "Prototype Conveyor",
        "category": "Feast",
        "source": "The Feast: Season 8",
        "patch": "4.31"
    },
    {
        "name_en": "Pteranodon",
        "category": "Achievement",
        "source": "Castle in the Sky",
        "patch": "5.21"
    },
    {
        "name_en": "Raigo",
        "category": "Event",
        "source": "GARO Collaboration",
        "patch": "3.5"
    },
    {
        "name_en": "Ramuh",
        "category": "Raid",
        "source": "Eden's Verse: Refulgence (Savage)",
        "patch": "5.2"
    },
    {
        "name_en": "Rathalos",
        "category": "Trial",
        "source": "The Great Hunt (Extreme)",
        "patch": "4.36"
    },
    {
        "name_en": "Red Baron",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.1"
    },
    {
        "name_en": "Red Hare",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.3"
    },
    {
        "name_en": "Regalia Type-G",
        "category": "Event",
        "source": "Final Fantasy XV Collaboration",
        "patch": "4.5"
    },
    {
        "name_en": "Reveling Kamuy",
        "category": "Trial",
        "source": "The Pool of Tribute (Extreme)",
        "patch": "4.0"
    },
    {
        "name_en": "Rolling Tankard",
        "category": "Purchase",
        "source": "18 Hammered Frogments",
        "patch": "5.3"
    },
    {
        "name_en": "Rose Lanner",
        "category": "Trial",
        "source": "Thok ast Thok (Extreme)",
        "patch": "3.2"
    },
    {
        "name_en": "Round Lanner",
        "category": "Trial",
        "source": "The Minstrel's Ballad: Thordan's Reign",
        "patch": "3.2"
    },
    {
        "name_en": "Rubellite Carbuncle",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "5.2"
    },
    {
        "name_en": "Ruby Gwiber",
        "category": "Trial",
        "source": "Cinder Drift (Extreme)",
        "patch": "5.2"
    },
    {
        "name_en": "Sabotender Emperador",
        "category": "Purchase",
        "source": "2,000,000 MGP",
        "patch": "4.45"
    },
    {
        "name_en": "Safeguard System",
        "category": "Achievement",
        "source": "Front and Center V",
        "patch": "4.3"
    },
    {
        "name_en": "Sanuwa",
        "category": "Purchase",
        "source": "Luna Vanu - Ok' Gundu Nakki - 200,000 Gil",
        "patch": "3.1"
    },
    {
        "name_en": "SDS Fenrir",
        "category": "Premium",
        "source": "Fan Festival 2018-2019 / Final Fantasy XIV Online Store",
        "patch": "4.4"
    },
    {
        "name_en": "Serpent Warsteed",
        "category": "Achievement",
        "source": "A Line in the Glade IV",
        "patch": "2.3"
    },
    {
        "name_en": "Shadow Gwiber",
        "category": "Trial",
        "source": "The Minstrel's Ballad: Hades's Elegy",
        "patch": "5.1"
    },
    {
        "name_en": "Skyslipper",
        "category": "Raid",
        "source": "Eden's Gate: Sepulture (Savage)",
        "patch": "5.05"
    },
    {
        "name_en": "Sleipnir",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.38"
    },
    {
        "name_en": "Sophic Lanner",
        "category": "Trial",
        "source": "Containment Bay P1T6 (Extreme)",
        "patch": "3.4"
    },
    {
        "name_en": "Spriggin Stonecarrier",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "5.2"
    },
    {
        "name_en": "Starlight Bear",
        "category": "Event / Premium",
        "source": "Starlight Celebration (2017) / Final Fantasy XIV Online Store",
        "patch": "4.1"
    },
    {
        "name_en": "Storm Warsteed",
        "category": "Achievement",
        "source": "A Line in the Storm IV",
        "patch": "2.3"
    },
    {
        "name_en": "Striped Ray",
        "category": "Purchase",
        "source": "Shikitahe - Tamamizu - 12 Kojin Sango",
        "patch": "4.1"
    },
    {
        "name_en": "Sunspun Cumulus",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "5.0"
    },
    {
        "name_en": "Syldra",
        "category": "Premium",
        "source": "Stormblood Collector's Edition",
        "patch": "4.0"
    },
    {
        "name_en": "Triceratops",
        "category": "Achievement",
        "source": "Nuts for Nutsy",
        "patch": "5.0"
    },
    {
        "name_en": "True Griffin",
        "category": "Purchase",
        "source": "Madhura - Castellum Velodyna - 18 Ananta Dreamstaffs",
        "patch": "4.2"
    },
    {
        "name_en": "Twintania",
        "category": "Premium",
        "source": "Calamity Salvager - 15 Gold Chocobo Feathers (Recruit a Friend Campaign)",
        "patch": "3.0"
    },
    {
        "name_en": "Typhon",
        "category": "Purchase",
        "source": "750,000 MGP",
        "patch": "4.4"
    },
    {
        "name_en": "Tyrannosaur",
        "category": "Eureka",
        "source": "Anemos Lockbox",
        "patch": "4.25"
    },
    {
        "name_en": "Ufiti",
        "category": "Purchase",
        "source": "8,400 Skybuilders' Scrips",
        "patch": "5.11"
    },
    {
        "name_en": "Unicorn",
        "category": "Quest",
        "source": "Unicorn Power",
        "patch": "2.0"
    },
    {
        "name_en": "War Panther",
        "category": "Achievement",
        "source": "But Somebody's Gotta Do It (Dark Knight)",
        "patch": "3.0"
    },
    {
        "name_en": "War Tiger",
        "category": "Achievement",
        "source": "Tank You, Gunbreaker II",
        "patch": "5.0"
    },
    {
        "name_en": "Warbear",
        "category": "Achievement",
        "source": "But Somebody's Gotta Do It (Warrior)",
        "patch": "2.2"
    },
    {
        "name_en": "Warlion",
        "category": "Achievement",
        "source": "But Somebody's Gotta Do It (Paladin)",
        "patch": "2.2"
    },
    {
        "name_en": "Warring Lanner",
        "category": "Trial",
        "source": "Containment Bay S1T7 (Extreme)",
        "patch": "3.2"
    },
    {
        "name_en": "Whisper A-go-go",
        "category": "Event",
        "source": "Yo-kai Watch Collaboration - Acquire 13 Yo-kai Weapons",
        "patch": "3.35"
    },
    {
        "name_en": "Whisper-go",
        "category": "Event",
        "source": "Yo-kai Watch Collaboration - Acquire 13 Yo-kai Minions",
        "patch": "3.35"
    },
    {
        "name_en": "White Devil",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.1"
    },
    {
        "name_en": "White Lanner",
        "category": "Trial",
        "source": "The Limitless Blue (Extreme)",
        "patch": "3.2"
    },
    {
        "name_en": "Witch's Broom",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2015) / Final Fantasy XIV Online Store",
        "patch": "3.07"
    },
    {
        "name_en": "Wyvern",
        "category": "Purchase",
        "source": "Bertana - Idyllshire - 6 Clan Mark Logs",
        "patch": "3.1"
    },
    {
        "name_en": "Xanthos",
        "category": "Trial",
        "source": "The Howling Eye (Extreme)",
        "patch": "2.2"
    },
    {
        "name_en": "Yol",
        "category": "Quest",
        "source": "In the Footsteps of Bardam The Brave",
        "patch": "4.0"
    },
    {
        "name_en": "Zu",
        "category": "Purchase",
        "source": "Spoils Collector - 1 Iron Voyage Spoil",
        "patch": "3.2"
    }
];
