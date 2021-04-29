const buildAPI = require('../util/buildAPI');

const config = require('./config');
// const mapProperties = require('./propertyMap');

module.exports = {
    RecipeNotebookListConfig: config,
    RecipeNotebookListPath: function(RecipeNotebookList) {
        return [
            RecipeNotebookList.Recipe0.CraftType.Name
        ];
    },
    // RecipeNotebookListBuild: () => buildAPI(config, mapProperties)
};
