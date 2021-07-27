const Content = require("../../Content");

const Achievement = new Content(__dirname);
Achievement.API_ENDPOINT = "Achievement";
Achievement.APP_PATH = "character/achievement";

Achievement.MERGE_KEYS = ["id", "name", "description", "reward"];
Achievement.COMMON_KEYS = ["points", "patch", ...Content.LINKED_KEYS];

module.exports = Achievement;
