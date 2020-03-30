import { DataGroup } from "../../DataGroup";

export const Collectables_Orchestrion_List_Others = function(parent) {
    return new DataGroup("Others", parent).initializeTasks(tasks);
};

const tasks = [
    {
        number: 1,
        name: "Prelude - Discoveries",
        method: "Obtained upon completing the achievement The Leader of the Band I.",
        unlock: "Add 10 unique music rolls to your orchestrion."
    }, {
        number: 2,
        name: "A Cold Wind",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 5,000 MGP."
    }, {
        number: 3,
        name: "Sport of Kings",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Purchased from Gold Saucer Attendant <Prize Claim> for 15,000 MGP."
    }, {
        number: 4,
        name: "Contention",
        method: "Available for Allagan tomestone exchange in Idyllshire.",
        unlock: "Purchased from Hismena in Idyllshire for 375 Allagan Tomestones of Poetics."
    }, {
        number: 5,
        name: "Agent of Inquiry",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 30,000 MGP."
    }, {
        number: 6,
        name: "The Only Path",
        method: "Materials for synthesis obtained from treasure hunts.",
        unlock: "Crafted by Level 50 Alchemist with Faded Copy of The Only Path, dropped from Timeworn Wyvernskin Maps."
    }, {
        number: 7,
        name: "A World Apart",
        method: "Materials for synthesis obtained from exploratory voyages.",
        unlock: "Crafted by Level 50 Alchemist with Faded Copy of A World Apart, obtained from exploratory voyages in Sea of Clouds - Sector 23."
    }, {
        number: 8,
        name: "Tenacity",
        method: "Available for Amber-encased vilekin exchange in Ishgard.",
        unlock: "Purchased from the Amber Trader in Foundation for 5 Amber-encased Vilekin."
    }, {
        number: 9,
        name: "When a Tree Falls",
        method: "Available for Amber-encased vilekin exchange in Ishgard.",
        unlock: "Purchased from the Amber Trader in Foundation for 10 Amber-encased Vilekin."
    }, {
        number: 10,
        name: "Blood for Blood",
        method: "Materials for synthesis available for exchange in the Wolves' Den.",
        unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) from Faded Copy of Blood for Blood, bought from the Materia Provisioner at the Wolves' Den Pier for 5,000 Wolf Marks."
    }, {
        number: 11,
        name: "Starved",
        method: "Materials for synthesis available for exchange in the Wolves' Den.",
        unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Starved, bought from the Materia Provisioner at the Wolves' Den Pier for 10,000 Wolf Marks."
    }, {
        number: 12,
        name: "Engage",
        method: "Materials for synthesis obtained from exploratory voyages.",
        unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Engage, obtained from exploratory voyages in Sea of Clouds - Sector 18."
    }, {
        number: 13,
        name: "Defender of the Realm",
        method: "Obtained upon completing the achievement The Leader of the Band III.",
        unlock: "Add 50 unique music rolls to your orchestrion."
    }, {
        number: 14,
        name: "Dragonsong",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Litany of Peace."
    }, {
        number: 15,
        name: "The Seventh Sun",
        method: "Obtained upon completing the achievement The Leader of the Band V.",
        unlock: "Add 100 unique music rolls to your orchestrion."
    }, {
        number: 16,
        name: "Battle Theme 1.x",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 20,000 MGP."
    }, {
        number: 17,
        name: "Breaking Boundaries",
        method: "Obtained in the Aquapolis.",
        unlock: "Teleportation ward for The Aquapolis randomly spawns after the completion of a Timeworn Dragonskin Map."
    }, {
        number: 18,
        name: "Canticle",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 19,
        name: "Forever Lost",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Louisoix's Finest Student."
    }, {
        number: 20,
        name: "Jewel",
        method: "Obtained from lockboxes in the Diadem.",
        unlock: "Chance of dropping when opening lockboxes obtained from coffers and FATEs in The Diadem."
    }, {
        number: 21,
        name: "He Who Continues the Attack",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Fly Free, My Pretty."
    }, {
        number: 22,
        name: "Imperial Will",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Fly Free, My Pretty."
    }, {
        number: 23,
        name: "Steel Reason",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest The Obvious Solution."
    }, {
        number: 24,
        name: "Birds of Prey",
        method: "Available for exchange in the Wolves' Den.",
        unlock: "Bought from the Materia Provisioner at the Wolves' Den Pier for 10,000 Wolf Marks."
    }, {
        number: 25,
        name: "Rival Wings",
        method: "Available for exchange in the Wolves' Den.",
        unlock: "Bought from the Materia Provisioner at the Wolves' Den Pier for 10,000 Wolf Marks."
    }, {
        number: 26,
        name: "The Measure of His Reach",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest A Blissful Arrival."
    }, {
        number: 27,
        name: "Cyan's Theme",
        method: "Quest reward.",
        unlock: "Reward for the quest Rise of a New Sun."
    }, {
        number: 28,
        name: "The Measure of Our Reach",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest The Butcher's Blood."
    }, {
        number: 29,
        name: "Iroha",
        method: "Quest reward.",
        unlock: "Reward for the quest An Auspicious Encounter."
    }, {
        number: 30,
        name: "Darling Dalliances",
        method: "Available for purchase at the Gold Saucer.",
        unlock: "Bought from Kasumi at the Gold Saucer for 5,000 Gil."
    }, {
        number: 31,
        name: "Fragments of Forever",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 32,
        name: "Prelude - Long March Home",
        method: "Obtained upon completing the achievement \"The Leader of the Band VI.\"",
        unlock: "Add 200 unique music rolls to your orchestrion."
    }, {
        number: 33,
        name: "Wicked Winds Whisper",
        method: "Obtained from lockboxes in Eureka Anemos.",
        unlock: "Chance of dropping when opening Anemos lockboxes obtained from FATEs in Eureka Anemos."
    }, {
        number: 34,
        name: "No Quarter",
        method: "Obtained from lockboxes in Eureka Anemos.",
        unlock: "Chance of dropping when opening Anemos lockboxes obtained from FATEs in Eureka Anemos."
    }, {
        number: 35,
        name: "Victory or Death",
        method: "Buy in Doman Enclave",
        unlock: "Purchased from Junkmonger"
    }, {
        number: 36,
        name: "Far East of Eorzea",
        method: "Exchange",
        unlock: "Exchange in Crick"
    }, {
        number: 37,
        name: "Parting Ways",
        method: "Raid Reward",
        unlock: "Obtained from a piece of the Accursed Horn in Heaven-on-High"
    }, {
        number: 38,
        name: "Cornerstone of the New World - Astera",
        method: "Exchange",
        unlock: "Exchange in Kugane"
    }, {
        number: 39,
        name: "Ending",
        method: "Quest Reward",
        unlock: "Post Alphascape 4.0 Quest"
    }, {
        number: 40,
        name: "A Dream in Flight",
        method: "Quest Reward",
        unlock: "Post Alphascape 4.0 Quest"
    }, {
        number: 41,
        name: "Rise of Heroes (Chiptune Version)",
        method: "Exchange",
        unlock: "MGP Exchange at the Golden Saucer"
    }, {
        number: 42,
        name: "Game Theory",
        method: "Exchange",
        unlock: "MGP Exchange at the Golden Saucer"
    }, {
        number: 43,
        name: "Doman Distractions",
        method: "Achievement Reward",
        unlock: "Complete Achievement \"Tile and Error I\""
    }, {
        number: 44,
        name: "Gates of Paradise",
        method: "Duty Reward",
        unlock: "Acquired from The Forbidden Land, Eureka Hydatos"
    }, {
        number: 45,
        name: "Onslaught",
        method: "Duty Reward",
        unlock: "Acquired from The Forbidden Land, Eureka Hydatos"
    }, {
        number: 46,
        name: "Turmoil",
        method: "Duty Reward",
        unlock: "Acquired from The Baldesion Arsenal"
    }, {
        number: 47,
        name: "Shadowbringers",
        method: "Quest Reward",
        unlock: "Level 70 Main Quest The Syrcus Trench"
    }, {
        number: 48,
        name: "Tomorrow and Tomorrow",
        method: "Quest Reward",
        unlock: "Level 80 Main Quest Shadowbringers"
    }, {
        number: 49,
        name: "A Fierce Air Forceth",
        method: "Den",
        unlock: "Bought from the Wolves' Den Provisioner at Wolves' Den Pier for 10,000 Wolf Marks."
    }, {
        number: 50,
        name: "A Fine Air Forbiddeth",
        method: "Den",
        unlock: "Bought from the Wolves' Den Provisioner at Wolves' Den Pier for 10,000 Wolf Marks."
    }, {
        number: 51,
        name: "Nail of the Heavens",
        method: "Buy in Ul'dah",
        unlock: "Bought from Maudlin Latool Ja in Ul'dah for 500 Allied Seals (Requires Level 60 BLU)"
    }, {
        number: 52,
        name: "Imperium",
        method: "Buy in Ul'dah",
        unlock: "Bought from Maudlin Latool Ja in Ul'dah for 500 Allied Seals (Requires Level 60 BLU)"
    }, {
        number: 53,
        name: "Vamo alla Flamenco",
        method: "Exchange",
        unlock: "MGP Exchange at the Golden Saucer"
    }, {
        number: 54,
        name: "Bedlam's Brink",
        method: "Exchange",
        unlock: "350 Bicolor Gemstones from of The Tempest"
    }, {
        number: 55,
        name: "On Our Fates Alight",
        method: "Maps",
        unlock: "Drops from Dungeons of Lyhe Ghiah"
    }, {
        number: 56,
        name: "Stone and Steel",
        method: "Kupo of Fortune",
        unlock: "Prize from Kupo of Fortune in The Firmament."
    }, {
        number: 57,
        name: "The Mendicant's Relish",
        method: "Available for exchange in The Firmament",
        unlock: "Bought from Enie in The Firmament for 1,200 Skybuilders' Scrips"
    },
];
