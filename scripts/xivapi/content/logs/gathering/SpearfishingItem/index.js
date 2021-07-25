const Content = require("../../../Content");

const SpearfishingItem = new Content(__dirname);
SpearfishingItem.API_ENDPOINT = "SpearfishingItem";
SpearfishingItem.APP_PATH = "logs/gathering/spearfishing/guide";

SpearfishingItem.MERGE_KEYS = ["id", "name", "location", "fishingHole", "type"];
SpearfishingItem.COMMON_KEYS = ["iLvl"];

module.exports = SpearfishingItem;
