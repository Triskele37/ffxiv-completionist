const buildAPI = require('../util/buildAPI');

const config = require('./config');
const mapProperties = require('./propertyMap');

module.exports = {
    AchievementConfig: config,
    AchievementPath: function(Achievement) {
        return [
            Achievement.AchievementCategory.AchievementKind.Name,
            Achievement.AchievementCategory.Name
        ];
    },
    AchievementBuild: () => buildAPI(config, mapProperties)
};
