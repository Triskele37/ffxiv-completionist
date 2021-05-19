const utils = require("../../../../utils");

const config = require('./config.json');

module.exports = {
    config,
    excludedIds: utils.loadExcludedFile(__dirname),
    getCachePath: function(FishingSpot) {
        return [];
    }
};
