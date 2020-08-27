const mapProperties = (apiObj, config) => {
    let npc = {};

    try { npc = require(`../../cache/enpcresident/${apiObj.IssuerStart}`); }
    catch(e) { console.error(`Could not find NPC (${apiObj.IssuerStart}) for quest ${apiObj.ID}`); }

    const additionalProperties = config.additionalProperties[apiObj.ID] || {};
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
        "SortKey": apiObj.SortKey, //TODO: different than Order?

        // Quest Giver
        "PlaceName": apiObj.PlaceName.Name,
        "Npc_de": npc.Name_de,
        "Npc_en": npc.Name_en,
        "Npc_fr": npc.Name_fr,
        "Npc_ja": npc.Name_ja,

        ...reputation,
        ...additionalProperties
    }
};

function cleanName(name) {
    return name.replace(' ', '').replace(' ', '');
}

module.exports = mapProperties;
