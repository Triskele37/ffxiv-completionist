const Content = require("../../../Content");

const Title = new Content(__dirname);
Title.MERGE_KEYS = ["id", "name", "category", "achievement"];
Title.COMMON_KEYS = ["patch"];

module.exports = Title;
