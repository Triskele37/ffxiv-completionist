const Content = require("../../../Content");

const Quest = new Content(__dirname);
Quest.API_ENDPOINT = "Quest";
Quest.APP_PATH = "duty/quest";

const chainKeys = [
    "cPrev", "cPrevAll", "cPrevAny", "cNext", "cExclude"
];

Quest.MERGE_KEYS = [
    "id",
    "name",
    "npc",
    "reputation",
    "level",
    ...chainKeys
];
Quest.COMMON_KEYS = ["level", ...chainKeys];

module.exports = Quest;
