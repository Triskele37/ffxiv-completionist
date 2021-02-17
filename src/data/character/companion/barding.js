import { DataGroup } from "../../DataGroup";

export const Character_Companion_Barding = function(parent) {
    const data = new DataGroup("Barding", parent);
    data.name_fr = "Bardes";

    data.initializeTasks(tasks, [
        { header: 'Barding', key: 'name', },
        { header: 'Category', key: 'category', filterable: true },
        { header: 'Source', key: 'source' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);

    return data;
};

const tasks = [
    {
        "name_en": "Abigail Barding",
        "category": "Deep Dungeon",
        "source": "The Palace of the Dead",
        "patch": "3.4"
    },
    {
        "name_en": "Ala Mhigan Barding",
        "category": "FATE",
        "source": "Rattle and Humbaba",
        "patch": "4.0"
    },
    {
        "name_en": "Angelic Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.5"
    },
    {
        "name_en": "Barding of Light",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 3 Achievement Certificates",
        "patch": "2.2"
    },
    {
        "name_en": "Behemoth Barding",
        "category": "Premium",
        "source": "A Realm Reborn Collector's Edition",
        "patch": "2.0"
    },
    {
        "name_en": "Black Mage Barding",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 3 Achievement Certificates",
        "patch": "2.0"
    },
    {
        "name_en": "Blissful Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Goldsmith / Heaven-on-High",
        "patch": "4.0"
    },
    {
        "name_en": "Butlery Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.0"
    },
    {
        "name_en": "Byakko Barding",
        "category": "Crafting",
        "source": "Crafted by Goldsmith",
        "patch": "4.2"
    },
    {
        "name_en": "Chocobo Raincoat",
        "category": "Purchase",
        "source": "800 Yellow Gatherers' Scrips",
        "patch": "4.2"
    },
    {
        "name_en": "Dancer Barding",
        "category": "Purchase",
        "source": "350 Bicolor Gemstones (Eulmore)",
        "patch": "5.0"
    },
    {
        "name_en": "Deepshadow Barding",
        "category": "Purchase",
        "source": "350 Bicolor Gemstones (Lakeland)",
        "patch": "5.0"
    },
    {
        "name_en": "Demonic Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "3.5"
    },
    {
        "name_en": "Dragoon Barding",
        "category": "Other",
        "source": "Chocobo Ability - Choco Blast",
        "patch": "2.0"
    },
    {
        "name_en": "Eerie Barding",
        "category": "Event / Premium",
        "source": "All Saints' Wake (2014) / Final Fantasy XIV Online Store",
        "patch": "2.38"
    },
    {
        "name_en": "Egg Harness",
        "category": "Event",
        "source": "Hatching-tide (2014)",
        "patch": "2.2"
    },
    {
        "name_en": "Egg Hunter Barding",
        "category": "Event / Premium",
        "source": "Final Fantasy XIV Online Store / Hatching-tide (2016)",
        "patch": "3.2"
    },
    {
        "name_en": "Emerald Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.4"
    },
    {
        "name_en": "Expanse Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Armorer / Heaven-on-High",
        "patch": "3.0"
    },
    {
        "name_en": "Far Eastern Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "2.0"
    },
    {
        "name_en": "Flyer Shaffron",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 3 Achievement Certificates",
        "patch": "3.0"
    },
    {
        "name_en": "Gambler Barding",
        "category": "Purchase",
        "source": "20,000 MGP",
        "patch": "2.51"
    },
    {
        "name_en": "Gridanian Barding",
        "category": "Purchase",
        "source": "6,000 Serpent Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Gridanian Crested Barding",
        "category": "Purchase",
        "source": "8,000 Serpent Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Gridanian Half Barding",
        "category": "Purchase",
        "source": "4,000 Serpent Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Gridanian Saddle",
        "category": "Other",
        "source": "Order of the Twin Adder Grand Company",
        "patch": "2.0"
    },
    {
        "name_en": "Hades Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.1"
    },
    {
        "name_en": "Highland Barding",
        "category": "Crafting",
        "source": "Crafted by Leatherworker",
        "patch": "3.0"
    },
    {
        "name_en": "Hingan Barding",
        "category": "Purchase",
        "source": "Eschina - Rhalgr's Reach - 4 Veteran's Clan Mark Logs",
        "patch": "4.0"
    },
    {
        "name_en": "Hive Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Armorer / Heaven-on-High",
        "patch": "3.0"
    },
    {
        "name_en": "Horde Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Leatherworker / Heaven-on-High",
        "patch": "3.3"
    },
    {
        "name_en": "Ice Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Leatherworker / Heaven-on-High",
        "patch": "2.4"
    },
    {
        "name_en": "Innocence Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.0"
    },
    {
        "name_en": "Ishgardian Barding",
        "category": "Purchase",
        "source": "350 Centurio Seals",
        "patch": "3.0"
    },
    {
        "name_en": "Ishgardian Half Barding",
        "category": "FATE",
        "source": "Vedrfolnir Devoteth",
        "patch": "3.0"
    },
    {
        "name_en": "Ixion Barding",
        "category": "Purchase",
        "source": "Eschina - Rhalgr's Reach - 5 Ixion Horns (FATE: A Horse Outside)",
        "patch": "4.1"
    },
    {
        "name_en": "Levin Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Leatherworker / Heaven-on-High",
        "patch": "2.3"
    },
    {
        "name_en": "Lominsan Barding",
        "category": "Purchase",
        "source": "6,000 Storm Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Lominsan Crested Barding",
        "category": "Purchase",
        "source": "8,000 Storm Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Lominsan Half Barding",
        "category": "Purchase",
        "source": "4,000 Storm Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Lominsan Saddle",
        "category": "Other",
        "source": "Maelstrom Grand Company",
        "patch": "2.0"
    },
    {
        "name_en": "Lunar Barding",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "4.3"
    },
    {
        "name_en": "Machinist Barding",
        "category": "Purchase",
        "source": "1,200 Skybuilders' Scrips",
        "patch": "5.21"
    },
    {
        "name_en": "Mandervillian Barding",
        "category": "Purchase",
        "source": "150,000 MGP",
        "patch": "3.4"
    },
    {
        "name_en": "Nezha Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store",
        "patch": "4.2"
    },
    {
        "name_en": "Noble Barding",
        "category": "Limited",
        "source": "Community Events Reward",
        "patch": "3.0"
    },
    {
        "name_en": "Oriental Barding",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store (China)",
        "patch": "4.0"
    },
    {
        "name_en": "Orthodox Barding",
        "category": "Crafting",
        "source": "Crafted by Weaver",
        "patch": "3.0"
    },
    {
        "name_en": "Paladin Barding",
        "category": "Other",
        "source": "Chocobo Ability - Choco Strike",
        "patch": "2.0"
    },
    {
        "name_en": "Paramour Barding",
        "category": "Event",
        "source": "Valentione's Day (2015)",
        "patch": "2.5"
    },
    {
        "name_en": "Plumed Barding",
        "category": "Achievement",
        "source": "Breaking Bo",
        "patch": "2.3"
    },
    {
        "name_en": "Queen's Guard Barding",
        "category": "Bozja",
        "source": "Delubrum Reginae",
        "patch": "5.45"
    },
    {
        "name_en": "Race Barding",
        "category": "Achievement",
        "source": "Ride to the Challenge I",
        "patch": "3.25"
    },
    {
        "name_en": "Red Mage Barding",
        "category": "Eureka",
        "source": "Anemos Lockbox",
        "patch": "4.25"
    },
    {
        "name_en": "Reveler's Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Armorer / Heaven-on-High",
        "patch": "4.0"
    },
    {
        "name_en": "Round Table Barding",
        "category": "Purchase",
        "source": "Bertana - Idyllshire - 15 Heavens' Ward Helm Fragments",
        "patch": "3.1"
    },
    {
        "name_en": "Ruby Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.2"
    },
    {
        "name_en": "Saintly Barding",
        "category": "Event",
        "source": "Starlight Festival (2019)",
        "patch": "5.1"
    },
    {
        "name_en": "Samurai Barding",
        "category": "Eureka",
        "source": "Heat-warped Lockbox - Eureka Pyros",
        "patch": "4.45"
    },
    {
        "name_en": "Seiryu Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "4.45"
    },
    {
        "name_en": "Sephirotic Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Leatherworker / Heaven-on-High",
        "patch": "3.2"
    },
    {
        "name_en": "Shinryu Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "4.1"
    },
    {
        "name_en": "Sleipnir Barding",
        "category": "Purchase",
        "source": "Aelina - Mor Dhona - 5 Odin's Mantles (FATE: Steel Reign)",
        "patch": "2.0"
    },
    {
        "name_en": "Sophic Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Goldsmith / Heaven-on-High",
        "patch": "3.4"
    },
    {
        "name_en": "Sovereign Barding",
        "category": "Achievement",
        "source": "Leaving a Good Impression IV",
        "patch": "2.1"
    },
    {
        "name_en": "Starlight Barding",
        "category": "Event",
        "source": "Starlight Celebration (2013)",
        "patch": "2.1"
    },
    {
        "name_en": "Suzaku Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "4.4"
    },
    {
        "name_en": "Tidal Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Armorer / Heaven-on-High",
        "patch": "2.2"
    },
    {
        "name_en": "Titania Barding",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.0"
    },
    {
        "name_en": "True Barding of Light",
        "category": "Crafting",
        "source": "Crafted by Armorer",
        "patch": "5.3"
    },
    {
        "name_en": "Ul'dahn Barding",
        "category": "Purchase",
        "source": "6,000 Flame Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Ul'dahn Crested Barding",
        "category": "Purchase",
        "source": "8,000 Flame Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Ul'dahn Half Barding",
        "category": "Purchase",
        "source": "4,000 Flame Seals",
        "patch": "2.0"
    },
    {
        "name_en": "Ul'dahn Saddle",
        "category": "Other",
        "source": "Immortal Flames Grand Company",
        "patch": "2.0"
    },
    {
        "name_en": "White Mage Barding",
        "category": "Other",
        "source": "Chocobo Ability - Choco Medica",
        "patch": "2.0"
    },
    {
        "name_en": "Wild Rose Barding",
        "category": "Purchase",
        "source": "Jonathas - Old Gridania - 3 Achievement Certificates",
        "patch": "3.07"
    },
    {
        "name_en": "Yojimbo Barding",
        "category": "Trial",
        "source": "Kugane Ohashi",
        "patch": "4.5"
    },
    {
        "name_en": "Zurvanite Barding",
        "category": "Crafting / Deep Dungeon",
        "source": "Crafted by Armorer / Heaven-on-High",
        "patch": "3.5"
    }
];
