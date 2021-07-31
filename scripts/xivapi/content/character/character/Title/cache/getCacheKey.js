module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "name": return `Name_${lang}`;
        case "nameFemale": return `NameFemale_${lang}`;
        case "category": return `Category_${lang}`;
        case "achievement": return `Achievement_${lang}`;
        case "patch": return `Patch`;
    }

    return appKey;
};
