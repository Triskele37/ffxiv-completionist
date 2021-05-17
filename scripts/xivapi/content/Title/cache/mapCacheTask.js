const fs = require("fs");
const constants = require("../../../constants");
const utils = require("../../../utils");

module.exports = function mapCacheTask(apiObj) {
    console.clear();
    console.log(`Cross referencing Achievement for Title ${apiObj.ID}`);
    const Achievement = getAchievement(apiObj.GameContentLinks);

    return {
        "ID": apiObj.ID,
        "Order": apiObj.Order,
        "IsPrefix": apiObj.IsPrefix,
        "Patch": Achievement.GamePatch ? Achievement.GamePatch.Version : "",
        ...utils.spreadLangs(Achievement, "Name", "Achievement"),
        ...utils.spreadLangs(Achievement.AchievementCategory.AchievementKind, "Name", "Category"),
        ...utils.spreadLangs(apiObj, "Name"),
        ...utils.spreadLangs(apiObj, "NameFemale"),
    }
};

function getAchievement(GameContentLinks) {
    let Achievement = { AchievementCategory: { AchievementKind: {} }, GamePatch: {} };
    let found = false;

    if(GameContentLinks && GameContentLinks.Achievement && GameContentLinks.Achievement.Title && GameContentLinks.Achievement.Title[0]) {
        dive(`${constants.CACHE_DIR}/achievement`, GameContentLinks.Achievement.Title[0]);
    }

    return Achievement;

    function dive(path, id) {
        const dirs = fs.readdirSync(path);

        for(let i = 0; i < dirs.length; i++) {
            const stat = dirs[i];
            const fullDir = `${path}/${stat}`;

            if(fs.lstatSync(fullDir).isDirectory()) {
                dive(fullDir, id);
                if(found) break;
            }
            else if(stat === `${id}.json`) {
                Achievement = JSON.parse(fs.readFileSync(fullDir, "utf8"));
                found = true;
                break;
            }
        }
    }
}
