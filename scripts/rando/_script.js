const fs = require('fs');
const path = require('path');

const { getContentPatchVersionMap } = require('../getContentPatchVersionMap');

const APP = path.join('C:', 'workspace', 'ffxiv-completionist', 'resources');

doRando();

function doRando() {
    const patchMap = getContentPatchVersionMap('Item');

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
                    json.tasks[xId].patch = patchMap[id];
                });
                fs.writeFileSync(entityPath, JSON.stringify(json, null, 4));
            }
        });
    }
}
