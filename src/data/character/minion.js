import { DataGroup } from "../DataGroup";

export const Character_Minion_Guide = function(parent) {
    const data = new DataGroup("Minion Guide", parent);
    data.name_fr = "Mascottes";

    data.initializeTasks(tasks, [
        { header: "Minion", key: "name", },
        { header: "Category", key: "category", filterable: true },
        { header: "Source", key: "source" },
        { header: "Patch", key: "patch", filterable: true },
    ]);

    return data;
};

const tasks = [
    {
        "name_en": "2B Automaton",
        "category": "Raid",
        "source": "The Puppets' Bunker",
        "patch": "5.3"
    },
    {
        "name_en": "2P Automaton",
        "category": "Raid",
        "source": "The Puppets' Bunker",
        "patch": "5.3"
    },
    {
        "name_en": "Abroader Otter",
        "category": "Voyages",
        "source": "Subaquatic Voyages",
        "patch": "4.45"
    },
    {
        "name_en": "Accompaniment Node",
        "category": "Quest",
        "source": "Do It for Gilly",
        "patch": "3.0"
    },
    {
        "name_en": "Allagan Melon",
        "category": "Other",
        "source": "Gardening",
        "patch": "5.3"
    },
    {
        "name_en": "Amaro Hatchling",
        "category": "FATE",
        "source": "400 Bicolor Gemstones (The Crystarium)",
        "patch": "5.4"
    },
    {
        "name_en": "Ancient One",
        "category": "Dungeon",
        "source": "Anamnesis Anyder",
        "patch": "5.2"
    },
    {
        "name_en": "Angel of Mercy",
        "category": "Event / Premium",
        "source": "Valentione's Day (2017) / Final Fantasy XIV Online Store",
        "patch": "3.5"
    },
    {
        "name_en": "Anima",
        "category": "Quest",
        "source": "Body and Soul",
        "patch": "3.5"
    },
    {
        "name_en": "Armadillo Bowler",
        "category": "Dungeon",
        "source": "Malikah's Well",
        "patch": "5.0"
    },
    {
        "name_en": "Assassin Fry",
        "category": "Other",
        "source": "Desynthesize a Ninja Betta",
        "patch": "2.4"
    },
    {
        "name_en": "Atrophied Atomos",
        "category": "Crafting / Skybuilders",
        "source": "Crafted by Alchemist / Kupo of Fortune",
        "patch": "3.0"
    },
    {
        "name_en": "Attendee #777",
        "category": "Beast Tribe",
        "source": "Gyosho - Dhoro Iloh - 7 Namazu Koban",
        "patch": "4.3"
    },
    {
        "name_en": "Aurelia Polyp",
        "category": "Voyages",
        "source": "Subaquatic Voyages",
        "patch": "4.2"
    },
    {
        "name_en": "Axolotl Eft",
        "category": "Venture",
        "source": "Waterside Exploration XXII / Quick Exploration",
        "patch": "4.1"
    },
    {
        "name_en": "Baby Bat",
        "category": "Purchase",
        "source": "Junkmonger Nonoroon - Poor Maid's Mill - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Baby Behemoth",
        "category": "Premium",
        "source": "A Realm Reborn Collector's Edition",
        "patch": "2.0"
    },
    {
        "name_en": "Baby Brachiosaur",
        "category": "Deep Dungeon / Skybuilders",
        "source": "Heaven-on-High / 800 Skybuilders' Scrips",
        "patch": "3.55b"
    },
    {
        "name_en": "Baby Bun",
        "category": "FATE",
        "source": "FATE \"Lazy for You\"",
        "patch": "2.0"
    },
    {
        "name_en": "Baby Gremlin",
        "category": "Limited",
        "source": "Shadowbringers Pre-order",
        "patch": "4.45"
    },
    {
        "name_en": "Baby Opo-opo",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / Brayflox's Longstop (Hard) / The Aquapolis",
        "patch": "2.2"
    },
    {
        "name_en": "Baby Raptor",
        "category": "Purchase",
        "source": "Boughbury Trader - Redbelly Hive - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Bacon Bits",
        "category": "Venture",
        "source": "Woodland Exploration XXV / Quick Exploration",
        "patch": "5.1"
    },
    {
        "name_en": "Beady Eye",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.0"
    },
    {
        "name_en": "Behemoth Heir",
        "category": "Purchase",
        "source": "400 Centurio Seals",
        "patch": "3.0"
    },
    {
        "name_en": "Bite-Sized Pudding",
        "category": "Dungeon",
        "source": "The Wanderer's Palace",
        "patch": "2.0"
    },
    {
        "name_en": "Bitty Duckbill",
        "category": "Purchase",
        "source": "800 Sacks of Nuts",
        "patch": "5.0"
    },
    {
        "name_en": "Black Chocobo Chick",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.0"
    },
    {
        "name_en": "Black Coeurl",
        "category": "Purchase",
        "source": "20,000 MGP",
        "patch": "2.51"
    },
    {
        "name_en": "Black Hayate",
        "category": "Dungeon",
        "source": "Holminster Switch",
        "patch": "5.0"
    },
    {
        "name_en": "Blizzaria",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Bluebird",
        "category": "Deep Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / Timeworn Peisteskin Map / Timeworn Dragonskin Map / The Aquapolis",
        "patch": "2.1"
    },
    {
        "name_en": "Bom Boko",
        "category": "Deep Dungeon / Venture",
        "source": "Heaven-on-High / Field Exploration XX and XXII / Quick Exploration",
        "patch": "4.0"
    },
    {
        "name_en": "Bombfish",
        "category": "Deep Dungeon / Dungeon",
        "source": "Heaven-on-High / Shisui of the Violet Tides",
        "patch": "4.0"
    },
    {
        "name_en": "Brave New Y'shtola",
        "category": "Event / Premium",
        "source": "The Rising (2019) / Final Fantasy XIV Online Store",
        "patch": "5.05"
    },
    {
        "name_en": "Bridesmoogle",
        "category": "Premium",
        "source": "Attend a Ceremony of Eternal Bonding (Gold/Platinum)",
        "patch": "4.4"
    },
    {
        "name_en": "Brina",
        "category": "Dungeon",
        "source": "The Antitower",
        "patch": "3.2"
    },
    {
        "name_en": "Buffalo Calf",
        "category": "Quest",
        "source": "It's Possibly a Primal",
        "patch": "2.1"
    },
    {
        "name_en": "Bullpup",
        "category": "Dungeon / Skybuilders",
        "source": "Baelsar's Wall / Kupo of Fortune",
        "patch": "3.5"
    },
    {
        "name_en": "Butterfly Effect",
        "category": "FATE",
        "source": "400 Bicolor Gemstones (The Rak'tika Greatwood)",
        "patch": "5.0"
    },
    {
        "name_en": "Byakko Cub",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.2"
    },
    {
        "name_en": "Cactuar Cutting",
        "category": "Quest",
        "source": "Zombies Are People Too",
        "patch": "2.0"
    },
    {
        "name_en": "Cait Sith Doll",
        "category": "Limited",
        "source": "A Realm Reborn Pre-order",
        "patch": "2.0"
    },
    {
        "name_en": "Calamari",
        "category": "Dungeon",
        "source": "Hullbreaker Isle (Hard)",
        "patch": "3.3"
    },
    {
        "name_en": "Calca",
        "category": "Dungeon / Eureka",
        "source": "The Antitower / FATE \"Creepy Doll\" - Eureka Pyros",
        "patch": "3.2"
    },
    {
        "name_en": "Capybara Pup",
        "category": "Treasure Hunt",
        "source": "The Lost Canals of Uznair / The Hidden Canals of Uznair / The Shifting Canals of Uznair",
        "patch": "4.4"
    },
    {
        "name_en": "Castaway Chocobo Chick",
        "category": "Deep Dungeon / Gathering",
        "source": "Heaven-on-High / Gathered by Fisher",
        "patch": "4.0"
    },
    {
        "name_en": "Cerberpup",
        "category": "Skybuilders",
        "source": "1,200 Skybuilders' Scrips",
        "patch": "5.21"
    },
    {
        "name_en": "Chameleon",
        "category": "Dungeon",
        "source": "The Qitana Ravel",
        "patch": "5.0"
    },
    {
        "name_en": "Cherry Bomb",
        "category": "Purchase",
        "source": "Minion Trader - The Gold Saucer - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Chigoe Larva",
        "category": "Quest",
        "source": "Occupational Hazards",
        "patch": "2.0"
    },
    {
        "name_en": "Chocobo Chick Courier",
        "category": "Limited",
        "source": "Heavensward Pre-order",
        "patch": "3.0"
    },
    {
        "name_en": "Clionid Larva",
        "category": "Dungeon",
        "source": "Akadaemia Anyder",
        "patch": "5.0"
    },
    {
        "name_en": "Clockwork Barrow",
        "category": "Crafting",
        "source": "Crafted by Carpenter",
        "patch": "3.0"
    },
    {
        "name_en": "Clockwork Lantern",
        "category": "Purchase",
        "source": "15,000 Wolf Marks",
        "patch": "4.3"
    },
    {
        "name_en": "Clockwork Twintania",
        "category": "Achievement",
        "source": "Challenge Accepted",
        "patch": "3.1"
    },
    {
        "name_en": "Coblyn Larva",
        "category": "Gathering",
        "source": "Gathered by Miner",
        "patch": "2.0"
    },
    {
        "name_en": "Coeurl Kitten",
        "category": "Quest",
        "source": "Curiosity Killed the Coeurl",
        "patch": "2.1"
    },
    {
        "name_en": "Conditional Virtue",
        "category": "Eureka",
        "source": "The Baldesion Arsenal - Eureka Hydatos",
        "patch": "4.5"
    },
    {
        "name_en": "Construct 8",
        "category": "Raid",
        "source": "The Ridorana Lighthouse",
        "patch": "4.3"
    },
    {
        "name_en": "Continental Eye",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2016) / Final Fantasy XIV Online Store",
        "patch": "3.4"
    },
    {
        "name_en": "Copycat Bulb",
        "category": "Eureka",
        "source": "Happy Bunny Lockbox - Eureka Pagos",
        "patch": "4.36"
    },
    {
        "name_en": "Cute Justice",
        "category": "Purchase",
        "source": "Maudlin Latool Ja - Ul'dah - 400 Allied Seals (60 BLU)",
        "patch": "5.15"
    },
    {
        "name_en": "Dáinsleif F1",
        "category": "Bozja",
        "source": "Southern Front Lockbox",
        "patch": "5.35"
    },
    {
        "name_en": "Damona",
        "category": "Event",
        "source": "Yo-kai Watch (2020)",
        "patch": "5.3"
    },
    {
        "name_en": "Demon Box",
        "category": "Other",
        "source": "Attend a Ceremony of Eternal Bonding",
        "patch": "2.45"
    },
    {
        "name_en": "Demon Brick",
        "category": "Dungeon",
        "source": "Amdapor Keep",
        "patch": "2.0"
    },
    {
        "name_en": "Dhalmel Calf",
        "category": "Eureka",
        "source": "Pyros Lockbox / Heat-warped Lockbox - Eureka Pyros",
        "patch": "4.45"
    },
    {
        "name_en": "Domakin",
        "category": "Venture",
        "source": "Waterside Exploration XXV / Quick Exploration",
        "patch": "5.1"
    },
    {
        "name_en": "Doman Magpie",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.25"
    },
    {
        "name_en": "Dress-up Alisaie",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "3.4"
    },
    {
        "name_en": "Dress-up Estinien",
        "category": "Skybuilders",
        "source": "1,200 Skybuilders' Scrips",
        "patch": "5.11"
    },
    {
        "name_en": "Dress-up Raubahn",
        "category": "Quest",
        "source": "Return of the Bull",
        "patch": "4.1"
    },
    {
        "name_en": "Dress-up Tataru",
        "category": "Premium",
        "source": "Item code included with Art of the Revolution: Eastern Memories",
        "patch": "4.5"
    },
    {
        "name_en": "Dress-up Thancred",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "3.4"
    },
    {
        "name_en": "Dress-up Y'shtola",
        "category": "Event / Premium",
        "source": "The Rising (2016) / Final Fantasy XIV Online Store",
        "patch": "3.35"
    },
    {
        "name_en": "Dress-up Yugiri",
        "category": "Dungeon",
        "source": "Kugane Castle",
        "patch": "4.0"
    },
    {
        "name_en": "Drippy",
        "category": "Dungeon",
        "source": "Matoya's Relict",
        "patch": "5.4"
    },
    {
        "name_en": "Dust Bunny",
        "category": "Event / Purchase",
        "source": "Hatching-tide (2016) / Auriana - Mor Dhona - 3 Allagan Tomestones of Poetics",
        "patch": "2.0"
    },
    {
        "name_en": "Dwarf Rabbit",
        "category": "Deep Dungeon / Skybuilders / Treasure Hunt",
        "source": "Heaven-on-High / Kupo of Fortune / The Aquapolis",
        "patch": "3.3"
    },
    {
        "name_en": "Eden Minor",
        "category": "Raid",
        "source": "Eden's Gate: Sepulture / Eden's Gate: Sepulture (Savage)",
        "patch": "5.01"
    },
    {
        "name_en": "Eggplant Knight",
        "category": "Other",
        "source": "Gardening",
        "patch": "2.3"
    },
    {
        "name_en": "Enkidu",
        "category": "Trial",
        "source": "Battle in the Big Keep",
        "patch": "2.5"
    },
    {
        "name_en": "Ephemeral Necromancer",
        "category": "Dungeon",
        "source": "The Heroes' Gauntlet",
        "patch": "5.3"
    },
    {
        "name_en": "Faepup",
        "category": "Achievement",
        "source": "How Can I Help III",
        "patch": "3.55a"
    },
    {
        "name_en": "Fat Cat",
        "category": "Venture",
        "source": "Waterside Exploration XIV - XXV",
        "patch": "2.4"
    },
    {
        "name_en": "Faustlet",
        "category": "Raid",
        "source": "Alexander - The Burden of the Son (Savage)",
        "patch": "3.2"
    },
    {
        "name_en": "Fenrir Pup",
        "category": "Other",
        "source": "The Feast: Random Drop",
        "patch": "3.2"
    },
    {
        "name_en": "Flame Hatchling",
        "category": "Purchase",
        "source": "20,000 Flame Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Fledgling Apkallu",
        "category": "Achievement",
        "source": "Out of Sight Out of Mind",
        "patch": "2.28"
    },
    {
        "name_en": "Fledgling Dodo",
        "category": "Purchase",
        "source": "Auriana - Mor Dhona - 3 Allagan Tomestones of Poetics",
        "patch": "2.0"
    },
    {
        "name_en": "Forgiven Hate",
        "category": "Dungeon",
        "source": "Mt. Gulg",
        "patch": "5.0"
    },
    {
        "name_en": "Fox Kit ",
        "category": "FATE",
        "source": "Eschina - Rhalgr's Reach - 3 Sassho-seki Fragments (FATEs \"Outfoxed\" and \"Foxy Lady\")",
        "patch": "4.0"
    },
    {
        "name_en": "Frilled Dragon",
        "category": "Deep Dungeon",
        "source": "Confederate Custodian - Crick - 10 Empyrean Potsherds",
        "patch": "4.35"
    },
    {
        "name_en": "Gaelikitten",
        "category": "Deep Dungeon / Dungeon / Skybuilders / Treasure Hunt",
        "source": "The Palace of the Dead / Sohm Al / Kupo of Fortune / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Garlic Jester",
        "category": "Other",
        "source": "Gardening",
        "patch": "2.3"
    },
    {
        "name_en": "Gestahl",
        "category": "Deep Dungeon / Venture",
        "source": "Heaven-on-High / Waterside Exploration XVIII and XIX",
        "patch": "3.0"
    },
    {
        "name_en": "Ghido",
        "category": "Deep Dungeon / Dungeon",
        "source": "Heaven-on-High / The Sirensong Sea",
        "patch": "4.0"
    },
    {
        "name_en": "Giant Beaver",
        "category": "Purchase / Quest",
        "source": "Giant Beaver - Il Mheg - 1 Dancing Wing (Titania) / Required Quests: And Then There Were None, Acht-la Ormh Inn",
        "patch": "5.0"
    },
    {
        "name_en": "Gigantpole",
        "category": "Gathering",
        "source": "Gathered by Fisher",
        "patch": "2.0"
    },
    {
        "name_en": "Gigi",
        "category": "Quest",
        "source": "If I Could Turn Back Time",
        "patch": "3.5"
    },
    {
        "name_en": "Golden Beaver",
        "category": "Treasure Hunt",
        "source": "The Shifting Oubliettes Of Lyhe Ghiah",
        "patch": "5.4"
    },
    {
        "name_en": "Gold Rush Minecart",
        "category": "FATE",
        "source": "FATE \"On Dangerous Ground\"",
        "patch": "3.0"
    },
    {
        "name_en": "Goobbue Sproutling",
        "category": "Quest",
        "source": "It Was a Very Good Year",
        "patch": "2.0"
    },
    {
        "name_en": "Gravel Golem",
        "category": "Crafting",
        "source": "Crafted by Goldsmith",
        "patch": "2.0"
    },
    {
        "name_en": "Griffin Hatchling",
        "category": "Purchase",
        "source": "400 Centurio Seals",
        "patch": "3.0"
    },
    {
        "name_en": "Heavy Hatchling",
        "category": "Purchase",
        "source": "20,000 MGP",
        "patch": "2.4"
    },
    {
        "name_en": "Hecteye",
        "category": "Deep Dungeon",
        "source": "E-Una-Kotor - Quarrymill - 3 Gelmorran Potsherds",
        "patch": "3.35"
    },
    {
        "name_en": "Hedgehoglet",
        "category": "Treasure Hunt",
        "source": "The Lost Canals of Uznair / The Hidden Canals of Uznair / The Shifting Canals of Uznair",
        "patch": "4.45"
    },
    {
        "name_en": "Heliodor Carbuncle",
        "category": "Premium",
        "source": "Item code Included with Topaz Carbuncle Plushie",
        "patch": "3.0"
    },
    {
        "name_en": "Hellpup",
        "category": "Achievement",
        "source": "Mama Said Knock You Out III",
        "patch": "3.55a"
    },
    {
        "name_en": "Hoary the Snowman",
        "category": "Event / Premium",
        "source": "Starlight Celebration (2014) / Final Fantasy XIV Online Store",
        "patch": "2.45"
    },
    {
        "name_en": "Hovernyan",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Hunting Hawk",
        "category": "Deep Dungeon / Skybuilders",
        "source": "Heaven-on-High / 800 Skybuilders' Scrips",
        "patch": "3.1"
    },
    {
        "name_en": "Infant Imp",
        "category": "FATE",
        "source": "FATE \"Go, Go, Gorgimera\"",
        "patch": "2.0"
    },
    {
        "name_en": "Iron Dwarf",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "3.0"
    },
    {
        "name_en": "Ironfrog Ambler",
        "category": "FATE",
        "source": "Fathard - Eulmore - 6 Formidable Cog (FATE \"A Finale Most Formidable\")",
        "patch": "5.0"
    },
    {
        "name_en": "Ivon Coeurlfist Doll",
        "category": "Dungeon",
        "source": "The Temple of the Fist",
        "patch": "4.0"
    },
    {
        "name_en": "Jibanyan",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Kidragora",
        "category": "Gathering",
        "source": "Gathered by Botanist",
        "patch": "2.0"
    },
    {
        "name_en": "Koala Joey",
        "category": "Venture",
        "source": "Woodland Exploration XXII / Quick ExplorationWoodland Exploration XXII / Quick Exploration",
        "patch": "4.1"
    },
    {
        "name_en": "Komainu",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "4.2"
    },
    {
        "name_en": "Komajiro",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Komasan",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Korpokkur Kid",
        "category": "Deep Dungeon / Dungeon",
        "source": "Heaven-on-High / Saint Mocianne's Arboretrum",
        "patch": "3.1"
    },
    {
        "name_en": "Kyubi",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Laladile",
        "category": "Achievement",
        "source": "Crafting in the Air",
        "patch": "5.21"
    },
    {
        "name_en": "Lalinator 5.HO",
        "category": "Beast Tribe",
        "source": "8 Hammered Frogments",
        "patch": "5.3"
    },
    {
        "name_en": "Lesser Panda",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / The Aery / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Little Leafman",
        "category": "FATE",
        "source": "400 Bicolor Gemstones (Il Mheg)",
        "patch": "5.2"
    },
    {
        "name_en": "Little Leannan",
        "category": "Dungeon",
        "source": "The Grand Cosmos",
        "patch": "5.1"
    },
    {
        "name_en": "Little Yang",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2018) / Final Fantasy XIV Online Store",
        "patch": "4.4"
    },
    {
        "name_en": "Little Yin",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2018) / Final Fantasy XIV Online Store",
        "patch": "4.4"
    },
    {
        "name_en": "Littlefoot",
        "category": "Venture",
        "source": "Woodland Exploration XIV - XVIII",
        "patch": "2.4"
    },
    {
        "name_en": "Lord Ananta",
        "category": "Event",
        "source": "Yo-kai Watch (2020)",
        "patch": "5.3"
    },
    {
        "name_en": "Lord Enma",
        "category": "Event",
        "source": "Yo-kai Watch (2020)",
        "patch": "5.3"
    },
    {
        "name_en": "Magic Broom",
        "category": "Crafting",
        "source": "Crafted by Carpenter",
        "patch": "2.2"
    },
    {
        "name_en": "Magic Bucket",
        "category": "Gathering",
        "source": "Gathered by Fisher",
        "patch": "3.3"
    },
    {
        "name_en": "Magitek Avenger F1",
        "category": "Dungeon",
        "source": "Castrum Abania",
        "patch": "4.0"
    },
    {
        "name_en": "Magitek Helldiver F1",
        "category": "Bozja",
        "source": "Castrum Lacus Litore",
        "patch": "5.35"
    },
    {
        "name_en": "Malone",
        "category": "Achievement",
        "source": "Gathering in the Air",
        "patch": "5.21"
    },
    {
        "name_en": "Mameshiba",
        "category": "Venture",
        "source": "Highland Exploration XXII / Quick Exploration",
        "patch": "4.1"
    },
    {
        "name_en": "Mammet #001",
        "category": "Purchase",
        "source": "Minion Trade - The Gold Saucer - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Mammet #003G",
        "category": "Achievement",
        "source": "Bump on a Log: Order of the Twin Adder",
        "patch": "2.0"
    },
    {
        "name_en": "Mammet #003L",
        "category": "Achievement",
        "source": "Bump on a Log: Maelstrom",
        "patch": "2.0"
    },
    {
        "name_en": "Mammet #003U",
        "category": "Achievement",
        "source": "Bump on a Log: Immortal Flames",
        "patch": "2.0"
    },
    {
        "name_en": "Mandragora Queen",
        "category": "Other",
        "source": "Gardening",
        "patch": "2.3"
    },
    {
        "name_en": "Manjimutt",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Meerkat",
        "category": "Voyages",
        "source": "Subaquatic Voyages - Coldtoe Isle",
        "patch": "5.1"
    },
    {
        "name_en": "Micro Gigantender",
        "category": "FATE",
        "source": "400 Bicolor Gemstones (Amh Araeng)",
        "patch": "5.0"
    },
    {
        "name_en": "Midgardsormr",
        "category": "Quest",
        "source": "The Rising Chorus",
        "patch": "2.5"
    },
    {
        "name_en": "Mini Mole",
        "category": "Quest",
        "source": "Thwack-a-Mole",
        "patch": "2.3"
    },
    {
        "name_en": "Miniature Minecart",
        "category": "Deep Dungeon / Venture",
        "source": "Heaven-on-High / Highland Exploration XIV",
        "patch": "2.3"
    },
    {
        "name_en": "Miniature White Knight",
        "category": "Skybuilders",
        "source": "1,200 Skybuilders' Scrips",
        "patch": "5.11"
    },
    {
        "name_en": "Minion of Light",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.1"
    },
    {
        "name_en": "Minitek Conveyer",
        "category": "Purchase",
        "source": "15,000 Wolf Marks",
        "patch": "4.45"
    },
    {
        "name_en": "Minute Mindflayer",
        "category": "Deep Dungeon / Treasure Hunt / Venture",
        "source": "The Palace of the Dead / The Aquapolis / Field Exploration XIII / Highland Exploration XIII / Waterside Exploration XIII",
        "patch": "2.2"
    },
    {
        "name_en": "Mock-up Grynewaht",
        "category": "Dungeon",
        "source": "Doma Castle",
        "patch": "4.0"
    },
    {
        "name_en": "Model Enterprise",
        "category": "Limited",
        "source": "Item code included with The Art of Eorzea: Another Dawn",
        "patch": "2.38"
    },
    {
        "name_en": "Model Magitek Bit",
        "category": "Crafting",
        "source": "Crafted by Blacksmith",
        "patch": "2.5"
    },
    {
        "name_en": "Model Vanguard",
        "category": "Crafting",
        "source": "Crafted by Goldsmith",
        "patch": "2.0"
    },
    {
        "name_en": "Monkey King",
        "category": "Dungeon",
        "source": "The Swallow's Compass",
        "patch": "4.3"
    },
    {
        "name_en": "Morbol Seedling",
        "category": "Dungeon",
        "source": "The Aurum Vale",
        "patch": "2.0"
    },
    {
        "name_en": "Morpho",
        "category": "Deep Dungeon / Dungeon / Skybuilders",
        "source": "Heaven-on-High / The Lost City of Amdapor (Hard) / Kupo of Fortune",
        "patch": "3.2"
    },
    {
        "name_en": "Motley Egg",
        "category": "Event / Premium",
        "source": "Hatching-tide (2018) / Final Fantasy XIV Online Store",
        "patch": "4.2"
    },
    {
        "name_en": "Much-coveted Mora",
        "category": "Achievement",
        "source": "On a Boat IV",
        "patch": "5.4"
    },
    {
        "name_en": "Mudpie",
        "category": "Dungeon",
        "source": "Saint Mocianne's Arboretum (Hard)",
        "patch": "4.4"
    },
    {
        "name_en": "Mummy's Little Mummy",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / The Sunken Temple of Qarn (Hard) / The Aquapolis",
        "patch": "2.4"
    },
    {
        "name_en": "Mystic Weapon",
        "category": "Venture",
        "source": "Field Exploration XXV / Quick Exploration",
        "patch": "5.1"
    },
    {
        "name_en": "Namingway",
        "category": "Premium",
        "source": "Item code included with Encyclopaedia Eorzea",
        "patch": "3.4"
    },
    {
        "name_en": "Nana Bear",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "2.4"
    },
    {
        "name_en": "Naughty Nanka",
        "category": "Dungeon",
        "source": "Hullbreaker Isle",
        "patch": "2.3"
    },
    {
        "name_en": "Noko",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Nutkin",
        "category": "Deep Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / Unhidden Leather Map / The Aquapolis",
        "patch": "2.3"
    },
    {
        "name_en": "Odder Otter",
        "category": "Deep Dungeon / Venture",
        "source": "Heaven-on-High / Highland Exploration XIX - XXII / Woodland Exploration XIX - XXII / Waterside Exploration XIX - XXII / Quick Exploration",
        "patch": "4.0"
    },
    {
        "name_en": "OMG",
        "category": "Raid",
        "source": "Alphascape V4.0 / Alphascape V4.0 (Savage)",
        "patch": "4.4"
    },
    {
        "name_en": "Onion Prince",
        "category": "Other",
        "source": "Gardening",
        "patch": "2.3"
    },
    {
        "name_en": "Owlet",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / The Fractal Continuum / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Page 63",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / The Great Gubal Library / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Paissa Brat",
        "category": "Deep Dungeon / Skybuilders / Treasure Hunt",
        "source": "The Palace of the Dead / 800 Skybuilders' Scrips / Timeworn Dragonskin Map / The Aquapolis",
        "patch": "3.1"
    },
    {
        "name_en": "Paissa Patissier",
        "category": "Skybuilders",
        "source": "Kupo of Fortune",
        "patch": "5.21"
    },
    {
        "name_en": "Paissa Threadpuller",
        "category": "Skybuilders",
        "source": "Kupo of Fortune",
        "patch": "5.21"
    },
    {
        "name_en": "Palico",
        "category": "Quest",
        "source": "The New King on the Block",
        "patch": "4.36"
    },
    {
        "name_en": "Panda Cub",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.25"
    },
    {
        "name_en": "Pegasus Colt",
        "category": "Skybuilders",
        "source": "800 Skybuilders' Scrips",
        "patch": "3.55b"
    },
    {
        "name_en": "Penguin Prince",
        "category": "Achievement",
        "source": "The Road of Verminion I",
        "patch": "3.1"
    },
    {
        "name_en": "Peridot Carbuncle",
        "category": "Premium",
        "source": "Item code included with Emerald Carbuncle Plushie",
        "patch": "3.0"
    },
    {
        "name_en": "Petit Pteranodon",
        "category": "Skybuilders",
        "source": "Kupo of Fortune",
        "patch": "5.31"
    },
    {
        "name_en": "Piggy",
        "category": "Purchase",
        "source": "30,000 MGP",
        "patch": "3.3"
    },
    {
        "name_en": "Plush Cushion",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "2.2"
    },
    {
        "name_en": "Pod 054",
        "category": "Raid",
        "source": "The Copied Factory",
        "patch": "5.1"
    },
    {
        "name_en": "Pod 316",
        "category": "Raid",
        "source": "The Copied Factory",
        "patch": "5.1"
    },
    {
        "name_en": "Poogie",
        "category": "Trial",
        "source": "The Great Hunt (Extreme)",
        "patch": "4.36"
    },
    {
        "name_en": "Poro Roggo",
        "category": "Quest",
        "source": "The Word of the Mother",
        "patch": "3.2"
    },
    {
        "name_en": "Princely Hatchling",
        "category": "Achievement",
        "source": "Leaving a Good Impression II",
        "patch": "2.1"
    },
    {
        "name_en": "Private Moai",
        "category": "Crafting",
        "source": "Crafted by Blacksmith",
        "patch": "4.2"
    },
    {
        "name_en": "Pudgy Puk",
        "category": "FATE",
        "source": "FATE \"The Eyes Have It\"",
        "patch": "2.0"
    },
    {
        "name_en": "Puff of Darkness",
        "category": "Raid",
        "source": "The World of Darkness",
        "patch": "2.5"
    },
    {
        "name_en": "Pumpkin Butler",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2015) / Final Fantasy XIV Online Store",
        "patch": "3.07"
    },
    {
        "name_en": "Road Sparrow",
        "category": "Deep Dungeon / Dungeon",
        "source": "Heaven-on-High / Bardam's Mettle",
        "patch": "4.0"
    },
    {
        "name_en": "Robonyan F-type",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Salt & Pepper Seal",
        "category": "Dungeon",
        "source": "The Drowned City of Skalla",
        "patch": "4.1"
    },
    {
        "name_en": "Sand Fox",
        "category": "Purchase",
        "source": "400 Faux Leaves",
        "patch": "5.3"
    },
    {
        "name_en": "Save the Princess",
        "category": "",
        "source": "",
        "patch": "5.45"
    },
    {
        "name_en": "Scarlet Peacock",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.4"
    },
    {
        "name_en": "Seitei",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.45"
    },
    {
        "name_en": "Serpent Hatchling",
        "category": "Purchase",
        "source": "20,000 Serpent Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Set of Primogs",
        "category": "Premium",
        "source": "Item code included with Before the Fall Original Soundtrack",
        "patch": "3.0"
    },
    {
        "name_en": "Shaggy Shoat",
        "category": "Deep Dungeon / Dungeon",
        "source": "Heaven-on-High / Xelphatol",
        "patch": "3.4"
    },
    {
        "name_en": "Shalloweye",
        "category": "Achievement",
        "source": "A Load of Verminion II",
        "patch": "3.1"
    },
    {
        "name_en": "Sharksucker-class Insubmersible",
        "category": "Voyages",
        "source": "Subaquatic Voyages - The Central Charnel Trench / Subaquatic Voyages - The Southern Charnel Trench",
        "patch": "5.05"
    },
    {
        "name_en": "Shoebill",
        "category": "Dungeon",
        "source": "Amaurot",
        "patch": "5.0"
    },
    {
        "name_en": "Shogunyan",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Silver Dasher",
        "category": "Voyages",
        "source": "Subaquatic Voyages - The Open Robe",
        "patch": "5.2"
    },
    {
        "name_en": "Slime Puddle",
        "category": "Dungeon",
        "source": "Copperbell Mines (Hard)",
        "patch": "2.1"
    },
    {
        "name_en": "Smallshell",
        "category": "FATE",
        "source": "FATE \"It's Not Lupus\"",
        "patch": "2.0"
    },
    {
        "name_en": "Spoony Bard",
        "category": "Premium",
        "source": "Item code included with Heavensward Original Soundtrack",
        "patch": "3.2"
    },
    {
        "name_en": "Steam-powered Gobwalker G-VII",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "3.01"
    },
    {
        "name_en": "Storm Hatchling",
        "category": "Purchase",
        "source": "20,000 Storm Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Sungold Talos",
        "category": "Treasure Hunt",
        "source": "The Dungeons of Lyhe Ghiah",
        "patch": "5.2"
    },
    {
        "name_en": "Syldrion-class Insubmersible",
        "category": "Voyages",
        "source": "Subaquatic Voyages - Sea of Jade 4",
        "patch": "5.4"
    },
    {
        "name_en": "Taoist Moogle",
        "category": "Limited",
        "source": "Itinerant Moogle",
        "patch": "4.4"
    },
    {
        "name_en": "Tender Lamb",
        "category": "Event / Premium",
        "source": "Heavensturn (2015) / Final Fantasy XIV Online Store",
        "patch": "2.0"
    },
    {
        "name_en": "Tengu Doll",
        "category": "Venture",
        "source": "Field Exploration XXII / Quick Exploration",
        "patch": "4.1"
    },
    {
        "name_en": "The Behatted Serpent of Ronka",
        "category": "Beast Tribe",
        "source": "Yuqurl Manl - The Rak'tika Greatwood - 8 Qitari Compliments",
        "patch": "5.2"
    },
    {
        "name_en": "The Behelmeted Serpent of Ronka",
        "category": "Beast Tribe",
        "source": "Yuqurl Manl - The Rak'tika Greatwood - 8 Qitari Compliments",
        "patch": "5.2"
    },
    {
        "name_en": "The Gold Whisker",
        "category": "Treasure Hunt",
        "source": "The Hidden Canals of Uznair",
        "patch": "4.2"
    },
    {
        "name_en": "The Great Serpent of Ronka",
        "category": "Quest",
        "source": "Protectors of the Wood",
        "patch": "5.0"
    },
    {
        "name_en": "The Major-General",
        "category": "Achievement",
        "source": "No More Fish in the Sea I",
        "patch": "5.2"
    },
    {
        "name_en": "The Prince of Anemos",
        "category": "Eureka",
        "source": "Anemos Lockbox / FATE \"The Shadow over Anemos\" - Eureka Anemos",
        "patch": "4.25"
    },
    {
        "name_en": "Tight-beaked Parrot",
        "category": "Dungeon / Treasure Hunt",
        "source": "Sastasha (Hard) / The Aquapolis",
        "patch": "2.4"
    },
    {
        "name_en": "Tinker's Bell",
        "category": "FATE",
        "source": "Fathard - Eulmore - 6 Archaeotania's Horn (FATE \"The Head, The Tail, the Whole Damned Thing\")",
        "patch": "5.0"
    },
    {
        "name_en": "Tiny Bulb",
        "category": "Deep Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / Timeworn Toadskin Map / The Aquapolis",
        "patch": "2.1"
    },
    {
        "name_en": "Tiny Echevore",
        "category": "Dungeon",
        "source": "Dohn Mheg",
        "patch": "5.0"
    },
    {
        "name_en": "Tiny Rat",
        "category": "Purchase",
        "source": "Chachamun - Wellwick Wood - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Tiny Tapir",
        "category": "Venture",
        "source": "Field Exploration XIV, XV, XIX",
        "patch": "2.3"
    },
    {
        "name_en": "Tiny Tatsunoko",
        "category": "Deep Dungeon / Gathering",
        "source": "Heaven-on-High / Gathered by Fisher",
        "patch": "4.0"
    },
    {
        "name_en": "Tiny Tortoise",
        "category": "Gathering",
        "source": "Gathered by Fisher",
        "patch": "2.0"
    },
    {
        "name_en": "Tomato King",
        "category": "Other",
        "source": "Gardening",
        "patch": "2.3"
    },
    {
        "name_en": "Tora-jiro",
        "category": "Purchase",
        "source": "800 Centurio Seals",
        "patch": "4.0"
    },
    {
        "name_en": "Toy Alexander",
        "category": "Raid",
        "source": "Alexander - The Soul of the Creator / Alexander - The Soul of the Creator (Savage)",
        "patch": "3.4"
    },
    {
        "name_en": "Treasure Box",
        "category": "Purchase",
        "source": "440 Allied Seals",
        "patch": "2.3"
    },
    {
        "name_en": "Trike",
        "category": "Skybuilders",
        "source": "Kupo of Fortune",
        "patch": "5.41"
    },
    {
        "name_en": "Ugly Duckling",
        "category": "Deep Dungeon / Dungeon / Skybuilders / Treasure Hunt",
        "source": "The Palace of the Dead / Neverreap / Kupo of Fortune / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Unicolt",
        "category": "Deep Dungeon / Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / The Vault / The Aquapolis",
        "patch": "3.0"
    },
    {
        "name_en": "Unlucky Rabbit",
        "category": "Purchase",
        "source": "30,000 MGP",
        "patch": "5.2"
    },
    {
        "name_en": "USApyon",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Venoct",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "Water Imp",
        "category": "Purchase",
        "source": "10,000 MGP",
        "patch": "2.51"
    },
    {
        "name_en": "Wayward Hatchling",
        "category": "Purchase",
        "source": "Minion Trader - The Gold Saucer - 2,400 Gil",
        "patch": "2.0"
    },
    {
        "name_en": "Weatherproof Gaelicat",
        "category": "Skybuilders",
        "source": "Kupo of Fortune",
        "patch": "5.31"
    },
    {
        "name_en": "Whisper",
        "category": "Event",
        "source": "Yo-kai Watch (2016) / Yo-kai Watch (2017) / Yo-kai Watch (2020)",
        "patch": "3.35"
    },
    {
        "name_en": "White Whittret",
        "category": "Dungeon",
        "source": "Hells' Lid",
        "patch": "4.2"
    },
    {
        "name_en": "Wide-eyed Fawn",
        "category": "Purchase",
        "source": "Auriana - Mor Dhona - 3 Allagan Tomestones of Poetics",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Aerith",
        "category": "Premium",
        "source": "Fan Festival 2018-19 / Final Fantasy XIV Online Store",
        "patch": "4.45"
    },
    {
        "name_en": "Wind-up Airship",
        "category": "Quest",
        "source": "The Gridanian Envoy / The Lominsan Envoy / The Ul'dahn Envoy",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Aldgoat",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Alisae",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.01"
    },
    {
        "name_en": "Wind-up Alpha",
        "category": "Quest",
        "source": "To Kweh under Distant Skies",
        "patch": "4.4"
    },
    {
        "name_en": "Wind-up Alphinaud",
        "category": "Quest",
        "source": "In Search of Iceheart",
        "patch": "3.0"
    },
    {
        "name_en": "Wind-up Amalj'aa",
        "category": "Beast Tribe",
        "source": "Amalj'aa Vendor - Ring of Ash - 25,000 Gil",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Ananta",
        "category": "Beast Tribe",
        "source": "Madhura - Castellum Velodyna - 7 Ananta Dreamstaffs",
        "patch": "4.2"
    },
    {
        "name_en": "Wind-up Ardbert",
        "category": "Event",
        "source": "The Rising (2020)",
        "patch": "5.3"
    },
    {
        "name_en": "Wind-up Aymeric",
        "category": "Quest",
        "source": "Litany of Peace",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Bahamut",
        "category": "Limited",
        "source": "Item code included with A Realm Reborn Original Sountrack",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Bartz",
        "category": "Premium",
        "source": "Stormblood Collector's Edition",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Bismarck",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Brickman",
        "category": "Event",
        "source": "Breaking Brick Mountains (2014) / Breaking Brick Mountains (2017)",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Calofisteri",
        "category": "Raid",
        "source": "The Weeping City of Mhach",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Cheerleader",
        "category": "Purchase",
        "source": "15,000 Wolf Marks",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Chimera",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Cid",
        "category": "Quest",
        "source": "A Difference of Opinion",
        "patch": "3.0"
    },
    {
        "name_en": "Wind-up Cirina",
        "category": "Event / Premium",
        "source": "The Rising (2018) / Final Fantasy XIV Online Store",
        "patch": "4.35"
    },
    {
        "name_en": "Wind-Up Cloud",
        "category": "Premium",
        "source": "Fan Festival 2018-19 / Final Fantasy XIV Online Store",
        "patch": "4.45"
    },
    {
        "name_en": "Wind-up Cursor",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Dalamud",
        "category": "Limited",
        "source": "Item code included with Before Meteor Original Soundtrack",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Deliver Moogle",
        "category": "Premium",
        "source": "Item code included with Delivery Moogle Plushie",
        "patch": "2.38"
    },
    {
        "name_en": "Wind-up Dezul Qualan",
        "category": "Beast Tribe",
        "source": "Ixali Vendor - Ehcatl - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Dragonet",
        "category": "Beast Tribe",
        "source": "Mogmul Mogbelly - Bahrr Lehs - 30,000 Gil",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Dulia-Chai",
        "category": "Premium",
        "source": "Item code included with The Art of Reflection -Histories Forsaken- Artbook",
        "patch": "5.2"
    },
    {
        "name_en": "Wind-up Dullahan",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Echidna",
        "category": "Raid",
        "source": "The Void Ark",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Edda",
        "category": "Deep Dungeon",
        "source": "The Palace of the Dead",
        "patch": "3.4"
    },
    {
        "name_en": "Wind-up Edvya",
        "category": "Event / Premium",
        "source": "Little Ladies' Day (2014) / Final Fantasy XIV Online Store",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Elvaan",
        "category": "Eureka",
        "source": "FATE \"You Do Know Jack\" - Eureka Pyros",
        "patch": "4.45"
    },
    {
        "name_en": "Wind-up Estinien",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Exdeath",
        "category": "Raid",
        "source": "Deltascape V4.0 / Deltascape V4.0 (Savage)",
        "patch": "4.01"
    },
    {
        "name_en": "Wind-up Fafnir",
        "category": "Eureka",
        "source": "Anemos Lockbox / FATE \"Wine and Honey\" - Eureka Anemos",
        "patch": "4.25"
    },
    {
        "name_en": "Wind-up Firion",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "3.07"
    },
    {
        "name_en": "Wind-up Founder",
        "category": "Beast Tribe",
        "source": "Amalj'aa Vendor - Ring of Ash - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Fran",
        "category": "Premium",
        "source": "Shadowbringers Collector's Edition",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Fuath",
        "category": "Treasure Hunt",
        "source": "The Dungeons of Lyhe Ghiah",
        "patch": "5.05"
    },
    {
        "name_en": "Wind-up Gaia",
        "category": "Raid",
        "source": "Eden's Promise: Eternity / Eden's Promise: Eternity (Savage)",
        "patch": "5.4"
    },
    {
        "name_en": "Wind-up G'raha Tia",
        "category": "Quest",
        "source": "Shadowbringers",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Garuda",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-up Gentleman",
        "category": "Quest",
        "source": "Her Last Vow",
        "patch": "2.5"
    },
    {
        "name_en": "Wind-up Gilgamesh",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Gnath",
        "category": "Beast Tribe",
        "source": "Vath Stickpeddler - Loth ast Vath - 30,000 Gil",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-up Goblin",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Gosetsu",
        "category": "Event / Premium",
        "source": "The Rising (2017) / Final Fantasy XIV Online Store",
        "patch": "4.05"
    },
    {
        "name_en": "Wind-up Gundu Warrior",
        "category": "Beast Tribe",
        "source": "Luna Vanu - Ok' Gundu Nakki - 30,000 Gil",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Haurchefant",
        "category": "Quest",
        "source": "As Goes Light, So Goes Darkness",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Hien",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Hobgoblin",
        "category": "Venture",
        "source": "Highland Exploration XXV / Quick Exploration",
        "patch": "5.1"
    },
    {
        "name_en": "Wind-up Hraesvelgr",
        "category": "Premium",
        "source": "Item code included with The Art of Ishgard: The Scars of War",
        "patch": "3.55a"
    },
    {
        "name_en": "Wind-up Iceheart",
        "category": "Event / Premium",
        "source": "The Rising (2015) / Final Fantasy XIV Online Store",
        "patch": "3.05"
    },
    {
        "name_en": "Wind-up Ifrit",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Illuminatus",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Ixal",
        "category": "Beast Tribe",
        "source": "Ixali Vendor - Ehcatl - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Ixion",
        "category": "FATE",
        "source": "Eschina - Rhalgr's Reach - 5 Ixion Horns (FATE \"A Horse Outside\")",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Kain",
        "category": "Premium",
        "source": "Heavensward Collector's Edition",
        "patch": "3.0"
    },
    {
        "name_en": "Wind-up Kefka",
        "category": "Raid",
        "source": "Sigmascape V4.0 / Sigmascape V4.0 (Savage)",
        "patch": "4.2"
    },
    {
        "name_en": "Wind-up Khloe",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Kobold",
        "category": "Beast Tribe",
        "source": "Kobold Vendor - 789th Order Dig - 25,000 Gil",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Kobolder",
        "category": "Beast Tribe",
        "source": "Kobold Vendor - 789th Order Dig - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Kojin",
        "category": "Beast Tribe",
        "source": "Shikitahe - Tamamizu - 5 Kojin Sango",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Krile",
        "category": "Event / Premium",
        "source": "The Rising (2016) / Final Fantasy XIV Online Store",
        "patch": "3.35"
    },
    {
        "name_en": "Wind-up Lakshmi",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Leader",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Leviathan",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-Up Louisoix",
        "category": "Achievement",
        "source": "Out of a Bind I",
        "patch": "2.4"
    },
    {
        "name_en": "Wind-up Lulu",
        "category": "Premium",
        "source": "Fan Festival 2016-17 / Final Fantasy XIV Online Store",
        "patch": "3.4"
    },
    {
        "name_en": "Wind-up Lyse",
        "category": "Event / Premium",
        "source": "The Rising (2017) / Final Fantasy XIV Online Store",
        "patch": "4.05"
    },
    {
        "name_en": "Wind-up Magnai",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.3"
    },
    {
        "name_en": "Wind-up Matanga",
        "category": "Treasure Hunt",
        "source": "The Hidden Canals of Uznair",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Meateater",
        "category": "Purchase",
        "source": "800 Centurio Seals",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Minfilia",
        "category": "Event / Premium",
        "source": "The Rising (2014) / Final Fantasy XIV Online Store",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Mithra",
        "category": "Eureka",
        "source": "Anemos Lockbox / FATE \"Short Serket 2\" - Eureka Anemos",
        "patch": "4.25"
    },
    {
        "name_en": "Wind-up Moenbryda",
        "category": "Quest",
        "source": "An Ending to Mark a New Beginning",
        "patch": "3.4"
    },
    {
        "name_en": "Wind-up Moogle",
        "category": "Premium",
        "source": "A Realm Reborn Collector's Edition",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Moon",
        "category": "Purchase",
        "source": "Magic Pot - The Isles of Umbra - 1 Hi-Elixir",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Mystel",
        "category": "Quest",
        "source": "Unto the Morrow",
        "patch": "5.3"
    },
    {
        "name_en": "Wind-up Namazu",
        "category": "Treasure Hunt",
        "source": "Timeworn Gazelleskin Map",
        "patch": "4.05"
    },
    {
        "name_en": "Wind-up Nanamo",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.45"
    },
    {
        "name_en": "Wind-up Nero tol Scaeva",
        "category": "Purchase",
        "source": "30,000 MGP",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-up Nidhogg",
        "category": "Premium",
        "source": "Item code included with The Far Edge of Fate Original Soundtrack",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Nu Mou",
        "category": "Purchase",
        "source": "800 Sacks of Nuts",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Odin",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Ohl Deeh",
        "category": "Beast Tribe",
        "source": "Mogmul Mogbelly - Bahrr Lehs - 30,000 Gil",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Omega-F",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Silver Certificate of Commendation",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Omega-M",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Silver Certificate of Commendation",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Onion Knight",
        "category": "Raid",
        "source": "Syrcus Tower",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Papalymo",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.38"
    },
    {
        "name_en": "Wind-up Pixie",
        "category": "Beast Tribe",
        "source": "Jul Oul - Il Mheg - 8 Fae Fancy",
        "patch": "5.1"
    },
    {
        "name_en": "Wind-up Qalyana",
        "category": "Beast Tribe",
        "source": "Madhura - Castellum Velodyna - 7 Ananta Dreamstaffs",
        "patch": "4.5"
    },
    {
        "name_en": "Wind-up Qiqirn",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "2.0"
    },
    {
        "name_en": "Wind-up Ramuh",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Ramza",
        "category": "Raid",
        "source": "The Orbonne Monastery",
        "patch": "4.45"
    },
    {
        "name_en": "Wind-up Ravana",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Red Mage",
        "category": "Limited",
        "source": "Stormblood Pre-order",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Redback",
        "category": "Beast Tribe",
        "source": "Shikitahe - Tamamizu - 5 Kojin Sango",
        "patch": "4.5"
    },
    {
        "name_en": "Wind-up Relm",
        "category": "Premium",
        "source": "Item code included with The Art of Ishgard: Stone and Steel",
        "patch": "3.1"
    },
    {
        "name_en": "Wind-up Rikku",
        "category": "Premium",
        "source": "Fan Festival 2016-17 / Final Fantasy XIV Online Store",
        "patch": "3.4"
    },
    {
        "name_en": "Wind-up Ryne",
        "category": "Raid",
        "source": "Eden's Verse: Refulgence / Eden's Verse: Refulgence (Savage)",
        "patch": "5.2"
    },
    {
        "name_en": "Wind-up Sadu",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.3"
    },
    {
        "name_en": "Wind-up Sahagin",
        "category": "Beast Tribe",
        "source": "Sahagin Vendor - Novv's Nursery - 25,000 Gil",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Sasquatch",
        "category": "Deep Dungeon",
        "source": "E-Una-Kotor - Quarrymill - 3 Gelmorran Potsherds",
        "patch": "3.35"
    },
    {
        "name_en": "Wind-up Scathach",
        "category": "Raid",
        "source": "Dun Scaith",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Sea Devil",
        "category": "Beast Tribe",
        "source": "Sahagin Vendor - Novv's Nursery - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Shantotto",
        "category": "Event / Premium",
        "source": "Burgeoning Dread (2014) / Final Fantasy XIV Online Store",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Shinryu",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.1"
    },
    {
        "name_en": "Wind-up Shiva",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.3"
    },
    {
        "name_en": "Wind-up Succubus",
        "category": "Purchase",
        "source": "500 Allied Seals",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Sun",
        "category": "Purchase",
        "source": "Magic Pot - The Isles of Umbra - 1 Elixir",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Susano",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "4.0"
    },
    {
        "name_en": "Wind-up Suzaku",
        "category": "Premium",
        "source": "Item code included with Shadowbringers Original Soundtrack",
        "patch": "5.0"
    },
    {
        "name_en": "Wind-up Sylph",
        "category": "Beast Tribe",
        "source": "Sylphic Vendor - Little Solace - 25,000 Gil",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Tarutaru",
        "category": "Eureka",
        "source": "Pagos Lockbox - Eureka Pagos",
        "patch": "4.36"
    },
    {
        "name_en": "Wind-up Tataru",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.01"
    },
    {
        "name_en": "Wind-up Thancred",
        "category": "Event / Premium",
        "source": "The Rising (2014) / Final Fantasy XIV Online Store",
        "patch": "2.3"
    },
    {
        "name_en": "Wind-up Tifa",
        "category": "Premium",
        "source": "Fan Festival 2018-19 / Final Fantasy XIV Online Store",
        "patch": "4.4"
    },
    {
        "name_en": "Wind-up Titan",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Weaver / Heaven-on-High",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-up Tonberry",
        "category": "Deep Dungeon / Treasure Hunt",
        "source": "The Palace of the Dead / Timeworn Boarskin Map / The Aquapolis",
        "patch": "2.1"
    },
    {
        "name_en": "Wind-up Tsukuyomi",
        "category": "Premium",
        "source": "Item code included with Stormblood Original Soundtrack",
        "patch": "4.3"
    },
    {
        "name_en": "Wind-up Ultros",
        "category": "Trial",
        "source": "The Dragon's Neck",
        "patch": "2.4"
    },
    {
        "name_en": "Wind-up Urianger",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.45"
    },
    {
        "name_en": "Wind-up Vath",
        "category": "Beast Tribe",
        "source": "Vath Stickpeddler - Loth ast Vath - 30,000 Gil",
        "patch": "3.2"
    },
    {
        "name_en": "Wind-up Violet",
        "category": "Beast Tribe",
        "source": "Sylphic Vendor - Little Solace - 25,000 Gil",
        "patch": "2.35"
    },
    {
        "name_en": "Wind-up Warrior of Light",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 2 Achievement Certificates",
        "patch": "2.2"
    },
    {
        "name_en": "Wind-up Weapon",
        "category": "Dungeon",
        "source": "The Ghimlyt Dark",
        "patch": "4.45"
    },
    {
        "name_en": "Wind-up Y'shtola",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.38"
    },
    {
        "name_en": "Wind-up Yda",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.38"
    },
    {
        "name_en": "Wind-up Yotsuyu",
        "category": "Premium",
        "source": "Item code included with Art of the Revolution: Western Memories",
        "patch": "4.2"
    },
    {
        "name_en": "Wind-up Yugiri",
        "category": "Event / Premium",
        "source": "The Rising (2015) / Final Fantasy XIV Online Store",
        "patch": "3.07"
    },
    {
        "name_en": "Wind-up Yuna",
        "category": "Premium",
        "source": "Fan Festival 2016-17 / Final Fantasy XIV Online Store",
        "patch": "3.5"
    },
    {
        "name_en": "Wind-up Zhloe",
        "category": "Wondrous Tails",
        "source": "1 Khloe's Bronze Certificate of Commendation",
        "patch": "4.3"
    },
    {
        "name_en": "Wind-up Zundu Warrior",
        "category": "Beast Tribe",
        "source": "Luna Vanu - Ok' Gundu Nakki - 30,000 Gil",
        "patch": "3.1"
    },
    {
        "name_en": "Wolf Pup",
        "category": "Quest",
        "source": "Man's Best Friend",
        "patch": "2.1"
    },
    {
        "name_en": "Yukinko Snowflake",
        "category": "Eureka",
        "source": "Hydatos Lockbox / Moisture-warped Lockbox - Eureka Hydatos",
        "patch": "4.5"
    },
    {
        "name_en": "Zazel",
        "category": "Event",
        "source": "Yo-kai Watch (2020)",
        "patch": "5.3"
    },
    {
        "name_en": "Zephyrous Zabuton",
        "category": "Beast Tribe",
        "source": "Shikitahe - Tamamizu - 5 Kojin Sango",
        "patch": "4.5"
    },
    {
        "name_en": "Zu Hatchling",
        "category": "Purchase",
        "source": "10,000 MGP",
        "patch": "2.3"
    }
];
