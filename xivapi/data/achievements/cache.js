const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");

// The values to grab from xivAPI
const COLUMNS = [
    // Base properties
    'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
    'Description_de', 'Description_en', 'Description_fr', 'Description_ja',
    'Points',
    'GamePatch.Version',

    // Reward Properties
    'Item.Name_de', 'Item.Name_en', 'Item.Name_fr', 'Item.Name_ja',
    'Title.Name_de', 'Title.NameFemale_de',
    'Title.Name_en', 'Title.NameFemale_en',
    'Title.Name_fr', 'Title.NameFemale_fr',
    'Title.Name_ja', 'Title.NameFemale_ja',

    // Programmatic Properties
    'ID',
    'AchievementCategory.Name',
    'AchievementCategory.AchievementKind.Name',
    'Order',
];

module.exports = async function cacheAchievements(done) {
    const achievements = await pageRequest(`http://xivapi.com/Achievement?columns=${COLUMNS.join(',')}`);

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
    done();
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