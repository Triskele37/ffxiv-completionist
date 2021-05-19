const Content = require("../../../Content");

const SpearfishingItem = new Content(__dirname);
SpearfishingItem.MERGE_KEYS = ["id", "name", "location", "fishingHole", "type"];
SpearfishingItem.COMMON_KEYS = ["iLvl"];

module.exports = SpearfishingItem;
