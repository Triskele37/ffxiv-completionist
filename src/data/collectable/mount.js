import { DataGroup } from "../DataGroup";

export const Collectables_Mount_Guide = function(parent) {
    return new DataGroup("Mount Guide", parent).initializeTasks(tasks, [
        { header: "Mount", key: "name", },
        { header: "Method", key: "method" },
        { header: "Patch", key: "patch", filterable: true },
    ]);
};

const tasks = [
    {
        name: "Adamantoise",
        method: "200,000 MGP from Gold Saucer Attendant (Prize Claim)",
        patch: "2.51",
    },
    {
        name: "Aerodynamics System",
        method: "Awarded from the Achievement In a Blaze of Glory V.",
        patch: "3.3",
    },
    {
        name: "Ahriman",
        method: "Achievement Certificates",
        patch: "2.0",
    },
    {
        name: "Air Force",
        method: "Guaranteed drop from Sigmascape V4.0 (Savage)",
        patch: "4.2",
    },
    {
        name: "Aithon",
        method: "Dropped by Ifrit in The Bowl of Embers (Extreme).",
        patch: "2.2",
    },
    {
        name: "Albino Karakul",
        method: "Purchased from Enie in The Firmament for 8,400 Skybuilders' Scrips",
        patch: "5.21",
    },
    {
        name: "Alte Roite",
        method: "Drops from Deltascape V4.0 (Savage)",
        patch: "4.05",
    },
    {
        name: "Amaro",
        method: "Completion of the Life of Adventure IV Achievement",
        patch: "5.0",
    },
    {
        name: "Amber Draught Chocobo",
        method: "8x Gold Chocobo Feathers, which are received from the Recruit a Friend Campaign.",
        patch: "3.0",
    },
    {
        name: "Aquamarine Carbuncle",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.15",
    },
    {
        name: "Archon Throne",
        method: "750,000 MGP from Gold Saucer Attendant",
        patch: "3.5",
    },
    {
        name: "Arrhidaeus",
        method: "Dropped from Alexander - The Soul of the Creator (Savage) (A12S)",
        patch: "3.4",
    },
    {
        name: "Astrope",
        method: "Rewarded from the 2,000 Mentor Roulette Achievement",
        patch: "3.3",
    },
    {
        name: "Auspicious Kamuy",
        method: "Rarely from The Jade Stoa (Extreme).",
        patch: "4.2",
    },
    {
        name: "Battle Bear",
        method: "Awarded from the Achievement Tank You, Warrior III.",
        patch: "4.0",
    },
    {
        name: "Battle Lion",
        method: "Awarded from the Achievement Tank You, Paladin III.",
        patch: "4.0",
    },
    {
        name: "Battle Panther",
        method: "Awarded from the Achievement Tank You, Dark Knight III. ",
        patch: "4.0",
    },
    {
        name: "Battle Tiger",
        method: "Completion of the Tank you Gunbreaker III achievement.",
        patch: "5.0",
    },
    {
        name: "Behemoth",
        method: "Achievement Certificates",
        patch: "2.1",
    },
    {
        name: "Bennu",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "3.25",
    },
    {
        name: "Black Chocobo",
        method: "Completion of Divine Intervention Heavensward Main Scenario Quest",
        patch: "3.0",
    },
    {
        name: "Black Pegasus",
        method: "From Gold-trimmed Sacks found in Floors 151 - 200 of Palace of the Dead.",
        patch: "3.4",
    },
    {
        name: "Blissful Kamuy",
        method: "Dropped from Emanation (Extreme) (Lakshmi Ex).",
        patch: "4.0",
    },
    {
        name: "Bomb Palanquin",
        method: "Kobold Vendor with \"Trusted\" Reputation with the tribe.",
        patch: "2.2",
    },
    {
        name: "Boreas",
        method: "Dropped by Shiva in The Akh Afah Amphitheatre (Extreme)",
        patch: "2.4",
    },
    {
        name: "Broken Heart (Left)",
        method: "Valentione's Day (2018)",
        patch: "4.2",
    },
    {
        name: "Broken Heart (Right)",
        method: "Valentione's Day (2018)",
        patch: "4.2",
    },
    {
        name: "Cavalry Drake",
        method: "Amalj'aa Vendor with \"Trusted\" Reputation with the tribe.",
        patch: "2.1",
    },
    {
        name: "Cavalry Elbst",
        method: "Sahagin Vendor with \"Trusted\" Reputation with the tribe.",
        patch: "2.2",
    },
    {
        name: "Centurio Tiger",
        method: "You Got Game Hunt Achievement",
        patch: "4.0",
    },
    {
        name: "Ceremony Chocobo",
        method: "Obtain from Gold or Platinum Eternal Bond.",
        patch: "2.45",
    },
    {
        name: "Chocobo Carriage",
        method: "",
        patch: "5.3",
    },
    {
        name: "Circus Ahriman",
        method: "All Saint's Wake 2019",
        patch: "5.0",
    },
    {
        name: "Citrine Carbuncle",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.15",
    },
    {
        name: "Cloud Mallow",
        method: "200,000 gil from Mogmul Mogbelly, at Rank 7 (Sworn) with the Moogle Beast Tribe.",
        patch: "3.3",
    },
    {
        name: "Coeurl",
        method: "Coeurl Mount is available to players who have purchased the Collector's Edition.",
        patch: "2.0",
    },
    {
        name: "Company Chocobo",
        method: "Completion of one of the My Little Chocobo Grand Company quests.",
        patch: "2.0",
    },
    {
        name: "Construct VII",
        method: "Awarded from the achievement One Steppe At A Time V",
        patch: "5.15",
    },
    {
        name: "Dark Lanner",
        method: "Rare drop from Nidhogg Extreme",
        patch: "3.3",
    },
    {
        name: "Demi-Ozma",
        method: "Completion of the achievement We're on Your Side I",
        patch: "4.5",
    },
    {
        name: "Demonic Lanner",
        method: "Drops from Containment Bay Z1T9 (Extreme) (Zurvan EX).",
        patch: "3.5",
    },
    {
        name: "Dhalmel",
        method: "Prize from Kupo of Fortune in The Firmament",
        patch: "5.21",
    },
    {
        name: "Direwolf",
        method: "Ixali Vendor with \"Sworn\" Reputation with the tribe.",
        patch: "2.35",
    },
    {
        name: "Disembodied Head",
        method: "Bought from E-Una-Kotor for 10x Gelmorran Potsherd.",
        patch: "3.35",
    },
    {
        name: "Dodo",
        method: "Rarely from Platinum-haloed Sacks from Heaven-on-High",
        patch: "4.35",
    },
    {
        name: "Draught Chocobo",
        method: "Received from the Recruit a Friend Campaign.",
        patch: "2.3",
    },
    {
        name: "Eggshilaration System",
        method: "Purchased from the Mog Station for EUR 8.40 or $12.",
        patch: "3.5",
    },
    {
        name: "Ehll Tou",
        method: "Completion of the level 70 Ishgardian Restoration Sidequest on Ehll Tou's Wings",
        patch: "5.3",
    },
    {
        name: "Eldthurs",
        method: "Forbidden Land, Eureka Pyros",
        patch: "4.45",
    },
    {
        name: "Enbarr",
        method: "Dropped by Leviathan in The Whorleater (Extreme).",
        patch: "2.2",
    },
    {
        name: "Epimetheus",
        method: "The Feast Season 14 Reward",
        patch: "5.2",
    },
    {
        name: "Euphonious Kamuy",
        method: "Trial reward for Hell's Kier (Extreme)",
        patch: "4.4",
    },
    {
        name: "Eurekan Petrel",
        method: "Rarely drops from Eureka Hydatos bunny chest.",
        patch: "4.5",
    },
    {
        name: "Fae Gwiber",
        method: "Trial reward for Titania - Dancing Plague (Extreme).",
        patch: "5.0",
    },
    {
        name: "Falcon",
        method: "Acquired from Fly the Falcon Mount Campaign",
        patch: "4.05",
    },
    {
        name: "Fat Black Chocobo",
        method: "Amazon Promotion",
        patch: "4.45",
    },
    {
        name: "Fat Chocobo",
        method: "Obtained from A Realm Reborn Collector's Edition Bonuses.",
        patch: "2.2",
    },
    {
        name: "Fat Moogle",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "3.35",
    },
    {
        name: "Fatter Cat",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.45",
    },
    {
        name: "Fenrir",
        method: "1,000,000 MGP from Gold Saucer Attendant (Prize Claim)",
        patch: "2.51",
    },
    {
        name: "Firebird",
        method: "Acquired all 7 Lanner mounts then complete the Fiery Wings, Fiery Hearts quest.",
        patch: "3.5",
    },
    {
        name: "Flame Warsteed",
        method: "Completion of the A Line in the Sand IV achievement.",
        patch: "2.3",
    },
    {
        name: "Flying Chair",
        method: "Crafted by Alchemist Level 70** with Master Alchemist V. ",
        patch: "4.1",
    },
    {
        name: "Flying Cumulus",
        method: "NA and JP special DLC Promotional Events",
        patch: "3.5",
    },
    {
        name: "Forgiven Reticence",
        method: "Purchased with 3,200 Sacks of Nuts from Ilfroy",
        patch: "5.1",
    },
    {
        name: "Gilded Magitek Armor",
        method: "Completion of the Everybody's Darling achievement.",
        patch: "2.1",
    },
    {
        name: "Ginga",
        method: "Obtained from Frontline Fury Achievement.",
        patch: "3.5",
    },
    {
        name: "Gloria-class Airship",
        method: "Completion of the You Are What You Eat IV achievement.",
        patch: "3.2",
    },
    {
        name: "Gobwalker",
        method: "Drops from Alexander - The Burden of the Father (Savage) / A4S.",
        patch: "3.05",
    },
    {
        name: "Goobbue",
        method: "Goobbue Mount is available only to 1.0 players.",
        patch: "2.0",
    },
    {
        name: "Goten",
        method: "Fatal Feast PvP Achievement",
        patch: "3.5",
    },
    {
        name: "Grani",
        method: "Purchasing the Collector's Edition of Shadowbringer.",
        patch: "5.0",
    },
    {
        name: "Great Vessel Of Ronka",
        method: "18x Qitari Compliments from Yuqurl Manl",
        patch: "5.2",
    },
    {
        name: "Griffin",
        method: "Purchasing the Collector's Edition of Heavensward.",
        patch: "3.0",
    },
    {
        name: "Gullfaxi",
        method: "Dropped by Titan in The Navel (Extreme).",
        patch: "2.2",
    },
    {
        name: "Gwiber of Light",
        method: "Rare drop from The Seat of Sacrifice (Extreme)",
        patch: "5.3",
    },
    {
        name: "Hallowed Kamuy",
        method: "Rare drop from the Wreath of Snakes (Extreme).",
        patch: "4.45",
    },
    {
        name: "Hybodus",
        method: "Awarded from the achievement No More Fish In The Sea II",
        patch: "5.2",
    },
    {
        name: "Incitatus",
        method: "Purchased with 600 Faux Leaves or 1 Khloe's Gold Certificate of Commendation",
        patch: "5.3",
    },
    {
        name: "Indigo Whale",
        method: "Purchased from the Mog Station for EUR 20 or $29.",
        patch: "4.4",
    },
    {
        name: "Innocent Gwiber",
        method: "Trial reward for Innocence - Crown of the Immaculate (Extreme).",
        patch: "5.0",
    },
    {
        name: "Ironfrog Mover",
        method: "Purchased with 12x Formidable Cog from FATE Chain in Kholusia.",
        patch: "5.0",
    },
    {
        name: "Ixion",
        method: "Trade 12 Ixion Horns to Eschina.",
        patch: "4.0",
    },
    {
        name: "Jibanyan Couch",
        method: "From the Yo-kai Watch: Gather One, Gather All! Seasonal Event.",
        patch: "5.3",
    },
    {
        name: "Juedi",
        method: "Have all 4 Empyrean Accessories in your inventory and speak with Cast-off Confederate in Crick.",
        patch: "4.35",
    },
    {
        name: "Kamuy of the Nine Tails",
        method: "Collect every Stormblood Extreme Primal Mount and complete A Lone Wolf No More sidequest.",
        patch: "4.45",
    },
    {
        name: "Kingly Peacock",
        method: "",
        patch: "5.2",
    },
    {
        name: "Kirin",
        method: "Complete the A Legend for a Legend sidequest",
        patch: "2.5",
    },
    {
        name: "Kongamato",
        method: "Obtain Rank 7 (Sworn) with Vath Beast Tribe.",
        patch: "3.2",
    },
    {
        name: "Korpokkur Kolossus",
        method: "Purchased in Gold Saucer for 750,000 MGP",
        patch: "4.1",
    },
    {
        name: "Laurel Goobbue",
        method: "Sylphic Vendor with \"Trusted\" Reputation with the tribe.",
        patch: "2.1",
    },
    {
        name: "Legacy Chocobo",
        method: "Legacy Chocobo is available to legacy players.",
        patch: "2.0",
    },
    {
        name: "Legendary Kamuy",
        method: "Rare drop in The Minstrel's Ballad: Shinryu's Domain.",
        patch: "4.1",
    },
    {
        name: "Logistics System",
        method: "Received from the Behind Enemy Lines I Achievement.",
        patch: "2.5",
    },
    {
        name: "Lone Faehound",
        method: "In The Feast Rewards (Season 4), Top 100 Solo Ranking in a Datacenter.",
        patch: "4.0",
    },
    {
        name: "Lone Hellhound",
        method: "In The Feast Rewards (Season 3), Top 100 Solo Ranking in a Datacenter.",
        patch: "3.55a",
    },
    {
        name: "Lunar Kamuy",
        method: "  Rare drop from The Minstrel's Ballad: Tsukuyomi's Pain.",
        patch: "4.3",
    },
    {
        name: "Magicked Bed",
        method: "Can be crafted by Carpenter Recipe 80★",
        patch: "5.05",
    },
    {
        name: "Magicked Carpet",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.45",
    },
    {
        name: "Magitek Armor",
        method: "Acquired after completing the Main Storyline.",
        patch: "2.0",
    },
    {
        name: "Magitek Avenger",
        method: "Awarded from the achievement Die Another Day III.",
        patch: "4.1",
    },
    {
        name: "Magitek Avenger A-1",
        method: "Complete \"Out of Hiding\" Achievement",
        patch: "4.5",
    },
    {
        name: "Magitek Conveyer",
        method: "In The Feast Rewards (Season 7), Top 100 Solo Ranking in a Datacenter.",
        patch: "4.3",
    },
    {
        name: "Magitek Death Claw",
        method: "6x Achievement Certificate from Jonathas in New Gridania.",
        patch: "4.2",
    },
    {
        name: "Magitek Hyperconveyor",
        method: "The Feast Season 16 Reward",
        patch: "5.3",
    },
    {
        name: "Magitek Predator",
        method: "Dropped by Zenos yae Galvus in the dungeon Ala Mhigo (Dungeon).",
        patch: "4.0",
    },
    {
        name: "Magitek Sky Armor",
        method: "Bought at PvP Merchant for 20,000 Wolf Marks.",
        patch: "4.4",
    },
    {
        name: "Magna Roader",
        method: "The Feast Season 11 Reward",
        patch: "4.45",
    },
    {
        name: "Manacutter",
        method: "After completing the Main Scenario Quest Into the Aery.",
        patch: "3.0",
    },
    {
        name: "Managarm",
        method: "8x Gold Chocobo Feathers, which are received from the Recruit a Friend Campaign.",
        patch: "4.1",
    },
    {
        name: "Marid",
        method: "18x Ananta Dreamstaff from Madhura.",
        patch: "4.2",
    },
    {
        name: "Markab",
        method: "Obtained after defeating Ramuh in The Striking Tree (Extreme)",
        patch: "2.3",
    },
    {
        name: "Maxima Roader",
        method: "Feast Season 12 Reward",
        patch: "4.45",
    },
    {
        name: "Menoetius",
        method: "",
        patch: "5.2",
    },
    {
        name: "Midgardsormr",
        method: "After completing the Main Scenario Quest Fetters of Lament.",
        patch: "3.0",
    },
    {
        name: "Mikoshi",
        method: "20 Namazu Koban from Gyosho",
        patch: "4.3",
    },
    {
        name: "Model O",
        method: "Raid reward for Alphascape V4.0 (Savage)",
        patch: "4.4",
    },
    {
        name: "Morbol",
        method: "Awarded from the achievement True Blue",
        patch: "5.15",
    },
    {
        name: "Mystic Panda",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.1",
    },
    {
        name: "Nezha Chariot",
        method: "Purchased from the Mog Station for EUR 16.80 or $24.",
        patch: "4.2",
    },
    {
        name: "Nightmare",
        method: "Summoned by Nightmare Whistle. Dropped by Garuda (Extreme), Titan (Extreme), and Ifrit (Extreme).",
        patch: "2.1",
    },
    {
        name: "Original Fat Chocobo",
        method: "Limited time promotional event with 7-11 (JP), Amazon (US) and GamesMaster (EU)",
        patch: "3.2",
    },
    {
        name: "Pack Faehound",
        method: "In The Feast Rewards (Season 4), Top 100 Party Ranking in a Datacenter.",
        patch: "4.0",
    },
    {
        name: "Pack Hellhound",
        method: "In The Feast Rewards (Season 3), Top 100 Party Ranking in a Datacenter.",
        patch: "3.55a",
    },
    {
        name: "Parade Chocobo",
        method: "Leaving a Better Impression II",
        patch: "2.4",
    },
    {
        name: "Pegasus",
        method: "Purchased from Spoils Collector (The Pillars) for 99 Brass Sky Pirate Spoils.",
        patch: "3.1",
    },
    {
        name: "Portly Porxie",
        method: "18x Fae Fancy from Jul Oul",
        patch: "5.1",
    },
    {
        name: "Prototype Conveyor",
        method: "In The Feast Rewards (Season 8), Top 100 Party Ranking in a Datacenter.",
        patch: "4.31",
    },
    {
        name: "Pteranodon",
        method: "Completion of the Castle In The Sky Achievement",
        patch: "5.21",
    },
    {
        name: "Raigo",
        method: "Furious Fatalities PvP Achievement",
        patch: "3.5",
    },
    {
        name: "Ramuh",
        method: "Raid reward for Eden's Verse: Refulgence (Savage)",
        patch: "5.2",
    },
    {
        name: "Rathalos",
        method: "50x Rathalos Scale+",
        patch: "4.36",
    },
    {
        name: "Red Baron",
        method: "Purchased from the Mog Station for EUR 8.40 or $12.",
        patch: "3.1",
    },
    {
        name: "Red Hare",
        method: "Purchased from the Mog Station for EUR 16.90 or $24.",
        patch: "4.3",
    },
    {
        name: "Regalia Type-G",
        method: "Purchased for 200,000 MGP during the A Nocturne for Heroes Event",
        patch: "4.5",
    },
    {
        name: "Reveling Kamuy",
        method: "Rare drop from The Pool of Tribute (Extreme) (Susano Ex).",
        patch: "4.0",
    },
    {
        name: "Rolling Tankard",
        method: "18x Hammered Frogments from Mizutt",
        patch: "5.3",
    },
    {
        name: "Rose Lanner",
        method: "Rare drop from Thok ast Thok (Extreme).",
        patch: "3.2",
    },
    {
        name: "Round Lanner",
        method: "Rare drop from The Minstrel's Ballad: Thordan's Reign.",
        patch: "3.2",
    },
    {
        name: "Rubellite Carbuncle",
        method: "Purchased from the Mog Station for EUR 16.90 or $24.",
        patch: "5.2",
    },
    {
        name: "Ruby Gwiber",
        method: "Rare drop from Cinder Drift (Extreme)",
        patch: "5.2",
    },
    {
        name: "Sabotender Emperador",
        method: "Bought at Gold Saucer for 2,000,000 MGP",
        patch: "4.45",
    },
    {
        name: "Safeguard System",
        method: "Front and Center V PvP Achievement",
        patch: "4.3",
    },
    {
        name: "Sanuwa",
        method: "200,000 gil from Luna Vanu, at Rank 7 with the Vanu Vanu Beast Tribe.",
        patch: "3.1",
    },
    {
        name: "SDS Fenrir",
        method: "Purchased from the Mog Station for EUR 20 or $29.",
        patch: "4.4",
    },
    {
        name: "Serpent Warsteed",
        method: "Completion of the A Line in the Glade IV achievement. ",
        patch: "2.3",
    },
    {
        name: "Shadow Gwiber",
        method: "Rare drop from The Minstrel's Ballad: Hades's Elegy",
        patch: "5.1",
    },
    {
        name: "Skyslipper",
        method: "Rare drop from Eden's Gate: Sepulture (Savage)",
        patch: "5.05",
    },
    {
        name: "Sleipnir",
        method: "Purchased from the Mog Station for EUR 16.90 or $24.",
        patch: "2.38",
    },
    {
        name: "Sophic Lanner",
        method: "Dropped from Containment Bay P1T6 (Extreme).",
        patch: "3.4",
    },
    {
        name: "Spriggin Stonecarrier",
        method: "Purchased from the Mog Station for EUR 16.90 or $24.",
        patch: "5.2",
    },
    {
        name: "Storm Warsteed",
        method: "Completion of the A Line in the Storm IV achievement.",
        patch: "4.1",
    },
    {
        name: "Starlight Bear",
        method: "Purchased from the Mog Station for EUR 8.40 or $12.",
        patch: "2.3",
    },
    {
        name: "Striped Ray",
        method: "Bought from Shikitahe for 12x Kojin Sango. Bloodsworn Rep required.",
        patch: "4.1",
    },
    {
        name: "Sunspun Cumulus",
        method: "Purchased from Mog Station for EUR 8.40 or $12.",
        patch: "5.0",
    },
    {
        name: "Syldra",
        method: "Purchase Stormblood Collector's Edition.",
        patch: "4.0",
    },
    {
        name: "Triceratops",
        method: "Completion of the Nuts for Nutsy achievement.",
        patch: "5.0",
    },
    {
        name: "True Griffin",
        method: "18x Ananta Dreamstaff from Madhura",
        patch: "4.2",
    },
    {
        name: "Twintania",
        method: "15x Gold Chocobo Feathers, which are received from the Recruit a Friend Campaign.",
        patch: "3.0",
    },
    {
        name: "Typhon",
        method: "Bought at the Gold Saucer for 750,000 MGP",
        patch: "4.4",
    },
    {
        name: "Tyrannosaur",
        method: "The Forbidden Land, Eureka Anemos",
        patch: "4.25",
    },
    {
        name: "Ufiti",
        method: "Purchased from Enie in The Firmament for 8,400 Skybuilders' Scrips",
        patch: "5.11",
    },
    {
        name: "Unicorn",
        method: "Unicorn can be acquired when you level Conjurer to 30 and complete the quest Unicorn Power.",
        patch: "2.0",
    },
    {
        name: "War Panther",
        method: "Completion of the But Somebody's Gotta Do It (Dark Knight) achievement.",
        patch: "3.0",
    },
    {
        name: "War Tiger",
        method: "Completion of the Tank you Gunbreaker II achievement.",
        patch: "5.0",
    },
    {
        name: "Warbear",
        method: "Completion of the But Somebody's Gotta Do It (Warrior) achievement.",
        patch: "2.2",
    },
    {
        name: "Warlion",
        method: "Completion of the But Somebody's Gotta Do It (Paladin) achievement.",
        patch: "2.2",
    },
    {
        name: "Warring Lanner",
        method: "Rare drop from Containment Bay S1T7 (Extreme).",
        patch: "3.2",
    },
    {
        name: "Whisper A-go-go",
        method: "Acquiring all 13 Yo-kai Weapons from the Yo-kai Watch: Gather One, Gather All! Seasonal Event.",
        patch: "3.35",
    },
    {
        name: "Whisper-go",
        method: "Acquiring all 13 Yo-kai Minions from the Yo-kai Watch: Gather One, Gather All! Seasonal Event.",
        patch: "3.35",
    },
    {
        name: "White Devil",
        method: "Purchased from the Mog Station for EUR 8.40 or $12.",
        patch: "3.1",
    },
    {
        name: "White Lanner",
        method: "Rare drop from The Limitless Blue (Extreme).",
        patch: "3.2",
    },
    {
        name: "Witch's Broom",
        method: "Purchased from the Mog Station for EUR 8.40 or $12.",
        patch: "3.07",
    },
    {
        name: "Wyvern",
        method: "Sold for 6 Clan Mark Logs from Bertana.",
        patch: "3.1",
    },
    {
        name: "Xanthos",
        method: "Dropped by Garuda in The Howling Eye (Extreme).",
        patch: "2.2",
    },
    {
        name: "Yol",
        method: "In the Footsteps of Bardam the Brave Stormblood Main Scenario Quest",
        patch: "4.0",
    },
    {
        name: "Zu",
        method: "Purchased from Resident Caretaker for 1 Iron Voyage Spoil.",
        patch: "3.2",
    },
];
