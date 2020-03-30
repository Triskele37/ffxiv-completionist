const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");
const NPCs = require("../npcs/npcs");

// The values to grab from xivAPI
const COLUMNS = [
    // Base properties
    'ClassJobLevel0',
    'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
    'IssuerStart', // NPC UUID, use with "npcs.json"
    'BeastReputationRank.Name_de',
    'BeastReputationRank.Name_en',
    'BeastReputationRank.Name_fr',
    'BeastReputationRank.Name_ja',
    'GamePatch.Version',

    // Programmatic Properties
    'JournalGenre.JournalCategory.JournalSection.Name',
    'JournalGenre.JournalCategory.Name',
    'JournalGenre.Name',
    'ID',
    'SortKey',
];

module.exports = async function cacheQuests() {
    const quests = await pageRequest(`http://xivapi.com/Quest?columns=${COLUMNS.join(',')}&limit=750`);

    // Restructure the object
    const json = quests.map((quest) => {
        const { BeastReputationRank, ClassJobLevel0, JournalGenre, IssuerStart, GamePatch, ...rest } = quest;
        const npc = NPCs[IssuerStart] || {};

        return {
            Section: JournalGenre.JournalCategory.JournalSection.Name,
            Category: JournalGenre.JournalCategory.Name,
            SubCategory: JournalGenre.Name,
            Level: ClassJobLevel0,
            Npc_de: npc.Name_de,
            Npc_en: npc.Name_en,
            Npc_fr: npc.Name_fr,
            Npc_ja: npc.Name_ja,
            Reputation_de: BeastReputationRank ? BeastReputationRank.Name_de : '',
            Reputation_en: BeastReputationRank ? BeastReputationRank.Name_en : '',
            Reputation_fr: BeastReputationRank ? BeastReputationRank.Name_fr : '',
            Reputation_ja: BeastReputationRank ? BeastReputationRank.Name_ja : '',
            Patch: GamePatch.Version,
            ...rest,
        };
    });

    fs.writeFileSync('./xivapi/data/quest/quest.json', JSON.stringify(json, null, 4));
};
