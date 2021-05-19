const Content = require("../../../Content");

const Title = new Content(__dirname);
Title.MERGE_KEYS = ["id", "name", "category", "achievement"];

module.exports = Title;
