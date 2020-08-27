const buildAPI = require('../util/buildAPI');

const config = require('./config');
// const mapProperties = require('./propertyMap');

module.exports = {
    RecipeConfig: config,
    RecipePath: function(Recipe) {
        return [
            Recipe.ClassJob.Abbreviation,
            Recipe.RecipeLevelTable.ClassJobLevel
        ];
    },
    // RecipeBuild: () => buildAPI(config, mapProperties)
};
