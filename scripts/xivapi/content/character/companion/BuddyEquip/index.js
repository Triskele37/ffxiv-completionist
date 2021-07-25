const Content = require("../../../Content");

const BuddyEquip = new Content(__dirname);
BuddyEquip.NAME = "Barding";
BuddyEquip.API_ENDPOINT = "BuddyEquip";
BuddyEquip.APP_PATH = "character/companion/barding";

BuddyEquip.MERGE_KEYS = ["id", "name"];

module.exports = BuddyEquip;
