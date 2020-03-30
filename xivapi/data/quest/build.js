const fs = require("fs");

const setupFileWrite = require("../utils/setupFileWrite");

const QUESTS = require("./quest.json");
const ADDITIONAL = require("./additional");

const BASE_OUTPUT_DIR = './static/quests';

module.exports = async function buildQuests(done) {
    const output = categorizeQuests();
    let sum = 0;

    Object.keys(output).forEach((section) => {
        Object.keys(output[section]).forEach((category) => {
            Object.keys(output[section][category]).forEach((subCategory) => {
                // Map additional properties on
                const finalQuestList = output[section][category][subCategory].map((quest) => ({
                    ...quest,
                    ...(ADDITIONAL[quest.ID] || {})
                })).sort((a, b) => a.SortKey - b.SortKey);

                // Write the file
                const fileName = setupFileWrite(BASE_OUTPUT_DIR, [section, category, subCategory]);
                fs.writeFileSync(fileName, JSON.stringify(finalQuestList, null, 4));

                // Some output
                // console.log(`${section} > ${category} > ${subCategory}: ${output[section][category][subCategory].length}`);
                sum += output[section][category][subCategory].length;
            });
        });
    });

    console.log(`Total Quests: ${sum}`);
    done();
};

// Categorize by section/category/subCategory
function categorizeQuests() {
    const output = {};

    QUESTS.forEach((quest) => {
        const section = quest.Section || (!quest.Category ? '_' : 'Main Scenario Past');
        const category = quest.Category || '_';

        const isLocationSidequests = (section === 'Sidequests' && category.includes('Sidequests'));
        const subCategory = (isLocationSidequests ? quest.PlaceName : quest.SubCategory) || '_';

        if(!output[section]) output[section] = {};
        if(!output[section][category]) output[section][category] = {};
        if(!output[section][category][subCategory]) output[section][category][subCategory] = [];

        output[section][category][subCategory].push(quest);
    });

    return output;
}
