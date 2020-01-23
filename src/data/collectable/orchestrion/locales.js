import { OrchestrionColumnConfig } from "./columnConfig";

export const OrchestrionLocales = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.locales`;

    return {
        name: "Locales",
    	storageKey,
        columns: OrchestrionColumnConfig,
        tasks: [{
            number: 1,
            name: "Wailers and Waterwheels",
            method: "Available for purchase in Gridania.",
            unlock: "Purchased from Maisenta in New Gridania for 5,000 Gil."
        }, {
            number: 2,
            name: "I Am the Sea",
            method: "Available for purchase in Limsa Lominsa.",
            unlock: "Purchased from Bango Zango in Limsa Lominsa Lower Decks for 5,000 Gil."
        }, {
            number: 3,
            name: "A New Hope",
            method: "Available for purchase in Ul'dah.",
            unlock: "Purchased from Roarich in Ul'dah - Steps of Nald for 5,000 Gil."
        }, {
            number: 4,
            name: "Solid",
            method: "Available for purchase in Ishgard.",
            unlock: "Purchased from Frine in The Pillars for 5,000 Gil."
        }, {
            number: 5,
            name: "The Waking Sands",
            method: "Available for purchase in Thanalan.",
            unlock: "Purchased from Haneko Burneko in The Waking Sands for 5,000 Gil."
        }, {
            number: 6,
            name: "Painted Foothills",
            method: "Materials for synthesis obtained from elite marks in the Dravanian Forelands.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Painted Foothills, dropped by the elite marks Lord of the Wyverns, Pylraster, and Senmurv upon death."
        }, {
            number: 7,
            name: "Lost in the Clouds",
            method: "Materials for synthesis obtained from elite marks in the Sea of Clouds.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Lost in the Clouds, dropped by the elite marks Bird of Paradise, Enkelados, and Sisiutl upon death."
        }, {
            number: 8,
            name: "Another Round",
            method: "Materials for synthesis available for trade in Mor Dhona.",
            unlock: "Crafted by Level 50 Alchemist with Faded Copy of Another Round, purchased from Auriana in Mor Dhona for 1,000 Allagan Tomestones of Poetics."
        }, {
            number: 9,
            name: "Four-sided Circle",
            method: "Available for MGP exchange at the Gold Saucer.",
            unlock: "Purchased from Gold Saucer Attendant <Prize Claim> for 10,000 MGP."
        }, {
            number: 10,
            name: "Sport of Kings",
            method: "Available for MGP exchange at the Gold Saucer.",
            unlock: "Purchased from Gold Saucer Attendant <Prize Claim> for 15,000 MGP."
        }, {
            number: 11,
            name: "A Sailor Never Sleeps",
            method: "Available for purchase in Limsa Lominsa.",
            unlock: "Purchased from Bango Zango in Limsa Lominsa Lower Decks for 5,000 Gil."
        }, {
            number: 12,
            name: "Dance of the Fireflies",
            method: "Available for purchase in Gridania.",
            unlock: "Purchased from Maisenta in New Gridania for 5,000 Gil."
        }, {
            number: 13,
            name: "Sultana Dreaming",
            method: "Available for purchase in Ul'dah.",
            unlock: "Purchased from Roarich in Ul'dah - Steps of Nald for 5,000 Gil."
        }, {
            number: 14,
            name: "Nobility Obliges",
            method: "Available for purchase in Ishgard.",
            unlock: "Purchased from Frine in The Pillars for 5,000 Gil."
        }, {
            number: 15,
            name: "The Mushroomery",
            method: "Available for purchase at Matoya's Cave.",
            unlock: "Purchased from the Junkmonger in Matoya's Cave for 5,000 Gil."
        }, {
            number: 16,
            name: "Shelter",
            method: "Available for purchase in Tailfeather.",
            unlock: "Purchased from the Traveling Merchant in Tailfeather for 5,000 Gil."
        }, {
            number: 17,
            name: "Against the Wind",
            method: "Materials for synthesis obtained from elite marks in the Coerthas western highlands.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Against the Wind, dropped from the elite marks Kaiser Behemoth, Lyuba, and Mirka upon death."
        }, {
            number: 18,
            name: "Landlords",
            method: "Materials for synthesis obtained from elite marks in the Churning Mists.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Landlords, dropped from the elite marks Agathos, Bune, and Gandarewa upon death."
        }, {
            number: 19,
            name: "Missing Pages",
            method: "Materials for synthesis obtained from elite marks in the Dravanian hinterlands.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Missing Pages, dropped from the elite marks Slipkinx Steeljoints, Stolas, and The Pale Rider upon death."
        }, {
            number: 20,
            name: "On Westerly Winds",
            method: "Available for purchase in Limsa Lominsa.",
            unlock: "Purchased from Bango Zango in Limsa Lominsa Lower Decks for 5,000 Gil."
        }, {
            number: 21,
            name: "Serenity",
            method: "Available for purchase in Gridania.",
            unlock: "Purchased from Maisenta in New Gridania for 5,000 Gil."
        }, {
            number: 22,
            name: "To the Sun",
            method: "Available for purchase in Ul'dah.",
            unlock: "Purchased from Roarich in Ul'dah Steps of Nald for 5,000 Gil."
        }, {
            number: 23,
            name: "On Windy Meadows",
            method: "Obtained in the Aquapolis.",
            unlock: "Teleportation ward for The Aquapolis randomly spawns after the completion of a Timeworn Dragonskin Map."
        }, {
            number: 24,
            name: "Whisper of the Land",
            method: "Obtained in the Aquapolis.",
            unlock: "Teleportation ward for The Aquapolis randomly spawns after the completion of a Timeworn Dragonskin Map."
        }, {
            number: 25,
            name: "Twilight over Thanalan",
            method: "Obtained in the Aquapolis.",
            unlock: "Teleportation ward for The Aquapolis randomly spawns after the completion of a Timeworn Dragonskin Map."
        }, {
            number: 26,
            name: "Unspoken",
            method: "Obtained in the Aquapolis.",
            unlock: "Teleportation ward for The Aquapolis randomly spawns after the completion of a Timeworn Dragonskin Map."
        }, {
            number: 27,
            name: "Nobility Sleeps",
            method: "Available for purchase in Ishgard.",
            unlock: "Purchased from Frine in The Pillars for 5,000 Gil."
        }, {
            number: 28,
            name: "Night in the Brume",
            method: "Available for purchase in Ishgard.",
            unlock: "Purchased from Frine in The Pillars for 5,000 Gil."
        }, {
            number: 29,
            name: "Close to the Heavens",
            method: "Materials for synthesis obtained from elite marks in the Sea of Clouds.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Lost in the Clouds, dropped by the elite marks Bird of Paradise, Enkelados, and Sisiutl upon death."
        }, {
            number: 30,
            name: "Smoulder",
            method: "Available for steel Amalj'ok exchange in the Ring of Ash.",
            unlock: "Purchased from the Amalj'aa Vendor in Southern Thanalan for 3 Steel Amalj'ok."
        }, {
            number: 31,
            name: "Coming Home",
            method: "Available for Vanu whitebone exchange in Ok' Gundu Nakki.",
            unlock: "Purchased from Luna Vanu in the Sea of Clouds for 3 Vanu Whitebone."
        }, {
            number: 32,
            name: "Behind Closed Doors",
            method: "Available for purchase in Gridania, Ul'dah, and Limsa Lominsa.",
            unlock: "Purchased from Maisenta in New Gridania, Roarich in Ul'dah Steps of Nald, or Bango Zango in Limsa Lominsa Lower Decks for 5,000 Gil."
        }, {
            number: 33,
            name: "Reflections",
            method: "Available for Allagan tomestone exchange in Mor Dhona.",
            unlock: "Purchase from Auriana in Mor Dhona for 1000 Allagan Tomestones of Poetics."
        }, {
            number: 34,
            name: "Where the Heart Is",
            method: "Available for purchase in residential areas.",
            unlock: "Purchase from Housing Merchants."
        }, {
            number: 35,
            name: "Homestead",
            method: "Available for purchase in Idyllshire.",
            unlock: "Purchased from the Junkmonger in Idyllshire for 5,000 Gil."
        }, {
            number: 36,
            name: "Flibbertigibbet",
            method: "Available for sylphic goldleaf exchange in Little Solace.",
            unlock: "Purchased from the Sylphic Vendor at Little Solace in East Shroud for 3 Sylphic Goldleaves."
        }, {
            number: 37,
            name: "Piece of Mind",
            method: "Available for black copper gil exchange at Loth ast Vath.",
            unlock: "Purchased from the Vath Stickpeddler in The Dravanian Forelands for 3 Black Copper Gil."
        }, {
            number: 38,
            name: "Frontiers Within",
            method: "Available for Allagan tomestone exchange in Mor Dhona.",
            unlock: "Purchased from Auriana in Mor Dhona for 1,000 Allagan Tomestones of Poetics."
        }, {
            number: 39,
            name: "Fleeting Rays",
            method: "Available for purchase in Highbridge.",
            unlock: "Purchased from Chachamun in Eastern Thanalan for 5,000 Gil after the successful completion of the third FATE in the Attack on Highbridge FATE series, Attack on Highbridge: Act II."
        }, {
            number: 40,
            name: "Saltswept",
            method: "Available for purchase in Aleport.",
            unlock: "Purchased from the Merchant & Mender in Aleport for 5,000 Gil."
        }, {
            number: 41,
            name: "Thicker than a Knife's Blade",
            method: "Available for Centurio Seal exchange at the Forgotten Knight.",
            unlock: "Purchased from Ardolain in Foundation for 300 Centurio Seals."
        }, {
            number: 42,
            name: "Skylords",
            method: "Materials for synthesis obtained from elite marks in the Churning Mists.",
            unlock: "Crafted - ALC Lv60 - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Mythrite Ink, 1x Faded Copy of Landlords (drops from Hunts in Churning Mists)."
        }, {
            number: 43,
            name: "The Silent Regard of Stars",
            method: "Materials for synthesis obtained from elite marks in the Dravanian hinterlands.",
            unlock: "Crafted - ALC Lv60 - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Mythrite Ink, 1x Faded Copy of Missing Pages (drops from Hunts in Dravanian Hinterlands)."
        }, {
            number: 44,
            name: "Beyond the Wall",
            method: "Obtained from the FATE \"The Evil Seed.\"",
            unlock: "Drops from the FATE The Evil Seed upon completion."
        }, {
            number: 45,
            name: "Liquid Flame",
            method: "Obtained from the FATE \"Never Say Daimyo.\"",
            unlock: "Drops from the FATE Never Say Daimyo upon completion."
        }, {
            number: 46,
            name: "Drowning in the Horizon",
            method: "Available for Centurio Seal exchange at Rhalgr's Reach and Kugane.",
            unlock: "Purchased for 300 Centurio Seals in Kugane."
        }, {
            number: 47,
            name: "The Edge",
            method: "Available for purchase at Wineport.",
            unlock: "Purchased in Wineport in Eastern La Noscea."
        }, {
            number: 48,
            name: "Navigator's Glory - The Theme of Limsa Lominsa",
            method: "Obtained in the Lost Canals of Uznair or the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Lost Canals of Uznair randomly spawns after the completion of a Timeworn Gazelleskin Map, while the teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 49,
            name: "Born of the Boughs - The Theme of Gridania",
            method: "Obtained in the Lost Canals of Uznair or the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Lost Canals of Uznair randomly spawns after the completion of a Timeworn Gazelleskin Map, while the teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 50,
            name: "The Twin Faces of Fate - The Theme of Ul'dah",
            method: "Obtained in the Lost Canals of Uznair or the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Lost Canals of Uznair randomly spawns after the completion of a Timeworn Gazelleskin Map, while the teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 51,
            name: "The Measure of Our Reach",
            method: "Main scenario quest reward.",
            unlock: "Reward for the quest The Butcher's Blood."
        }, {
            number: 52,
            name: "The Measure of His Reach",
            method: "Main scenario quest reward.",
            unlock: "Reward for the quest A Blissful Arrival."
        }, {
            number: 53,
            name: "Impact",
            method: "Available for exchange in Rhalgr's Reach.",
            unlock: "Bought from Enna in Rhalgr's Reach for 1,600 Tomestones of Creation."
        }, {
            number: 54,
            name: "Crimson Sunrise",
            method: "Obtained in the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 55,
            name: "On High",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 400 Yellow Crafters' Scrips."
        }, {
            number: 56,
            name: "Songs of Salt and Suffering",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 400 Yellow Gatherers' Scrips."
        }, {
            number: 57,
            name: "A Father's Pride",
            method: "Obtained in the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 58,
            name: "Indomitable",
            method: "Available for Kojin sango exchange in Tamamizu.",
            unlock: "Bought from the Kojin Beast Tribe for 3 Kojin sango at Rank 6."
        }, {
            number: 59,
            name: "Crimson Sunset",
            method: "Obtained in the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 60,
            name: "Westward Tide",
            method: "Available for exchange in Rhalgr's Reach.",
            unlock: "Bought from Enna in Rhalgr's Reach for 1,600 Tomestones of Creation."
        }, {
            number: 61,
            name: "Mother's Pride",
            method: "Obtained in the Hidden Canals of Uznair.",
            unlock: "Teleportation ward for the Hidden Canals of Uznair spawns after using the action Dig near the location shown on a Timeworn Thief's Map."
        }, {
            number: 62,
            name: "He Rises Above",
            method: "Available for exchange in Rhalgr's Reach.",
            unlock: "Bought from Enna in Rhalgr's Reach for 1,600 Tomestones of Creation."
        }, {
            number: 63,
            name: "Keepers of the Lock",
            method: "Available for Ananta dreamstaff exchange in Castrum Velodyna.",
            unlock: "Bought from the Ananta Beast Tribe for 3 Ananta dreamstaves at Rank 6."
        }, {
            number: 64,
            name: "Black and White",
            method: "Dropped by Lyuba or Mirka in Coerthas Western Highlands",
            unlock: "Crafted by Level 60 (Master Alchemist III) with Faded Copy of Against the Wind."
        }, {
            number: 65,
            name: "Seven Hundred Seventy-Seven Whiskers",
            method: "Avalailable for exchange in Dhoro Iloh.",
            unlock: "Bought from Gyosho for 3 Namazu Koban."
        }, {
            number: 66,
            name: "Cradle",
            method: "Buy in Doman Enclave",
            unlock: "Purchased from Junkmonger"
        }, {
            number: 67,
            name: "Afterglow",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 200 Yellow Crafters' Scrips."
        }, {
            number: 68,
            name: "Hope Forgotten",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 200 Yellow Gatherers' Scrips."
        }, {
            number: 69,
            name: "The Stone Remembers",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 200 Yellow Gatherers' Scrips."
        }, {
            number: 70,
            name: "Old Wounds",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 200 Yellow Gatherers' Scrips."
        }, {
            number: 71,
            name: "Harmony",
            method: "Available for exchange.",
            unlock: "Exchanged at a Scrip Exchange for 200 Yellow Crafters' Scrips."
        }, {
            number: 72,
            name: "Thw Dark Which Illuminates the World",
            method: "Available for exchange in the Crystarium.",
            unlock: "Bought from Gramsol in the Crystarium for 350 Bicolor Gemstones."
        }, {
            number: 73,
            name: "Indulgence",
            method: "Available for exchange in Eulmore.",
            unlock: "Bought from Pedronille in Eulmore for 350 Bicolor Gemstones."
        }, {
            number: 74,
            name: "The Source",
            method: "Available for exchange in Lakeland.",
            unlock: "Bought from Siulmet in Lakeland for 350 Bicolor Gemstones."
        }, {
            number: 75,
            name: "A World Divided",
            method: "Available for exchange in Kholusia.",
            unlock: "Bought from Zumutt in Kholusia for 350 Bicolor Gemstones."
        }, {
            number: 76,
            name: "Sands of Amber",
            method: "Available for exchange in Amh Araeng.",
            unlock: "Bought from Halden in Amh Araeng for 350 Bicolor Gemstones."
        }, {
            number: 77,
            name: "Fierce and Free",
            method: "Available for exchange in Il Mheg.",
            unlock: "Bought from Sul Lad in Il Mheg for 350 Bicolor Gemstones."
        }, {
            number: 78,
            name: "Civilizations",
            method: "Available for exchange in Rak'tika.",
            unlock: "Bought from Nacille in The Rak'tika Greatwood for 350 Bicolor Gemstones."
        }, {
            number: 79,
            name: "Full Fathom Five",
            method: "Available for exchange in the Tempest.",
            unlock: "Bought from Goushs Ooan in the Tempest for 350 Bicolor Gemstones."
        }, {
            number: 80,
            name: "Knowledge Never Sleeps",
            method: "Available for exchange in the Crystarium.",
            unlock: "Bought from Gramsol in the Crystarium for 350 Bicolor Gemstones."
        }, {
            number: 81,
            name: "Masquerade",
            method: "Available for exchange in Eulmore.",
            unlock: "Bought from Pedronille in Eulmore for 350 Bicolor Gemstones."
        }, {
            number: 82,
            name: "Pain in Pleasure",
            method: "Main scenario quest reward.",
            unlock: "Reward for the quest Moving Forward."
        }, {
            number: 83,
            name: "Unchanging, Everchanging",
            method: "Available for exchange in Lakeland.",
            unlock: "Bought from Siulmet in Lakeland for 350 Bicolor Gemstones."
        }, {
            number: 84,
            name: "The Quick Way",
            method: "Available for exchange in Kholusia.",
            unlock: "Bought from Zumutt in Kholusia for 350 Bicolor Gemstones."
        }, {
            number: 85,
            name: "Sands of Blood",
            method: "Available for exchange in Amh Araeng.",
            unlock: "Bought from Halden in Amh Araeng for 350 Bicolor Gemstones."
        }, {
            number: 86,
            name: "The Faerie Ring",
            method: "Available for exchange in Il Mheg.",
            unlock: "Bought from Sul Lad in Il Mheg for 350 Bicolor Gemstones."
        }, {
            number: 87,
            name: "A Hopeless Race",
            method: "Available for exchange in the Rak'tika Greatwood.",
            unlock: "Bought from Nacille in The Rak'tika Greatwood for 350 Bicolor Gemstones."
        }, {
            number: 88,
            name: "Neath Dark Waters",
            method: "Available for exchange in the Tempest.",
            unlock: "Bought from Goushs Ooan in the Tempest for 350 Bicolor Gemstones."
        }, {
            number: 89,
            name: "The Garden's Gates",
            method: "Available for exchange in Il Mheg.",
            unlock: "Bought from Jul Oul in Il Mheg for 6 Fae Fancy."
        }, {
            number: 90,
            name: "Safety In Numbers",
            method: "Available for exchange in The Firmament",
            unlock: "Bought from Enie in The Firmament for 1,200 Skybuilders' Scrips"
        }]
    };
};
