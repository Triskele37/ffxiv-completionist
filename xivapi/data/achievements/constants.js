// The values to grab from xivAPI
const COLUMNS = [
    // Base properties
    'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
    'Description_de', 'Description_en', 'Description_fr', 'Description_ja',
    'Points',
    'GamePatch.Version',

    // Reward Properties
    'Item.Name_de', 'Item.Name_en', 'Item.Name_fr', 'Item.Name_ja',
    'Title.Name_de', 'Title.NameFemale_de',
    'Title.Name_en', 'Title.NameFemale_en',
    'Title.Name_fr', 'Title.NameFemale_fr',
    'Title.Name_ja', 'Title.NameFemale_ja',

    // Programmatic Properties
    'ID',
    'AchievementCategory.Name',
    'AchievementCategory.AchievementKind.Name',
    'Order',
];

// Used to sort the full list of achievements
const CATEGORIES = {
    'Battle': ['Battle', 'Dungeons', 'Trials', 'Raids', 'The Hunt', 'Treasure Hunt'],
    'PvP': ['General', 'Ranking', 'The Wolves\' Den', 'Frontline', 'Rival Wings'],
    'Character': ['General', 'Disciples of War', 'Disciples of Magic', 'Disciples of the Hand', 'Disciples of the Land', 'Commendation', 'Gold Saucer'],
    'Items': ['Items', 'Currency', 'Desynthesis', 'Collectables', 'Materia', 'Relic Weapons', 'Zodiac Weapons', 'Anima Weapons', 'Deep Dungeon Weapons', 'Eureka Weapons'],
    'Crafting & Gathering': ['All Disciplines', 'Carpenter', 'Blacksmith', 'Armorer', 'Goldsmith', 'Leatherworker', 'Weaver', 'Alchemist', 'Culinarian', 'Miner', 'Botanist', 'Fisher'],
    'Quests': ['Quests', 'Levequests', 'Beast Tribe Quests', 'Seasonal Events'],
    'Exploration': ['Sightseeing Log', 'La Noscea', 'The Black Shroud', 'Thanalan', 'Coerthas', 'Mor Dhona', 'Abalathia\'s Spine', 'Dravania', 'Gyr Abania', 'Othard', 'Norvrandt', 'Duty'],
    'Grand Company': ['Grand Company', 'Maelstrom', 'Order of the Twin Adder', 'Immortal Flames'],
    'Legacy': ['Battle', 'Dungeons', 'Currency', 'Gathering', 'Quests', 'Seasonal Events', 'Exploration', 'Grand Company']
};

module.exports = {
    API_URL: `http://xivapi.com/search?indexes=Achievement&columns=${COLUMNS.join(',')}`,
    COLUMNS,
    CATEGORIES,
};
