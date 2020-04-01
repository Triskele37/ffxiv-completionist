const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");

// The values to grab from xivAPI
const COLUMNS = [
    // Base properties
    'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
    'RecipeLevelTable.ClassJobLevel',
    'RecipeLevelTable.Stars',
    'GamePatch.Version',

    // Craft Properties
    'AmountResult', 'CanHq', 'CanQuickSynth', 'IsExpert', 'IsSpecializationRequired',

    // Ingredients
    'AmountIngredient0', 'AmountIngredient1', 'AmountIngredient2', 'AmountIngredient3', 'AmountIngredient4',
    'AmountIngredient5', 'AmountIngredient6', 'AmountIngredient7', 'AmountIngredient8', 'AmountIngredient9',
    'ItemIngredient0.ID', 'ItemIngredient1.ID', 'ItemIngredient2.ID', 'ItemIngredient3.ID', 'ItemIngredient4.ID',
    'ItemIngredient5.ID', 'ItemIngredient6.ID', 'ItemIngredient7.ID', 'ItemIngredient8.ID', 'ItemIngredient9.ID',

    // Programmatic Properties
    'ID',
    'ClassJob.Abbreviation',
    'SecretRecipeBook.Name',
    //'GameContentLinks.RecipeNotebookList',
    'Order',
];

module.exports = async function cacheCraftingItems(done) {
    const items = await pageRequest(`http://xivapi.com/Recipe?columns=${COLUMNS.join(',')}`);

    // Restructure the object
    const json = items.map((item) => {
        const { AchievementCategory, GamePatch, Item, Title, ...rest } = item;

        return {
            Patch: GamePatch.Version,
            ...rest,
        };
    });

    fs.writeFileSync('./xivapi/data/crafting-items/items.json', JSON.stringify(json, null, 4));
    done();
};
