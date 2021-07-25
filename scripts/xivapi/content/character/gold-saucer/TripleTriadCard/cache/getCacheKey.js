module.exports = function(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "name": return `Name_${lang}`;
        case "number": return "Number";
        case "rarity": return "Rarity";
        case "patch": return "Patch";
    }
};
