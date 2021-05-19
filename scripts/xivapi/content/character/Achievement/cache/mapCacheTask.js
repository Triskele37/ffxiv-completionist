const utils = require("../../../../utils");

module.exports = function mapCacheTask(Achievement) {
    const hasItemReward = !!Achievement.Item;
    const hasTitleReward = !!Achievement.Title;

    const reward = (!hasItemReward && !hasTitleReward) ? {} : {
        "Reward_de": rewardProperties('de'),
        "Reward_en": rewardProperties('en'),
        "Reward_fr": rewardProperties('fr'),
        "Reward_ja": rewardProperties('ja'),
    };

    return {
        "ID": Achievement.ID,
        ...utils.spreadLangs(Achievement, "Name"),
        ...utils.spreadLangs(Achievement, "Description"),
        "Order": Achievement.Order,
        "Points": Achievement.Points,
        ...reward,
        "Patch": patchHotfix(Achievement),
    };

    function rewardProperties(lang) {
        // Item Reward
        if(hasItemReward) return Achievement.Item[`Name_${lang}`];

        // Title Reward
        const title = Achievement.Title[`Name_${lang}`];
        const femaleTitle = Achievement.Title[`NameFemale_${lang}`];
        return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
    }
};

function patchHotfix(Achievement) {
    if(!Achievement.GamePatch) return Achievement.Patch === 72 ? "5.4" : "";
    else return Achievement.GamePatch.Version;
}