const utils = require("../../../../../utils");

module.exports = function mapCacheTask(apiObj) {
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
        ...utils.spreadLangs(apiObj.IssuerStart, "Name", "Npc"),

        ...reputation
    }
};
