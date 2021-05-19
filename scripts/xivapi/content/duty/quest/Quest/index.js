const Content = require("../../../Content");

const Quest = new Content(__dirname);
// Quest.MERGE_KEYS = ["id", "name", "npc", "reputation"];
Quest.MERGE_KEYS = ["id", "name", "reputation"];
// Quest.COMMON_KEYS = ["level"];

module.exports = Quest;
