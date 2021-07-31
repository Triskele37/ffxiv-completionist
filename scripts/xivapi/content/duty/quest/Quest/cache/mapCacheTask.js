const fs = require("fs");
const utils = require("../../../../../utils");

let removedPath = __dirname.replace("cache", "excludedIds.json");
const removedIds = JSON.parse(fs.readFileSync(removedPath, 'utf8'));

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

        // Linking
        ...buildQuestChainProps(apiObj),

        ...reputation
    };
};

//TODO: optimize targeting by prefixing all ids
function buildQuestChainProps(apiObj) {
    const chains = {};

    // Previous Chain
    const cPrev = [];
    if(chainExists(apiObj.PreviousQuest0TargetID)) cPrev.push(apiObj.PreviousQuest0TargetID);
    if(chainExists(apiObj.PreviousQuest1TargetID)) cPrev.push(apiObj.PreviousQuest1TargetID);
    if(chainExists(apiObj.PreviousQuest2TargetID)) cPrev.push(apiObj.PreviousQuest2TargetID);

    if(cPrev.length && apiObj.PreviousQuestJoin === 1) chains.cPrev = cPrev;
    if(cPrev.length && apiObj.PreviousQuestJoin === 2) chains.cPrevAny = cPrev;

    // Next Chain
    if(apiObj?.GameContentLinks?.Quest) {
        let cNext = [];

        if(apiObj.GameContentLinks.Quest.PreviousQuest0) cNext.push(...apiObj.GameContentLinks.Quest.PreviousQuest0);
        if(apiObj.GameContentLinks.Quest.PreviousQuest1) cNext.push(...apiObj.GameContentLinks.Quest.PreviousQuest1);
        if(apiObj.GameContentLinks.Quest.PreviousQuest2) cNext.push(...apiObj.GameContentLinks.Quest.PreviousQuest2);

        cNext = cNext.filter((id) => !isRemovedQuest(id));

        if(cNext.length) chains.cNext = cNext;
    }

    // Exclude Chain
    const cExclude = [];
    if(chainExists(apiObj.QuestLock0TargetID)) cExclude.push(apiObj.QuestLock0TargetID);
    if(chainExists(apiObj.QuestLock1TargetID)) cExclude.push(apiObj.QuestLock1TargetID);

    if(cExclude.length) chains.cExclude = cExclude;

    return chains;
}

function chainExists(questID) {
    return (!!questID && !isRemovedQuest(questID));
}

function isRemovedQuest(questID) {
    return Object.keys(removedIds).includes(questID.toString());
}
