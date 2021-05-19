const Content = require("../../Content");

const Achievement = new Content(__dirname);
Achievement.MERGE_KEYS = ["id", "name", "description", "reward"];
Achievement.COMMON_KEYS = ["points", "patch"]

module.exports = Achievement;
