const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");
const CONSTANTS = require("./constants");

module.exports = async function cacheAchievements() {
    const achievements = await pageRequest(CONSTANTS.API_URL);

    // Restructure the achievement object
    const json = achievements.map((achievement) => {
        const { AchievementCategory, GamePatch, Item, Title, ...rest } = achievement;

        return {
            Category: AchievementCategory.AchievementKind.Name,
            SubCategory: AchievementCategory.Name,
            Patch: GamePatch.Version,
            ...rewardProperties(Item, Title),
            ...rest,
        };
    });

    fs.writeFileSync('./xivapi/data/achievements/achievements.json', JSON.stringify(json, null, 4));
};

function rewardProperties(Item, Title) {
    const isItemReward = !!Item.Name_en;
    const isTitleReward = !!Title.Name_en;

    // No reward
    if(!isItemReward && !isTitleReward) return {};

    return {
        Reward_de: mapReward(Item.Name_de, Title.Name_de, Title.NameFemale_de),
        Reward_en: mapReward(Item.Name_en, Title.Name_en, Title.NameFemale_en),
        Reward_fr: mapReward(Item.Name_fr, Title.Name_fr, Title.NameFemale_fr),
        Reward_ja: mapReward(Item.Name_ja, Title.Name_ja, Title.NameFemale_ja),
    };

    function mapReward(itemName, title, femaleTitle) {
        if(isItemReward) return itemName;
        return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
    }
}