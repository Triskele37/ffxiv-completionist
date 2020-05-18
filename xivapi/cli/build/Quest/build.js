// const fs = require("fs");
//
// const setupFileWrite = require("../../cli/util/setupFileWrite");
//
// const QUESTS = require("./quest.json");
// const ADDITIONAL = require("./additional");
// const EXCLUDE = require("./exclude");
//
// const BASE_OUTPUT_DIR = './static/quests';
//
// module.exports = async function buildQuests(done) {
//     const output = categorizeQuests();
//     let sum = 0;
//
//     Object.keys(output).forEach((section) => {
//         Object.keys(output[section]).forEach((category) => {
//             Object.keys(output[section][category]).forEach((subCategory) => {
//                 // Map additional properties on
//                 let finalQuestList = output[section][category][subCategory].map((quest) => ({
//                     ...quest,
//                     ...(ADDITIONAL[quest.ID] || {})
//                 })).sort((a, b) => a.SortKey - b.SortKey);
//
//                 // Remove excludes
//                 finalQuestList = finalQuestList.filter((quest) => !EXCLUDE.includes(quest.ID));
//
//                 // Write the file
//                 const fileName = setupFileWrite(BASE_OUTPUT_DIR, [section, category, subCategory]);
//                 fs.writeFileSync(fileName, JSON.stringify(finalQuestList, null, 4));
//
//                 // Some output
//                 // console.log(`${section} > ${category} > ${subCategory}: ${output[section][category][subCategory].length}`);
//                 sum += output[section][category][subCategory].length;
//             });
//         });
//     });
//
//     console.log(`Total Quests: ${sum}`);
//     done();
// };
//
// // Categorize by section/category/subCategory
// function categorizeQuests() {
//     const output = {};
//
//     QUESTS.forEach((quest) => {
//         const section = quest.Section || (!quest.Category ? '_' : 'Main Scenario Past');
//         const category = quest.Category || '_';
//
//         const isLocationSidequests = (section === 'Sidequests' && category.includes('Sidequests'));
//         const subCategory = (isLocationSidequests ? quest.PlaceName : quest.SubCategory) || '_';
//
//         if(!output[section]) output[section] = {};
//         if(!output[section][category]) output[section][category] = {};
//         if(!output[section][category][subCategory]) output[section][category][subCategory] = [];
//
//         output[section][category][subCategory].push(quest);
//     });
//
//     return output;
// }
//
// // const fs = require("fs");
// //
// // const pageRequest = require("../../backendAPI/pageRequest");
// // const NPCs = require("../npcs/npcs");
// //
// // The values to grab from xivAPI
// // const COLUMNS = [
// //     // Base properties
// //     'ClassJobLevel0',
// //     'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
// //     'IssuerStart', // NPC UUID, use with "npcs.json"
// //     'GamePatch.Version',
// //
// //     // Beast Tribe Specific
// //     'BeastReputationRank.Name_de',
// //     'BeastReputationRank.Name_en',
// //     'BeastReputationRank.Name_fr',
// //     'BeastReputationRank.Name_ja',
// //
// //     // Programmatic Properties
// //     'PlaceName.Name',
// //     'JournalGenre.JournalCategory.JournalSection.Name',
// //     'JournalGenre.JournalCategory.Name',
// //     'JournalGenre.Name',
// //     'ID',
// //     'SortKey',
// // ];
// //
// // module.exports = async function cacheQuests(done) {
// //     const quests = await pageRequest(`http://xivapi.com/Quest?columns=${COLUMNS.join(',')}&limit=250`);
// //
// //     // Restructure the object
// //     const json = quests.map((quest) => {
// //         const { BeastReputationRank, ClassJobLevel0, JournalGenre, PlaceName, IssuerStart, GamePatch, ...rest } = quest;
// //         const npc = NPCs[IssuerStart] || {};
// //
// //         return {
// //             ...rest,
// //             Section: JournalGenre.JournalCategory.JournalSection.Name,
// //             Category: JournalGenre.JournalCategory.Name,
// //             SubCategory: JournalGenre.Name,
// //             PlaceName: PlaceName.Name,
// //             //TODO: Level = ClassJobLevel + QuestLevelOffset (applies to random quests?)
// //             Level: ClassJobLevel0,
// //             Name_de: rest.Name_de.replace(' ', '').replace(' ', ''),
// //             Name_en: rest.Name_en.replace(' ', '').replace(' ', ''),
// //             Name_fr: rest.Name_fr.replace(' ', '').replace(' ', ''),
// //             Name_ja: rest.Name_ja.replace(' ', '').replace(' ', ''),
// //             Npc_de: npc.Name_de,
// //             Npc_en: npc.Name_en,
// //             Npc_fr: npc.Name_fr,
// //             Npc_ja: npc.Name_ja,
// //             Reputation_de: BeastReputationRank ? BeastReputationRank.Name_de : '',
// //             Reputation_en: BeastReputationRank ? BeastReputationRank.Name_en : '',
// //             Reputation_fr: BeastReputationRank ? BeastReputationRank.Name_fr : '',
// //             Reputation_ja: BeastReputationRank ? BeastReputationRank.Name_ja : '',
// //             Patch: GamePatch.Version,
// //         };
// //     });
// //
// //     fs.writeFileSync('./xivapi/data/quest/quest.json', JSON.stringify(json, null, 4));
// //     done();
// // };
