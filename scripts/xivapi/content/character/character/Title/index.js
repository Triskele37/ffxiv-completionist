const Content = require("../../../Content");

const Title = new Content(__dirname);
Title.API_ENDPOINT = "Title";
Title.APP_PATH = "character/character/title";

Title.MERGE_KEYS = ["id", "name", "category", "achievement"];
Title.COMMON_KEYS = ["patch"];

module.exports = Title;
