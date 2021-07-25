const Content = require("../../Content");

const Emote = new Content(__dirname);
Emote.API_ENDPOINT = "Emote";
Emote.APP_PATH = "social/emotes";

Emote.MERGE_KEYS = ["id", "name", "command"];
Emote.COMMON_KEYS = ["patch"];

module.exports = Emote;
