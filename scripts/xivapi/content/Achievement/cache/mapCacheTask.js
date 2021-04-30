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
        "Name_de": apiObj.Name_de,
        "Name_en": apiObj.Name_en,
        "Name_fr": apiObj.Name_fr,
        "Name_ja": apiObj.Name_ja,
        "Description_en": apiObj.Description_en,
        "Description_de": apiObj.Description_de,
        "Description_fr": apiObj.Description_fr,
        "Description_ja": apiObj.Description_ja,
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
