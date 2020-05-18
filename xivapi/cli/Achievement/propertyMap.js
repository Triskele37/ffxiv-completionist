const mapProperties = (apiObj) => {
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
        "Reward_de": rewardProperties('de', apiObj),
        "Reward_en": rewardProperties('en', apiObj),
        "Reward_fr": rewardProperties('fr', apiObj),
        "Reward_ja": rewardProperties('ja', apiObj),
        "Points": apiObj.Points,
        "Order": apiObj.Order
    }
};

module.exports = mapProperties;

function rewardProperties(lang, apiObj) {
    const isItemReward = !!apiObj.Item;
    const isTitleReward = !!apiObj.Title;

    if(!isItemReward && !isTitleReward) return undefined;

    // Item Reward
    if(isItemReward) return apiObj.Item[`Name_${lang}`];

    // Title Reward
    const title = apiObj.Title[`Name_${lang}`];
    const femaleTitle = apiObj.Title[`NameFemale_${lang}`];
    return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
}
