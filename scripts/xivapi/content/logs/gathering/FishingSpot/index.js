const Content = require("../../../Content");

const FishingSpot = new Content(__dirname);
FishingSpot.API_ENDPOINT = "FishingSpot";

// FishingSpot.MERGE_KEYS = ["id", "name", "issueLocation", "leveZone"];
// FishingSpot.COMMON_KEYS = ["level"];

module.exports = FishingSpot;
