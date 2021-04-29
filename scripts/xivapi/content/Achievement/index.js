const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
const mapCacheTask = require('./mapCacheTask');
const mapAppTask = require('./mapAppTask');

module.exports = {
    MERGE_KEYS: ["id", "name", "description", "reward", "points"],
    mapAppTask,
    config,
    path: function(Achievement) {
        return [
            Achievement.AchievementCategory.AchievementKind.Name,
            Achievement.AchievementCategory.Name
        ];
    },
    translateCachePath: function(path) {
        path = path.replace('crafting-gathering', 'crafting-and-gathering');

        return path;
    },
    build: () => buildAPI(config, mapCacheTask),
    translateKeys: function(appKey, lang) {
        switch(appKey) {
            case "id": return "ID";
            case "name": return `Name_${lang}`;
            case "description": return `Description_${lang}`;
            case "reward": return `Reward_${lang}`;
            case "points": return "Points";
        }
    }
};
