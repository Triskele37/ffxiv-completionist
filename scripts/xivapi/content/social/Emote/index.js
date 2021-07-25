const Content = require("../../Content");

const Emote = new Content(__dirname);
Emote.MERGE_KEYS = ["id", "name", "command"];
Emote.COMMON_KEYS = ["patch"];

module.exports = Emote;
