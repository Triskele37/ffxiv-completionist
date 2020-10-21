import { DataGroup } from "../DataGroup";

export const Character_Title = function(parent) {
    const data = new DataGroup("Title", parent);

    data.columnConfig = [
        { header: "Title", key: "name", },
        { header: "Category", key: "category", filterable: true },
        { header: "Achievement", key: "achievement" },
        { header: "Patch", key: "patch", filterable: true }
    ];

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "…The Insatiable",
        "category": "Items",
        "achievement": "Armed to the Teeth",
        "patch": "2.0"
    },
    {
        "name_en": "…The True",
        "category": "Items",
        "achievement": "Raising the Curtana",
        "patch": "2.0"
    },
    {
        "name_en": "Coeurlfist…",
        "category": "Items",
        "achievement": "Enter the Coeurl",
        "patch": "2.0"
    },
    {
        "name_en": "Ironeater…",
        "category": "Items",
        "achievement": "Cleaving to Tradition",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Vengeful Lance",
        "category": "Items",
        "achievement": "Having a Gae Old Time",
        "patch": "2.0"
    },
    {
        "name_en": "…The Godsbow",
        "category": "Items",
        "achievement": "Hard to Miss",
        "patch": "2.0"
    },
    {
        "name_en": "…The White",
        "category": "Items",
        "achievement": "Dressed to Heal",
        "patch": "2.0"
    },
    {
        "name_en": "Starcaller…",
        "category": "Items",
        "achievement": "Ohohohohoho!",
        "patch": "2.0"
    },
    {
        "name_en": "…The Exterminator",
        "category": "Battle",
        "achievement": "To Crush Your Enemies VI",
        "patch": "2.0"
    },
    {
        "name_en": "Notorious Monster Hunter…",
        "category": "Legacy",
        "achievement": "Notorious Monster Hunting",
        "patch": "2.0"
    },
    {
        "name_en": "Honest Gillionaire…",
        "category": "Items",
        "achievement": "Who Wants To Be A Gillionaire?",
        "patch": "2.0"
    },
    {
        "name_en": "Ruthless Gillionaire…",
        "category": "Legacy",
        "achievement": "Never Met A Corpse I Couldn't Rifle",
        "patch": "2.0"
    },
    {
        "name_en": "Warmonger…",
        "category": "Character",
        "achievement": "Mastering War I",
        "patch": "2.0"
    },
    {
        "name_en": "Archmage…",
        "category": "Character",
        "achievement": "Mastering Magic I",
        "patch": "2.0"
    },
    {
        "name_en": "…Builder of the Realm",
        "category": "Character",
        "achievement": "Mastering The Hand I",
        "patch": "2.0"
    },
    {
        "name_en": "…Provider of the Realm",
        "category": "Character",
        "achievement": "Mastering The Land I",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Saw",
        "category": "Crafting & Gathering",
        "achievement": "Going With The Grain: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Anvil",
        "category": "Crafting & Gathering",
        "achievement": "Working The Bellows: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Hammer",
        "category": "Crafting & Gathering",
        "achievement": "Pounding Out The Dents: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Leaf",
        "category": "Crafting & Gathering",
        "achievement": "Cutting The Carats: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Hide",
        "category": "Crafting & Gathering",
        "achievement": "Hiding In Plain Sight: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Needle",
        "category": "Crafting & Gathering",
        "achievement": "Threading The Needle: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Lead",
        "category": "Crafting & Gathering",
        "achievement": "Mixing It Up: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Golden Ladle",
        "category": "Crafting & Gathering",
        "achievement": "Savoring The Realm: Artisan",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "Forestbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "Desertbreaker…",
        "category": "Crafting & Gathering",
        "achievement": "A Miner's Life For Me: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Mines",
        "category": "Legacy",
        "achievement": "I'd Rather Be Quarrying: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "Forestreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "Desertreaper…",
        "category": "Crafting & Gathering",
        "achievement": "A Botanist's Life For Me: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Grasses",
        "category": "Legacy",
        "achievement": "I'd Rather Be Harvesting: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "Meadowcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "Forestcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "Desertcaster…",
        "category": "Crafting & Gathering",
        "achievement": "A Fisher's Life For Me: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Meadow Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Forest Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "…Of the Desert Pools",
        "category": "Legacy",
        "achievement": "I'd Rather Be Spearfishing: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "…Carrier of the Cauldron",
        "category": "Items",
        "achievement": "Materia Hysteria",
        "patch": "2.0"
    },
    {
        "name_en": "…The Assimilator",
        "category": "Items",
        "achievement": "Living In A Materia World",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Blood",
        "category": "Quests",
        "achievement": "Tales Of War",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Truth",
        "category": "Quests",
        "achievement": "Tales Of Magic",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Skill",
        "category": "Quests",
        "achievement": "Tales Of The Hand",
        "patch": "2.0"
    },
    {
        "name_en": "…Seeker of Bounty",
        "category": "Quests",
        "achievement": "Tales Of The Land",
        "patch": "2.0"
    },
    {
        "name_en": "Sidestepper…",
        "category": "Legacy",
        "achievement": "Sideways",
        "patch": "2.0"
    },
    {
        "name_en": "Lord Protector… / Lady Protector…",
        "category": "Quests",
        "achievement": "All The More Region To Leve VI",
        "patch": "2.0"
    },
    {
        "name_en": "Lord Creator… / Lady Creator…",
        "category": "Quests",
        "achievement": "Think Global, Quest Local VI",
        "patch": "2.0"
    },
    {
        "name_en": "Peacemaker…",
        "category": "Legacy",
        "achievement": "A Slave To Faction III",
        "patch": "2.0"
    },
    {
        "name_en": "…The Last Resort",
        "category": "Quests",
        "achievement": "Serving A Greater Cause VI",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of La Noscea",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: La Noscea",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of the Shroud",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: Black Shroud",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of Thanalan",
        "category": "Legacy",
        "achievement": "And All I Got Was This Lousy Achievement: Thanalan",
        "patch": "2.0"
    },
    {
        "name_en": "…The Sword of Eorzea",
        "category": "Legacy",
        "achievement": "Globetrotter",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of La Noscea",
        "category": "Legacy",
        "achievement": "La Noscea Got Served…and Protected",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of the Shroud",
        "category": "Legacy",
        "achievement": "The Black Shroud Got Served…and Protected",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of Thanalan",
        "category": "Legacy",
        "achievement": "Thanalan Got Served…and Protected",
        "patch": "2.0"
    },
    {
        "name_en": "…The Shield of Eorzea",
        "category": "Legacy",
        "achievement": "Eorzea Got Served…and Protected",
        "patch": "2.0"
    },
    {
        "name_en": "Brother / Sister of the Broken Blade…",
        "category": "Legacy",
        "achievement": "Love Thy Brother",
        "patch": "2.0"
    },
    {
        "name_en": "…The Warden's Wall",
        "category": "Legacy",
        "achievement": "Another Brick In The Shield Wall",
        "patch": "2.0"
    },
    {
        "name_en": "Bearer of the Horn…",
        "category": "Legacy",
        "achievement": "A Helping Horn",
        "patch": "2.0"
    },
    {
        "name_en": "…The Uncommitted",
        "category": "Legacy",
        "achievement": "Commitment Issues",
        "patch": "2.0"
    },
    {
        "name_en": "…The Professional",
        "category": "Quests",
        "achievement": "Career Opportunities",
        "patch": "2.0"
    },
    {
        "name_en": "Inquisitor…",
        "category": "Legacy",
        "achievement": "Patricide",
        "patch": "2.0"
    },
    {
        "name_en": "Divine Crusher…",
        "category": "Legacy",
        "achievement": "To Kill A Mocking Bird",
        "patch": "2.0"
    },
    {
        "name_en": "Stonesplitter…",
        "category": "Legacy",
        "achievement": "Pounding The Spike",
        "patch": "2.0"
    },
    {
        "name_en": "…A Kobold's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Aleport",
        "patch": "2.0"
    },
    {
        "name_en": "…An Ixal's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Hyrstmill",
        "patch": "2.0"
    },
    {
        "name_en": "…An Amalj'aa's Worst Nightmare",
        "category": "Legacy",
        "achievement": "First Blood: Golden Bazaar",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of Aleport",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of Hyrstmill",
        "patch": "2.0"
    },
    {
        "name_en": "…The Guardian of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Guardian Of The Golden Bazaar",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of Aleport",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of Hyrstmill",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wind of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Wind Of The Golden Bazaar",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of Aleport",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of Aleport",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of Hyrstmill",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of Hyrstmill",
        "patch": "2.0"
    },
    {
        "name_en": "…The Hand of the Golden Bazaar",
        "category": "Legacy",
        "achievement": "To Be Or Not To Be The Hand Of The Golden Bazaar",
        "patch": "2.0"
    },
    {
        "name_en": "Wild Thing…",
        "category": "Legacy",
        "achievement": "It's Reining Deer",
        "patch": "2.0"
    },
    {
        "name_en": "…The Winter Wyrm",
        "category": "Legacy",
        "achievement": "Get All The Things!",
        "patch": "2.0"
    },
    {
        "name_en": "Messenger of Love…",
        "category": "Legacy",
        "achievement": "Love Makes The World Go Round",
        "patch": "2.0"
    },
    {
        "name_en": "Royal Seneschal… / Princess for a Day…",
        "category": "Legacy",
        "achievement": "Royal Audience",
        "patch": "2.0"
    },
    {
        "name_en": "Dreamseeker…",
        "category": "Legacy",
        "achievement": "Seven Short Of A Dozen",
        "patch": "2.0"
    },
    {
        "name_en": "Cascadier…",
        "category": "Legacy",
        "achievement": "Cascadier For Life",
        "patch": "2.0"
    },
    {
        "name_en": "Crystal Bearer…",
        "category": "Legacy",
        "achievement": "Chock-full Of Elemental Goodness",
        "patch": "2.0"
    },
    {
        "name_en": "Stormlord… / Stormlady…",
        "category": "Grand Company",
        "achievement": "A Storm Of Seals III",
        "patch": "2.0"
    },
    {
        "name_en": "Serpentlord… / Serpentlady…",
        "category": "Grand Company",
        "achievement": "A Snake In The Brass III",
        "patch": "2.0"
    },
    {
        "name_en": "Flamelord… / Flamelady…",
        "category": "Grand Company",
        "achievement": "Burning A Hole In My Pocket III",
        "patch": "2.0"
    },
    {
        "name_en": "…The Stormsworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Maelstrom III",
        "patch": "2.0"
    },
    {
        "name_en": "…The Serpentsworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Twin Adder III",
        "patch": "2.0"
    },
    {
        "name_en": "…The Flamesworn",
        "category": "Grand Company",
        "achievement": "In Good Company: Immortal Flames III",
        "patch": "2.0"
    },
    {
        "name_en": "Stormcarrier…",
        "category": "Grand Company",
        "achievement": "Feuling The Storm III",
        "patch": "2.0"
    },
    {
        "name_en": "Serpentcarrier…",
        "category": "Grand Company",
        "achievement": "Feeding The Serpent III",
        "patch": "2.0"
    },
    {
        "name_en": "Flamecarrier…",
        "category": "Grand Company",
        "achievement": "Fanning The Flames III",
        "patch": "2.0"
    },
    {
        "name_en": "Stormbringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Maelstrom III",
        "patch": "2.0"
    },
    {
        "name_en": "Serpentbringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Twin Adder III",
        "patch": "2.0"
    },
    {
        "name_en": "Flamebringer…",
        "category": "Grand Company",
        "achievement": "To Each According To His Need: Immortal Flames III",
        "patch": "2.0"
    },
    {
        "name_en": "Featherfoot…",
        "category": "Legacy",
        "achievement": "Eight Minutes Or Less Or Your Cargo's Free",
        "patch": "2.0"
    },
    {
        "name_en": "A Bo's Best Friend…",
        "category": "Legacy",
        "achievement": "Handle With Care IV",
        "patch": "2.0"
    },
    {
        "name_en": "Lightning…",
        "category": "Legacy",
        "achievement": "Gone In Eight Minutes",
        "patch": "2.0"
    },
    {
        "name_en": "Cavalier…",
        "category": "Grand Company",
        "achievement": "Pimp Your Ride",
        "patch": "2.0"
    },
    {
        "name_en": "…The Wanderer's Shadow",
        "category": "Legacy",
        "achievement": "Been There, Done That",
        "patch": "2.0"
    },
    {
        "name_en": "…Green Eyes",
        "category": "Items",
        "achievement": "Green Eyes",
        "patch": "2.0"
    },
    {
        "name_en": "…The Strategist",
        "category": "Items",
        "achievement": "The Reader",
        "patch": "2.0"
    },
    {
        "name_en": "…The Reaper",
        "category": "Quests",
        "achievement": "In The Outfield VI",
        "patch": "2.0"
    },
    {
        "name_en": "Dungeon Master…",
        "category": "Battle",
        "achievement": "Dungeon Siege IV",
        "patch": "2.0"
    },
    {
        "name_en": "Tempter of Fate… / Temptress of Fate…",
        "category": "Battle",
        "achievement": "Date With Destiny IV",
        "patch": "2.0"
    },
    {
        "name_en": "Elite Cascadier…",
        "category": "Quests",
        "achievement": "Cascadier Reborn",
        "patch": "2.0"
    },
    {
        "name_en": "Storm Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom I",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom II",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom III",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom IV",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom V",
        "patch": "2.1"
    },
    {
        "name_en": "Storm Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Maelstrom VI",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder I",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder II",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder III",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder IV",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder V",
        "patch": "2.1"
    },
    {
        "name_en": "Serpent Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Twin Adder VI",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Puppy…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames I",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Howler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames II",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Growler…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames III",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Hound…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames IV",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Stalker…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames V",
        "patch": "2.1"
    },
    {
        "name_en": "Flame Chaser…",
        "category": "PvP",
        "achievement": "Cutting Your Wolf Loose: Immortal Flames VI",
        "patch": "2.1"
    },
    {
        "name_en": "…The Ravenous Wolf",
        "category": "PvP",
        "achievement": "Wolfing It Down",
        "patch": "2.1"
    },
    {
        "name_en": "…The Alpha Wolf",
        "category": "PvP",
        "achievement": "Leader Of The Pack",
        "patch": "2.1"
    },
    {
        "name_en": "…The Heart of the Party",
        "category": "Character",
        "achievement": "Leaving A Good Impression I",
        "patch": "2.1"
    },
    {
        "name_en": "Brother of Ash… / Sister of Ash…",
        "category": "Quests",
        "achievement": "A Real Bad Ash",
        "patch": "2.1"
    },
    {
        "name_en": "Sylph-Friend…",
        "category": "Quests",
        "achievement": "Sylph-assured",
        "patch": "2.1"
    },
    {
        "name_en": "Treasure Hunter…",
        "category": "Battle",
        "achievement": "No Stone Unturned",
        "patch": "2.1"
    },
    {
        "name_en": "789th Order Champion…",
        "category": "Quests",
        "achievement": "Kobold As Brass",
        "patch": "2.2"
    },
    {
        "name_en": "Novv Clutchmate…",
        "category": "Quests",
        "achievement": "Licensed To Gill",
        "patch": "2.2"
    },
    {
        "name_en": "…The Ambitious Angler",
        "category": "Quests",
        "achievement": "I Like Big Fish And I Cannot Lie",
        "patch": "2.2"
    },
    {
        "name_en": "…The Meat Shield",
        "category": "Battle",
        "achievement": "A Tankless Job I (Paladin)",
        "patch": "2.2"
    },
    {
        "name_en": "…The Meat Axe",
        "category": "Battle",
        "achievement": "A Tankless Job I (Warrior)",
        "patch": "2.2"
    },
    {
        "name_en": "…Of the Stalwart Shield",
        "category": "Battle",
        "achievement": "A Tankless Job II (Paladin)",
        "patch": "2.2"
    },
    {
        "name_en": "…Of the Stalwart Axe",
        "category": "Battle",
        "achievement": "A Tankless Job II (Warrior)",
        "patch": "2.2"
    },
    {
        "name_en": "Frontline Forerunner…",
        "category": "PvP",
        "achievement": "Walk The Line V",
        "patch": "2.3"
    },
    {
        "name_en": "Storm Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Storm V",
        "patch": "2.3"
    },
    {
        "name_en": "Serpent Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Glade V",
        "patch": "2.3"
    },
    {
        "name_en": "Flame Forerunner…",
        "category": "PvP",
        "achievement": "A Line In The Sand V",
        "patch": "2.3"
    },
    {
        "name_en": "Drone Sniper…",
        "category": "PvP",
        "achievement": "Prime Air IV",
        "patch": "2.3"
    },
    {
        "name_en": "Heliodrome Hero…",
        "category": "PvP",
        "achievement": "Just Say Node IV",
        "patch": "2.3"
    },
    {
        "name_en": "Hunter for Hire…",
        "category": "Battle",
        "achievement": "On Your Mark: B",
        "patch": "2.3"
    },
    {
        "name_en": "Seeker of Fortune…",
        "category": "Battle",
        "achievement": "On Your Mark: A",
        "patch": "2.3"
    },
    {
        "name_en": "Seasoned Tracker…",
        "category": "Battle",
        "achievement": "On Your Mark: S",
        "patch": "2.3"
    },
    {
        "name_en": "Bounty Hunter…",
        "category": "Battle",
        "achievement": "Bring Your B Game III",
        "patch": "2.3"
    },
    {
        "name_en": "Soldier of Fortune…",
        "category": "Battle",
        "achievement": "Bring Your A Game III",
        "patch": "2.3"
    },
    {
        "name_en": "…Captain of the Hunt",
        "category": "Battle",
        "achievement": "Bring Your S Game III",
        "patch": "2.3"
    },
    {
        "name_en": "Rafflesia Reaper…",
        "category": "Battle",
        "achievement": "A Flower By Any Other Name",
        "patch": "2.3"
    },
    {
        "name_en": "Melusine Mauler…",
        "category": "Battle",
        "achievement": "Seconds",
        "patch": "2.3"
    },
    {
        "name_en": "…The Avatar",
        "category": "Battle",
        "achievement": "Obtainium",
        "patch": "2.3"
    },
    {
        "name_en": "Domitor… / Domitrix…",
        "category": "Battle",
        "achievement": "Scent Of A Woman",
        "patch": "2.3"
    },
    {
        "name_en": "The Disassembler…",
        "category": "Items",
        "achievement": "You're Tearing Me Apart I",
        "patch": "2.3"
    },
    {
        "name_en": "Bearer of the Coffer…",
        "category": "Battle",
        "achievement": "Unhide And Seek",
        "patch": "2.3"
    },
    {
        "name_en": "…Defender of Eorzea",
        "category": "Quests",
        "achievement": "Eorzea Defended",
        "patch": "2.3"
    },
    {
        "name_en": "The Postman… / The Postwoman…",
        "category": "Quests",
        "achievement": "The Postmoogle Always Rings Twice",
        "patch": "2.3"
    },
    {
        "name_en": "Ehcatl Blackguard…",
        "category": "Quests",
        "achievement": "That's Ixal, Folks",
        "patch": "2.35"
    },
    {
        "name_en": "…The Negotiator",
        "category": "Quests",
        "achievement": "Sore Thumb",
        "patch": "2.35"
    },
    {
        "name_en": "…The Final Witness",
        "category": "Quests",
        "achievement": "Uncoiled",
        "patch": "2.4"
    },
    {
        "name_en": "…Of Dragons Deep",
        "category": "Quests",
        "achievement": "Imagine Dragon",
        "patch": "2.4"
    },
    {
        "name_en": "Master Caster…",
        "category": "Crafting & Gathering",
        "achievement": "Go Big Or Go Home IX",
        "patch": "2.4"
    },
    {
        "name_en": "…The Shadow",
        "category": "Items",
        "achievement": "Yoshimitsu's Island",
        "patch": "2.4"
    },
    {
        "name_en": "Icebreaker…",
        "category": "Quests",
        "achievement": "Dreams Of Ice",
        "patch": "2.4"
    },
    {
        "name_en": "…Of the Silver Lining",
        "category": "Quests",
        "achievement": "Out Of The Dark",
        "patch": "2.5"
    },
    {
        "name_en": "Gentleman… / Gentlewoman…",
        "category": "Quests",
        "achievement": "I'll Be There For You",
        "patch": "2.5"
    },
    {
        "name_en": "Cupid…",
        "category": "Quests",
        "achievement": "Love Actually",
        "patch": "2.5"
    },
    {
        "name_en": "…Tamer of Steeds",
        "category": "Items",
        "achievement": "Ichiban",
        "patch": "2.5"
    },
    {
        "name_en": "…The Unsevered",
        "category": "Battle",
        "achievement": "Missed The Cut",
        "patch": "2.5"
    },
    {
        "name_en": "Slaughterhouse...",
        "category": "PvP",
        "achievement": "Slaughterhouse Four",
        "patch": "2.5"
    },
    {
        "name_en": "…The Hand of Mercy",
        "category": "PvP",
        "achievement": "Slaughterhouse Five",
        "patch": "2.5"
    },
    {
        "name_en": "…The Light in Hand",
        "category": "Items",
        "achievement": "Tool Time For The Hand",
        "patch": "2.5"
    },
    {
        "name_en": "…The Light of the Land",
        "category": "Items",
        "achievement": "Tool Time For The Land",
        "patch": "2.5"
    },
    {
        "name_en": "…Z",
        "category": "Items",
        "achievement": "The Letter Z",
        "patch": "2.51"
    },
    {
        "name_en": "Golemancer…",
        "category": "Quests",
        "achievement": "Welcome To The Dollhouse",
        "patch": "2.51"
    },
    {
        "name_en": "Gambler…",
        "category": "Character",
        "achievement": "What Happens In The Saucer I",
        "patch": "2.51"
    },
    {
        "name_en": "High Roller…",
        "category": "Character",
        "achievement": "How I Learned To Stop Worrying And Love The Saucer",
        "patch": "2.51"
    },
    {
        "name_en": "Chocobo Breeder…",
        "category": "Character",
        "achievement": "Go Forth And Multiply",
        "patch": "2.51"
    },
    {
        "name_en": "Chocobo Trainer…",
        "category": "Character",
        "achievement": "Training Day",
        "patch": "2.51"
    },
    {
        "name_en": "Bug Boy… / Bug Girl…",
        "category": "Character",
        "achievement": "Off To The Races I",
        "patch": "2.51"
    },
    {
        "name_en": "Senior Jockey…",
        "category": "Character",
        "achievement": "Off To The Races III",
        "patch": "2.51"
    },
    {
        "name_en": "Veteran Jockey…",
        "category": "Character",
        "achievement": "Off To The Races IV",
        "patch": "2.51"
    },
    {
        "name_en": "…The First Across",
        "category": "Character",
        "achievement": "Winningest Jockey",
        "patch": "2.51"
    },
    {
        "name_en": "Deck Holder…",
        "category": "Character",
        "achievement": "Triple-decker II",
        "patch": "2.51"
    },
    {
        "name_en": "Deck Hoarder…",
        "category": "Character",
        "achievement": "Triple-decker III",
        "patch": "2.51"
    },
    {
        "name_en": "…The Trinity",
        "category": "Character",
        "achievement": "Always Bet On Me",
        "patch": "2.51"
    },
    {
        "name_en": "Duelist…",
        "category": "Character",
        "achievement": "Bracket Breaker",
        "patch": "2.51"
    },
    {
        "name_en": "Keymaster… / Gatekeeper…",
        "category": "Character",
        "achievement": "Enemy At The GATE III",
        "patch": "2.51"
    },
    {
        "name_en": "…The Fungah",
        "category": "Character",
        "achievement": "WTFungah III",
        "patch": "2.51"
    },
    {
        "name_en": "Moneybags…",
        "category": "Character",
        "achievement": "Work Smarter, Not Harder",
        "patch": "2.51"
    },
    {
        "name_en": "…Raiser of Mountains",
        "category": "Character",
        "achievement": "Mountains Out Of Gil-hills",
        "patch": "2.51"
    },
    {
        "name_en": "…Bearer of the Torch",
        "category": "Quests",
        "achievement": "My Left Arm",
        "patch": "2.55"
    },
    {
        "name_en": "Postmaster…",
        "category": "Quests",
        "achievement": "Postal",
        "patch": "2.55"
    },
    {
        "name_en": "Half-boiled Hero… / Half-boiled Heroine…",
        "category": "Quests",
        "achievement": "Eggspialidocious",
        "patch": "2.55"
    },
    {
        "name_en": "Unbeliever…",
        "category": "Quests",
        "achievement": "Lucky Number 7",
        "patch": "3.0"
    },
    {
        "name_en": "…The Redeemed",
        "category": "Quests",
        "achievement": "Gaol Break",
        "patch": "3.0"
    },
    {
        "name_en": "Nidhogg Slayer…",
        "category": "Quests",
        "achievement": "Orthodox Mayhem",
        "patch": "3.0"
    },
    {
        "name_en": "…Of The Silver Fuller",
        "category": "Quests",
        "achievement": "You Say You Want A Revolution",
        "patch": "3.0"
    },
    {
        "name_en": "…Imperial Nuisance",
        "category": "Quests",
        "achievement": "The Faith That Drives Us",
        "patch": "3.0"
    },
    {
        "name_en": "Under-archon…",
        "category": "Quests",
        "achievement": "Hope Enkindled",
        "patch": "3.0"
    },
    {
        "name_en": "The End of Ascalon…",
        "category": "Quests",
        "achievement": "Looking Up",
        "patch": "3.0"
    },
    {
        "name_en": "…The Oathkeeper",
        "category": "Quests",
        "achievement": "Like a Knight In Shining Armor II",
        "patch": "3.0"
    },
    {
        "name_en": "…Of the 14th Chakra",
        "category": "Quests",
        "achievement": "Bulletproof II",
        "patch": "3.0"
    },
    {
        "name_en": "…The Mythril Heart",
        "category": "Quests",
        "achievement": "I Am The Warrior II",
        "patch": "3.0"
    },
    {
        "name_en": "…The Azure Dragoon",
        "category": "Quests",
        "achievement": "Dragoon Age II",
        "patch": "3.0"
    },
    {
        "name_en": "…Skysinger",
        "category": "Quests",
        "achievement": "A Bard's Tale II",
        "patch": "3.0"
    },
    {
        "name_en": "Pure White…",
        "category": "Quests",
        "achievement": "Seeing White II",
        "patch": "3.0"
    },
    {
        "name_en": "Annihilator…",
        "category": "Quests",
        "achievement": "Back In Black II",
        "patch": "3.0"
    },
    {
        "name_en": "…Dreadspawn",
        "category": "Quests",
        "achievement": "Soul Summoner II",
        "patch": "3.0"
    },
    {
        "name_en": "Nymian Marine…",
        "category": "Quests",
        "achievement": "Flying Colors II",
        "patch": "3.0"
    },
    {
        "name_en": "…The Darkest Shadow",
        "category": "Quests",
        "achievement": "Against The Ninja II",
        "patch": "3.0"
    },
    {
        "name_en": "…Blackblood",
        "category": "Quests",
        "achievement": "A Dark Day's Knight II",
        "patch": "3.0"
    },
    {
        "name_en": "Liberator…",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man II",
        "patch": "3.0"
    },
    {
        "name_en": "Stargazer…",
        "category": "Quests",
        "achievement": "The Stars In Our Faults II",
        "patch": "3.0"
    },
    {
        "name_en": "Illuminati Quencher…",
        "category": "Quests",
        "achievement": "Awake The Metal",
        "patch": "3.0"
    },
    {
        "name_en": "…Finder of False Gods",
        "category": "Quests",
        "achievement": "The War Still Wageth On",
        "patch": "3.0"
    },
    {
        "name_en": "Lighter than Air…",
        "category": "Quests",
        "achievement": "Walking On Sunshine",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of War…",
        "category": "Character",
        "achievement": "Mastering War II",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic II",
        "patch": "3.0"
    },
    {
        "name_en": "Dark Driver…",
        "category": "Battle",
        "achievement": "A Tankless Job I (Dark Knight)",
        "patch": "3.0"
    },
    {
        "name_en": "…Of the Stalwart Sword",
        "category": "Battle",
        "achievement": "A Tankless Job II (Dark Knight)",
        "patch": "3.0"
    },
    {
        "name_en": "Keeper of Knowledge…",
        "category": "PvP",
        "achievement": "Hounding The Rock IV",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of the Hand…",
        "category": "Character",
        "achievement": "Mastering The Hand II",
        "patch": "3.0"
    },
    {
        "name_en": "Grandmaster of the Land…",
        "category": "Character",
        "achievement": "Mastering The Land II",
        "patch": "3.0"
    },
    {
        "name_en": "Molder of Masterpieces…",
        "category": "Items",
        "achievement": "I Made That (Worh Collecting) III",
        "patch": "3.0"
    },
    {
        "name_en": "Amasser of Masterpieces…",
        "category": "Items",
        "achievement": "I Collected That III",
        "patch": "3.0"
    },
    {
        "name_en": "Business Associate…",
        "category": "Items",
        "achievement": "I Traded That III",
        "patch": "3.0"
    },
    {
        "name_en": "Master Carpenter…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Carpenter V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Blacksmith…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Blacksmith V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Armorer…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Armorer V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Goldsmith…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Goldsmith V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Leatherworker…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Leatherworker V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Weaver…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Weaver V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Alchemist…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Alchemist V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Culinarian…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Detail: Culinarian V",
        "patch": "3.0"
    },
    {
        "name_en": "Master Miner…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Quality: Miner IV",
        "patch": "3.0"
    },
    {
        "name_en": "Master Botanist…",
        "category": "Crafting & Gathering",
        "achievement": "An Eye For Quality: Botanist IV",
        "patch": "3.0"
    },
    {
        "name_en": "Master Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "The One That Didn't Get Away IV",
        "patch": "3.0"
    },
    {
        "name_en": "…The Fortunate",
        "category": "Battle",
        "achievement": "Date With Destiny VI",
        "patch": "3.0"
    },
    {
        "name_en": "Good Samaritan…",
        "category": "Battle",
        "achievement": "The Kindness Of Strangers V",
        "patch": "3.0"
    },
    {
        "name_en": "Minion Collector…",
        "category": "Items",
        "achievement": "Despicable You I",
        "patch": "3.1"
    },
    {
        "name_en": "Minion Master…",
        "category": "Items",
        "achievement": "Despicable You II",
        "patch": "3.1"
    },
    {
        "name_en": "Mammeteer…",
        "category": "Items",
        "achievement": "Follow The Leader I",
        "patch": "3.1"
    },
    {
        "name_en": "…Prince of Verminion / …Princess of Verminion",
        "category": "Character",
        "achievement": "A Load Of Verminion III",
        "patch": "3.1"
    },
    {
        "name_en": "…Lord of Verminion / …Lady of Verminion",
        "category": "Character",
        "achievement": "A Load Of Verminion IV",
        "patch": "3.1"
    },
    {
        "name_en": "…House Fortemps Knight",
        "category": "Quests",
        "achievement": "So It Goes",
        "patch": "3.1"
    },
    {
        "name_en": "Sky Pirate…",
        "category": "Quests",
        "achievement": "Paying The Bills",
        "patch": "3.1"
    },
    {
        "name_en": "…The Noumenon",
        "category": "Quests",
        "achievement": "Anima Crossing",
        "patch": "3.15"
    },
    {
        "name_en": "Sundrop Dancer…",
        "category": "Quests",
        "achievement": "Top Gundu",
        "patch": "3.1"
    },
    {
        "name_en": "Myth Breaker…",
        "category": "Battle",
        "achievement": "The King And Die",
        "patch": "3.1"
    },
    {
        "name_en": "Veteran Explorer…",
        "category": "Exploration",
        "achievement": "Out Of Sight Out Of Bounds II",
        "patch": "3.1"
    },
    {
        "name_en": "Special Advisor…",
        "category": "Quests",
        "achievement": "Back To School I",
        "patch": "3.15"
    },
    {
        "name_en": "Notorious Monster Slayer…",
        "category": "Exploration",
        "achievement": "Crown Of Thorns V",
        "patch": "3.1"
    },
    {
        "name_en": "Hungry Wolf…",
        "category": "PvP",
        "achievement": "A Clean Plate",
        "patch": "3.2"
    },
    {
        "name_en": "…The Devourer",
        "category": "PvP",
        "achievement": "Breaking Fast With Champions",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unmoving",
        "category": "PvP",
        "achievement": "A Stalwart To Remember",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unrelenting",
        "category": "PvP",
        "achievement": "A Slayer To Remember",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unseen",
        "category": "PvP",
        "achievement": "A Sniper To Remember",
        "patch": "3.2"
    },
    {
        "name_en": "…The Unleashed",
        "category": "PvP",
        "achievement": "A Spellcaster To Remember",
        "patch": "3.2"
    },
    {
        "name_en": "…The Undamaged",
        "category": "PvP",
        "achievement": "A Sawbones To Remember",
        "patch": "3.2"
    },
    {
        "name_en": "Mentor…",
        "category": "Character",
        "achievement": "I Hope Mentor Will Notice Me II",
        "patch": "3.2"
    },
    {
        "name_en": "Mentor of Mentors…",
        "category": "Character",
        "achievement": "I Hope Mentor Will Notice Me IV",
        "patch": "3.2"
    },
    {
        "name_en": "Carrier of the Kettle…",
        "category": "Quests",
        "achievement": "A Watched Pot",
        "patch": "3.2"
    },
    {
        "name_en": "…The Gear of Change",
        "category": "Quests",
        "achievement": "First Gear",
        "patch": "3.2"
    },
    {
        "name_en": "…Allthoughts",
        "category": "Quests",
        "achievement": "The Midas Touch",
        "patch": "3.2"
    },
    {
        "name_en": "…The Newmind",
        "category": "Quests",
        "achievement": "Vathcore",
        "patch": "3.2"
    },
    {
        "name_en": "…The Dragonsong",
        "category": "Quests",
        "achievement": "Floor The Horde",
        "patch": "3.3"
    },
    {
        "name_en": "Polis Raider…",
        "category": "Battle",
        "achievement": "Life Aquatic I",
        "patch": "3.3"
    },
    {
        "name_en": "Polis Dweller…",
        "category": "Battle",
        "achievement": "Life Aquatic IV",
        "patch": "3.3"
    },
    {
        "name_en": "Polis Lord… / Polis Lady…",
        "category": "Battle",
        "achievement": "The Slow Regard Of Stolen Things IV",
        "patch": "3.3"
    },
    {
        "name_en": "Pom Friend…",
        "category": "Quests",
        "achievement": "Top Mog",
        "patch": "3.3"
    },
    {
        "name_en": "Leader of the Pack…",
        "category": "PvP",
        "achievement": "Head Of The Table",
        "patch": "3.35"
    },
    {
        "name_en": "Beta Wolf…",
        "category": "PvP",
        "achievement": "Dinner For Two (to Ten)",
        "patch": "3.35"
    },
    {
        "name_en": "Hunter Wolf…",
        "category": "PvP",
        "achievement": "Dinner For Eleven (to One Hundred)",
        "patch": "3.35"
    },
    {
        "name_en": "Bronze Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Bronze",
        "patch": "3.35"
    },
    {
        "name_en": "Silver Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Silver",
        "patch": "3.35"
    },
    {
        "name_en": "Gold Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Gold",
        "patch": "3.35"
    },
    {
        "name_en": "Platinum Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Platinum",
        "patch": "3.35"
    },
    {
        "name_en": "Diamond Wolf…",
        "category": "PvP",
        "achievement": "Dining Solo: Diamond",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the First Pack",
        "category": "PvP",
        "achievement": "It's My Party",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Second Pack",
        "category": "PvP",
        "achievement": "Party Of Two (to Ten)",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Hungry Pack",
        "category": "PvP",
        "achievement": "Party Of Eleven (to Thirty)",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Bronze Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Bronze",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Silver Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Silver",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Gold Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Gold",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Platinum Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Platinum",
        "patch": "3.35"
    },
    {
        "name_en": "…Of the Diamond Pack",
        "category": "PvP",
        "achievement": "Diners' Club: Diamond",
        "patch": "3.35"
    },
    {
        "name_en": "…The Knight of Glory",
        "category": "PvP",
        "achievement": "In A Blaze Of Glory VI",
        "patch": "3.3"
    },
    {
        "name_en": "…The Chief Mourner",
        "category": "Quests",
        "achievement": "I'll Sleep When I'm Dead",
        "patch": "3.35"
    },
    {
        "name_en": "…The Wings of Time",
        "category": "Quests",
        "achievement": "Back In Time",
        "patch": "3.4"
    },
    {
        "name_en": "…Surrenderer of Souls",
        "category": "Quests",
        "achievement": "No Retreat, No Surrender",
        "patch": "3.4"
    },
    {
        "name_en": "Khloe's Friend…",
        "category": "Character",
        "achievement": "And Khloe Was Her Name-o II",
        "patch": "3.4"
    },
    {
        "name_en": "Khloe's Best Friend…",
        "category": "Character",
        "achievement": "And Khloe Was Her Name-o VII",
        "patch": "3.4"
    },
    {
        "name_en": "…Hero of Gelmorra",
        "category": "Battle",
        "achievement": "In Too Deep VI",
        "patch": "3.45"
    },
    {
        "name_en": "…Lightbringer",
        "category": "Items",
        "achievement": "Some Kinna Wonderful",
        "patch": "3.45"
    },
    {
        "name_en": "Lonely Explorer…",
        "category": "Items",
        "achievement": "Pal-less Palace II",
        "patch": "3.45"
    },
    {
        "name_en": "…The Lucky",
        "category": "Items",
        "achievement": "For The Hoard III",
        "patch": "3.4"
    },
    {
        "name_en": "…Of the Sixth Sense",
        "category": "Items",
        "achievement": "The Trouble With Buried II",
        "patch": "3.4"
    },
    {
        "name_en": "Corpse Dancer…",
        "category": "Items",
        "achievement": "Dead Tired",
        "patch": "3.45"
    },
    {
        "name_en": "Makai Master…",
        "category": "Items",
        "achievement": "Protector",
        "patch": "3.5"
    },
    {
        "name_en": "Garo…",
        "category": "Items",
        "achievement": "Echoes Of The Golden Wolf",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Monk…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Fist",
        "patch": "3.5"
    },
    {
        "name_en": "Barago…",
        "category": "Items",
        "achievement": "Echoes Of Undying Twilight",
        "patch": "3.5"
    },
    {
        "name_en": "Dan…",
        "category": "Items",
        "achievement": "Echoes Of The White Night",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Bard…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Bow",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Black Mage…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Dark",
        "patch": "3.5"
    },
    {
        "name_en": "Makai White Mage…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Sun",
        "patch": "3.5"
    },
    {
        "name_en": "Zero…",
        "category": "Items",
        "achievement": "Echoes Of The Silver Wolf",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Summoner…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Vessel",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Scholar…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Lore",
        "patch": "3.5"
    },
    {
        "name_en": "Kiba…",
        "category": "Items",
        "achievement": "Echoes Of Darkness",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Machinist…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Arm",
        "patch": "3.5"
    },
    {
        "name_en": "Makai Astrologian…",
        "category": "Items",
        "achievement": "Echoes Of The Makai Star",
        "patch": "3.5"
    },
    {
        "name_en": "Moonlifter…",
        "category": "Quests",
        "achievement": "Hey Now, You're An All-star",
        "patch": "3.5"
    },
    {
        "name_en": "…The Finest Pupil's Ally",
        "category": "Quests",
        "achievement": "School's Out Forever",
        "patch": "3.5"
    },
    {
        "name_en": "Fatewalker…",
        "category": "Quests",
        "achievement": "Five Minutes Of Fate",
        "patch": "3.56"
    },
    {
        "name_en": "…Of the Holy Body",
        "category": "Quests",
        "achievement": "Back To School III",
        "patch": "3.5"
    },
    {
        "name_en": "Gigi's Best Friend…",
        "category": "Quests",
        "achievement": "That Is What You Are",
        "patch": "3.5"
    },
    {
        "name_en": "…Tamer of the Undying Flame",
        "category": "Items",
        "achievement": "Just Like Fire",
        "patch": "3.5"
    },
    {
        "name_en": "Mortal Fist…",
        "category": "PvP",
        "achievement": "Mama Said Knock You Out II",
        "patch": "3.55a"
    },
    {
        "name_en": "…Rhalgr's Right Fist",
        "category": "PvP",
        "achievement": "Mama Said Knock You Out V",
        "patch": "3.55a"
    },
    {
        "name_en": "Tablesetter…",
        "category": "PvP",
        "achievement": "How Can I Help II",
        "patch": "3.55a"
    },
    {
        "name_en": "…Halone's Cup Bearer",
        "category": "PvP",
        "achievement": "How Can I Help V",
        "patch": "3.55a"
    },
    {
        "name_en": "Zhloe's Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Zhloe Aliapoh V",
        "patch": "3.55a"
    },
    {
        "name_en": "Zhloe's Best Friend…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Zhloe Aliapoh VI",
        "patch": "3.55a"
    },
    {
        "name_en": "…Survivor of the Song",
        "category": "Quests",
        "achievement": "Incidentally Speaking",
        "patch": "4.0"
    },
    {
        "name_en": "Ijin Traveler…",
        "category": "Quests",
        "achievement": "Destination Unknown",
        "patch": "4.0"
    },
    {
        "name_en": "Confederate…",
        "category": "Quests",
        "achievement": "Unexplained",
        "patch": "4.0"
    },
    {
        "name_en": "Adversary…",
        "category": "Quests",
        "achievement": "Put Your Wings Up",
        "patch": "4.0"
    },
    {
        "name_en": "Steppe Warrior…",
        "category": "Quests",
        "achievement": "Crimson Footprints",
        "patch": "4.0"
    },
    {
        "name_en": "…The Returned",
        "category": "Quests",
        "achievement": "Catch Me If You Can",
        "patch": "4.0"
    },
    {
        "name_en": "Lyse's Right Fist…",
        "category": "Quests",
        "achievement": "Cheek To Cheek",
        "patch": "4.0"
    },
    {
        "name_en": "…The Liberator",
        "category": "Quests",
        "achievement": "The Measure Of His Reach",
        "patch": "4.0"
    },
    {
        "name_en": "Deltascape Deleter…",
        "category": "Quests",
        "achievement": "Delta Force",
        "patch": "4.01"
    },
    {
        "name_en": "Ul Cup Champion…",
        "category": "Quests",
        "achievement": "Like a Knight In Shining Armor III",
        "patch": "4.0"
    },
    {
        "name_en": "…The Fistful",
        "category": "Quests",
        "achievement": "Bulletproof III",
        "patch": "4.0"
    },
    {
        "name_en": "…Loved by the Axe",
        "category": "Quests",
        "achievement": "I Am The Warrior III",
        "patch": "4.0"
    },
    {
        "name_en": "…The Blood Dragoon",
        "category": "Quests",
        "achievement": "Dragoon Age III",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the True Autumn",
        "category": "Quests",
        "achievement": "A Bard's Tale III",
        "patch": "4.0"
    },
    {
        "name_en": "Padjal Protector…",
        "category": "Quests",
        "achievement": "Seeing White III",
        "patch": "4.0"
    },
    {
        "name_en": "Gembreaker…",
        "category": "Quests",
        "achievement": "Back In Black III",
        "patch": "4.0"
    },
    {
        "name_en": "…The First Caller",
        "category": "Quests",
        "achievement": "Soul Summoner III",
        "patch": "4.0"
    },
    {
        "name_en": "Keeper of the Lilacs…",
        "category": "Quests",
        "achievement": "Flying Colors III",
        "patch": "4.0"
    },
    {
        "name_en": "Eorzean Ninja…",
        "category": "Quests",
        "achievement": "Against The Ninja III",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Swirling Abyss",
        "category": "Quests",
        "achievement": "A Dark Day's Knight III",
        "patch": "4.0"
    },
    {
        "name_en": "…The Howler",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man III",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Eastern Skies",
        "category": "Quests",
        "achievement": "The Stars In Our Faults III",
        "patch": "4.0"
    },
    {
        "name_en": "…The Red",
        "category": "Quests",
        "achievement": "Red On Arrival II",
        "patch": "4.0"
    },
    {
        "name_en": "…Muso",
        "category": "Quests",
        "achievement": "SAM I Am II",
        "patch": "4.0"
    },
    {
        "name_en": "God of War… / Goddess of War…",
        "category": "Character",
        "achievement": "Mastering War III",
        "patch": "4.0"
    },
    {
        "name_en": "God of Magic… / Goddess of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic III",
        "patch": "4.0"
    },
    {
        "name_en": "God of the Hand… / Goddess of the Hand…",
        "category": "Character",
        "achievement": "Mastering The Hand III",
        "patch": "4.0"
    },
    {
        "name_en": "God of the Land… / Goddess of the Land…",
        "category": "Character",
        "achievement": "Mastering The Land III",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Longest Hunt",
        "category": "Battle",
        "achievement": "Bring Your A Game V",
        "patch": "4.0"
    },
    {
        "name_en": "…Of the Endless Hunt",
        "category": "Battle",
        "achievement": "Bring Your A Game VI",
        "patch": "4.0"
    },
    {
        "name_en": "Thrillseeker…",
        "category": "Battle",
        "achievement": "Bring Your S Game V",
        "patch": "4.0"
    },
    {
        "name_en": "Ultimate Thrillseeker…",
        "category": "Battle",
        "achievement": "Bring Your S Game VI",
        "patch": "4.0"
    },
    {
        "name_en": "Canal Rider…",
        "category": "Battle",
        "achievement": "Raider Of The Lost Canals I",
        "patch": "4.05"
    },
    {
        "name_en": "Canal Dweller…",
        "category": "Battle",
        "achievement": "Raider Of The Lost Canals IV",
        "patch": "4.05"
    },
    {
        "name_en": "Canal Lord… / Canal Lady…",
        "category": "Battle",
        "achievement": "The Deep End IV",
        "patch": "4.05"
    },
    {
        "name_en": "…The Necromancer",
        "category": "Battle",
        "achievement": "Pal-less Palace III",
        "patch": "4.0"
    },
    {
        "name_en": "Naago's Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: M'naago V",
        "patch": "4.1"
    },
    {
        "name_en": "Naago's Partner…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: M'naago VI",
        "patch": "4.1"
    },
    {
        "name_en": "…Wings of Steel",
        "category": "PvP",
        "achievement": "Roll The Dice V",
        "patch": "4.15"
    },
    {
        "name_en": "…Wings of Fire",
        "category": "PvP",
        "achievement": "Die Another Day V",
        "patch": "4.15"
    },
    {
        "name_en": "Deep Canal Raider…",
        "category": "Battle",
        "achievement": "Raider Of The Hidden Canals I",
        "patch": "4.1"
    },
    {
        "name_en": "Deep Canal Dweller…",
        "category": "Battle",
        "achievement": "Raider Of The Hidden Canals IV",
        "patch": "4.1"
    },
    {
        "name_en": "…The Luckiest of Lords / …The Luckiest of Ladies",
        "category": "Battle",
        "achievement": "The Deeper End IV",
        "patch": "4.1"
    },
    {
        "name_en": "Crimson Explorer…",
        "category": "Exploration",
        "achievement": "Oh, The Sights We'll See II",
        "patch": "4.1"
    },
    {
        "name_en": "…The Legend",
        "category": "Battle",
        "achievement": "Resistance Is Futile",
        "patch": "4.11"
    },
    {
        "name_en": "Raubahn's Left Arm…",
        "category": "Quests",
        "achievement": "More Heroes",
        "patch": "4.1"
    },
    {
        "name_en": "…Of the Blue",
        "category": "Quests",
        "achievement": "Divinity: Original Kojin",
        "patch": "4.1"
    },
    {
        "name_en": "…Fashion Leader",
        "category": "Character",
        "achievement": "You Look Marvelous III",
        "patch": "4.2"
    },
    {
        "name_en": "…Eversharp",
        "category": "PvP",
        "achievement": "Stay Sharp",
        "patch": "4.2"
    },
    {
        "name_en": "…The New Sun",
        "category": "Quests",
        "achievement": "Solar Cycle",
        "patch": "4.2"
    },
    {
        "name_en": "Snake in the Grass…",
        "category": "Quests",
        "achievement": "My Anantaconda",
        "patch": "4.2"
    },
    {
        "name_en": "Siltwater Socialite…",
        "category": "Quests",
        "achievement": "In A Barrel",
        "patch": "4.3"
    },
    {
        "name_en": "Matchmaker…",
        "category": "Quests",
        "achievement": "MeetMog",
        "patch": "4.3"
    },
    {
        "name_en": "Eorzean Ninja Warrior…",
        "category": "Quests",
        "achievement": "Tonight, The Stars Align",
        "patch": "4.3"
    },
    {
        "name_en": "Vanguard…",
        "category": "PvP",
        "achievement": "Front And Center VI",
        "patch": "4.3"
    },
    {
        "name_en": "Kurenai's Best Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Kurenai V",
        "patch": "4.3"
    },
    {
        "name_en": "Kurenai's Partner…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Kurenai VI",
        "patch": "4.3"
    },
    {
        "name_en": "…Under the Moonlight",
        "category": "Quests",
        "achievement": "Lunar Cycle",
        "patch": "4.3"
    },
    {
        "name_en": "…The Ultimate Legend",
        "category": "Battle",
        "achievement": "Ultimatum",
        "patch": "4.31"
    },
    {
        "name_en": "Calamatologist…",
        "category": "Quests",
        "achievement": "Give Me Five",
        "patch": "4.35"
    },
    {
        "name_en": "Hiruko Hunter…",
        "category": "Battle",
        "achievement": "She's So High III",
        "patch": "4.35"
    },
    {
        "name_en": "Heavenly Gate Crasher…",
        "category": "Battle",
        "achievement": "She's So High V",
        "patch": "4.35"
    },
    {
        "name_en": "True Hero…",
        "category": "Items",
        "achievement": "Dressed For Heaven",
        "patch": "4.35"
    },
    {
        "name_en": "Lone Hero…",
        "category": "Battle",
        "achievement": "Heaven Is A Lonely Place II",
        "patch": "4.35"
    },
    {
        "name_en": "Hoarder…",
        "category": "Battle",
        "achievement": "For The Hoard V",
        "patch": "4.35"
    },
    {
        "name_en": "Monster Hunter…",
        "category": "Quests",
        "achievement": "The New King On The Block",
        "patch": "4.36"
    },
    {
        "name_en": "Prelude in Violet…",
        "category": "Quests",
        "achievement": "A History Of Violet",
        "patch": "4.4"
    },
    {
        "name_en": "…Philanthropist",
        "category": "Character",
        "achievement": "Bio-Doma V",
        "patch": "4.4"
    },
    {
        "name_en": "Altar Boy… / Altar Girl…",
        "category": "Battle",
        "achievement": "Raider Of The Shifting Altars I",
        "patch": "4.4"
    },
    {
        "name_en": "…The Devout",
        "category": "Battle",
        "achievement": "Raider Of The Shifting Altars IV",
        "patch": "4.4"
    },
    {
        "name_en": "Invoker of Gods…",
        "category": "Battle",
        "achievement": "The Deepest End IV",
        "patch": "4.4"
    },
    {
        "name_en": "...Kyubi Tamer",
        "category": "Items",
        "achievement": "Slute Of The Plume",
        "patch": "4.45"
    },
    {
        "name_en": "Mahjong Enthusiast…",
        "category": "Character",
        "achievement": "Tile And Error II",
        "patch": "4.45"
    },
    {
        "name_en": "Mahjong Master…",
        "category": "Character",
        "achievement": "Tile And Error III",
        "patch": "4.45"
    },
    {
        "name_en": "Little Piggy…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Adkiragh V",
        "patch": "4.45"
    },
    {
        "name_en": "Tough Customer…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Adkiragh VI",
        "patch": "4.45"
    },
    {
        "name_en": "Blue Blood…",
        "category": "Character",
        "achievement": "The More You Know IV",
        "patch": "4.45"
    },
    {
        "name_en": "…Mask of the Blue",
        "category": "Battle",
        "achievement": "Smokin' VI",
        "patch": "4.45"
    },
    {
        "name_en": "Perfect Blue…",
        "category": "Battle",
        "achievement": "Something Borrowed",
        "patch": "4.45"
    },
    {
        "name_en": "Eurekan Explorer…",
        "category": "Exploration",
        "achievement": "Making The Most Of Hydatos",
        "patch": "4.5"
    },
    {
        "name_en": "…A Requiem For Heroes",
        "category": "Quests",
        "achievement": "Swan Song",
        "patch": "4.5"
    },
    {
        "name_en": "…The Soboro",
        "category": "Quests",
        "achievement": "Good Night, Sweet Hildy",
        "patch": "4.5"
    },
    {
        "name_en": "…Kageyama Killer",
        "category": "Quests",
        "achievement": "West Meets East",
        "patch": "4.5"
    },
    {
        "name_en": "Kingsglaive…",
        "category": "Quests",
        "achievement": "Borther From Another Mothercrystal",
        "patch": "4.5"
    },
    {
        "name_en": "…Lord of the Fetch / …Lady of the Fetch",
        "category": "Quests",
        "achievement": "Live To Serve",
        "patch": "4.45"
    },
    {
        "name_en": "Grandmaster Caster…",
        "category": "Crafting & Gathering",
        "achievement": "Go Big Or Go Home XVI",
        "patch": "4.5"
    },
    {
        "name_en": "Soul of War…",
        "category": "Character",
        "achievement": "Mastering War IV",
        "patch": "5.0"
    },
    {
        "name_en": "Sould of Magic…",
        "category": "Character",
        "achievement": "Mastering Magic IV",
        "patch": "5.0"
    },
    {
        "name_en": "Soul of the Craft…",
        "category": "Character",
        "achievement": "Mastering The Hand IV",
        "patch": "5.0"
    },
    {
        "name_en": "Soul of the Harvest…",
        "category": "Character",
        "achievement": "Mastering The Land IV",
        "patch": "5.0"
    },
    {
        "name_en": "Outlander…",
        "category": "Quests",
        "achievement": "Between Two Worlds",
        "patch": "5.0"
    },
    {
        "name_en": "…The Fae-touched",
        "category": "Quests",
        "achievement": "Realpolitik",
        "patch": "5.0"
    },
    {
        "name_en": "Seeker of Hidden Truths…",
        "category": "Quests",
        "achievement": "Journey to The Past",
        "patch": "5.0"
    },
    {
        "name_en": "…Of the Sunless Sea",
        "category": "Quests",
        "achievement": "Shrouded In Darkness",
        "patch": "5.0"
    },
    {
        "name_en": "Enemy of Innocence…",
        "category": "Quests",
        "achievement": "Warden Of Light",
        "patch": "5.0"
    },
    {
        "name_en": "Shadowbringer…",
        "category": "Quests",
        "achievement": "Shadowbringers",
        "patch": "5.0"
    },
    {
        "name_en": "Sworn Protector…",
        "category": "Quests",
        "achievement": "Gunnhildr's Blade I",
        "patch": "5.0"
    },
    {
        "name_en": "…The Heart's Beat",
        "category": "Quests",
        "achievement": "No Friends Of Mine I",
        "patch": "5.0"
    },
    {
        "name_en": "Living Memory…",
        "category": "Quests",
        "achievement": "Tales To Be Told",
        "patch": "5.0"
    },
    {
        "name_en": "Bulwark between Worlds…",
        "category": "Quests",
        "achievement": "Like A Knight In Shining Armor IV",
        "patch": "5.0"
    },
    {
        "name_en": "…The Transcendent",
        "category": "Quests",
        "achievement": "Bulletproof IV",
        "patch": "5.0"
    },
    {
        "name_en": "Worldcleaver…",
        "category": "Quests",
        "achievement": "I Am The Warrior IV",
        "patch": "5.0"
    },
    {
        "name_en": "Bolt from the Black…",
        "category": "Quests",
        "achievement": "Dragoon Age IV",
        "patch": "5.0"
    },
    {
        "name_en": "…The Song upon the Wind",
        "category": "Quests",
        "achievement": "A Bard's Tale IV",
        "patch": "5.0"
    },
    {
        "name_en": "Firstblessed…",
        "category": "Quests",
        "achievement": "Seeing White IV",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Stranger Shadow",
        "category": "Quests",
        "achievement": "Back In Black IV",
        "patch": "5.0"
    },
    {
        "name_en": "Farcaller…",
        "category": "Quests",
        "achievement": "Soul Summoner IV",
        "patch": "5.0"
    },
    {
        "name_en": "Knower of Twin Worlds…",
        "category": "Quests",
        "achievement": "Flying Colors IV",
        "patch": "5.0"
    },
    {
        "name_en": "Shadow of the Other…",
        "category": "Quests",
        "achievement": "Against The Ninja IV",
        "patch": "5.0"
    },
    {
        "name_en": "…The Boundless Dark",
        "category": "Quests",
        "achievement": "A Dark Day's Knight IV",
        "patch": "5.0"
    },
    {
        "name_en": "…The Shot Heard Across Worlds",
        "category": "Quests",
        "achievement": "I'm A Machinist, Not A Man IV",
        "patch": "5.0"
    },
    {
        "name_en": "Distant Stargazer…",
        "category": "Quests",
        "achievement": "The Stars In Our Faults IV",
        "patch": "5.0"
    },
    {
        "name_en": "Dualistic Duelist…",
        "category": "Quests",
        "achievement": "Red On Arrival III",
        "patch": "5.0"
    },
    {
        "name_en": "Samurai in a Strange Land…",
        "category": "Quests",
        "achievement": "SAM I Am III",
        "patch": "5.0"
    },
    {
        "name_en": "Wandering Vanguard…",
        "category": "Quests",
        "achievement": "Gunnhildr's Blade II",
        "patch": "5.0"
    },
    {
        "name_en": "Riftdancer…",
        "category": "Quests",
        "achievement": "No Friends Of Mine II",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Smith…",
        "category": "Quests",
        "achievement": "Precious Metals",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Artisan…",
        "category": "Quests",
        "achievement": "Thank You For The Music",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Apothecary…",
        "category": "Quests",
        "achievement": "Amaro Whisperer",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Seeker…",
        "category": "Quests",
        "achievement": "The Lost World",
        "patch": "5.0"
    },
    {
        "name_en": "Otherworld Angler…",
        "category": "Quests",
        "achievement": "Live Long And Prospero",
        "patch": "5.0"
    },
    {
        "name_en": "…The Multifaceted",
        "category": "Quests",
        "achievement": "The Golden Mean",
        "patch": "5.0"
    },
    {
        "name_en": "Trusted Friend…",
        "category": "Character",
        "achievement": "Bound By Faith",
        "patch": "5.0"
    },
    {
        "name_en": "…The Invisible Hand",
        "category": "Battle",
        "achievement": "Merchant's Best Friend",
        "patch": "5.0"
    },
    {
        "name_en": "Charming Brute…",
        "category": "Battle",
        "achievement": "Shadowbring Your A Game III",
        "patch": "5.0"
    },
    {
        "name_en": "…The Fabulously Feral",
        "category": "Battle",
        "achievement": "Shadowbring Your S Game III",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Oath",
        "category": "Battle",
        "achievement": "Tank You, Paladin IV",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Steel",
        "category": "Battle",
        "achievement": "Tank You, Warrior IV",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Principle",
        "category": "Battle",
        "achievement": "Tank You, Dark Knight IV",
        "patch": "5.0"
    },
    {
        "name_en": "…Of Unyielding Lealty",
        "category": "Battle",
        "achievement": "Tank You, Gunbreaker IV",
        "patch": "5.0"
    },
    {
        "name_en": "Dungeon Raider…",
        "category": "Battle",
        "achievement": "Beauty And Its Beasts I",
        "patch": "5.05"
    },
    {
        "name_en": "Dungeon Dweller…",
        "category": "Battle",
        "achievement": "Beauty And Its Beasts IV",
        "patch": "5.05"
    },
    {
        "name_en": "Dungeon Lord… / Dungeon Lady…",
        "category": "Battle",
        "achievement": "Happily Treasure After IV",
        "patch": "5.05"
    },
    {
        "name_en": "Kindred Sword…",
        "category": "Character",
        "achievement": "Right On The Money III",
        "patch": "5.1"
    },
    {
        "name_en": "…Of Virtuous Deeds",
        "category": "Quests",
        "achievement": "Black And White",
        "patch": "5.1"
    },
    {
        "name_en": "Kai-Shirr's Best Mate…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Kai-Shirr V",
        "patch": "5.1"
    },
    {
        "name_en": "Honeybee…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Kai-Shirr VI",
        "patch": "5.1"
    },
    {
        "name_en": "Sweet Dreamer…",
        "category": "Quests",
        "achievement": "Forever Young",
        "patch": "5.1"
    },
    {
        "name_en": "…The Perfect Legend",
        "category": "Battle",
        "achievement": "When I Ruled The World",
        "patch": "5.11"
    },
    {
        "name_en": "Blue to the Bone…",
        "category": "Character",
        "achievement": "The More You Know VII",
        "patch": "5.15"
    },
    {
        "name_en": "Blue Luminary…",
        "category": "Battle",
        "achievement": "Jack Of All Trades III",
        "patch": "5.15"
    },
    {
        "name_en": "Masked of the Round…",
        "category": "Battle",
        "achievement": "Mightier Than The Round",
        "patch": "5.15"
    },
    {
        "name_en": "Unbound Blue…",
        "category": "Battle",
        "achievement": "Blue Unchained",
        "patch": "5.15"
    },
    {
        "name_en": "Blue Justice…",
        "category": "Battle",
        "achievement": "Masked Conqueror",
        "patch": "5.15"
    },
    {
        "name_en": "…The Battleforged",
        "category": "PvP",
        "achievement": "One Steppe At A Time VI",
        "patch": "5.15"
    },
    {
        "name_en": "Champion of the Blue…",
        "category": "Battle",
        "achievement": "None More Blue",
        "patch": "5.15"
    },
    {
        "name_en": "Frame of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Saw III",
        "patch": "5.21"
    },
    {
        "name_en": "Forge of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Smithy III",
        "patch": "5.21"
    },
    {
        "name_en": "Hammer of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Hammer III",
        "patch": "5.21"
    },
    {
        "name_en": "Jewel of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Gemstone III",
        "patch": "5.21"
    },
    {
        "name_en": "Knife of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Knife III",
        "patch": "5.21"
    },
    {
        "name_en": "Weave of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Needle III",
        "patch": "5.21"
    },
    {
        "name_en": "Panacea of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Science III",
        "patch": "5.21"
    },
    {
        "name_en": "Pan of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Skillet III",
        "patch": "5.21"
    },
    {
        "name_en": "Pick of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Sledgehammer III",
        "patch": "5.21"
    },
    {
        "name_en": "Hatchet of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Scythe III",
        "patch": "5.21"
    },
    {
        "name_en": "Rod of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Skyward Rod III",
        "patch": "5.21"
    },
    {
        "name_en": "…The Hand of Creation",
        "category": "Crafting & Gathering",
        "achievement": "Handking Of The World",
        "patch": "5.21"
    },
    {
        "name_en": "Divine Provider…",
        "category": "Crafting & Gathering",
        "achievement": "Landking Of The World",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Carpenter",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Carpentry",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Blacksmith",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Smithing",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Armorer",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Armorcraft",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Goldsmith",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Gemcraft",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Leatherworker",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Leathercraft",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Weaver",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Clothcraft",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Alchemist",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Alchemy",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Culinarian",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Cuisine",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Miner",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Mining",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Botanist",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Botany",
        "patch": "5.21"
    },
    {
        "name_en": "…The Nest's Own Fisher",
        "category": "Crafting & Gathering",
        "achievement": " The Height Of Angling",
        "patch": "5.21"
    },
    {
        "name_en": "Fortune's Favored Kupo...",
        "category": "Crafting & Gathering",
        "achievement": "Let Luck Be A Moogle III",
        "patch": "5.21"
    },
    {
        "name_en": "Ocean Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "No More Fish In The Sea III",
        "patch": "5.2"
    },
    {
        "name_en": "Octopus Traveler…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Octopodes Do To You?",
        "patch": "5.2"
    },
    {
        "name_en": "Shark Hunter…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Sharks Do To You?",
        "patch": "5.2"
    },
    {
        "name_en": "Jellyfish Fanatic…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Jellyfish Do To You?",
        "patch": "5.2"
    },
    {
        "name_en": "Sea Dragoon…",
        "category": "Crafting & Gathering",
        "achievement": "What Did Seadragons Do To You?",
        "patch": "5.2"
    },
    {
        "name_en": "Echo of a Fallen Star…",
        "category": "Quests",
        "achievement": "Way More Heroes",
        "patch": "5.2"
    },
    {
        "name_en": "Ronkan Historian…",
        "category": "Quests",
        "achievement": "With My Compliments IV",
        "patch": "5.2"
    },
    {
        "name_en": "A Dragon's Best Friend…",
        "category": "Character",
        "achievement": "Satisfaction Guaranteed: Ehll Tou V",
        "patch": "5.3"
    },
    {
        "name_en": "Tinker Tutor…",
        "category": "Items",
        "achievement": "The Customer Is Always Right: Ehll Tou VI",
        "patch": "5.3"
    },
    {
        "name_en": "Partner in Teatime…",
        "category": "Character",
        "achievement": "Friend Or Faux II",
        "patch": "5.3"
    },
    {
        "name_en": "Vrai Ami… / Vraie Amie…",
        "category": "Character",
        "achievement": "Friend Or Faux IV",
        "patch": "5.3"
    },
    {
        "name_en": "Tank Technician…",
        "category": "Quests",
        "achievement": "Beard Science",
        "patch": "5.3"
    },
    {
        "name_en": "Shepherd to the Stars…",
        "category": "Quests",
        "achievement": "Hope's Legacy",
        "patch": "5.3"
    },
    {
        "name_en": "Featherfall's Finest Carpenter…",
        "category": "Crafting & Gathering",
        "achievement": "Carpenters Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Blacksmith...",
        "category": "Crafting & Gathering",
        "achievement": "Blacksmiths Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Armorer…",
        "category": "Crafting & Gathering",
        "achievement": "Armorers Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Goldsmith…",
        "category": "Crafting & Gathering",
        "achievement": "Goldsmiths Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Leatherworker…",
        "category": "Crafting & Gathering",
        "achievement": "Leatherworkers Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Weaver…",
        "category": "Crafting & Gathering",
        "achievement": "Weavers Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Alchemist…",
        "category": "Crafting & Gathering",
        "achievement": "Alchemists Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Culinarian…",
        "category": "Crafting & Gathering",
        "achievement": "Culinarians Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Miner…",
        "category": "Crafting & Gathering",
        "achievement": "Miners Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Botanist…",
        "category": "Crafting & Gathering",
        "achievement": "Botanists Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Featherfall's Finest Fisher…",
        "category": "Crafting & Gathering",
        "achievement": "Fishers Of A Feather",
        "patch": "5.31"
    },
    {
        "name_en": "Saint of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase II Divine Ascension",
        "patch": "5.21"
    },
    {
        "name_en": "Saint of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase III Divine Ascension",
        "patch": "5.31"
    },
    {
        "name_en": "Beatus of the Firmament… / Beata of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase II Minor Miracle",
        "patch": "5.21"
    },
    {
        "name_en": "Beatus of the Firmament… / Beata of the Firmament…",
        "category": "Crafting & Gathering",
        "achievement": "Phase III Minor Miracle",
        "patch": "5.31"
    }
];