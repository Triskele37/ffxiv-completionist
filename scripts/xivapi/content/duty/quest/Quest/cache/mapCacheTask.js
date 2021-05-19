const fs = require("fs");
const constants = require("../../../../../constants");
const utils = require("../../../../../utils");

module.exports = function mapCacheTask(apiObj) {
    const npcPath = `${constants.CACHE_DIR}/enpcresident/${apiObj.IssuerStartTargetID}`;
    let npc = {};

    if(fs.existsSync(npcPath)) {
        npc = JSON.parse(fs.readFileSync(npcPath, "utf8"));
    }

    const reputation = !apiObj.BeastReputationRank ? {} : {
        ...utils.spreadLangs(apiObj.BeastReputationRank, "Name", "Reputation")
    };

    return {
        "ID": apiObj.ID,
        ...utils.spreadLangs(apiObj, "Name"),
        "Level": apiObj.ClassJobLevel0 + (apiObj.QuestLevelOffset ? apiObj.QuestLevelOffset : 0),
        "Order": apiObj.Order,

        // Quest Giver
        "PlaceName": apiObj.PlaceName.Name,
        ...utils.spreadLangs(npc, "Name", "Npc"),

        ...reputation
    }
};
