const fs = require("fs");

const setupFileWrite = require("../utils/setupFileWrite");
const ACHIEVEMENTS = require("./achievements.json");

const BASE_OUTPUT_DIR = './static/achievements';

module.exports = async function buildAchievements(done) {
    const output = categorizeAchievements();
    let sum = 0;

    Object.keys(output).forEach((category) => {
        Object.keys(output[category]).forEach((subCategory) => {
            // Map additional properties on
            const finalList = output[category][subCategory].map((item) => ({
                ...item,
                // ...(ADDITIONAL[item.ID] || {})
            })).sort((a, b) => a.Order - b.Order);

            // Write the file
            const fileName = setupFileWrite(BASE_OUTPUT_DIR, [category, subCategory]);
            fs.writeFileSync(fileName, JSON.stringify(finalList, null, 4));

            // Some output
            console.log(`${category} > ${subCategory}: ${output[category][subCategory].length}`);
            sum += output[category][subCategory].length;
        });
    });

    console.log(`\nTotal Achievements: ${sum}`);
    done();
};

// Categorizes by category & subCategory
function categorizeAchievements() {
    const output = {};

    ACHIEVEMENTS.forEach((item) => {
        const category = item.Category || '_';
        const subCategory = item.SubCategory || '_';

        if(!output[category]) output[category] = {};
        if(!output[category][subCategory]) output[category][subCategory] = [];

        output[category][subCategory].push(item);
    });

    return output;
}
