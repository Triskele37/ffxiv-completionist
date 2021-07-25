const Content = require("../../../Content");

const Recipes = new Content(__dirname);
Recipes.API_ENDPOINT = "RecipeNotebookList";
Recipes.APP_PATH = "logs/crafting";

Recipes.MERGE_KEYS = ["id", "name"];
Recipes.COMMON_KEYS = ["level"];

module.exports = Recipes;
