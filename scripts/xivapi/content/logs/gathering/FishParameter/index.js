const Content = require("../../../Content");

const FishParameter = new Content(__dirname);
FishParameter.MERGE_KEYS = ["id", "name", "location", "fishingHole", "type"];
FishParameter.COMMON_KEYS = ["iLvl"];

module.exports = FishParameter;
