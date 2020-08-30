import { DataGroup } from "../DataGroup";

export const Collectables_Barding = function(parent) {
    return new DataGroup("Barding", parent).initializeTasks(tasks, [
        { header: 'Barding', key: 'name', },
        { header: 'Method', key: 'method' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);
};

const tasks = [

    {
        name: "Abigail Barding",
        method: "From Gold and Silver Trimmed Sacks found in Palace of the Dead.",
        patch: "3.4",
    },
    {
        name: "Ala Mhigan Barding",
        method: "Acquired through the \"Rattle and Humbaba\" FATE in The Peaks.",
        patch: "4.0",
    },
    {
        name: "Angelic Barding",
        method: "Purchased from the Mog Station for EUR 7 or $10.",
        patch: "3.5",
    },
    {
        name: "Barding of Light",
        method: "3x Achievement Certificate from Jonathas in Apkallu Falls.",
        patch: "2.2",
    },
    {
        name: "Behemoth Barding",
        method: "Acquired through the purchase of Final Fantasy XIV A Realm Reborn Collector's Edition.",
        patch: "2.0",
    },
    {
        name: "Black Mage Barding",
        method: "3x Achievement Certificate from Jonathas in Apkallu Falls.",
        patch: "2.0",
    },
    {
        name: "Blissful Barding",
        method: "Can be crafted by Goldsmith Recipe 70★",
        patch: "4.0",
    },
    {
        name: "Butlery Barding",
        method: "Purchased from the Mog Station for EUR 7 or $10.",
        patch: "2.0",
    },
    {
        name: "Byakko Barding",
        method: "Can be crafted by Goldsmith Recipe 70★★★",
        patch: "4.2",
    },
    {
        name: "Chocobo Raincoat",
        method: "800 Yellow Gatherers' Scrips",
        patch: "4.2",
    },
    {
        name: "Dancer Barding",
        method: "Purchased with 350x Bicolour Gemstone (Eulmore)",
        patch: "5.0",
    },
    {
        name: "Deepshadow Barding",
        method: "Purchased with 350x Bicolour Gemstone (Lakeland)",
        patch: "5.0",
    },
    {
        name: "Demonic Barding",
        method: "Purchased from the Mog Station for EUR 7 or $10.",
        patch: "3.5",
    },
    {
        name: "Dragoon Barding",
        method: "Obtain a level 10 Attacker Chocobo Companion.",
        patch: "2.0",
    },
    {
        name: "Eerie Barding",
        method: "Purchased from the Mog Station for EUR 4.90 or $7.",
        patch: "2.38",
    },
    {
        name: "Egg Harness",
        method: "Acquired through 2014 Hatching-tide seasonal event.",
        patch: "2.2",
    },
    {
        name: "Egg Hunter Barding",
        method: "Purchased from the Mog Station for EUR 4.90 or $7.",
        patch: "3.2",
    },
    {
        name: "Expanse Barding",
        method: "Can be crafted by Armorer Recipe 60★",
        patch: "3.0",
    },
    {
        name: "Far East Barding",
        method: "Purchased from the Mog Station for EUR 7 or $10.",
        patch: "2.0",
    },
    {
        name: "Flyer Shaffron",
        method: "Complete \"I Believe I Can Fly\" Quest",
        patch: "3.0",
    },
    {
        name: "Gambler Barding",
        method: "Purchase from Gold Saucer Attendant for 20,000 MGP.",
        patch: "2.51",
    },
    {
        name: "Gridanian Barding",
        method: "Purchased from The Order of the Twin Adder vendor for 6000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Gridanian Crested Barding",
        method: "Purchased from The Order of the Twin Adder vendor for 8000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Gridanian Half Barding",
        method: "Purchased from The Order of the Twin Adder vendor for 4000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Gridanian Saddle",
        method: "Order of the Twin Adder Default Barding",
        patch: "2.0",
    },
    {
        name: "Hades Barding",
        method: "Can be crafted by Armorer Recipe 80★★",
        patch: "5.1",
    },
    {
        name: "Highland Barding",
        method: "Can be crafted by a Level 40 Leatherworker Recipe",
        patch: "3.0",
    },
    {
        name: "Hingan Barding",
        method: "Obtained from Eschina in Rhalgr's Reach for 4 Veteran Clan Mark Logs.",
        patch: "4.0",
    },
    {
        name: "Hive Barding",
        method: "Can be crafted by Armorer Recipe 60★",
        patch: "3.0",
    },
    {
        name: "Horde Barding",
        method: "Can be crafted by Leatherworker Recipe 60★★★",
        patch: "3.3",
    },
    {
        name: "Ice Barding",
        method: "Can be crafted by Leatherworker Recipe 50★★★★",
        patch: "2.4",
    },
    {
        name: "Innocence Barding",
        method: "Level 80★ Armorer recipe.",
        patch: "5.0",
    },
    {
        name: "Ishgardian Barding",
        method: "Purchased with 350 Centurio Seals, obtained from Clan Hunts from Ardolain in Foundation",
        patch: "3.0",
    },
    {
        name: "Ishgardian Half Barding",
        method: "Obtained from Level 56 FATE Vedrfolnir Devoteth in The Churning Mists (11,36).",
        patch: "3.0",
    },
    {
        name: "Ixion Barding",
        method: "5 Ixion Horns, acquired from A Horse Outside FATE, to Eschina in Rhalgr's Reach",
        patch: "4.1",
    },
    {
        name: "Levin Barding",
        method: "Can be crafted by Leatherworker Recipe 50★★★",
        patch: "2.3",
    },
    {
        name: "Lominsan Barding",
        method: "Purchased from The Maelstrom vendor for 6000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Lominsan Crested Barding",
        method: "Purchased from The Maelstrom vendor for 8000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Lominsan Half Barding",
        method: "Purchased from The Maelstrom vendor for 4000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Lominsan Saddle",
        method: "Maelstrom Default Barding",
        patch: "2.0",
    },
    {
        name: "Lunar Barding",
        method: "Can be crafted by Weaver Recipe 70★★★",
        patch: "4.3",
    },
    {
        name: "Machinist Barding",
        method: "Purchased from Enie in The Firmament for 1,200 Skybuilders' Scrips",
        patch: "5.21",
    },
    {
        name: "Mandervillian Barding",
        method: "Purchased from Gold Saucer Attendant for 150,000 MGP.",
        patch: "3.4",
    },
    {
        name: "Nezha Barding",
        method: "Purchased from the Mog Station for EUR 7 or $10.",
        patch: "4.2",
    },
    {
        name: "Noble Barding",
        method: "The \"Do you even \Pose?\" Forum Hairstyle Design Contest",
        patch: "3.0",
    },
    {
        name: "Oriental Barding",
        method: "Unknown",
        patch: "4.0",
    },
    {
        name: "Orthodox Barding",
        method: "Can be crafted by a level 56 Weaver Recipe",
        patch: "3.0",
    },
    {
        name: "Paladin Barding",
        method: "Obtain a level 10 Defender Chocobo Companion.",
        patch: "2.0",
    },
    {
        name: "Paramour Barding",
        method: "Acquired after completing the quests during the Valentione's Day (2015).",
        patch: "2.5",
    },
    {
        name: "Plumed Barding",
        method: "Obtain the Breaking Bo achievement",
        patch: "2.3",
    },
    {
        name: "Race Barding",
        method: "Acquired from the achievement Ride to the Challenge I",
        patch: "3.25",
    },
    {
        name: "Red Mage Barding",
        method: "Aquired from duty \"The Forbidden Land, Eureka Anemos\"",
        patch: "4.25",
    },
    {
        name: "Reveler's Barding",
        method: "Can be crafted by Armorer Recipe 70★",
        patch: "4.0",
    },
    {
        name: "Round Table Barding",
        method: "15 Heavens' Ward Helm Fragments traded at Rowena's Center for Cultural Promotion",
        patch: "3.1",
    },
    {
        name: "Ruby Barding",
        method: "Can be crafted by Armorer Recipe 80★★",
        patch: "5.2",
    },
    {
        name: "Saintly Barding",
        method: "Acquired through Starlight Celebration (2019) Seasonal Event.",
        patch: "5.1",
    },
    {
        name: "Samurai Barding",
        method: "Aquired from The Forbidden Land, Eureka Pyros",
        patch: "4.45",
    },
    {
        name: "Seiryu Barding",
        method: "Can be crafted by Armorer Recipe 70★★★★",
        patch: "4.45",
    },
    {
        name: "Sephirotic Barding",
        method: "Can be crafted by Leatherworker Recipe 60★★",
        patch: "3.2",
    },
    {
        name: "Shinryu Barding",
        method: "Can be crafted by Armorer Recipe 70★★",
        patch: "4.1",
    },
    {
        name: "Sleipnir Barding",
        method: "5 Odin's Mantle, from completing the Odin FATE, to Aelina in Mor Dhona (22,6).",
        patch: "2.0",
    },
    {
        name: "Sophic Barding",
        method: "Level 60★★★★ Goldsmith recipe.",
        patch: "3.4",
    },
    {
        name: "Sovereign Barding",
        method: "Awarded after receiving 300 player commendations.",
        patch: "2.1",
    },
    {
        name: "Starlight Barding",
        method: "Acquired through Starlight Celebration (2013) Seasonal Event.",
        patch: "2.1",
    },
    {
        name: "Suzaku Barding",
        method: "Can be crafted by Armorer Recipe 70★★★★",
        patch: "4.4",
    },
    {
        name: "Tidal Barding",
        method: "Can be crafted from recipe by a level 50★★★ Armorer",
        patch: "2.2",
    },
    {
        name: "Titania Barding",
        method: "Level 80★ Armorer recipe.",
        patch: "5.0",
    },
    {
        name: "True Barding of Light",
        method: "Level 80★★★ Armorer recipe.",
        patch: "5.3",
    },
    {
        name: "Ul'dahn Barding",
        method: "Purchased from The Immortal Flames vendor for 6000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Ul'dahn Saddle",
        method: "Immortal Flames Default Barding",
        patch: "2.0",
    },
    {
        name: "Ul'dahn Crested Barding",
        method: "Purchased from The Immortal Flames vendor for 8000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "Ul'dahn Half Barding",
        method: "Purchased from The Immortal Flames vendor for 4000 Company Seals.",
        patch: "2.0",
    },
    {
        name: "White Mage Barding",
        method: "Achieve rank 10 with your chocobo with all 10 skill points in your healer skill tree.",
        patch: "2.0",
    },
    {
        name: "Wild Rose Barding",
        method: "3x Achievement Certificate from Jonathas in Apkallu Falls.",
        patch: "3.07",
    },
    {
        name: "Yojimbo Barding",
        method: "Drops from Kugane Ohashi Trial",
        patch: "4.5",
    },
    {
        name: "Zurvanite Barding",
        method: "Crafted  by Level 60★★★★ Armorer",
        patch: "3.5",
    },

];
