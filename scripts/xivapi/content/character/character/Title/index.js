const Content = require("../../../Content");

const Title = new Content(__dirname);
Title.API_ENDPOINT = "Title";
Title.APP_PATH = "character/character/title";

const chainKeys = [
    "cSiblings"
];

Title.MERGE_KEYS = ["id", "name", "category", "achievement", ...chainKeys];
Title.COMMON_KEYS = ["patch", ...chainKeys];

module.exports = Title;
