const utils = require("../../../utils");

module.exports = function mapCacheTask(RecipeNotebookList) {
    const recipes = [];

    let hasRecipe = true;
    for(let i = 0; hasRecipe; i++) {
        const Recipe = RecipeNotebookList[`Recipe${i}`];
        hasRecipe = !!Recipe;

        if(hasRecipe) {
            const stars = new Array(Recipe.RecipeLevelTable.Stars).fill("★").join("");

            recipes.push({
                "ID": Recipe.ItemResult.ID,
                "Level": `${Recipe.RecipeLevelTable.ClassJobLevel}${stars ? ' ' + stars : ''}`,
                ...utils.spreadLangs(Recipe.ItemResult, "Name")
            });
        }
    }

    return recipes;
};
