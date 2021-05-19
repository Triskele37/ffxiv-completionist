const Content = require("../../../Content");

const BuddyEquip = new Content(__dirname);
BuddyEquip.MERGE_KEYS = ["id", "name"];

module.exports = BuddyEquip;
