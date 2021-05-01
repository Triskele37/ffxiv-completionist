const fs = require("fs");
const constants = require("./constants");

module.exports = {
    loadExcludedFile: function loadExcludedFile(content) {
        const path = `${constants.CONTENT_DIR}/${content}/excluded.json`;
        const file = fs.readFileSync(path, "utf8");
        return JSON.parse(file);
    },
    spreadLangs: function spreadLangs(obj, key, leftSideOverride) {
        return {
            [`${leftSideOverride || key}_de`]: obj[`${key}_de`],
            [`${leftSideOverride || key}_en`]: obj[`${key}_en`],
            [`${leftSideOverride || key}_fr`]: obj[`${key}_fr`],
            [`${leftSideOverride || key}_ja`]: obj[`${key}_ja`],
        }
    }
};
