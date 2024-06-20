const fs = require('fs');
const path = require('path');

const PATCH = path.join('C:', 'workspace', 'ffxiv-datamining-patches');
const PATCH_DATA = path.join(PATCH, 'patchdata');
const PATCH_LIST = path.join(PATCH, 'patchlist.json');

const MINED = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');

const CONTENT = 'CharaCardDecoration';

doRando();

function doRando() {
    const output = {};

    const contentPatchPath = path.join(PATCH_DATA, `${CONTENT}.json`);
    const contentPatch = JSON.parse(fs.readFileSync(contentPatchPath, 'utf8'));
    const patchList = JSON.parse(fs.readFileSync(PATCH_LIST, 'utf8'));

    fs.readdirSync(path.join(MINED, CONTENT)).forEach((entity) => {
        const taskPath = path.join(MINED, CONTENT, entity, 'en.json');
        const json = JSON.parse(fs.readFileSync(taskPath, 'utf8'));
        const patchId = contentPatch[entity];
        const patch = patchList.find((p) => p.ID === patchId)?.Version;

        output[entity] = {
            name: json.Name,
            patch: patch,
        };
    });

    fs.writeFileSync('test.json', JSON.stringify(output, null, 4));
}
