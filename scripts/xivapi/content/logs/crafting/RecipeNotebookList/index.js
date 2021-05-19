const Content = require("../../../Content");

const Recipes = new Content(__dirname);
Recipes.MERGE_KEYS = ["id", "name"];
Recipes.COMMON_KEYS = ["level"];

module.exports = Recipes;
