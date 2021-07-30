module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "name": return `Name_${lang}`;
        case "npc": return `Npc_${lang}`;
        case "reputation": return `Reputation_${lang}`;
        case "level": return "Level";
    }

    return appKey;
};
