const utils = require("../../utils");
const buildAPI = require("../../cli/util/buildAPI");

const config = require("./config.json");
const getCachePath = require("./cache/getCachePath");
const mapCacheTask = require("./cache/mapCacheTask");
const getCacheKey = require("./cache/getCacheKey");
const getAppPath = require("./app/getAppPath");
const mapAppTask = require("./app/mapAppTask");

module.exports = {
    config,
    MERGE_KEYS: ["id", "name", "description", "reward", "points"],
    excludedIds: utils.loadExcludedFile("Achievement"),
    path: getCachePath,
    build: () => buildAPI(config, mapCacheTask),
    getCacheKey,
    mapAppTask,
    getAppPath
};
