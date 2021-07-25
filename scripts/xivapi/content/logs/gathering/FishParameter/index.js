const Content = require("../../../Content");

const FishParameter = new Content(__dirname);
FishParameter.API_ENDPOINT = "FishParameter";
FishParameter.APP_PATH = "logs/gathering/fishing/guide";

FishParameter.MERGE_KEYS = ["id", "name", "location", "fishingHole", "type"];
FishParameter.COMMON_KEYS = ["iLvl"];

module.exports = FishParameter;
