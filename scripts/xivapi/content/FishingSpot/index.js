const utils = require("../../utils");

const config = require('./config.json');

module.exports = {
    config,
    excludedIds: utils.loadExcludedFile("FishingSpot"),
    getCachePath: function(FishingSpot) {
        return [];
    }
};
