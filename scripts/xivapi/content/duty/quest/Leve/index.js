const Content = require("../../../Content");

const Leve = new Content(__dirname);
Leve.API_ENDPOINT = "Leve";
Leve.APP_PATH = "duty/quest/levequests";

Leve.MERGE_KEYS = ["id", "name", "issueLocation", "leveZone"];
Leve.COMMON_KEYS = ["level"];

module.exports = Leve;
