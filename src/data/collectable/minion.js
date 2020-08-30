import { DataGroup } from "../DataGroup";

export const Collectables_Minion_Guide = function(parent) {
    return new DataGroup("Minion Guide", parent).initializeTasks(tasks, [
        { header: "Minion", key: "name", },
        { header: "Method Type", key: "methodType", },
        { header: "method", key: "method" },
        { header: "Patch", key: "patch", filterable: true },
    ]);
};

const tasks = [
    {
        name: "2B Automaton",
        methodType: "Duty",
        method: "Found in chest after final boss of The Puppets' Bunker",
        patch: "5.3"
    },
    {
        name: "2P Automaton",
        methodType: "Duty",
        method: "Found in chest after final boss of The Puppets' Bunker",
        patch: "5.3"
    },
    {
        name: "Abroader Otter",
        methodType: "Voyages",
        method: "Deep Sea Site 7 Voyage",
        patch: "4.45"
    },
    {
        name: "Accompaniment Node",
        methodType: "Quest Reward",
        method: "Complete the Level 60 sidequest Do It for Gilly.",
        patch: "3.0"
    },
    {
        name: "Allagan Melon",
        methodType: "Gardening",
        method: "Gardening",
        patch: "5.3"
    },
    {
        name: "Ancient One",
        methodType: "Duty",
        method: "Drops from Anamnesis Anyder Duty",
        patch: "5.2"
    },
    {
        name: "Angel of Mercy",
        methodType: "Seasonal Event",
        method: "Acquired in Valentione's Day (2017). MogStation: 5 USD / 3.5 EUR",
        patch: "3.5"
    },
    {
        name: "Anima",
        methodType: "Quest Reward",
        method: "Body and Soul Anima Relic Weapon Quest",
        patch: "3.5"
    },
    {
        name: "Armadillo Bowler",
        methodType: "Duty",
        method: "Drops from Malikah's Well Duty",
        patch: "5.0"
    },
    {
        name: "Assassin Fry",
        methodType: "Crafted",
        method: "Obtained from Desynthesizing of Ninja Betta.",
        patch: "2.4"
    },
    {
        name: "Atrophied Atomos",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Alchemist.",
        patch: "3.0"
    },
    {
        name: "Attendee #777",
        methodType: "Purchased",
        method: "Bought for 7 Namazu Koban from Gyosho at Trusted (or higher) Beast Tribe Reputation.",
        patch: "4.3"
    },
    {
        name: "Aurelia Polyp",
        methodType: "Voyages",
        method: "Subaquatic Voyages",
        patch: "4.2"
    },
    {
        name: "Axolotl Eft",
        methodType: "Retainer Ventures",
        method: "Waterside Exploration XXII Fisher Retainer Venture or Quick Exploration",
        patch: "4.1"
    },
    {
        name: "Baby Bat",
        methodType: "Purchased",
        method: "From Junkmonger Nonoroon for 2,400 gil in Poor Maid's Mill, Upper La Noscea (11.8,24.7).",
        patch: "2.0"
    },
    {
        name: "Baby Behemoth",
        methodType: "Collector's",
        method: "Purchase the collectors edition of FFXIV (1.0 or ARR)",
        patch: "2.0"
    },
    {
        name: "Baby Brachiosaur",
        methodType: "FATE Reward",
        method: "Heaven-on-High, 800 Skybuilders' Scrips",
        patch: "3.55b"
    },
    {
        name: "Baby Bun",
        methodType: "FATE Reward",
        method: "Complete the FATE: Lazy for You with Gold Medal rating in East Shroud (23x y29).",
        patch: "2.0"
    },
    {
        name: "Baby Gremlin",
        methodType: "Preorder",
        method: "Preordering Shadowbringers",
        patch: "4.45"
    },
    {
        name: "Baby Opo-opo",
        methodType: "Duty",
        method: "Found in chest after final boss of Brayflox's Longstop (Hard).",
        patch: "2.2"
    },
    {
        name: "Baby Raptor",
        methodType: "Purchased",
        method: "Boughbury Trader for 2400 if Clearing the Hive has been won.",
        patch: "2.0"
    },
    {
        name: "Bacon Bits",
        methodType: "Retainer Ventures",
        method: "Woodland Exploration XXV Botanist Retainer Venture or Quick Exploration",
        patch: "5.1"
    },
    {
        name: "Beady Eye",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.0"
    },
    {
        name: "Behemoth Heir",
        methodType: "Purchased",
        method: "400 Centurio Seals from Ardolain",
        patch: "3.0"
    },
    {
        name: "Bite-Sized Pudding",
        methodType: "Duty",
        method: "Randomly drops from chest in The Wanderer's Palace.",
        patch: "2.0"
    },
    {
        name: "Bitty Duckbill",
        methodType: "Purchased",
        method: "800x Sacks of Nuts",
        patch: "5.0"
    },
    {
        name: "Black Chocobo Chick",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.0"
    },
    {
        name: "Black Coeurl",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 20,000 MGP",
        patch: "2.51"
    },
    {
        name: "Black Hayate",
        methodType: "Duty",
        method: "Drops from Holminster Switch Duty",
        patch: "5.0"
    },
    {
        name: "Blizzaria",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Bluebird",
        methodType: "Treasure Hunt",
        method: "Obtained from Timeworn Peisteskin Map.",
        patch: "2.1"
    },
    {
        name: "Bom Boko",
        methodType: "Duty/Retainer Ventures",
        method: "Heaven-on-High Silver-haloed Sack or Field Exploration XX and XXII Combat Retainer Venture or Quick Exploration",
        patch: "4.0"
    },
    {
        name: "Bombfish",
        methodType: "Duty",
        method: "Rare drop from Shisui of the Violet Tides",
        patch: "4.0"
    },
    {
        name: "Brave New Y'shtola",
        methodType: "Seasonal Event",
        method: "The Rising 2019",
        patch: "5.05"
    },
    {
        name: "Bridesmoogle",
        methodType: "Event",
        method: "Gift for attendees of an Eternal Bonding Anniversary",
        patch: "4.4"
    },
    {
        name: "Brina",
        methodType: "Duty",
        method: "Found in chest after final boss of The Antitower.",
        patch: "3.2"
    },
    {
        name: "Buffalo Calf",
        methodType: "Quest Reward",
        method: "Complete the Level 50 Main Scenario Quest \"You're Gonna Carry That\".",
        patch: "2.1"
    },
    {
        name: "Bullpup",
        methodType: "Quest Reward",
        method: "Rarely found in chest after final boss of Baelsar's Wall.",
        patch: "3.5"
    },
    {
        name: "Butterfly Effect",
        methodType: "Purchased",
        method: "Purchased from Nacille in Fanow for 400 Bicolor Gemstones",
        patch: "5.0"
    },
    {
        name: "Byakko Cub",
        methodType: "Crafted",
        method: "Level 70★★ Weaver recipe.",
        patch: "4.2"
    },
    {
        name: "Cactuar Cutting",
        methodType: "Quest Reward",
        method: "Complete the quest Zombies Are People Too in Southern Thanalan",
        patch: "2.0"
    },
    {
        name: "Cait Sith Doll",
        methodType: "Preorder",
        method: "Received for pre-ordering FFXIV: ARR (CE or SE)",
        patch: "2.0"
    },
    {
        name: "Calamari",
        methodType: "Duty",
        method: "Rarely found in chest after final boss of Hullbreaker Isle (Hard).",
        patch: "3.3"
    },
    {
        name: "Calca",
        methodType: "Duty",
        method: "Found in chest after final boss of The Antitower.",
        patch: "3.2"
    },
    {
        name: "Capybara Pup",
        methodType: "Duty",
        method: "The Lost Canals of Uznair",
        patch: "4.4"
    },
    {
        name: "Castaway Chocobo Chick",
        methodType: "Fishing",
        method: "Fished from Fishing Log: Isle of Endless Summer North Shore",
        patch: "4.0"
    },
    {
        name: "Cerberpup",
        methodType: "Purchased",
        method: "Purchased from Enie in The Firmament for 1,200 Skybuilders' Scrips",
        patch: "5.21"
    },
    {
        name: "Chameleon",
        methodType: "Duty",
        method: "Drops from The Qitana Ravel Duty",
        patch: "5.0"
    },
    {
        name: "Cherry Bomb",
        methodType: "Purchased",
        method: "Purchased from Bango Zango in Limsa Lominsa, Roarich in Ul'dah, or Maisenta in New Gridania.",
        patch: "2.0"
    },
    {
        name: "Chigoe Larva",
        methodType: "Quest Reward",
        method: "Complete the quest Occupational Hazards from Yoenne in South Shroud, Quarrymill",
        patch: "2.0"
    },
    {
        name: "Chocobo Chick Courier",
        methodType: "Preorder",
        method: "Heavensward Pre-order",
        patch: "3.0"
    },
    {
        name: "Clionid Larva",
        methodType: "Duty",
        method: "Akadaemia Anyder",
        patch: "5.0"
    },
    {
        name: "Clockwork Barrow",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Carpenter",
        patch: "3.0"
    },
    {
        name: "Clockwork Lantern",
        methodType: "Purchased",
        method: "15,000 Wolf Mark from Storm Sergeant (Materia Provisioner).",
        patch: "4.3"
    },
    {
        name: "Clockwork Twintania",
        methodType: "Achievements",
        method: "Complete the Challenge Accepted achievement",
        patch: "3.1"
    },
    {
        name: "Coblyn Larva",
        methodType: "Mining",
        method: "Unspoiled Deposit, level 46-50 Miner",
        patch: "2.0"
    },
    {
        name: "Coeurl Kitten",
        methodType: "Quest Reward",
        method: "Curiosity Killed the Coeurl quest in Aleport from Skribyld.",
        patch: "2.1"
    },
    {
        name: "Conditional Virtue",
        methodType: "Duty",
        method: "The Baldesion Arsenal",
        patch: "4.5"
    },
    {
        name: "Construct 8",
        methodType: "Duty",
        method: "Raid-wide drop in The Ridorana Lighthouse",
        patch: "4.3"
    },
    {
        name: "Continental Eye",
        methodType: "Seasonal Event",
        method: "Acquired from All Saints' Wake (2016). MogStation: 5 USD / 3.5 EUR",
        patch: "3.4"
    },
    {
        name: "Copycat Bulb",
        methodType: "Duty",
        method: "Rare drop from lockboxes in Eureka: Pagos",
        patch: "4.36"
    },
    {
        name: "Cute Justice",
        methodType: "Purchased",
        method: "Purchased from Maudlin Latool Ja in Ul'dah for 400 Allied Seals (Requires Level 60 BLU)",
        patch: "5.15"
    },
    {
        name: "Damona",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "5.3"
    },
    {
        name: "Demon Box",
        methodType: "Other",
        method: "Attending an Eternal Bond ceremony of Gold or Platinum tier.",
        patch: "2.45"
    },
    {
        name: "Demon Brick",
        methodType: "Duty",
        method: "Found in first chest of Amdapor Keep.",
        patch: "2.0"
    },
    {
        name: "Dhalmel Calf",
        methodType: "Duty",
        method: "Forbidden Land, Eureka Pyros",
        patch: "4.45"
    },
    {
        name: "Domakin",
        methodType: "Retainer Ventures",
        method: "Waterside Exploration XXV Fisher Retainer Venture or Quick Exploration",
        patch: "5.1"
    },
    {
        name: "Doman Magpie",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "3.25"
    },
    {
        name: "Dress-up Alisaie",
        methodType: "Other",
        method: "Wondrous Tails, 1 Khloe's Bronze Certificate of Commendation",
        patch: "3.4"
    },
    {
        name: "Dress-up Estinien",
        methodType: "Purchased",
        method: "Purchased from Enie in The Firmament for 1,200 Skybuilders' Scrips",
        patch: "5.11"
    },
    {
        name: "Dress-up Raubahn",
        methodType: "Quest Reward",
        method: "Complete the Level 70 Main Scenario Quest Return of the Bull.",
        patch: "4.1"
    },
    {
        name: "Dress-up Tataru",
        methodType: "Item Code",
        method: "Bonus code from the Art of the Revolution - Eastern Memories Art Book",
        patch: "4.5"
    },
    {
        name: "Dress-up Thancred",
        methodType: "Other",
        method: "Wondrous Tails 2-line Reward",
        patch: "3.4"
    },
    {
        name: "Dress-up Y'shtola",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2016). MogStation: 5 USD / 3.5 EUR",
        patch: "3.35"
    },
    {
        name: "Dress-up Yugiri",
        methodType: "Duty",
        method: "Rarely found in the final chest of Kugane Castle",
        patch: "4.0"
    },
    {
        name: "Dust Bunny",
        methodType: "Purchased",
        method: "Purchased from Auriana for Tomestones, or from Hatching-tide (2016)",
        patch: "2.0"
    },
    {
        name: "Dwarf Rabbit",
        methodType: "Duty",
        method: "Dropped in The Aquapolis.",
        patch: "3.3"
    },
    {
        name: "Eden Minor",
        methodType: "Duty",
        method: "Dropped in Eden's Gate: Sepulture",
        patch: "5.01"
    },
    {
        name: "Eggplant Knight",
        methodType: "Gardening",
        method: "By intercrossing: Krakka Root with Star Anise OR Wizard Eggplant with Mandrake",
        patch: "2.3"
    },
    {
        name: "Enkidu",
        methodType: "Duty",
        method: "Obtained from Battle in the Big Keep.",
        patch: "2.5"
    },
    {
        name: "Ephemeral Necromancer",
        methodType: "Quest Reward",
        method: "Complete the Level 80 Main Scenario Quest The Converging Light",
        patch: "5.3"
    },
    {
        name: "Faepup",
        methodType: "PvP",
        method: "How Can I Help III (300 assists in The Feast)",
        patch: "3.55a"
    },
    {
        name: "Fat Cat",
        methodType: "Retainer Ventures",
        method: "Waterside Exploration XIV-XIX Fisher Retainer Venture",
        patch: "2.4"
    },
    {
        name: "Faustlet",
        methodType: "Duty",
        method: "Obtained from Alexander - The Burden of the Son (Savage)",
        patch: "3.2"
    },
    {
        name: "Fenrir Pup",
        methodType: "PvP",
        method: "Randomly dropped after The Feast matches.",
        patch: "3.2"
    },
    {
        name: "Flame Hatchling",
        methodType: "Purchased",
        method: "Purchased for 20,000 Flame Seals",
        patch: "2.0"
    },
    {
        name: "Fledgling Apkallu",
        methodType: "Achievements",
        method: "Completing all 80 A Realm Reborn Sightseeing Log Entries",
        patch: "2.28"
    },
    {
        name: "Fledgling Dodo",
        methodType: "Purchased",
        method: "Purchased from Auriana for 3 Allagan Tomestones of Soldiery",
        patch: "2.0"
    },
    {
        name: "Forgiven Hate",
        methodType: "Duty",
        method: "Drops from Mt. Gulg",
        patch: "5.0"
    },
    {
        name: "Fox Kit",
        methodType: "Purchased",
        method: "Purchased for 3x Sassho-seki Fragments from Eschina",
        patch: "4.0"
    },
    {
        name: "Frilled Dragon",
        methodType: "Purchased",
        method: "10 Empyrean Potsherds from Confederate Custodian",
        patch: "4.35"
    },
    {
        name: "Gaelikitten",
        methodType: "Duty",
        method: "Found in chest after final boss of Sohm Al.",
        patch: "3.0"
    },
    {
        name: "Garlic Jester",
        methodType: "Gardening",
        method: "By intercrossing:   Garlic Clove with Mandrake",
        patch: "2.3"
    },
    {
        name: "Gestahl",
        methodType: "Duty/Retainer Ventures",
        method: "Heaven-on-High Silver-haloed Sack or Waterside Exploration XVIII or XIX Fisher Retainer Venture",
        patch: "3.0"
    },
    {
        name: "Ghido",
        methodType: "Duty",
        method: "Rare drop from The Sirensong Sea",
        patch: "4.0"
    },
    {
        name: "Giant Beaver",
        methodType: "Purchased",
        method: "1x Dancing Wing from Dancing Plague",
        patch: "5.0"
    },
    {
        name: "Gigantpole",
        methodType: "Fishing",
        method: "Rare fishing catch from The Burning Wall in Eastern Thanalan (28-25) with Topwater Frog.",
        patch: "2.0"
    },
    {
        name: "Gigi",
        methodType: "Quest Reward",
        method: "Complete Further Hildibrand Adventures Quest: If I Could Turn Back Time.",
        patch: "3.5"
    },
    {
        name: "Gold Rush Minecart",
        methodType: "FATE Reward",
        method: "Complete On Dangerous Ground with a Gold Medal rating.",
        patch: "3.0"
    },
    {
        name: "Goobbue Sproutling",
        methodType: "Quest Reward",
        method: "Complete the Level 33 Main Scenario Quest \"It Was a Very Good Year\".",
        patch: "2.0"
    },
    {
        name: "Gravel Golem",
        methodType: "Crafted",
        method: "Crafted by Level 50 Goldsmith.",
        patch: "2.0"
    },
    {
        name: "Griffin Hatchling",
        methodType: "Purchased",
        method: "400 Centurio Seals from Ardolain",
        patch: "3.0"
    },
    {
        name: "Heavy Hatchling",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 20,000 MGP",
        patch: "2.4"
    },
    {
        name: "Hecteye",
        methodType: "Purchased",
        method: "3 Gelmorran Potsherds from E-Una-Kotor in Quarrymill",
        patch: "3.35"
    },
    {
        name: "Hedgehoglet",
        methodType: "Duty",
        method: "Canals/Altars of Uznair",
        patch: "4.45"
    },
    {
        name: "Heliodor Carbuncle",
        methodType: "Item Code",
        method: "Topaz Carbuncle Plush",
        patch: "3.0"
    },
    {
        name: "Hellpup",
        methodType: "PvP",
        method: "Mama Said Knock You Out III (300 KO's in The Feast)",
        patch: "3.55a"
    },
    {
        name: "Hoary the Snowman",
        methodType: "Seasonal Event",
        method: "Acquired from the Starlight Celebration (2014). MogStation: 5 USD / 3.5 EUR",
        patch: "2.45"
    },
    {
        name: "Hovernyan",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Hunting Hawk",
        methodType: "Duty",
        method: "Dropped from Silver Coffer in The Diadem of the Exploratory Missions.",
        patch: "3.1"
    },
    {
        name: "Infant Imp",
        methodType: "FATE Reward",
        method: "Complete the FATE Go, Go, Gorgimera with a Gold Medal rating",
        patch: "2.0"
    },
    {
        name: "Iron Dwarf",
        methodType: "Crafted",
        method: "Crafted by level 60★ Armorer.",
        patch: "3.0"
    },
    {
        name: "Ironfrog Ambler",
        methodType: "Purchased",
        method: "Pruchased from Fathard in Eulmore Aetheryte Plaze for 6 Formidable Cogs",
        patch: "5.0"
    },
    {
        name: "Ivon Coeurlfist Doll",
        methodType: "Duty",
        method: "Rare drop in chest after final boss of Temple of the Fist.",
        patch: "4.0"
    },
    {
        name: "Jibanyan",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Kidragora",
        methodType: "Botany",
        method: "Gathered by level 46-50 Botanist",
        patch: "2.0"
    },
    {
        name: "Koala Joey",
        methodType: "Retainer Ventures",
        method: "Woodland Exploration XXII Botanist Retainer Venture or Quick Exploration",
        patch: "4.1"
    },
    {
        name: "Komainu",
        methodType: "Achievements",
        method: "2x Achievement Certificate from Jonathas.",
        patch: "4.2"
    },
    {
        name: "Komajiro",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Komasan",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Korpokkur Kid",
        methodType: "Duty",
        method: "Rarely found in chest after final boss of Saint Mocianne's Arboretum.",
        patch: "3.1"
    },
    {
        name: "Kyubi",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Laladile",
        methodType: "Achievements",
        method: "Complete the Crafting In The Air Achievement",
        patch: "5.21"
    },
    {
        name: "Lalinator 5.HO",
        methodType: "Purchased",
        method: "8x Hammered Frogments from the Dwarven Reputation Vendor",
        patch: "5.3"
    },
    {
        name: "Lesser Panda",
        methodType: "Duty",
        method: "Found in chest after final boss of The Aery.",
        patch: "3.0"
    },
    {
        name: "Little Leafman",
        methodType: "Purchased",
        method: "Purchased from Sul Lad in Lydha Lran for 400 Bicolor Gemstones",
        patch: "5.2"
    },
    {
        name: "Little Leannan",
        methodType: "Duty",
        method: "Randomly drops from chest in The Grand Cosmos",
        patch: "5.1"
    },
    {
        name: "Little Yang",
        methodType: "Seasonal Event",
        method: "2018 All Saint's Wake",
        patch: "4.4"
    },
    {
        name: "Little Yin",
        methodType: "Seasonal Event",
        method: "2018 All Saint's Wake",
        patch: "4.4"
    },
    {
        name: "Littlefoot",
        methodType: "Retainer Ventures",
        method: "Woodland Exploration XIV-XVIII Botanist Retainer Venture",
        patch: "2.4"
    },
    {
        name: "Lord Ananta",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "5.3"
    },
    {
        name: "Lord Enma",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "5.3"
    },
    {
        name: "Magic Broom",
        methodType: "Crafted",
        method: "Crafted by Level 50★★★ Carpenter.",
        patch: "2.2"
    },
    {
        name: "Magic Bucket",
        methodType: "Fishing",
        method: "Found in South Banepool with Snagging On and Brute Leech as bait.",
        patch: "3.3"
    },
    {
        name: "Magitek Avenger F1",
        methodType: "Duty",
        method: "Rare drop from level 69 dungeon Castrum Abania.",
        patch: "4.0"
    },
    {
        name: "Malone",
        methodType: "Achievements",
        method: "Complete the Gathering In The Air Achievement",
        patch: "5.21"
    },
    {
        name: "Mameshiba",
        methodType: "Retainer Ventures",
        method: "Highland Exploration XXII Miner Retainer Venture or Quick Exploration",
        patch: "4.1"
    },
    {
        name: "Mammet #001",
        methodType: "Purchased",
        method: "Purchased from Bango Zango in Limsa Lominsa, Roarich in Ul'dah, or Maisenta in New Gridania.",
        patch: "2.0"
    },
    {
        name: "Mammet #003G",
        methodType: "Achievements",
        method: "Talk to Jonathas in Old Gridania after completing Bump on a Log: Order of the Twin Adder",
        patch: "2.0"
    },
    {
        name: "Mammet #003L",
        methodType: "Achievements",
        method: "Talk to Jonathas in Old Gridania after completing Bump on a Log: Maelstrom",
        patch: "2.0"
    },
    {
        name: "Mammet #003U",
        methodType: "Achievements",
        method: "Talk to Jonathas in Old Gridania after completing Bump on a Log: Immortal Flames",
        patch: "2.0"
    },
    {
        name: "Mandragora Queen",
        methodType: "Gardening",
        method: "By intercrossing: Mandrake with Nymeia Lily",
        patch: "2.3"
    },
    {
        name: "Manjimutt",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Meerkat",
        methodType: "Voyages",
        method: "Subaquatic Voyages - Coldtoe Isle",
        patch: "5.1"
    },
    {
        name: "Micro Gigantender",
        methodType: "Purchased",
        method: "400x Bicolour Gemstone (Amh Araeng)",
        patch: "5.0"
    },
    {
        name: "Midgardsormr",
        methodType: "Quest Reward",
        method: "Complete the Main Scenario Quest The Rising Chorus.",
        patch: "2.5"
    },
    {
        name: "Mini Mole",
        methodType: "Quest Reward",
        method: "Complete the Delivery Moogle Quests Thwack-a-Mole.",
        patch: "2.3"
    },
    {
        name: "Miniature Minecart",
        methodType: "Duty/Retainer Ventures",
        method: "Heaven-on-High Silver-haloed Sack or Highland Exploration XIV Miner Retainer Venture",
        patch: "2.3"
    },
    {
        name: "Miniature White Knight",
        methodType: "Purchased",
        method: "Purchased from Enie in The Firmament for 1,200 Skybuilders' Scrips",
        patch: "5.11"
    },
    {
        name: "Minion of Light",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania ( X:10.6 Y:6.3) for 2 Achievement Certificates.",
        patch: "2.1"
    },
    {
        name: "Minitek Conveyer",
        methodType: "Purchased",
        method: "Exchanged for 15,000 Wolf Marks",
        patch: "4.45"
    },
    {
        name: "Minute Mindflayer",
        methodType: "Duty/Retainer Ventures",
        method: "The Aquapolis, Palace of the Dead Bronze-trimmed Sack, or Field, Highland, or Waterside Exploration XIII Retainer Venture",
        patch: "2.2"
    },
    {
        name: "Mock-up Grynewaht",
        methodType: "Duty",
        method: "Rare drop from Doma Castle",
        patch: "4.0"
    },
    {
        name: "Model Enterprise",
        methodType: "Item Code",
        method: "The Art Of Eorzea, A Final Fantasy XIV Art Book",
        patch: "2.38"
    },
    {
        name: "Model Magitek Bit",
        methodType: "Crafted",
        method: "Level 50★★★★ Blacksmith recipe",
        patch: "2.5"
    },
    {
        name: "Model Vanguard",
        methodType: "Crafted",
        method: "Crafted by Level 50 Goldsmith.",
        patch: "2.0"
    },
    {
        name: "Monkey King",
        methodType: "Duty",
        method: "Rare drop from The Swallow's Compass (Duty).",
        patch: "4.3"
    },
    {
        name: "Morbol Seedling",
        methodType: "Duty",
        method: "Found in third chest of The Aurum Vale.",
        patch: "2.0"
    },
    {
        name: "Morpho",
        methodType: "Duty",
        method: "Found in chest after final boss of The Lost City of Amdapor (Hard).",
        patch: "3.2"
    },
    {
        name: "Motley Egg",
        methodType: "Seasonal Event",
        method: "Hatching-Tide (2018)",
        patch: "4.2"
    },
    {
        name: "Mudpie",
        methodType: "Duty",
        method: "St Mocianne's Arboretum (Hard)",
        patch: "4.4"
    },
    {
        name: "Mummy's Little Mummy",
        methodType: "Duty",
        method: "Rarely found in chest after final boss of The Sunken Temple of Qarn (Hard).",
        patch: "2.4"
    },
    {
        name: "Mystic Weapon",
        methodType: "Retainer Ventures",
        method: "Field Exploration XXV Combat Retainer Venture or Quick Exploration",
        patch: "5.1"
    },
    {
        name: "Namingway",
        methodType: "Item Code",
        method: "Libra Eorzea (Lore Book) Bonus Code",
        patch: "3.4"
    },
    {
        name: "Nana Bear",
        methodType: "Crafted",
        method: "Crafted by Level 50★★★★ Weaver.",
        patch: "2.4"
    },
    {
        name: "Naughty Nanka",
        methodType: "Duty",
        method: "Found in last chest before final boss of Hullbreaker Isle at (5,10).",
        patch: "2.3"
    },
    {
        name: "Noko",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Nutkin",
        methodType: "Treasure Hunt",
        method: "Unhidden Treasure Map, or The Aquapolis",
        patch: "2.3"
    },
    {
        name: "Odder Otter",
        methodType: "Duty/Retainer Ventures",
        method: "Heaven-on-High Silver or Gold-haloed Sacks or Highland, Waterside, or Woodland Exploration XIX-XXII Retainer Venture or Quick Exploration",
        patch: "4.0"
    },
    {
        name: "OMG",
        methodType: "Duty",
        method: "Alphascape V4.0",
        patch: "4.4"
    },
    {
        name: "Onion Prince",
        methodType: "Gardening",
        method: "By intercrossing: Azeyma Rose with Krakka Root OR Krakka Root with mandrake",
        patch: "2.3"
    },
    {
        name: "Owlet",
        methodType: "Duty",
        method: "Found in chest after final boss of The Fractal Continuum.",
        patch: "3.0"
    },
    {
        name: "Page 63",
        methodType: "Duty",
        method: "Found in chest after final boss of The Great Gubal Library.",
        patch: "3.0"
    },
    {
        name: "Paissa Brat",
        methodType: "Treasure Hunt",
        method: "Dragonskin Treasure Map, The Aquapolis, or Bronze-trimmed Sacks from Palace of the Dead",
        patch: "3.1"
    },
    {
        name: "Paissa Patissier",
        methodType: "Kupo of Fortune",
        method: "Prize from Kupo of Fortune in The Firmament",
        patch: "5.21"
    },
    {
        name: "Paissa Threadpuller",
        methodType: "Kupo of Fortune",
        method: "Prize from Kupo of Fortune in The Firmament",
        patch: "5.21"
    },
    {
        name: "Palico",
        methodType: "Quest Reward",
        method: "The New King on the Block MHW cross-over quest",
        patch: "4.36"
    },
    {
        name: "Panda Cub",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "3.25"
    },
    {
        name: "Pegasus Colt",
        methodType: "Purchased",
        method: "800 Skybuilders' Scrips",
        patch: "3.55b"
    },
    {
        name: "Penguin Prince",
        methodType: "Achievements",
        method: "Complete the The Road of Verminion I achievement",
        patch: "3.1"
    },
    {
        name: "Peridot Carbuncle",
        methodType: "Item Code",
        method: "Emerald Carbuncle Plush",
        patch: "3.0"
    },
    {
        name: "Piggy",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 30,000 MGP",
        patch: "3.3"
    },
    {
        name: "Plush Cushion",
        methodType: "Crafted",
        method: "Crafted by Level 50★★★ Weaver.",
        patch: "2.2"
    },
    {
        name: "Pod 054",
        methodType: "Duty",
        method: "Found in chest after final boss of The Copied Factory",
        patch: "5.1"
    },
    {
        name: "Pod 316",
        methodType: "Duty",
        method: "Found in chest after final boss of The Copied Factory",
        patch: "5.1"
    },
    {
        name: "Poogie",
        methodType: "Purchased",
        method: "5x Scales from the Rathalos Scale Exchange shop",
        patch: "4.36"
    },
    {
        name: "Poro Roggo",
        methodType: "Quest Reward",
        method: "Complete the Level 60 Main Scenario Quest The Word of the Mother.",
        patch: "3.2"
    },
    {
        name: "The Primogs",
        methodType: "Item Code",
        method: "Before the Fall: Final Fantasy XIV Original Soundtrack",
        patch: "2.1"
    },
    {
        name: "Princely Hatchling",
        methodType: "Achievements",
        method: "Complete the Leaving a Good Impression II Achievement",
        patch: "4.2"
    },
    {
        name: "Private Moai",
        methodType: "Crafted",
        method: "Level 70 ★★ Blacksmith recipe.",
        patch: "2.0"
    },
    {
        name: "Pudgy Puk",
        methodType: "FATE Reward",
        method: "Complete the FATE: The Eyes Have It (FATE) with a Gold Medal rating",
        patch: "2.5"
    },
    {
        name: "Puff of Darkness",
        methodType: "Duty",
        method: "Found in World of Darkness.",
        patch: "3.07"
    },
    {
        name: "Pumpkin Butler",
        methodType: "Seasonal Event",
        method: "Acquired from the All Saints' Wake (2015). MogStation: 5 USD / 3.5 EUR",
        patch: "4.0"
    },
    {
        name: "Road Sparrow",
        methodType: "Duty",
        method: "Rare drop after completing Bardam's Mettle.",
        patch: "3.35"
    },
    {
        name: "Robonyan F-type",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "4.1"
    },
    {
        name: "Salt & Pepper Seal",
        methodType: "Duty",
        method: "Dropped in The Drowned City of Skalla",
        patch: "5.3"
    },
    {
        name: "Sand Fox",
        methodType: "Purchased",
        method: "Purchased from Faux Commander for 400 Faux Leaves",
        patch: "4.4"
    },
    {
        name: "Scarlet Peacock",
        methodType: "Crafted",
        method: "Level 70 ★★★ Weaver recipe.",
        patch: "4.45"
    },
    {
        name: "Seitei",
        methodType: "Crafted",
        method: "Level 70 ★★★★ Weaver recipe.",
        patch: "2.0"
    },
    {
        name: "Serpent Hatchling",
        methodType: "Purchased",
        method: "Purchased for 20,000 Serpent Seals.",
        patch: "3.0"
    },
    {
        name: "Shaggy Shoat",
        methodType: "Duty",
        method: "Rarely found in chest after final boss of Xelphatol.",
        patch: "3.4"
    },
    {
        name: "Shalloweye",
        methodType: "Achievements",
        method: "Complete the A Load of Verminion II Achievement",
        patch: "3.1"
    },
    {
        name: "Sharksucker-class Insubmersible",
        methodType: "Voyages",
        method: "Subaquatic Voyages - The Central Charnel Trench, The Southern Charnel Trench",
        patch: "5.05"
    },
    {
        name: "Shoebill",
        methodType: "Duty",
        method: "Dropped from Amaurot",
        patch: "5.0"
    },
    {
        name: "Shogunyan",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Silver Dasher",
        methodType: "Voyages",
        method: "Subaquatic Voyages - The Open Robe",
        patch: "5.2"
    },
    {
        name: "Slime Puddle",
        methodType: "Duty",
        method: "Randomly drops from chest in Copperbell Mines (Hard).",
        patch: "2.1"
    },
    {
        name: "Smallshell",
        methodType: "FATE Reward",
        method: "Complete the FATE: It's Not Lupus with a Gold Medal rating",
        patch: "2.0"
    },
    {
        name: "Spoony Bard",
        methodType: "Item Code",
        method: "Final Fantasy XIV: Heavensward Soundtrack",
        patch: "3.2"
    },
    {
        name: "Steam-powered Gobwalker G-VII",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Armorer.",
        patch: "3.01"
    },
    {
        name: "Storm Hatchling",
        methodType: "Purchased",
        method: "Purchased for 20,000 Storm Seals.",
        patch: "2.0"
    },
    {
        name: "Sungold Talos",
        methodType: "Duty",
        method: "Drop in The Dungeons Of Lyhe Ghiah",
        patch: "5.2"
    },
    {
        name: "Taoist Moogle",
        methodType: "Purchased",
        method: "Purchased from Itinerant Moogle for 140 gil",
        patch: "4.4"
    },
    {
        name: "Tender Lamb",
        methodType: "Seasonal Event",
        method: "Acquired from Heavensturn (2015). MogStation: 5 USD / 3.5 EUR",
        patch: "2.0"
    },
    {
        name: "Tengu Doll",
        methodType: "Retainer Ventures",
        method: "Field Exploration XXII Combat Retainer Venture or Quick Exploration",
        patch: "4.1"
    },
    {
        name: "The Behatted Serpent of Ronka",
        methodType: "Purchased",
        method: "Qitari Beast Tribe Reward. Costs 8 Qitari Compliments from Yuqurl Manl",
        patch: "5.2"
    },
    {
        name: "The Behelmeted Serpent of Ronka",
        methodType: "Purchased",
        method: "Qitari Beast Tribe Reward. Costs 8 Qitari Compliments from Yuqurl Manl",
        patch: "5.2"
    },
    {
        name: "The Gold Whisker",
        methodType: "Duty",
        method: "The Hidden Canals of Uznair",
        patch: "4.2"
    },
    {
        name: "The Great Serpent of Ronka",
        methodType: "Quest Reward",
        method: "Complete Level 70 Side Quest Protectors of the Wood",
        patch: "5.0"
    },
    {
        name: "The Prince of Anemos",
        methodType: "FATE Reward",
        method: "Occasional drop from The Shadow over Anemos in Eureka Anemos",
        patch: "5.2"
    },
    {
        name: "The Major-General",
        methodType: "Achievements",
        method: "Complete the No More Fish In The Sea I Achievement",
        patch: "4.25"
    },
    {
        name: "Tight-beaked Parrot",
        methodType: "Duty",
        method: "Rarely drops from chest in Sastasha (Hard).",
        patch: "2.4"
    },
    {
        name: "Tinker's Bell",
        methodType: "Purchased",
        method: "Purchased from Fathard in Eulmore Aetheryte Plaza for 6 Archaeotania's Horn",
        patch: "5.0"
    },
    {
        name: "Tiny Bulb",
        methodType: "Treasure Hunt",
        method: "Rare reward from Treasure Hunting",
        patch: "2.1"
    },
    {
        name: "Tiny Echevore",
        methodType: "Duty",
        method: "Dohn Mheg",
        patch: "5.0"
    },
    {
        name: "Tiny Rat",
        methodType: "Purchased",
        method: "From Chachamun for 2400 gil after successfully completing Attack on Highbridge: Act II",
        patch: "2.0"
    },
    {
        name: "Tiny Tapir",
        methodType: "Retainer Ventures",
        method: "Field Exploration XIV, XV, and XIX Combat Retainer Venture",
        patch: "2.3"
    },
    {
        name: "Tiny Tatsunoko",
        methodType: "Fishing",
        method: "Spearfishing in the Ruby Sea",
        patch: "4.0"
    },
    {
        name: "Tiny Tortoise",
        methodType: "Fishing",
        method: "Use Northern Krill and fish from the The Salt Strand in Lower La Noscea.",
        patch: "2.0"
    },
    {
        name: "Tomato King",
        methodType: "Gardening",
        method: "Intercrossing: Dzemael Tomato w Mandrake OR Krakka Root w Broombush OR Jute w Krakka Root",
        patch: "2.3"
    },
    {
        name: "Tora-jiro",
        methodType: "Purchased",
        method: "Purchased for 800 Centurio Seals from Estril in Kugane",
        patch: "4.0"
    },
    {
        name: "Toy Alexander",
        methodType: "Duty",
        method: "Obtained from Alexander - The Soul of the Creator.",
        patch: "3.4"
    },
    {
        name: "Treasure Box",
        methodType: "Purchased",
        method: "Purchased from Grand Company's Hunt vendor for 440 Allied Seals.",
        patch: "2.3"
    },
    {
        name: "USApyon",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.0"
    },
    {
        name: "Ugly Duckling",
        methodType: "Duty",
        method: "Found in chest after final boss of Neverreap.",
        patch: "3.0"
    },
    {
        name: "Unicolt",
        methodType: "Duty",
        method: "Found in chest after final boss of The Vault.",
        patch: "5.2"
    },
    {
        name: "Unlucky Rabbit",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 30,000 MGP",
        patch: "3.35"
    },
    {
        name: "Venoct",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "Water Imp",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 10,000 MGP",
        patch: "2.51"
    },
    {
        name: "Wayward Hatchling",
        methodType: "Purchased",
        method: "Purchased from Bango Zango in Limsa Lominsa, Roarich in Ul'dah, or Maisenta in New Gridania.",
        patch: "2.0"
    },
    {
        name: "Whisper",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "3.35"
    },
    {
        name: "White Whittret",
        methodType: "Duty",
        method: "Rare drop from the final chest in Hells' Lid",
        patch: "4.2"
    },
    {
        name: "Wide-eyed Fawn",
        methodType: "Purchased",
        method: "Purchased from Auriana for 7 Allagan Tomestones of Soldiery",
        patch: "2.0"
    },
    {
        name: "Wind-up Aerith",
        methodType: "Optional Item",
        method: "Mog Station (once the 2019 Japan Fan Festival goes live)",
        patch: "4.45"
    },
    {
        name: "Wind-up Airship",
        methodType: "Quest Reward",
        method: "Obtain an airship pass (The Gridanian Envoy, The Ul'dahn Envoy, or The Lominsan Envoy.)",
        patch: "2.0"
    },
    {
        name: "Wind-up Aldgoat",
        methodType: "Crafted",
        method: "Crafted by Level 50 Weaver.",
        patch: "2.0"
    },
    {
        name: "Wind-up Alisae",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "3.01"
    },
    {
        name: "Wind-up Alpha",
        methodType: "Quest Reward",
        method: "Post Alphascape 4.0 Quest",
        patch: "4.4"
    },
    {
        name: "Wind-up Alphinaud",
        methodType: "Quest Reward",
        method: "Complete the Level 51 Main Scenario Quest In Search of Iceheart.",
        patch: "3.0"
    },
    {
        name: "Wind-up Amalj'aa",
        methodType: "Purchased",
        method: "Bought from Amalj'aa Vendor for 25,000 Gil.",
        patch: "2.1"
    },
    {
        name: "Wind-up Ananta",
        methodType: "Purchased",
        method: "7x Ananta Dreamstaff from the Ananta Reputation Vendor",
        patch: "4.2"
    },
    {
        name: "Wind-up Ardbert",
        methodType: "Seasonal Event",
        method: "Complete the event quest Glass from the Past",
        patch: "5.3"
    },
    {
        name: "Wind-up Aymeric",
        methodType: "Quest Reward",
        method: "Complete the level 60 Main Scenario Quest Litany of Peace.",
        patch: "3.3"
    },
    {
        name: "Wind-up Bahamut",
        methodType: "Item Code",
        method: "Final Fantasy XIV: A Realm Reborn Original Soundtrack",
        patch: "2.2"
    },
    {
        name: "Wind-up Bartz",
        methodType: "Collector's",
        method: "Purchase Collector's Edition of Stormblood",
        patch: "4.0"
    },
    {
        name: "Wind-up Bismarck",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Weaver.",
        patch: "4.0"
    },
    {
        name: "Wind-up Brickman",
        methodType: "Seasonal Event",
        method: "Complete the event quest Breaking Brick Mountains",
        patch: "2.1"
    },
    {
        name: "Wind-up Calofisteri",
        methodType: "Duty",
        method: "Found in chest after final boss of The Weeping City of Mhach.",
        patch: "3.3"
    },
    {
        name: "Wind-up Cheerleader",
        methodType: "Purchased",
        method: "Purchased from Storm Sergeant for 15,000 Wolf Marks in Wolves' Den Pier.",
        patch: "3.3"
    },
    {
        name: "Wind-up Chimera",
        methodType: "Crafted",
        method: "Crafted by Level 70★ Weaver.",
        patch: "4.0"
    },
    {
        name: "Wind-up Cid",
        methodType: "Quest Reward",
        method: "Complete the Level 57 Main Scenario Quest A Difference of Opinion.",
        patch: "3.0"
    },
    {
        name: "Wind-up Cirina",
        methodType: "Seasonal Event",
        method: "In Adventurers We Trust Seasonal Quest reward (The Rising (2018) anniversary event.)",
        patch: "4.35"
    },
    {
        name: "Wind-Up Cloud",
        methodType: "Optional Item",
        method: "Mog Station (once the 2019 Japan Fan Festival goes live)",
        patch: "4.45"
    },
    {
        name: "Wind-up Cursor",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania ( X:10.6 Y:6.3) for 2 Achievement Certificates.",
        patch: "2.0"
    },
    {
        name: "Wind-up Dalamud",
        methodType: "Item Code",
        method: "Obtained when you purchase the Before Meteor Blu-Ray Soundtrack from the Square Enix Store",
        patch: "2.0"
    },
    {
        name: "Wind-up Deliver Moogle",
        methodType: "Item Code",
        method: "Delivery Moogle Plush",
        patch: "2.38"
    },
    {
        name: "Wind-up Dezul Qualan",
        methodType: "Purchased",
        method: "Purchased from Ixali Vendor for 25,000 gil in North Shroud",
        patch: "2.35"
    },
    {
        name: "Wind-up Dragonet",
        methodType: "Purchased",
        method: "Purchased from Mogmul Mogbelly for 30,000 gil at Sworn (or higher) reputation",
        patch: "3.3"
    },
    {
        name: "Wind-up Dulia-Chai",
        methodType: "Item Code",
        method: "FINAL FANTASY XIV: SHADOWBRINGERS - The Art of Reflection Art Book",
        patch: "5.2"
    },
    {
        name: "Wind-up Dullahan",
        methodType: "Crafted",
        method: "Crafted by Level 50 Armorer.",
        patch: "2.0"
    },
    {
        name: "Wind-up Echidna",
        methodType: "Duty",
        method: "Found in chest after final boss of The Void Ark.",
        patch: "3.1"
    },
    {
        name: "Wind-up Edda",
        methodType: "Duty",
        method: "From Iron Trimmed Sacks found in Palace of the Dead.",
        patch: "3.4"
    },
    {
        name: "Wind-up Edvya",
        methodType: "Seasonal Event",
        method: "Acquired from the Little Ladies' Day. MogStation: 5 USD / 3.5 EUR",
        patch: "2.1"
    },
    {
        name: "Wind-up Elvaan",
        methodType: "FATE Reward",
        method: "You Do Know Jack FATE in East Flamerock",
        patch: "4.45"
    },
    {
        name: "Wind-up Estinien",
        methodType: "Other",
        method: "Randomly the 2-line reward of Wondrous Tails.",
        patch: "3.5"
    },
    {
        name: "Wind-up Exdeath",
        methodType: "Duty",
        method: "Found in chest after final boss of Deltascape V4.0.",
        patch: "4.01"
    },
    {
        name: "Wind-up Fafnir",
        methodType: "FATE Reward",
        method: "Occasional drop from Wine and Honey FATE in Eureka Anemos",
        patch: "4.25"
    },
    {
        name: "Wind-up Firion",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "3.07"
    },
    {
        name: "Wind-up Founder",
        methodType: "Purchased",
        method: "Purchased from Amalj'aa Vendor for 25,000 gil",
        patch: "2.35"
    },
    {
        name: "Wind-up Fran",
        methodType: "Collector's",
        method: "Purchase Collector's Edition of Shadowbringers",
        patch: "5.0"
    },
    {
        name: "Wind-up Fuath",
        methodType: "Treasure Hunt",
        method: "Drops from Dungeons of Lyhe Ghiah",
        patch: "5.05"
    },
    {
        name: "Wind-up G'raha Tia",
        methodType: "Quest Reward",
        method: "Complete the Level 80 Main Scenario Quest Shadowbringers.",
        patch: "5.0"
    },
    {
        name: "Wind-up Garuda",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Weaver",
        patch: "3.2"
    },
    {
        name: "Wind-up Gentleman",
        methodType: "Quest Reward",
        method: "Complete the Level 50 Hildibrand questline Her Last Vow.",
        patch: "2.5"
    },
    {
        name: "Wind-up Gilgamesh",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.3"
    },
    {
        name: "Wind-up Gnath",
        methodType: "Purchased",
        method: "30,000 gil and Rank 7 (Sworn Reputation) from Vath Stickpeddler.",
        patch: "3.2"
    },
    {
        name: "Wind-up Goblin",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.3"
    },
    {
        name: "Wind-up Gosetsu",
        methodType: "Optional Item",
        method: "Acquired from The Rising (2017). MogStation: 5 USD / 3.5 EUR",
        patch: "4.05"
    },
    {
        name: "Wind-up Gundu Warrior",
        methodType: "Purchased",
        method: "Purchased from Luna Vanu for 30,000 gil",
        patch: "3.1"
    },
    {
        name: "Wind-up Haurchefant",
        methodType: "Quest Reward",
        method: "Complete the Level 60 Main Scenario Quest As Goes Light, So Goes Darkness.",
        patch: "3.1"
    },
    {
        name: "Wind-up Hien",
        methodType: "Other",
        method: "Potential reward from Wondrous Tails",
        patch: "4.1"
    },
    {
        name: "Wind-up Hobgoblin",
        methodType: "Retainer Ventures",
        method: "Highland Exploration XXV Miner Retainer Venture or Quick Exploration",
        patch: "5.1"
    },
    {
        name: "Wind-up Hraesvelgr",
        methodType: "Item Code",
        method: "FINAL FANTASY XIV: HEAVENSWARD - The Scars of War Art Book",
        patch: "3.55a"
    },
    {
        name: "Wind-up Iceheart",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2015). MogStation: 5 USD / 3.5 EUR",
        patch: "3.05"
    },
    {
        name: "Wind-up Ifrit",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Weaver.",
        patch: "3.1"
    },
    {
        name: "Wind-up Illuminatus",
        methodType: "Crafted",
        method: "Crafted by Level 60★ Weaver.",
        patch: "3.1"
    },
    {
        name: "Wind-up Ixal",
        methodType: "Purchased",
        method: "Purchased from Ixali Vendor for 25,000 gil",
        patch: "2.35"
    },
    {
        name: "Wind-up Ixion",
        methodType: "FATE Reward",
        method: "Traded from Eschina for 5 Ixion Horns",
        patch: "4.1"
    },
    {
        name: "Wind-up Kain",
        methodType: "Collector's",
        method: "Heavensward Collector's Edition",
        patch: "3.0"
    },
    {
        name: "Wind-up Kefka",
        methodType: "Duty",
        method: "Guaranteed drop from Sigmascape V4.0 and Sigmascape V4.0 (Savage).",
        patch: "4.2"
    },
    {
        name: "Wind-up Khloe",
        methodType: "Other",
        method: "Possible Wondrous Tails reward.",
        patch: "4.0"
    },
    {
        name: "Wind-up Kobold",
        methodType: "Purchased",
        method: "Bought from Kobold Vendor for 25,000 Gil.",
        patch: "2.2"
    },
    {
        name: "Wind-up Kobolder",
        methodType: "Purchased",
        method: "Bought from Kobold Vendor for 25,000 Gil.",
        patch: "2.35"
    },
    {
        name: "Wind-up Kojin",
        methodType: "Purchased",
        method: "Kojiin Beast Tribe Reward. Costs 5 Kojin Sango from Shikitahe.",
        patch: "4.1"
    },
    {
        name: "Wind-up Krile",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2016). MogStation: 5 USD / 3.5 EUR",
        patch: "3.35"
    },
    {
        name: "Wind-up Lakshmi",
        methodType: "Crafted",
        method: "Crafted by level 70★ Weaver.",
        patch: "4.0"
    },
    {
        name: "Wind-up Leader",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.1"
    },
    {
        name: "Wind-up Leviathan",
        methodType: "Crafted",
        method: "Crafted by level 60★ Weaver.",
        patch: "3.2"
    },
    {
        name: "Wind-Up Louisoix",
        methodType: "Achievements",
        method: "Complete the Out of a Bind I achievement by completing The Final Coil of Bahamut.",
        patch: "2.4"
    },
    {
        name: "Wind-up Lulu",
        methodType: "Item Code",
        method: "Fan Fest 2016 in Tokyo Event/Live Stream Ticket",
        patch: "3.4"
    },
    {
        name: "Wind-up Lyse",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2017). MogStation: 5 USD / 3.5 EUR",
        patch: "4.05"
    },
    {
        name: "Wind-up Magnai",
        methodType: "Crafted",
        method: "Level 70 ★★ Weaver recipe.",
        patch: "4.3"
    },
    {
        name: "Wind-up Matanga",
        methodType: "Treasure Hunt",
        method: "Potential reward from the Hidden Canals of Uznair",
        patch: "4.1"
    },
    {
        name: "Wind-up Meateater",
        methodType: "Purchased",
        method: "Purchased from Estrild in Kugane with 800 Centurio Seals.",
        patch: "4.0"
    },
    {
        name: "Wind-up Minfilia",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2014). MogStation: 5 USD / 3.5 EUR",
        patch: "2.3"
    },
    {
        name: "Wind-up Mithra",
        methodType: "FATE Reward",
        method: "Rarely from Short Serket 2 in Eureka Anemos.",
        patch: "4.25"
    },
    {
        name: "Wind-up Moenbryda",
        methodType: "Quest Reward",
        method: "Complete Level 60 Main Scenario Quest An Ending to Mark a New Beginning.",
        patch: "3.4"
    },
    {
        name: "Wind-up Moogle",
        methodType: "Collector's",
        method: "Final Fantasy XIV: A Realm Reborn Collector's Edition",
        patch: "2.2"
    },
    {
        name: "Wind-up Moon",
        methodType: "Other",
        method: "Trade 1 Hi-Elixir to the Magic Pot on The Isles of Umbra.",
        patch: "3.5"
    },
    {
        name: "Wind-up Mystel",
        methodType: "Quest Reward",
        method: "Complete Level 80 Main Scenario Quest Unto the Morrow",
        patch: "5.3"
    },
    {
        name: "Wind-up Namazu",
        methodType: "Treasure Hunt",
        method: "Rarely from Gazelleskin Treasure Maps.",
        patch: "4.05"
    },
    {
        name: "Wind-up Nanamo",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.45"
    },
    {
        name: "Wind-up Nero tol Scaeva",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 30,000 MGP",
        patch: "3.2"
    },
    {
        name: "Wind-up Nidhogg",
        methodType: "Item Code",
        method: "The Far Edge of Fate: Final Fantasy XIV Original Soundtrack",
        patch: "3.5"
    },
    {
        name: "Wind-up Nu Mou",
        methodType: "Purchased",
        method: "800x Sacks of Nuts",
        patch: "5.0"
    },
    {
        name: "Wind-up Odin",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania ( X:10.6 Y:6.3) for 2 Achievement Certificates.",
        patch: "2.2"
    },
    {
        name: "Wind-up Ohl Deeh",
        methodType: "Purchased",
        method: "30,000 Gil from Mogmul Mogbelly at Allied rank",
        patch: "3.5"
    },
    {
        name: "Wind-up Omega-F",
        methodType: "Quest Reward",
        method: "Reward for Wondrous Tales",
        patch: "5.0"
    },
    {
        name: "Wind-up Omega-M",
        methodType: "Quest Reward",
        method: "Reward for Wondrous Tales",
        patch: "5.0"
    },
    {
        name: "Wind-up Onion Knight",
        methodType: "Duty",
        method: "Found in rare extra chest after final boss of Syrcus Tower.",
        patch: "2.3"
    },
    {
        name: "Wind-up Papalymo",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "2.38"
    },
    {
        name: "Wind-up Pixie",
        methodType: "Purchased",
        method: "8x Fae Fancy from the Pixie Reputation Vendor",
        patch: "5.1"
    },
    {
        name: "Wind-up Qalyana",
        methodType: "Purchased",
        method: "7x Ananta Dreamstaff from the Ananta Reputation Vendor",
        patch: "4.5"
    },
    {
        name: "Wind-up Qiqirn",
        methodType: "Crafted",
        method: "Crafted by Level 50 Weaver.",
        patch: "2.0"
    },
    {
        name: "Wind-up Ramuh",
        methodType: "Crafted",
        method: "Crafted by level 60★ Weaver.",
        patch: "3.3"
    },
    {
        name: "Wind-up Ramza",
        methodType: "Duty",
        method: "Drops from the Osbonne Monastery",
        patch: "4.45"
    },
    {
        name: "Wind-up Ravana",
        methodType: "Crafted",
        method: "Crafted by level 60★ Weaver.",
        patch: "4.1"
    },
    {
        name: "Wind-up Red Mage",
        methodType: "Preorder",
        method: "Preordering Stormblood",
        patch: "4.0"
    },
    {
        name: "Wind-up Redback",
        methodType: "Purchased",
        method: "Kojiin Beast Tribe Reward. Costs 5 Kojin Sango from Shikitahe.",
        patch: "4.5"
    },
    {
        name: "Wind-up Relm",
        methodType: "Item Code",
        method: "HEAVENSWARD | The Art of Ishgard - Stone and Steel Art Book",
        patch: "3.1"
    },
    {
        name: "Wind-up Rikku",
        methodType: "Item Code",
        method: "Fan Fest 2016 in Las Vegas Event/Live Stream Ticket",
        patch: "3.4"
    },
    {
        name: "Wind-up Ryne",
        methodType: "Duty",
        method: "Drops from Eden's Verse: Refulgence",
        patch: "5.2"
    },
    {
        name: "Wind-up Sadu",
        methodType: "Crafted",
        method: "Level 70 ★★ Weaver recipe.",
        patch: "4.3"
    },
    {
        name: "Wind-up Sahagin",
        methodType: "Purchased",
        method: "Bought from Sahagin Vendor for 25,000 Gil.",
        patch: "2.2"
    },
    {
        name: "Wind-up Sasquatch",
        methodType: "Purchased",
        method: "3 Gelmorran Potsherds from E-Una-Kotor at Quarrymill",
        patch: "3.35"
    },
    {
        name: "Wind-up Scathach",
        methodType: "Duty",
        method: "Drops at the end of Dun Scaith",
        patch: "3.5"
    },
    {
        name: "Wind-up Sea Devil",
        methodType: "Purchased",
        method: "Purchased from Sahagin Vendor for 25,000 gil",
        patch: "2.35"
    },
    {
        name: "Wind-up Shantotto",
        methodType: "Optional Item",
        method: "Complete the FFXI Cross-over Event quest Burgeoning Dread. MogStation: 5 USD / 3.5 EUR",
        patch: "2.1"
    },
    {
        name: "Wind-up Shinryu",
        methodType: "Crafted",
        method: "Level 70 ★★ Weaver recipe.",
        patch: "4.1"
    },
    {
        name: "Wind-up Shiva",
        methodType: "Crafted",
        method: "Crafted by level 60★ Weaver.",
        patch: "3.3"
    },
    {
        name: "Wind-up Succubus",
        methodType: "Purchased",
        method: "Grand Company's Hunt Billmaster for 500 Allied Seals.",
        patch: "2.3"
    },
    {
        name: "Wind-up Sun",
        methodType: "Purchased",
        method: "Give an Elixir to the Magic Pot at The Ship Graveyard.",
        patch: "2.2"
    },
    {
        name: "Wind-up Susano",
        methodType: "Crafted",
        method: "Level 70 ★ Weaver recipe.",
        patch: "4.0"
    },
    {
        name: "Wind-up Suzaku",
        methodType: "Item Code",
        method: "From the SHADOWBRINGERS: FINAL FANTASY XIV Original Soundtrack.",
        patch: "5.0"
    },
    {
        name: "Wind-up Sylph",
        methodType: "Purchased",
        method: "Purchased from Sylph Vendor for 25,000 gil",
        patch: "2.1"
    },
    {
        name: "Wind-up Tarutaru",
        methodType: "Duty",
        method: "From Lockboxes in Eureka: Pagos",
        patch: "4.36"
    },
    {
        name: "Wind-up Tataru",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "3.01"
    },
    {
        name: "Wind-up Thancred",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2014). MogStation: 5 USD / 3.5 EUR",
        patch: "2.3"
    },
    {
        name: "Wind-up Tifa",
        methodType: "Optional Item",
        method: "MogStation: 6.99 USD",
        patch: "4.4"
    },
    {
        name: "Wind-up Titan",
        methodType: "Crafted",
        method: "Crafted by level 60★ Weaver.",
        patch: "3.2"
    },
    {
        name: "Wind-up Tonberry",
        methodType: "Treasure Hunt",
        method: "Boarskin Treasure Hunt, The Aquapolis, or Palace of the Dead Bronze-trimmed Sacks.",
        patch: "2.1"
    },
    {
        name: "Wind-up Tsukuyomi",
        methodType: "Item Code",
        method: "From the STORMBLOOD: FINAL FANTASY XIV Original Soundtrack.",
        patch: "4.3"
    },
    {
        name: "Wind-up Ultros",
        methodType: "Duty",
        method: "Obtained from The Dragon's Neck.",
        patch: "2.4"
    },
    {
        name: "Wind-up Urianger",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "2.45"
    },
    {
        name: "Wind-up Vath",
        methodType: "Purchased",
        method: "30,000 gil and Rank 4 (Trusted Reputation) from Vath Stickpeddler.",
        patch: "3.2"
    },
    {
        name: "Wind-up Violet",
        methodType: "Purchased",
        method: "Purchased from Sylph Vendor for 25,000 gil",
        patch: "2.35"
    },
    {
        name: "Wind-up Warrior of Light",
        methodType: "Achievements",
        method: "Obtained from Jonathas in Old Gridania for 2 Achievement Certificates.",
        patch: "2.2"
    },
    {
        name: "Wind-up Weapon",
        methodType: "Duty",
        method: "Drops from The Ghimlyt Dark",
        patch: "4.45"
    },
    {
        name: "Wind-up Y'shtola",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "2.38"
    },
    {
        name: "Wind-up Yda",
        methodType: "Optional Item",
        method: "MogStation: 5 USD / 3.5 EUR",
        patch: "2.38"
    },
    {
        name: "Wind-up Yotsuyu",
        methodType: "Item Code",
        method: "Bonus code from the Stormblood Art Book",
        patch: "4.2"
    },
    {
        name: "Wind-up Yugiri",
        methodType: "Seasonal Event",
        method: "Acquired from The Rising (2015). MogStation: 5 USD / 3.5 EUR",
        patch: "3.07"
    },
    {
        name: "Wind-up Yuna",
        methodType: "Item Code",
        method: "Fan Fest 2017 in Frankfurt Event/Live Stream Ticket",
        patch: "3.5"
    },
    {
        name: "Wind-up Zhloe",
        methodType: "Quest Reward",
        method: "Potential Wondrous Tails reward",
        patch: "4.3"
    },
    {
        name: "Wind-up Zundu Warrior",
        methodType: "Purchased",
        method: "30,000 gil and Rank 4 (Trusted Reputation) from Luna Vanu",
        patch: "3.1"
    },
    {
        name: "Wolf Pup",
        methodType: "Quest Reward",
        method: "Man's Best Friend quest in Aleport from Skribyld.",
        patch: "2.1"
    },
    {
        name: "Yukinko Snowflake",
        methodType: "Duty",
        method: "The Forbidden Land, Eureka Hydatos",
        patch: "4.5"
    },
    {
        name: "Zephyrous Zabuton",
        methodType: "Purchased",
        method: "Kojiin Beast Tribe Reward. Costs 5 Kojin Sango from Shikitahe.",
        patch: "5.3"
    },
    {
        name: "Zazel",
        methodType: "Seasonal Event",
        method: "Acquired from Yo-kai Watch: Gather One, Gather All!.",
        patch: "4.5"
    },
    {
        name: "Zu Hatchling",
        methodType: "Purchased",
        method: "Purchased from Gold Saucer Attendant for 10,000 MGP",
        patch: "2.3"
    },
];
