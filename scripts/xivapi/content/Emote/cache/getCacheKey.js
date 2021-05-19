module.exports = function getCacheKey(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "name": return `Name_${lang}`;
        case "command": return `Command_${lang}`;
        case "method": return `Method`;
        case "patch": return `Patch`;
    }
};
