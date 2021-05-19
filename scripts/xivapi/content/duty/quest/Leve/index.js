const Content = require("../../../Content");

const Leve = new Content(__dirname);
Leve.MERGE_KEYS = ["id", "name", "issueLocation", "leveZone"];
Leve.COMMON_KEYS = ["level"];

module.exports = Leve;
