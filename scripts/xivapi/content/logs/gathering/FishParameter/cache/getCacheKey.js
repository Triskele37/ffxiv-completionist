module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "iLvl": return "ILvl";
        case "name": return `Name_${lang}`;
        case "location": return `Location_${lang}`;
        case "fishingHole": return `FishingHole_${lang}`;
        case "type": return `Type_${lang}`;
    }
};
