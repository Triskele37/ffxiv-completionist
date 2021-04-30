const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
// const mapProperties = require('./propertyMap');

module.exports = {
    config,
    path: function(Recipe) {
        const isLevelRecipe = !!Recipe.RecipeLevelTable; // .ClassJobLevel = 20
        const isMasterRecipe = !!Recipe.SecretRecipeBook; // .Name = "Master Armorer VIII"

        return [
            Recipe.ClassJob.Name,
            Recipe.RecipeLevelTable.ClassJobLevel
        ];
    },
    // build: () => buildAPI(config, mapProperties)
};
