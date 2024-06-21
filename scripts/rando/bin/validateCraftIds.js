const fs = require('fs');
const path = require('path');

const APP = path.join('C:', 'workspace', 'ffxiv-completionist', 'resources');
const MINED = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');

doRando();

function doRando() {
    const itemMap = getItemMap();
    const recipeRoot = path.join(APP, 'logs', 'crafting');
    diveApp(recipeRoot);

    function diveApp(appPath) {
        fs.readdirSync(appPath).forEach((entity) => {
            if(entity === 'master-crafting-books.json') return;

            const entityPath = path.join(appPath, entity);
            if(fs.lstatSync(entityPath).isDirectory()) diveApp(entityPath);
            else {
                const json = JSON.parse(fs.readFileSync(entityPath, 'utf8'));
                Object.keys(json.tasks ?? {}).forEach((xId) => {
                    const id = xId.replace('x', '');
                    const appName = json.tasks[xId].name_en;

                    Object.keys(itemMap).forEach((minedId) => {
                        if(itemMap[minedId] === appName) {
                            if(minedId.toString() !== id.toString()) {
                                console.log(`${entityPath} ${xId} ${appName} should be ${minedId}`);
                            }
                        }
                    });
                });
            }
        });
    }
}

function getItemMap() {
    const itemMap = {};

    const minedRecipePath = path.join(MINED, 'Recipe');
    fs.readdirSync(minedRecipePath).forEach((recipeId) => {
        const recipePath = path.join(minedRecipePath, recipeId, 'en.json');
        const recipeJson = JSON.parse(fs.readFileSync(recipePath, 'utf8'));
        const itemId = recipeJson.ItemResult.split('.')[1];
        const itemPath = path.join(MINED, 'Item', itemId, 'en.json');
        const itemJson = JSON.parse(fs.readFileSync(itemPath, 'utf8'));
        itemMap[itemId] = itemJson.Name;
    });

    return itemMap;
}
