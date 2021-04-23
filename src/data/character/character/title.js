import { DataGroup } from "../../DataGroup";

export const Character_Character_Title = function(parent) {
    const data = new DataGroup("Title", parent);

    data.columnConfig = [
        { header: "Title", key: "name", },
        { header: "Category", key: "category", filterable: true },
        { header: "Achievement", key: "achievement" },
        { header: "Patch", key: "patch", filterable: true }
    ];

    tasks.forEach((task) => {
        if(task.category === 'Legacy') task.defaultCompletion = "X";
    });

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "…The Insatiable",
        "category": "Items",
        "achievement": "Armed to the Teeth",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The True",
        "category": "Items",
        "achievement": "Raising the Curtana",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Coeurlfist…",
        "category": "Items",
        "achievement": "Enter the Coeurl",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Ironeater…",
        "category": "Items",
        "achievement": "Cleaving to Tradition",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Vengeful Lance",
        "category": "Items",
        "achievement": "Having a Gae Old Time",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Godsbow",
        "category": "Items",
        "achievement": "Hard to Miss",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The White",
        "category": "Items",
        "achievement": "Dressed to Heal",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Starcaller…",
        "category": "Items",
        "achievement": "Ohohohohoho!",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Exterminator",
        "category": "Battle",
        "achievement": "To Crush Your Enemies VI",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Notorious Monster Hunter…",
        "category": "Legacy",
        "achievement": "Notorious Monster Hunting",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Honest Gillionaire…",
        "category": "Items",
        "achievement": "Who Wants To Be A Gillionaire?",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Ruthless Gillionaire…",
        "category": "Legacy",
        "achievement": "Never Met A Corpse I Couldn't Rifle",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Warmonger…",
        "category": "Character",
        "achievement": "Mastering War I",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Archmage…",
        "category": "Character",
        "achievement": "Mastering Magic I",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Builder of the Realm",
        "category": "Character",
        "achievement": "Mastering The Hand I",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Provider of the Realm",
        "category": "Character",
        "achievement": "Mastering The Land I",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Saw",
        "category": "Crafting & Gathering",
        "achievement": "Going With The Grain: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Anvil",
        "category": "Crafting & Gathering",
        "achievement": "Working The Bellows: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Hammer",
        "category": "Crafting & Gathering",
        "achievement": "Pounding Out The Dents: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Leaf",
        "category": "Crafting & Gathering",
        "achievement": "Cutting The Carats: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Hide",
        "category": "Crafting & Gathering",
        "achievement": "Hiding In Plain Sight: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Needle",
        "category": "Crafting & Gathering",
        "achievement": "Threading The Needle: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Lead",
        "category": "Crafting & Gathering",
        "achievement": "Mixing It Up: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Ladle",
        "category": "Crafting & Gathering",
        "achievement": "Savoring The Realm: Artisan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Forestbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Desertbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Forestreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Desertreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Forestcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Desertcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Carrier of the Cauldron",
        "category": "Items",
        "achievement": "Materia Hysteria",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Assimilator",
        "category": "Items",
        "achievement": "Living In A Materia World",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Blood",
        "category": "Quests",
        "achievement": "Tales Of War",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Truth",
        "category": "Quests",
        "achievement": "Tales Of Magic",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Skill",
        "category": "Quests",
        "achievement": "Tales Of The Hand",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Bounty",
        "category": "Quests",
        "achievement": "Tales Of The Land",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Sidestepper…",
        "category": "Legacy",
        "achievement": "Sideways",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Lord Protector… / (♀) Lady Protector…",
        "category": "Quests",
        "achievement": "All The More Region To Leve VI",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Lord Creator… / (♀) Lady Creator…",
        "category": "Quests",
        "achievement": "Think Global, Quest Local VI",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Peacemaker…",
        "category": "Legacy",
        "achievement": "A Slave To Faction III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Last Resort",
        "category": "Quests",
        "achievement": "Serving A Greater Cause VI",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of La Noscea",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: La Noscea",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of the Shroud",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: Black Shroud",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of Thanalan",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: Thanalan",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of Eorzea",
        "category": "Legacy",
        "achievement": "Globetrotter",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of La Noscea",
        "category": "Legacy",
        "achievement": "La Noscea Got Served…and Protected",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of the Shroud",
        "category": "Legacy",
        "achievement": "The Black Shroud Got Served…and Protected",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of Thanalan",
        "category": "Legacy",
        "achievement": "Thanalan Got Served…and Protected",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of Eorzea",
        "category": "Legacy",
        "achievement": "Eorzea Got Served…and Protected",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Brother of the Broken Blade… / (♀) Sister of the Broken Blade…",
        "category": "Legacy",
        "achievement": "Love Thy Brother",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Warden's Wall",
        "category": "Legacy",
        "achievement": "Another Brick In The Shield Wall",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Bearer of the Horn…",
        "category": "Legacy",
        "achievement": "A Helping Horn",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Uncommitted",
        "category": "Legacy",
        "achievement": "Commitment Issues",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Professional",
        "category": "Quests",
        "achievement": "Career Opportunities",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Inquisitor…",
        "category": "Legacy",
        "achievement": "Patricide",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Divine Crusher…",
        "category": "Legacy",
        "achievement": "To Kill A Mocking Bird",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Stonesplitter…",
        "category": "Legacy",
        "achievement": "Pounding The Spike",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…A Kobold's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Aleport",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…An Ixal's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Hyrstmill",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…An Amalj'aa's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Golden Bazaar",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of Aleport",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of Hyrstmill",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of The Golden Bazaar",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of Aleport",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of Hyrstmill",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of The Golden Bazaar",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of Aleport",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of Hyrstmill",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of The Golden Bazaar",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Wild Thing…",
        "category": "Legacy",
        "achievement": "It's Reining Deer",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Winter Wyrm",
        "category": "Legacy",
        "achievement": "Get All The Things!",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Messenger of Love…",
        "category": "Legacy",
        "achievement": "Love Makes The World Go Round",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Royal Seneschal… / (♀) Princess for a Day…",
        "category": "Legacy",
        "achievement": "Royal Audience",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Dreamseeker…",
        "category": "Legacy",
        "achievement": "Seven Short Of A Dozen",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Cascadier…",
        "category": "Legacy",
        "achievement": "Cascadier For Life",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Crystal Bearer…",
        "category": "Legacy",
        "achievement": "Chock-full Of Elemental Goodness",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Stormlord… / (♀) Stormlady…",
        "category": "Grand Company",
        "achievement": "A Storm Of Seals III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Serpentlord… / (♀) Serpentlady…",
        "category": "Grand Company",
        "achievement": "A Snake In The Brass III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Flamelord… / (♀) Flamelady…",
        "category": "Grand Company",
        "achievement": "Burning A Hole In My Pocket III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Stormsworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Maelstrom III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Serpentsworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Twin Adder III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Flamesworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Immortal Flames III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Stormcarrier…",
        "category": "Grand Company",
        "achievement": "Feuling The Storm III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Serpentcarrier…",
        "category": "Grand Company",
        "achievement": "Feeding The Serpent III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Flamecarrier…",
        "category": "Grand Company",
        "achievement": "Fanning The Flames III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Stormbringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Maelstrom III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Serpentbringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Twin Adder III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Flamebringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Immortal Flames III",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Featherfoot…",
        "category": "Legacy",
        "achievement": "Eight Minutes Or Less Or Your Cargo's Free",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "A Bo's Best Friend…",
        "category": "Legacy",
        "achievement": "Handle With Care IV",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Lightning…",
        "category": "Legacy",
        "achievement": "Gone In Eight Minutes",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Cavalier…",
        "category": "Grand Company",
        "achievement": "Pimp Your Ride",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wanderer's Shadow",
        "category": "Legacy",
        "achievement": "Been There, Done That",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…Green Eyes",
        "category": "Items",
        "achievement": "Green Eyes",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Strategist",
        "category": "Items",
        "achievement": "The Reader",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "…The Reaper",
        "category": "Quests",
        "achievement": "In The Outfield VI",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Dungeon Master…",
        "category": "Battle",
        "achievement": "Dungeon Siege IV",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "(♂) Tempter of Fate… / (♀) Temptress of Fate…",
        "category": "Battle",
        "achievement": "Date With Destiny IV",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Elite Cascadier…",
        "category": "Quests",
        "achievement": "Cascadier Reborn",
        "remarks": "",
        "patch": "2.0"
    },
    {
        "name_en": "Storm Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom I",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom II",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom III",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom IV",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom V",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom VI",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder I",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder II",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder III",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder IV",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder V",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder VI",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames I",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames II",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames III",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames IV",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames V",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames VI",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "…The Ravenous Wolf",
        "category": "PvP",
        "achievement": "Wolfing It Down",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "…The Alpha Wolf",
        "category": "PvP",
        "achievement": "Leader Of The Pack",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "…The Heart of the Party",
        "category": "Character",
        "achievement": "Leaving A Good Impression I",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "(♂) Brother of Ash… / (♀) Sister of Ash…",
        "category": "Quests",
        "achievement": "A Real Bad Ash",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Sylph-Friend…",
        "category": "Quests",
        "achievement": "Sylph-assured",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "Treasure Hunter…",
        "category": "Battle",
        "achievement": "No Stone Unturned",
        "remarks": "",
        "patch": "2.1"
    },
    {
        "name_en": "789th Order Champion…",
        "category": "Quests",
        "achievement": "Kobold As Brass",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "Novv Clutchmate…",
        "category": "Quests",
        "achievement": "Licensed To Gill",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "…The Ambitious Angler",
        "category": "Quests",
        "achievement": "I Like Big Fish And I Cannot Lie",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "…The Meat Shield",
        "category": "Battle",
        "achievement": "A Tankless Job I (Paladin)",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "…The Meat Axe",
        "category": "Battle",
        "achievement": "A Tankless Job I (Warrior)",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "…Of the Stalwart Shield",
        "category": "Battle",
        "achievement": "A Tankless Job II (Paladin)",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "…Of the Stalwart Axe",
        "category": "Battle",
        "achievement": "A Tankless Job II (Warrior)",
        "remarks": "",
        "patch": "2.2"
    },
    {
        "name_en": "Frontline Forerunner…",
        "category": "PvP",
        "achievement": "Walk The Line V",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Storm Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Storm V",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Serpent Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Glade V",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Flame Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Sand V",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Drone Sniper…",
        "category": "PvP",
        "achievement": "Prime Air IV",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Heliodrome Hero…",
        "category": "PvP",
        "achievement": "Just Say Node IV",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Hunter for Hire…",
        "category": "Battle",
        "achievement": "On Your Mark: B",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Seeker of Fortune…",
        "category": "Battle",
        "achievement": "On Your Mark: A",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Seasoned Tracker…",
        "category": "Battle",
        "achievement": "On Your Mark: S",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Bounty Hunter…",
        "category": "Battle",
        "achievement": "Bring Your B Game III",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Soldier of Fortune…",
        "category": "Battle",
        "achievement": "Bring Your A Game III",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "…Captain of the Hunt",
        "category": "Battle",
        "achievement": "Bring Your S Game III",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Rafflesia Reaper…",
        "category": "Battle",
        "achievement": "A Flower By Any Other Name",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Melusine Mauler…",
        "category": "Battle",
        "achievement": "Seconds",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "…The Avatar",
        "category": "Battle",
        "achievement": "Obtanium",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "(♂) Domitor… / (♀) Domitrix…",
        "category": "Battle",
        "achievement": "Scent Of A Woman",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "The Disassembler…",
        "category": "Items",
        "achievement": "You're Tearing Me Apart I",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Bearer of the Coffer…",
        "category": "Battle",
        "achievement": "Unhide And Seek",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "…Defender of Eorzea",
        "category": "Quests",
        "achievement": "Eorzea Defended",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "(♂) The Postman… / (♀) The Postwoman…",
        "category": "Quests",
        "achievement": "The Postmoogle Always Rings Twice",
        "remarks": "",
        "patch": "2.3"
    },
    {
        "name_en": "Ehcatl Blackguard…",
        "category": "Quests",
        "achievement": "That's Ixal, Folks",
        "remarks": "",
        "patch": "2.35"
    },
    {
        "name_en": "…The Negotiator",
        "category": "Quests",
        "achievement": "Sore Thumb",
        "remarks": "",
        "patch": "2.35"
    },
    {
        "name_en": "…The Final Witness",
        "category": "Quests",
        "achievement": "Uncoiled",
        "remarks": "",
        "patch": "2.4"
    },
    {
        "name_en": "…Of Dragons Deep",
        "category": "Quests",
        "achievement": "Imagine Dragon",
        "remarks": "",
        "patch": "2.4"
    },
    {
        "name_en": "Master Caster…",
        "category": "Crafting & Gathering",
        "achievement": "Go Big Or Go Home IX",
        "remarks": "",
        "patch": "2.4"
    },
    {
        "name_en": "…The Shadow",
        "category": "Items",
        "achievement": "Yoshimitsu's Island",
        "remarks": "",
        "patch": "2.4"
    },
    {
        "name_en": "Icebreaker…",
        "category": "Quests",
        "achievement": "Dreams Of Ice",
        "remarks": "",
        "patch": "2.4"
    },
    {
        "name_en": "…Of the Silver Lining",
        "category": "Quests",
        "achievement": "Out Of The Dark",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "(♂) Gentleman… / (♀) Gentlewoman…",
        "category": "Quests",
        "achievement": "I'll Be There For You",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "Cupid…",
        "category": "Quests",
        "achievement": "Love Actually",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…Tamer of Steeds",
        "category": "Items",
        "achievement": "Ichiban",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…The Unsevered",
        "category": "Battle",
        "achievement": "Missed The Cut",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "Slaughterhouse...",
        "category": "PvP",
        "achievement": "Slaughterhouse Four",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…The Hand of Mercy",
        "category": "PvP",
        "achievement": "Slaughterhouse Five",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…The Light in Hand",
        "category": "Items",
        "achievement": "Tool Time For The Hand",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…The Light of the Land",
        "category": "Items",
        "achievement": "Tool Time For The Land",
        "remarks": "",
        "patch": "2.5"
    },
    {
        "name_en": "…Z",
        "category": "Items",
        "achievement": "The Letter Z",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Golemancer…",
        "category": "Quests",
        "achievement": "Welcome To The Dollhouse",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Gambler…",
        "category": "Character",
        "achievement": "What Happens In The Saucer I",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "High Roller…",
        "category": "Character",
        "achievement": "How I Learned To Stop Worrying And Love The Saucer",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Chocobo Breeder…",
        "category": "Character",
        "achievement": "Go Forth And Multiply",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Chocobo Trainer…",
        "category": "Character",
        "achievement": "Training Day",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "(♂) Bug Boy… / (♀) Bug Girl…",
        "category": "Character",
        "achievement": "Off To The Races I",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Senior Jockey…",
        "category": "Character",
        "achievement": "Off To The Races III",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Veteran Jockey…",
        "category": "Character",
        "achievement": "Off To The Races IV",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "…The First Across",
        "category": "Character",
        "achievement": "Winningest Jockey",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Deck Holder…",
        "category": "Character",
        "achievement": "Triple-decker II",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Deck Hoarder…",
        "category": "Character",
        "achievement": "Triple-decker III",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "…The Trinity",
        "category": "Character",
        "achievement": "Always Bet On Me",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Duelist…",
        "category": "Character",
        "achievement": "Bracket Breaker",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "(♂) Keymaster… / (♀) Gatekeeper…",
        "category": "Character",
        "achievement": "Enemy At The GATE III",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "…The Fungah",
        "category": "Character",
        "achievement": "WTFungah III",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "Moneybags…",
        "category": "Character",
        "achievement": "Work Smarter, Not Harder",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "…Raiser of Mountains",
        "category": "Character",
        "achievement": "Mountains Out Of Gil-hills",
        "remarks": "",
        "patch": "2.51"
    },
    {
        "name_en": "…Bearer of the Torch",
        "category": "Quests",
        "achievement": "My Left Arm",
        "remarks": "",
        "patch": "2.55"
    },
    {
        "name_en": "Postmaster…",
        "category": "Quests",
        "achievement": "Postal",
        "remarks": "",
        "patch": "2.55"
    },
    {
        "name_en": "(♂) Half-boiled Hero… / (♀) Half-boiled Heroine…",
        "category": "Quests",
        "achievement": "Eggspialidocious",
        "remarks": "",
        "patch": "2.55"
    },
    {
        "name_en": "Unbeliever…",
        "category": "Quests",
        "achievement": "Lucky Number 7",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Redeemed",
        "category": "Quests",
        "achievement": "Gaol Break",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Nidhogg Slayer…",
        "category": "Quests",
        "achievement": "Orthodox Mayhem",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Of The Silver Fuller",
        "category": "Quests",
        "achievement": "You Say You Want A Revolution",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Imperial Nuisance",
        "category": "Quests",
        "achievement": "The Faith That Drives Us",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Under-archon…",
        "category": "Quests",
        "achievement": "Hope Enkindled",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "The End of Ascalon…",
        "category": "Quests",
        "achievement": "Looking Up",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Oathkeeper",
        "category": "Quests",
        "achievement": "Like a Knight In Shining Armor II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Of the 14th Chakra",
        "category": "Quests",
        "achievement": "Bulletproof II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Mythril Heart",
        "category": "Quests",
        "achievement": "I Am The Warrior II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Azure Dragoon",
        "category": "Quests",
        "achievement": "Dragoon Age II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Skysinger",
        "category": "Quests",
        "achievement": "A Bard's Tale II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Pure White…",
        "category": "Quests",
        "achievement": "Seeing White II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Annihilator…",
        "category": "Quests",
        "achievement": "Back In Black II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Dreadspawn",
        "category": "Quests",
        "achievement": "Soul Summoner II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Nymian Marine…",
        "category": "Quests",
        "achievement": "Flying Colors II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Darkest Shadow",
        "category": "Quests",
        "achievement": "Against The Ninja II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Blackblood",
        "category": "Quests",
        "achievement": "A Dark Day's Knight II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Liberator…",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Stargazer…",
        "category": "Quests",
        "achievement": "The Stars In Our Faults II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Illuminati Quencher…",
        "category": "Quests",
        "achievement": "Awake The Metal",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Finder of False Gods",
        "category": "Quests",
        "achievement": "The War Still Wageth On",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Lighter than Air…",
        "category": "Quests",
        "achievement": "Walking On Sunshine",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of War…",
        "category": "Character",
        "achievement": "Mastering War II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Dark Driver…",
        "category": "Battle",
        "achievement": "A Tankless Job I (Dark Knight)",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…Of the Stalwart Sword",
        "category": "Battle",
        "achievement": "A Tankless Job II (Dark Knight)",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Keeper of Knowledge…",
        "category": "PvP",
        "achievement": "Hounding The Rock IV",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of the Hand…",
        "category": "Character",
        "achievement": "Mastering The Hand II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of the Land…",
        "category": "Character",
        "achievement": "Mastering The Land II",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Molder of Masterpieces…",
        "category": "Items",
        "achievement": "I Made That (Worh Collecting) III",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Amasser of Masterpieces…",
        "category": "Items",
        "achievement": "I Collected That III",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Business Associate…",
        "category": "Items",
        "achievement": "I Traded That III",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Carpenter…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Carpenter V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Blacksmith…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Blacksmith V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Armorer…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Armorer V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Goldsmith…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Goldsmith V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Leatherworker…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Leatherworker V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Weaver…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Weaver V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Alchemist…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Alchemist V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Culinarian…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Culinarian V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Miner…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Quality: Miner IV",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Botanist…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Quality: Botanist IV",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Master Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "The One That Didn't Get Away IV",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "…The Fortunate",
        "category": "Battle",
        "achievement": "Date With Destiny VI",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Good Samaritan…",
        "category": "Battle",
        "achievement": "The Kindness Of Strangers V",
        "remarks": "",
        "patch": "3.0"
    },
    {
        "name_en": "Minion Collector…",
        "category": "Items",
        "achievement": "Despicable You I",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Minion Master…",
        "category": "Items",
        "achievement": "Despicable You II",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Mammeteer…",
        "category": "Items",
        "achievement": "Follow The Leader I",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "(♂) ...Prince of Verminion / (♀) ...Princess of Verminion",
        "category": "Character",
        "achievement": "A Load Of Verminion III",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "(♂) …Lord of Verminion / (♀) …Lady of Verminion",
        "category": "Character",
        "achievement": "A Load Of Verminion IV",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "…House Fortemps Knight",
        "category": "Quests",
        "achievement": "So It Goes",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Sky Pirate…",
        "category": "Quests",
        "achievement": "Paying The Bills",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "…The Noumenon",
        "category": "Quests",
        "achievement": "Anima Crossing",
        "remarks": "",
        "patch": "3.15"
    },
    {
        "name_en": "Sundrop Dancer…",
        "category": "Quests",
        "achievement": "Top Gundu",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Myth Breaker…",
        "category": "Battle",
        "achievement": "The King And Die",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Veteran Explorer…",
        "category": "Exploration",
        "achievement": "Out Of Sight Out Of Bounds II",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Special Advisor…",
        "category": "Quests",
        "achievement": "Back To School I",
        "remarks": "",
        "patch": "3.15"
    },
    {
        "name_en": "Notorious Monster Slayer…",
        "category": "Exploration",
        "achievement": "Crown Of Thorns V",
        "remarks": "",
        "patch": "3.1"
    },
    {
        "name_en": "Hungry Wolf…",
        "category": "PvP",
        "achievement": "A Clean Plate",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Devourer",
        "category": "PvP",
        "achievement": "Breaking Fast With Champions",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unmoving",
        "category": "PvP",
        "achievement": "A Stalwart To Remember",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unrelenting",
        "category": "PvP",
        "achievement": "A Slayer To Remember",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unseen",
        "category": "PvP",
        "achievement": "A Sniper To Remember",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unleashed",
        "category": "PvP",
        "achievement": "A Spellcaster To Remember",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Undamaged",
        "category": "PvP",
        "achievement": "A Sawbones To Remember",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "Mentor…",
        "category": "Character",
        "achievement": "I Hope Mentor Will Notice Me II",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "Mentor of Mentors…",
        "category": "Character",
        "achievement": "I Hope Mentor Will Notice Me IV",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "Carrier of the Kettle…",
        "category": "Quests",
        "achievement": "A Watched Pot",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Gear of Change",
        "category": "Quests",
        "achievement": "First Gear",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…Allthoughts",
        "category": "Quests",
        "achievement": "The Midas Touch",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Newmind",
        "category": "Quests",
        "achievement": "Vathcore",
        "remarks": "",
        "patch": "3.2"
    },
    {
        "name_en": "…The Dragonsong",
        "category": "Quests",
        "achievement": "Floor The Horde",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "Polis Raider…",
        "category": "Battle",
        "achievement": "Life Aquatic I",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "Polis Dweller…",
        "category": "Battle",
        "achievement": "Life Aquatic IV",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "(♂) Polis Lord… / (♀) Polis Lady…",
        "category": "Battle",
        "achievement": "The Slow Regard Of Stolen Things IV",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "Pom Friend…",
        "category": "Quests",
        "achievement": "Top Mog",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "Leader of the Pack…",
        "category": "PvP",
        "achievement": "Head Of The Table",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Beta Wolf…",
        "category": "PvP",
        "achievement": "Dinner For Two (to Ten)",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Hunter Wolf…",
        "category": "PvP",
        "achievement": "Dinner For Eleven (to One Hundred)",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Bronze Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Bronze",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Silver Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Silver",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Gold Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Gold",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Platinum Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Platinum",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "Diamond Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Diamond",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the First Pack",
        "category": "PvP",
        "achievement": "It's My Party",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Second Pack",
        "category": "PvP",
        "achievement": "Party Of Two (to Ten)",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Hungry Pack",
        "category": "PvP",
        "achievement": "Party Of Eleven (to Thirty)",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Bronze Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Bronze",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Silver Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Silver",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Gold Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Gold",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Platinum Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Platinum",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Diamond Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Diamond",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…The Knight of Glory",
        "category": "PvP",
        "achievement": "In A Blaze Of Glory VI",
        "remarks": "",
        "patch": "3.3"
    },
    {
        "name_en": "…The Chief Mourner",
        "category": "Quests",
        "achievement": "I'll Sleep When I'm Dead",
        "remarks": "",
        "patch": "3.35"
    },
    {
        "name_en": "…The Wings of Time",
        "category": "Quests",
        "achievement": "Back In Time",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "…Surrenderer of Souls",
        "category": "Quests",
        "achievement": "No Retreat, No Surrender",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "Khloe's Friend…",
        "category": "Character",
        "achievement": "And Khloe Was Her Name-o II",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "Khloe's Best Friend…",
        "category": "Character",
        "achievement": "And Khloe Was Her Name-o VII",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "…Hero of Gelmorra",
        "category": "Battle",
        "achievement": "In Too Deep VI",
        "remarks": "",
        "patch": "3.45"
    },
    {
        "name_en": "…Lightbringer",
        "category": "Items",
        "achievement": "Some Kinna Wonderful",
        "remarks": "",
        "patch": "3.45"
    },
    {
        "name_en": "Lonely Explorer…",
        "category": "Items",
        "achievement": "Pal-less Palace II",
        "remarks": "",
        "patch": "3.45"
    },
    {
        "name_en": "…The Lucky",
        "category": "Items",
        "achievement": "For The Hoard III",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "…Of the Sixth Sense",
        "category": "Items",
        "achievement": "The Trouble With Buried II",
        "remarks": "",
        "patch": "3.4"
    },
    {
        "name_en": "Corpse Dancer…",
        "category": "Items",
        "achievement": "Dead Tired",
        "remarks": "",
        "patch": "3.45"
    },
    {
        "name_en": "Makai Master…",
        "category": "Items",
        "achievement": "Protector",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Garo…",
        "category": "Items",
        "achievement": "Echoes Of The Golden Wolf",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Monk…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Fist",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Barago…",
        "category": "Items",
        "achievement": "Echoes Of Undying Twilight",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Dan…",
        "category": "Items",
        "achievement": "Echoes Of The White Night",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Bard…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Bow",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Black Mage…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Dark",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai White Mage…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Sun",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Zero…",
        "category": "Items",
        "achievement": "Echoes Of The Silver Wolf",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Summoner…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Vessel",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Scholar…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Lore",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Kiba…",
        "category": "Items",
        "achievement": "Echoes Of Darkness",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Machinist…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Arm",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Makai Astrologian…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Star",
        "remarks": "Garo Collaboration Event",
        "patch": "3.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "Moonlifter…",
        "category": "Quests",
        "achievement": "Hey Now, You're An All-star",
        "remarks": "",
        "patch": "3.5"
    },
    {
        "name_en": "…The Finest Pupil's Ally",
        "category": "Quests",
        "achievement": "School's Out Forever",
        "remarks": "",
        "patch": "3.5"
    },
    {
        "name_en": "Fatewalker…",
        "category": "Quests",
        "achievement": "Five Minutes Of Fate",
        "remarks": "",
        "patch": "3.56"
    },
    {
        "name_en": "…Of the Holy Body",
        "category": "Quests",
        "achievement": "Back To School III",
        "remarks": "",
        "patch": "3.5"
    },
    {
        "name_en": "Gigi's Best Friend…",
        "category": "Quests",
        "achievement": "That Is What You Are",
        "remarks": "",
        "patch": "3.5"
    },
    {
        "name_en": "…Tamer of the Undying Flame",
        "category": "Items",
        "achievement": "Just Like Fire",
        "remarks": "",
        "patch": "3.5"
    },
    {
        "name_en": "Mortal Fist…",
        "category": "PvP",
        "achievement": "Mama Said Knock You Out II",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "…Rhalgr's Right Fist",
        "category": "PvP",
        "achievement": "Mama Said Knock You Out V",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "Tablesetter…",
        "category": "PvP",
        "achievement": "How Can I Help II",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "…Halone's Cup Bearer",
        "category": "PvP",
        "achievement": "How Can I Help V",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "Zhloe's Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Zhloe Aliapoh V",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "Zhloe's Best Friend…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Zhloe Aliapoh VI",
        "remarks": "",
        "patch": "3.55a"
    },
    {
        "name_en": "…Survivor of the Song",
        "category": "Quests",
        "achievement": "Incidentally Speaking",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Ijin Traveler…",
        "category": "Quests",
        "achievement": "Destination Unknown",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Confederate…",
        "category": "Quests",
        "achievement": "Unexplained",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Adversary…",
        "category": "Quests",
        "achievement": "Put Your Wings Up",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Steppe Warrior…",
        "category": "Quests",
        "achievement": "Crimson Footprints",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Returned",
        "category": "Quests",
        "achievement": "Catch Me If You Can",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Lyse's Right Fist…",
        "category": "Quests",
        "achievement": "Cheek To Cheek",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Liberator",
        "category": "Quests",
        "achievement": "The Measure Of His Reach",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Deltascape Deleter…",
        "category": "Quests",
        "achievement": "Delta Force",
        "remarks": "",
        "patch": "4.01"
    },
    {
        "name_en": "Ul Cup Champion…",
        "category": "Quests",
        "achievement": "Like a Knight In Shining Armor III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Fistful",
        "category": "Quests",
        "achievement": "Bulletproof III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Loved by the Axe",
        "category": "Quests",
        "achievement": "I Am The Warrior III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Blood Dragoon",
        "category": "Quests",
        "achievement": "Dragoon Age III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the True Autumn",
        "category": "Quests",
        "achievement": "A Bard's Tale III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Padjal Protector…",
        "category": "Quests",
        "achievement": "Seeing White III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Gembreaker…",
        "category": "Quests",
        "achievement": "Back In Black III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The First Caller",
        "category": "Quests",
        "achievement": "Soul Summoner III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Keeper of the Lilacs…",
        "category": "Quests",
        "achievement": "Flying Colors III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Eorzean Ninja…",
        "category": "Quests",
        "achievement": "Against The Ninja III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Swirling Abyss",
        "category": "Quests",
        "achievement": "A Dark Day's Knight III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Howler",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Eastern Skies",
        "category": "Quests",
        "achievement": "The Stars In Our Faults III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…The Red",
        "category": "Quests",
        "achievement": "Red On Arrival II",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Muso",
        "category": "Quests",
        "achievement": "SAM I Am II",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "(♂) God of War… / (♀) Goddess of War…",
        "category": "Character",
        "achievement": "Mastering War III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "(♂) God of Magic… / (♀) Goddess of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "(♂) God of the Hand… / (♀) Goddess of the Hand…",
        "category": "Character",
        "achievement": "Mastering The Hand III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "(♂) God of the Land… / (♀) Goddess of the Land…",
        "category": "Character",
        "achievement": "Mastering The Land III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Longest Hunt",
        "category": "Battle",
        "achievement": "Bring Your A Game V",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Endless Hunt",
        "category": "Battle",
        "achievement": "Bring Your A Game VI",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Thrillseeker…",
        "category": "Battle",
        "achievement": "Bring Your S Game V",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Ultimate Thrillseeker…",
        "category": "Battle",
        "achievement": "Bring Your S Game VI",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Canal Raider…",
        "category": "Battle",
        "achievement": "Raider Of The Lost Canals I",
        "remarks": "",
        "patch": "4.05"
    },
    {
        "name_en": "Canal Dweller…",
        "category": "Battle",
        "achievement": "Raider Of The Lost Canals IV",
        "remarks": "",
        "patch": "4.05"
    },
    {
        "name_en": "(♂) Canal Lord… / (♀) Canal Lady…",
        "category": "Battle",
        "achievement": "The Deep End IV",
        "remarks": "",
        "patch": "4.05"
    },
    {
        "name_en": "…The Necromancer",
        "category": "Battle",
        "achievement": "Pal-less Palace III",
        "remarks": "",
        "patch": "4.0"
    },
    {
        "name_en": "Naago's Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: M'naago V",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "Naago's Partner…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: M'naago VI",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "…Wings of Steel",
        "category": "PvP",
        "achievement": "Roll The Dice V",
        "remarks": "",
        "patch": "4.15"
    },
    {
        "name_en": "…Wings of Fire",
        "category": "PvP",
        "achievement": "Die Another Day V",
        "remarks": "",
        "patch": "4.15"
    },
    {
        "name_en": "Deep Canal Raider…",
        "category": "Battle",
        "achievement": "Raider Of The Hidden Canals I",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "Deep Canal Dweller…",
        "category": "Battle",
        "achievement": "Raider Of The Hidden Canals IV",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "(♂) …The Luckiest of Lords / (♀) …The Luckiest of Ladies",
        "category": "Battle",
        "achievement": "The Deeper End IV",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "Crimson Explorer…",
        "category": "Exploration",
        "achievement": "Oh, The Sights We'll See II",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "…The Legend",
        "category": "Battle",
        "achievement": "Resistance Is Futile",
        "remarks": "",
        "patch": "4.11"
    },
    {
        "name_en": "Raubahn's Left Arm…",
        "category": "Quests",
        "achievement": "More Heroes",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "…Of the Blue",
        "category": "Quests",
        "achievement": "Divinity: Original Kojin",
        "remarks": "",
        "patch": "4.1"
    },
    {
        "name_en": "…Fashion Leader",
        "category": "Character",
        "achievement": "You Look Marvelous III",
        "remarks": "",
        "patch": "4.2"
    },
    {
        "name_en": "…Eversharp",
        "category": "PvP",
        "achievement": "Stay Sharp",
        "remarks": "",
        "patch": "4.2"
    },
    {
        "name_en": "…The New Sun",
        "category": "Quests",
        "achievement": "Solar Cycle",
        "remarks": "",
        "patch": "4.2"
    },
    {
        "name_en": "Snake in the Grass…",
        "category": "Quests",
        "achievement": "My Anantaconda",
        "remarks": "",
        "patch": "4.2"
    },
    {
        "name_en": "Siltwater Socialite…",
        "category": "Quests",
        "achievement": "In A Barrel",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "Matchmaker…",
        "category": "Quests",
        "achievement": "MeetMog",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "Eorzean Ninja Warrior…",
        "category": "Quests",
        "achievement": "Tonight, The Stars Align",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "Vanguard…",
        "category": "PvP",
        "achievement": "Front And Center VI",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "Kurenai's Best Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Kurenai V",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "Kurenai's Partner…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Kurenai VI",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "…Under the Moonlight",
        "category": "Quests",
        "achievement": "Lunar Cycle",
        "remarks": "",
        "patch": "4.3"
    },
    {
        "name_en": "…The Ultimate Legend",
        "category": "Battle",
        "achievement": "Ultimatum",
        "remarks": "",
        "patch": "4.31"
    },
    {
        "name_en": "Calamatologist…",
        "category": "Quests",
        "achievement": "Give Me Five",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "Hiruko Hunter…",
        "category": "Battle",
        "achievement": "She's So High III",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "Heavenly Gate Crasher…",
        "category": "Battle",
        "achievement": "She's So High V",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "True Hero…",
        "category": "Items",
        "achievement": "Dressed For Heaven",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "Lone Hero…",
        "category": "Battle",
        "achievement": "Heaven Is A Lonely Place II",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "Hoarder…",
        "category": "Battle",
        "achievement": "For The Hoard V",
        "remarks": "",
        "patch": "4.35"
    },
    {
        "name_en": "Monster Hunter…",
        "category": "Quests",
        "achievement": "The New King On The Block",
        "remarks": "",
        "patch": "4.36"
    },
    {
        "name_en": "Prelude in Violet…",
        "category": "Quests",
        "achievement": "A History Of Violet",
        "remarks": "",
        "patch": "4.4"
    },
    {
        "name_en": "…Philanthropist",
        "category": "Character",
        "achievement": "Bio-Doma V",
        "remarks": "",
        "patch": "4.4"
    },
    {
        "name_en": "(♂) Altar Boy… / (♀) Altar Girl…",
        "category": "Battle",
        "achievement": "Raider Of The Shifting Altars I",
        "remarks": "",
        "patch": "4.4"
    },
    {
        "name_en": "…The Devout",
        "category": "Battle",
        "achievement": "Raider Of The Shifting Altars IV",
        "remarks": "",
        "patch": "4.4"
    },
    {
        "name_en": "Invoker of Gods…",
        "category": "Battle",
        "achievement": "The Deepest End IV",
        "remarks": "",
        "patch": "4.4"
    },
    {
        "name_en": "...Kyubi Tamer",
        "category": "Items",
        "achievement": "Slute Of The Plume",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Mahjong Enthusiast…",
        "category": "Character",
        "achievement": "Tile And Error II",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Mahjong Master…",
        "category": "Character",
        "achievement": "Tile And Error III",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Little Piggy…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Adkiragh V",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Tough Customer…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Adkiragh VI",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Blue Blood…",
        "category": "Character",
        "achievement": "The More You Know IV",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "…Mask of the Blue",
        "category": "Battle",
        "achievement": "Smokin' VI",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Perfect Blue…",
        "category": "Battle",
        "achievement": "Something Borrowed",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Eurekan Explorer…",
        "category": "Exploration",
        "achievement": "Making The Most Of Hydatos",
        "remarks": "",
        "patch": "4.5"
    },
    {
        "name_en": "…A Requiem For Heroes",
        "category": "Quests",
        "achievement": "Swan Song",
        "remarks": "",
        "patch": "4.5"
    },
    {
        "name_en": "…The Soboro",
        "category": "Quests",
        "achievement": "Good Night, Sweet Hildy",
        "remarks": "",
        "patch": "4.5"
    },
    {
        "name_en": "…Kageyama Killer",
        "category": "Quests",
        "achievement": "West Meets East",
        "remarks": "",
        "patch": "4.5"
    },
    {
        "name_en": "Kingsglaive…",
        "category": "Quests",
        "achievement": "Brother From Another Mothercrystal",
        "remarks": "FFXV Collaboration Event",
        "patch": "4.5",
        defaultCompletion: "X"
    },
    {
        "name_en": "(♂) …Lord of the Fetch / (♀) …Lady of the Fetch",
        "category": "Quests",
        "achievement": "Live To Serve",
        "remarks": "",
        "patch": "4.45"
    },
    {
        "name_en": "Grandmaster Caster…",
        "category": "Crafting & Gathering",
        "achievement": "Go Big Or Go Home XVI",
        "remarks": "",
        "patch": "4.5"
    },
    {
        "name_en": "Soul of War…",
        "category": "Character",
        "achievement": "Mastering War IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Soul of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Soul of the Craft…",
        "category": "Character",
        "achievement": "Mastering The Hand IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Soul of the Harvest…",
        "category": "Character",
        "achievement": "Mastering The Land IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Outlander…",
        "category": "Quests",
        "achievement": "Between Two Worlds",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Fae-touched",
        "category": "Quests",
        "achievement": "Realpolitik",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Seeker of Hidden Truths…",
        "category": "Quests",
        "achievement": "Journey to The Past",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of the Sunless Sea",
        "category": "Quests",
        "achievement": "Shrouded In Darkness",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Enemy of Innocence…",
        "category": "Quests",
        "achievement": "Warden Of Light",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Shadowbringer…",
        "category": "Quests",
        "achievement": "Shadowbringers",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Sworn Protector…",
        "category": "Quests",
        "achievement": "Gunnhildr's Blade I",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Heart's Beat",
        "category": "Quests",
        "achievement": "No Friends Of Mine I",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Living Memory…",
        "category": "Quests",
        "achievement": "Tales To Be Told",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Bulwark between Worlds…",
        "category": "Quests",
        "achievement": "Like A Knight In Shining Armor IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Transcendent",
        "category": "Quests",
        "achievement": "Bulletproof IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Worldcleaver…",
        "category": "Quests",
        "achievement": "I Am The Warrior IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Bolt from the Black…",
        "category": "Quests",
        "achievement": "Dragoon Age IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Song upon the Wind",
        "category": "Quests",
        "achievement": "A Bard's Tale IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Firstblessed…",
        "category": "Quests",
        "achievement": "Seeing White IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Stranger Shadow",
        "category": "Quests",
        "achievement": "Back In Black IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Farcaller…",
        "category": "Quests",
        "achievement": "Soul Summoner IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Knower of Twin Worlds…",
        "category": "Quests",
        "achievement": "Flying Colors IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Shadow of the Other…",
        "category": "Quests",
        "achievement": "Against The Ninja IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Boundless Dark",
        "category": "Quests",
        "achievement": "A Dark Day's Knight IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Shot Heard Across Worlds",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Distant Stargazer…",
        "category": "Quests",
        "achievement": "The Stars In Our Faults IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Dualistic Duelist…",
        "category": "Quests",
        "achievement": "Red On Arrival III",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Samurai in a Strange Land…",
        "category": "Quests",
        "achievement": "SAM I Am III",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Wandering Vanguard…",
        "category": "Quests",
        "achievement": "Gunnhildr's Blade II",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Riftdancer…",
        "category": "Quests",
        "achievement": "No Friends Of Mine II",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Smith…",
        "category": "Quests",
        "achievement": "Precious Metals",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Artisan…",
        "category": "Quests",
        "achievement": "Thank You For The Music",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Apothecary…",
        "category": "Quests",
        "achievement": "Amaro Whisperer",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Seeker…",
        "category": "Quests",
        "achievement": "The Lost World",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Angler…",
        "category": "Quests",
        "achievement": "Live Long And Prospero",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Multifaceted",
        "category": "Quests",
        "achievement": "The Golden Mean",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Trusted Friend…",
        "category": "Character",
        "achievement": "Bound By Faith",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Invisible Hand",
        "category": "Battle",
        "achievement": "Merchant's Best Friend",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Charming Brute…",
        "category": "Battle",
        "achievement": "Shadowbring Your A Game III",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…The Fabulously Feral",
        "category": "Battle",
        "achievement": "Shadowbring Your S Game III",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Oath",
        "category": "Battle",
        "achievement": "Tank You, Paladin IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Steel",
        "category": "Battle",
        "achievement": "Tank You, Warrior IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Principle",
        "category": "Battle",
        "achievement": "Tank You, Dark Knight IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Lealty",
        "category": "Battle",
        "achievement": "Tank You, Gunbreaker IV",
        "remarks": "",
        "patch": "5.0"
    },
    {
        "name_en": "Dungeon Raider…",
        "category": "Battle",
        "achievement": "Beauty And Its Beasts I",
        "remarks": "",
        "patch": "5.05"
    },
    {
        "name_en": "Dungeon Dweller…",
        "category": "Battle",
        "achievement": "Beauty And Its Beasts IV",
        "remarks": "",
        "patch": "5.05"
    },
    {
        "name_en": "(♂) Dungeon Lord… / (♀) Dungeon Lady…",
        "category": "Battle",
        "achievement": "Happily Treasure After IV",
        "remarks": "",
        "patch": "5.05"
    },
    {
        "name_en": "Kindred Sword…",
        "category": "Character",
        "achievement": "Right On The Money III",
        "remarks": "",
        "patch": "5.1"
    },
    {
        "name_en": "…Of Virtuous Deeds",
        "category": "Quests",
        "achievement": "Black And White",
        "remarks": "",
        "patch": "5.1"
    },
    {
        "name_en": "Kai-Shirr's Best Mate…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Kai-Shirr V",
        "remarks": "",
        "patch": "5.1"
    },
    {
        "name_en": "Honeybee…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Kai-Shirr VI",
        "remarks": "",
        "patch": "5.1"
    },
    {
        "name_en": "Sweet Dreamer…",
        "category": "Quests",
        "achievement": "Forever Young",
        "remarks": "",
        "patch": "5.1"
    },
    {
        "name_en": "…The Perfect Legend",
        "category": "Battle",
        "achievement": "When I Ruled The World",
        "remarks": "",
        "patch": "5.11"
    },
    {
        "name_en": "Blue to the Bone…",
        "category": "Character",
        "achievement": "The More You Know VII",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Blue Luminary…",
        "category": "Battle",
        "achievement": "Jack Of All Trades III",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Masked of the Round…",
        "category": "Battle",
        "achievement": "Mightier Than The Round",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Unbound Blue…",
        "category": "Battle",
        "achievement": "Blue Unchained",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Blue Justice…",
        "category": "Battle",
        "achievement": "Masked Conqueror",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "…The Battleforged",
        "category": "PvP",
        "achievement": "One Steppe At A Time VI",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Champion of the Blue…",
        "category": "Battle",
        "achievement": "None More Blue",
        "remarks": "",
        "patch": "5.15"
    },
    {
        "name_en": "Frame of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Saw III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Forge of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Smithy III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Hammer of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Hammer III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Jewel of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Gemstone III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Knife of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Knife III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Weave of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Needle III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Panacea of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Science III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Pan of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Skillet III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Pick of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Sledgehammer III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Hatchet of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Scythe III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Rod of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Rod III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Hand of Creation",
        "category": "Crafting & Gathering",
        "achievement": "Handking Of The World",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Divine Provider…",
        "category": "Crafting & Gathering",
        "achievement": "Landking Of The World",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Carpenter",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Carpentry",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Blacksmith",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Smithing",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Armorer",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Armorcraft",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Goldsmith",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Gemcraft",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Leatherworker",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Leathercraft",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Weaver",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Clothcraft",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Alchemist",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Alchemy",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Culinarian",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Cuisine",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Miner",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Mining",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Botanist",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Botany",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Fisher",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Angling",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Fortune's Favored Kupo...",
        "category": "Crafting & Gathering",
        "achievement": "Let Luck Be A Moogle III",
        "remarks": "",
        "patch": "5.21"
    },
    {
        "name_en": "Ocean Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "No More Fish In The Sea III",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Octopus Traveler…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Octopodes Do To You?",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Shark Hunter…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Sharks Do To You?",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Jellyfish Fanatic…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Jellyfish Do To You?",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Sea Dragoon…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Seadragons Do To You?",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Echo of a Fallen Star…",
        "category": "Quests",
        "achievement": "Way More Heroes",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "Ronkan Historian…",
        "category": "Quests",
        "achievement": "With My Compliments IV",
        "remarks": "",
        "patch": "5.2"
    },
    {
        "name_en": "A Dragon's Best Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Ehll Tou V",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "Tinker Tutor…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Ehll Tou VI",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "Partner in Teatime…",
        "category": "Character",
        "achievement": "Friend Or Faux II",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "(♂) Vrai Ami… / (♀) Vraie Amie…",
        "category": "Character",
        "achievement": "Friend Or Faux IV",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "Tank Technician…",
        "category": "Quests",
        "achievement": "Beard Science",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "Shepherd to the Stars…",
        "category": "Quests",
        "achievement": "Hope's Legacy",
        "remarks": "",
        "patch": "5.3"
    },
    {
        "name_en": "Featherfall's Finest Carpenter…",
        "category": "Crafting & Gathering",
        "achievement": "Carpenters Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Blacksmith...",
        "category": "Crafting & Gathering",
        "achievement": "Blacksmiths Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Armorer…",
        "category": "Crafting & Gathering",
        "achievement": "Armorers Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Goldsmith…",
        "category": "Crafting & Gathering",
        "achievement": "Goldsmiths Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Leatherworker…",
        "category": "Crafting & Gathering",
        "achievement": "Leatherworkers Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Weaver…",
        "category": "Crafting & Gathering",
        "achievement": "Weavers Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Alchemist…",
        "category": "Crafting & Gathering",
        "achievement": "Alchemists Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Culinarian…",
        "category": "Crafting & Gathering",
        "achievement": "Culinarians Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Miner…",
        "category": "Crafting & Gathering",
        "achievement": "Miners Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Botanist…",
        "category": "Crafting & Gathering",
        "achievement": "Botanists Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "Fishers Of A Feather",
        "remarks": "",
        "patch": "5.31"
    },
    {
        "name_en": "…The Decisive Blow",
        "category": "Battle",
        "achievement": "Critical Role IV",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Skirmisher…",
        "category": "Battle",
        "achievement": "No Man's Land IV",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Siege Liege…",
        "category": "Battle",
        "achievement": "Operation: Eagle's Nest III",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Gabriel's Downfall…",
        "category": "Battle",
        "achievement": "Missing an Angel",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Queller of Beasts…",
        "category": "Battle",
        "achievement": "Lyon's Share",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "…The Death of Flame",
        "category": "Battle",
        "achievement": "Burn Baby Burn",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Sword of the South…",
        "category": "Battle",
        "achievement": "Close Encounters",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Guardian Angel…",
        "category": "Battle",
        "achievement": "No Need for Triage III",
        "remarks": "",
        "patch": "5.35"
    },
    {
        "name_en": "Writer of Histories…",
        "category": "Quests",
        "achievement": "Pen And Sword",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "…Of the Truest Blue",
        "category": "Battle",
        "achievement": "Violets Are Violet",
        "remarks": "",
        "patch": "5.45"
    },
    {
        "name_en": "Blue Ranger…",
        "category": "Battle",
        "achievement": "Jack of All Trades IV",
        "remarks": "",
        "patch": "5.45"
    },
    {
        "name_en": "…The Azure and Omega",
        "category": "Battle",
        "achievement": "Omega Blue",
        "remarks": "",
        "patch": "5.45"
    },
    {
        "name_en": "Balloon Catcher…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Balloons Do To You?",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Deadliest Catcher…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Crabs Do To You?",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Manta Maniac…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Mantas Do To You?",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "World-class Troller…",
        "category": "Crafting & Gathering",
        "achievement": "On A Boat V",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Tournament Leader…",
        "category": "Character",
        "achievement": "Open And Shut II",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Secret Finder…",
        "category": "Battle",
        "achievement": "The Dancing Prisoners I",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Secret Keeper…",
        "category": "Battle",
        "achievement": "The Dancing Prisoners IV",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Gaolbreaker…",
        "category": "Battle",
        "achievement": "Away With The Fae IV",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Master of the Sea…",
        "category": "Crafting & Gathering",
        "achievement": "No More Fish In The Sea IV",
        "remarks": "",
        "patch": "5.4"
    },
    {
        "name_en": "Delubrum Delver…",
        "category": "Battle",
        "achievement": "Savage Queen of Swords II",
        "remarks": "",
        "patch": "5.45"
    },
    {
        "name_en": "...The Risensong Carpenter",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Carpentry",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Blacksmith",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Smithing",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Armorer",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Armorcraft",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Goldsmith",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Gemcraft",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Leatherworker",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Leathercraft",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Weaver",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Clothcraft",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Alchemist",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Alchemy",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Culinarian",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Cooking",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Miner",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Mining",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Botanist",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Botany",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "...The Risensong Fisher",
        "category": "Crafting & Gathering",
        "achievement": "An Ode to Angling",
        "remarks": "",
        "patch": "5.41"
    },
    {
        "name_en": "Saint of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase II Divine Ascension",
        "remarks": "Second Phase of Ishgardian Restoration",
        "patch": "5.21",
        defaultCompletion: "X"
    },
    {
        "name_en": "Saint of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase III Divine Ascension",
        "remarks": "Third Phase of Ishgardian Restoration",
        "patch": "5.31",
        defaultCompletion: "X"
    },
    {
        "name_en": "Saint of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase IV Divine Ascension",
        "remarks": "Fourth Phase of Ishgardian Restoration",
        "patch": "5.41",
        defaultCompletion: "X"
    },
    {
        "name_en": "(♂) Beatus of the Firmament… / (♀) Beata of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase II Minor Miracle",
        "remarks": "Second Phase of Ishgardian Restoration",
        "patch": "5.21",
        defaultCompletion: "X"
    },
    {
        "name_en": "(♂) Beatus of the Firmament… / (♀) Beata of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase III Minor Miracle",
        "remarks": "Third Phase of Ishgardian Restoration",
        "patch": "5.31",
        defaultCompletion: "X"
    },
    {
        "name_en": "(♂) Beatus of the Firmament… / (♀) Beata of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase IV Minor Miracle",
        "remarks": "Fourth Phase of Ishgardian Restoration",
        "patch": "5.41",
        defaultCompletion: "X"
    }
];