const fs = require("fs");

const constants = require("../../../../../constants");
const utils = require("../../../../../utils");

let achievementPaths;

module.exports = function buildAppAchievementFields(Title) {
    if(!achievementPaths) buildAchievementPaths();

    const Achievement = getAchievement(Title.GameContentLinks);
    const Category = Achievement.AchievementCategory.AchievementKind;

    return {
        ...utils.spreadLangs(Achievement, "Name", "Achievement"),
        ...utils.spreadLangs(Category, "Name", "Category"),
    };
};

function buildAchievementPaths() {
    achievementPaths = {};
    dive(`${constants.CACHE_DIR}/achievement`);

    function dive(path) {
        const dirs = fs.readdirSync(path);

        for(let i = 0; i < dirs.length; i++) {
            const stat = dirs[i];
            const fullDir = `${path}/${stat}`;

            if(fs.lstatSync(fullDir).isDirectory()) {
                dive(fullDir);
            }
            else {
                achievementPaths[stat.replace(".json", "")] = fullDir;
            }
        }
    }
}

function getAchievement(GameContentLinks) {
    if(GameContentLinks && GameContentLinks.Achievement && GameContentLinks.Achievement.Title && GameContentLinks.Achievement.Title[0]) {
        const id = GameContentLinks.Achievement.Title[0];
        return JSON.parse(fs.readFileSync(achievementPaths[id], "utf8"));
    }
    else {
        return { AchievementCategory: { AchievementKind: {} } };
    }
}
