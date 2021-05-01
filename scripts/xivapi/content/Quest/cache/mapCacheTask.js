const fs = require("fs");
const constants = require("../../../constants");

module.exports = function mapCacheTask(apiObj) {
    const npcPath = `${constants.CACHE_DIR}/enpcresident/${apiObj.IssuerStartTargetID}`;
    let npc = {};

    if(fs.existsSync(npcPath)) {
        npc = JSON.parse(fs.readFileSync(npcPath, "utf8"));
    }

    const reputation = !apiObj.BeastReputationRank ? {} : {
        "Reputation_de": apiObj.BeastReputationRank.Name_de,
        "Reputation_en": apiObj.BeastReputationRank.Name_en,
        "Reputation_fr": apiObj.BeastReputationRank.Name_fr,
        "Reputation_ja": apiObj.BeastReputationRank.Name_ja,
    };

    return {
        "ID": apiObj.ID,
        "Name_de": cleanName(apiObj.Name_de),
        "Name_en": cleanName(apiObj.Name_en),
        "Name_fr": cleanName(apiObj.Name_fr),
        "Name_ja": cleanName(apiObj.Name_ja),
        "Level": apiObj.ClassJobLevel0 + (apiObj.QuestLevelOffset ? apiObj.QuestLevelOffset : 0),
        "Order": apiObj.Order,

        // Quest Giver
        "PlaceName": apiObj.PlaceName.Name,
        "Npc_de": npc.Name_de,
        "Npc_en": npc.Name_en,
        "Npc_fr": npc.Name_fr,
        "Npc_ja": npc.Name_ja,

        ...reputation
    }
};

function cleanName(name) {
    return name.replace(' ', '').replace(' ', '');
}
