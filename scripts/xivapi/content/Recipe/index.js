const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
// const mapProperties = require('./propertyMap');

module.exports = {
    config,
    path: function(Recipe) {
        return [
            Recipe.ClassJob.Abbreviation,
            Recipe.RecipeLevelTable.ClassJobLevel
        ];
    },
    // build: () => buildAPI(config, mapProperties)
};
