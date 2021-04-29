const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
// const mapProperties = require('./propertyMap');

module.exports = {
    config,
    path: function(RecipeNotebookList) {
        return [
            RecipeNotebookList.Recipe0.CraftType.Name
        ];
    },
    // build: () => buildAPI(config, mapProperties)
};
