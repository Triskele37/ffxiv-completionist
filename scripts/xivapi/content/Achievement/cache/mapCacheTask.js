const utils = require("../../../utils");

module.exports = function mapCacheTask(apiObj) {
    const hasItemReward = !!apiObj.Item;
    const hasTitleReward = !!apiObj.Title;

    const reward = (!hasItemReward && !hasTitleReward) ? {} : {
        "Reward_de": rewardProperties('de'),
        "Reward_en": rewardProperties('en'),
        "Reward_fr": rewardProperties('fr'),
        "Reward_ja": rewardProperties('ja'),
    };

    return {
        "ID": apiObj.ID,
        ...utils.spreadLangs(apiObj, "Name"),
        ...utils.spreadLangs(apiObj, "Description"),
        "Points": apiObj.Points,
        ...reward
    };

    function rewardProperties(lang) {
        // Item Reward
        if(hasItemReward) return apiObj.Item[`Name_${lang}`];

        // Title Reward
        const title = apiObj.Title[`Name_${lang}`];
        const femaleTitle = apiObj.Title[`NameFemale_${lang}`];
        return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
    }
};
