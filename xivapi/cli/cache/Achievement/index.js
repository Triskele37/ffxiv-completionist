const config = require('./cacheConfig');

module.exports = {
    AchievementConfig: config,
    AchievementPath: function(Achievement) {
        return [
            Achievement.AchievementCategory.AchievementKind.Name,
            Achievement.AchievementCategory.Name
        ];
    }
};
