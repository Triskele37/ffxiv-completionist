const fs = require("fs");
const constants = require("./constants");

module.exports = {
    loadExcludedFile: function(content) {
        const path = `${constants.CONTENT_DIR}/${content}/excluded.json`;
        const file = fs.readFileSync(path, "utf8");
        return JSON.parse(file);
    }
};
