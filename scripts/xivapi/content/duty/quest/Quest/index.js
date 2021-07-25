const Content = require("../../../Content");

const Quest = new Content(__dirname);
Quest.API_ENDPOINT = "Quest";
Quest.APP_PATH = "duty/quest";

Quest.MERGE_KEYS = ["id", "name", "npc", "reputation", "level"];
Quest.COMMON_KEYS = ["level"];

module.exports = Quest;
