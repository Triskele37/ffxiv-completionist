const utils = require("../../utils");
const buildAPI = require("../../cli/util/buildAPI");

const config = require("./config.json");
const mapCacheTask = require("./mapCacheTask");
const mapAppTask = require("./mapAppTask");

module.exports = {
    config,
    excludedIds: utils.loadExcludedFile("Achievement"),
    path: function(Achievement) {
        return [
            Achievement.AchievementCategory.AchievementKind.Name,
            Achievement.AchievementCategory.Name
        ];
    },
    build: () => buildAPI(config, mapCacheTask),
    MERGE_KEYS: ["id", "name", "description", "reward", "points"],
    mapAppTask,
    translateKeys: function(appKey, lang) {
        switch(appKey) {
            case "id": return "ID";
            case "name": return `Name_${lang}`;
            case "description": return `Description_${lang}`;
            case "reward": return `Reward_${lang}`;
            case "points": return "Points";
        }
    },
    translateCachePath: function(path) {
        path = path.replace("crafting-gathering", "crafting-and-gathering");

        return path;
    },
};
