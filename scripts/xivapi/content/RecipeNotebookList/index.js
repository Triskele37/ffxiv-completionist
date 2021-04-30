const utils = require("../../utils");
const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
const getCachePath = require('./cache/getCachePath');
const mapCacheTask = require('./cache/mapCacheTask');
const getCacheKey = require('./cache/getCacheKey');
const getAppPath = require('./app/getAppPath');
const mapAppTask = require('./app/mapAppTask');

module.exports = {
    config,
    MERGE_KEYS: ["id", "level", "name"],
    excludedIds: utils.loadExcludedFile("RecipeNotebookList"),
    path: getCachePath,
    build: () => buildAPI(config, mapCacheTask),
    getCacheKey,
    getAppPath,
    mapAppTask,
    mergePathExcluded: function(cachePath) {
        const isCarpenter = cachePath.includes("/carpenter/");
        const isShared = cachePath.includes("/beast-tribe-quests/") ||
            cachePath.includes("/custom-deliveries/") ||
            cachePath.includes("/dyes");

        return isShared && !isCarpenter;
    }
};
