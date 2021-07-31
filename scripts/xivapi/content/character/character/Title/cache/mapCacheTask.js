const buildAppNameFields = require("../util/buildAppNameFields");
const buildAppAchievementFields = require("../util/buildAppAchievementFields");

module.exports = function mapCacheTask(Title) {
    return {
        "ID": Title.ID,
        "Order": Title.Order,
        "Patch": (Title.GamePatch && Title.GamePatch.Version) ? Title.GamePatch.Version : "",
        ...buildAppNameFields(Title),
        ...buildAppAchievementFields(Title),
        ...buildTitleChainProps(Title)
    }
};

function buildTitleChainProps(Title) {
    const chains = {};

    // Sibling Chains
    if(Title?.GameContentLinks?.Achievement?.Title) {
        const cSiblings = Title.GameContentLinks.Achievement.Title.map((t) => `achievement.${t}`);
        if(cSiblings.length) chains.cSiblings = cSiblings;
    }

    return chains;
}
