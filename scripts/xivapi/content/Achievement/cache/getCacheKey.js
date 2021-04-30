module.exports = function(appKey, lang) {
    switch(appKey) {
        case "id": return "ID";
        case "name": return `Name_${lang}`;
        case "description": return `Description_${lang}`;
        case "reward": return `Reward_${lang}`;
        case "points": return "Points";
    }
};
