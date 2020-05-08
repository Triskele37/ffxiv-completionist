// const fs = require("fs");
//
// const setupFileWrite = require("../../util/setupFileWrite");
// const ACHIEVEMENTS = require("./achievements.json");
//
// const BASE_OUTPUT_DIR = './static/achievements';
// const COLUMNS = [
//     // Base properties
//     'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
//     'Description_de', 'Description_en', 'Description_fr', 'Description_ja',
//     'Points',
//     'GamePatch.Version',
//
//     // Reward Properties
//     'Item.Name_de', 'Item.Name_en', 'Item.Name_fr', 'Item.Name_ja',
//     'Title.Name_de', 'Title.NameFemale_de',
//     'Title.Name_en', 'Title.NameFemale_en',
//     'Title.Name_fr', 'Title.NameFemale_fr',
//     'Title.Name_ja', 'Title.NameFemale_ja',
//
//     // Programmatic Properties
//     'ID',
//     'AchievementCategory.Name',
//     'AchievementCategory.AchievementKind.Name',
//     'Order',
// ];
//
// module.exports = async function buildAchievements(done) {
//     const output = categorizeAchievements();
//     let sum = 0;
//
//     Object.keys(output).forEach((category) => {
//         Object.keys(output[category]).forEach((subCategory) => {
//             // Map additional properties on
//             const finalList = output[category][subCategory].map((item) => ({
//                 ...item,
//                 // ...(ADDITIONAL[item.ID] || {})
//             })).sort((a, b) => a.Order - b.Order);
//
//             // Write the file
//             const fileName = setupFileWrite(BASE_OUTPUT_DIR, [category, subCategory]);
//             fs.writeFileSync(fileName, JSON.stringify(finalList, null, 4));
//
//             // Some output
//             console.log(`${category} > ${subCategory}: ${output[category][subCategory].length}`);
//             sum += output[category][subCategory].length;
//         });
//     });
//
//     console.log(`\nTotal Achievements: ${sum}`);
//     done();
// };
//
// // Categorizes by category & subCategory
// function categorizeAchievements() {
//     const output = {};
//
//     ACHIEVEMENTS.forEach((item) => {
//         const category = item.Category || '_';
//         const subCategory = item.SubCategory || '_';
//
//         if(!output[category]) output[category] = {};
//         if(!output[category][subCategory]) output[category][subCategory] = [];
//
//         output[category][subCategory].push(item);
//     });
//
//     return output;
// }
//
// function rewardProperties(Item, Title) {
//     const isItemReward = !!Item.Name_en;
//     const isTitleReward = !!Title.Name_en;
//
//     // No reward
//     if(!isItemReward && !isTitleReward) return {};
//
//     return {
//         Reward_de: mapReward(Item.Name_de, Title.Name_de, Title.NameFemale_de),
//         Reward_en: mapReward(Item.Name_en, Title.Name_en, Title.NameFemale_en),
//         Reward_fr: mapReward(Item.Name_fr, Title.Name_fr, Title.NameFemale_fr),
//         Reward_ja: mapReward(Item.Name_ja, Title.Name_ja, Title.NameFemale_ja),
//     };
//
//     function mapReward(itemName, title, femaleTitle) {
//         if(isItemReward) return itemName;
//         return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
//     }
// }
