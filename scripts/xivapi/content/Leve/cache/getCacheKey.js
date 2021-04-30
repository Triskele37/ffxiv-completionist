module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "level": return "Level";
        case "name": return `Name_${lang}`;
        case "issueLocation": return `IssueLocation_${lang}`;
        case "leveZone": return `LeveZone_${lang}`;
    }
};
