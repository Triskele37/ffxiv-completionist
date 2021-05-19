const utils = require("../../../../utils");
const buildAPI = require("../../../../cli/util/buildAPI");

const config = require("./config.json");

// FishParameter is identical to SpearfishingItem (as of 5.5)
const getCachePath = require("../FishParameter/cache/getCachePath");
const mapCacheTask = require("../FishParameter/cache/mapCacheTask");
const getCacheKey = require("../FishParameter/cache/getCacheKey");
const getAppPath = require("../FishParameter/app/getAppPath");
const mapAppTask = require("../FishParameter/app/mapAppTask");

module.exports = {
    config,
    MERGE_KEYS: ["id", "name", "iLvl", "location", "fishingHole", "type"],
    excludedIds: utils.loadExcludedFile(__dirname),
    getCachePath,
    build: () => buildAPI(config, mapCacheTask),
    getCacheKey,
    getAppPath,
    mapAppTask
};
