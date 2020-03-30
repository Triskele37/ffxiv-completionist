const fs = require("fs");

const QUESTS = require("./quest.json");
const ADDITIONAL = require("./additional");

const BASE_OUTPUT_DIR = './static/quests';

module.exports = async function buildQuests() {
    const output = categorizeQuests();
    let sum = 0;

    Object.keys(output).forEach((section) => {
        Object.keys(output[section]).forEach((category) => {
            Object.keys(output[section][category]).forEach((subCategory) => {
                // Map additional properties on
                const finalQuestList = output[section][category][subCategory].map((quest) => ({
                    ...quest,
                    ...(ADDITIONAL[quest.ID] || {})
                }));

                // Write the file
                const fileName = setupFileWrite(section, category, subCategory);
                fs.writeFileSync(fileName, JSON.stringify(finalQuestList, null, 4));

                // Some output
                // console.log(`${section} > ${category} > ${subCategory}: ${output[section][category][subCategory].length}`);
                sum += output[section][category][subCategory].length;
            });
        });
    });

    console.log(`Total Quests: ${sum}`);
};

// Categorize quests by section/category/subCategory
function categorizeQuests() {
    const output = {};

    QUESTS.forEach((quest) => {
        const section = quest.Section || '_unknown';
        const category = quest.Category || '_unknown';
        const subCategory = quest.SubCategory || '_unknown';

        if(!output[section]) output[section] = {};
        if(!output[section][category]) output[section][category] = {};
        if(!output[section][category][subCategory]) output[section][category][subCategory] = [];

        output[section][category][subCategory].push(quest);
    });

    return output;
}

// Creates necessary directories then returns final file name
function setupFileWrite(section, category, subCategory) {
    // Make sure the section has a directory
    const sectionDir = `${BASE_OUTPUT_DIR}/${safeName(section)}`;
    if(!fs.existsSync(sectionDir)) fs.mkdirSync(sectionDir);

    // Make sure the category has a directory
    const categoryDir = `${sectionDir}/${safeName(category)}`;
    if(!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir);

    return `${categoryDir}/${safeName(subCategory)}.json`;
}

// Return a safe version of names for file/directory name
function safeName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z_ ]/g, '') // remove non-alpha characters
        .replace(/\s\s+/g, ' ') // remove multiple spacing
        .replace(/\s/g, '-');
}
