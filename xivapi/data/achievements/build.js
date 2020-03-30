const fs = require("fs");

const CONSTANTS = require("./constants");
const ACHIEVEMENTS = require("./achievements.json");
const BASE_OUTPUT_DIR = './static/achievements';

module.exports = async function buildAchievements() {
    const out = constructOutputObject();
    const uncategorized = categorizeAchievements(out);

    const categoryKeys = Object.keys(out);
    for(let i = 0; i < categoryKeys.length; i++) {
        const category = categoryKeys[i];

        // Make sure the category has a directory
        const categoryDir = `${BASE_OUTPUT_DIR}/${safeName(category)}`;
        if(!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir);

        const subCategoryKeys = Object.keys(out[category]);
        for(let j = 0; j < subCategoryKeys.length; j++) {
            const subCategory = subCategoryKeys[j];

            // Make sure the sub-category has a directory
            const fileName = `${categoryDir}/${safeName(subCategory)}.json`;
            console.log(`${category} > ${subCategory}: ${out[category][subCategory].length}`);
            fs.writeFileSync(fileName, JSON.stringify(out[category][subCategory], null, 4));
        }
    }

    fs.writeFileSync(`${BASE_OUTPUT_DIR}/uncategorized.json`, JSON.stringify(uncategorized, null, 4));
};

// Constructs an object to easily handle categorization
function constructOutputObject() {
    const out = {};
    const categoryKeys = Object.keys(CONSTANTS.CATEGORIES);

    // Create each high-level category
    for(let i = 0; i < categoryKeys.length; i++) {
        const category = categoryKeys[i];
        out[category] = {};

        // Create each sub-category within
        for(let j = 0; j < CONSTANTS.CATEGORIES[category].length; j++) {
            const subCategory = CONSTANTS.CATEGORIES[category][j];
            out[category][subCategory] = [];
        }
    }

    return out;
}

// Returns an array of uncategorized achievements
function categorizeAchievements(out) {
    return ACHIEVEMENTS.reduce((acc, achievement) => {
        const categoryExists = !!out[achievement.Category];
        const subCategoryExists = categoryExists && !!out[achievement.Category][achievement.SubCategory];

        if(subCategoryExists) {
            out[achievement.Category][achievement.SubCategory].push(achievement);
        }
        else {
            acc.push(achievement);
        }

        return acc;
    }, []);
}

// Return a safe version of category names for file/directory name
function safeName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z ]/g, '') // remove non-alpha characters
        .replace(/\s\s+/g, ' ') // remove multiple spacing
        .replace(/\s/g, '-');
}
