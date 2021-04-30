module.exports = function mapCacheTask(RecipeNotebookList) {
    const recipes = [];

    let hasRecipe = true;
    for(let i = 0; hasRecipe; i++) {
        const Recipe = RecipeNotebookList[`Recipe${i}`];
        hasRecipe = !!Recipe;

        if(hasRecipe) {
            const stars = new Array(Recipe.RecipeLevelTable.Stars).fill("★").join("");

            recipes.push({
                "ID": Recipe.ID,
                "Level": `${Recipe.RecipeLevelTable.ClassJobLevel} ${stars}`,
                "Name_de": cleanName(Recipe.ItemResult.Name_de),
                "Name_en": cleanName(Recipe.ItemResult.Name_en),
                "Name_fr": cleanName(Recipe.ItemResult.Name_fr),
                "Name_ja": cleanName(Recipe.ItemResult.Name_ja),
            });
        }
    }

    return recipes;
};

function cleanName(name) {
    return name.replace(' ', '').replace(' ', '');
}
