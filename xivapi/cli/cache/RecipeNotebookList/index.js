const config = require('./cacheConfig');

module.exports = {
    RecipeNotebookListConfig: config,
    RecipeNotebookListPath: function(RecipeNotebookList) {
        return [
            RecipeNotebookList.Recipe0.CraftType.Name
        ];
    }
};
