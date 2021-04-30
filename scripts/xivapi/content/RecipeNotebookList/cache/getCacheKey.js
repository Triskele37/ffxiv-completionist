module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "level": return "Level";
        case "name": return `Name_${lang}`;
    }
};
