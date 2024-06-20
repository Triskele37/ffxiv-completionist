const fs = require('fs');
const path = require('path');

const PATCH = path.join('C:', 'workspace', 'ffxiv-datamining-patches');
const PATCH_DATA = path.join(PATCH, 'patchdata');
const PATCH_LIST = path.join(PATCH, 'patchlist.json');

function getContentPatchVersionMap(content) {
    const patchList = JSON.parse(fs.readFileSync(PATCH_LIST, 'utf8'));
    const patchMap = patchList.reduce((acc, { ID, Version }) => {
        acc[ID] = Version;
        return acc;
    }, {});

    const contentPath = path.join(PATCH_DATA, `${content}.json`);
    const contentPatchMap = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

    Object.keys(contentPatchMap).forEach((id) => {
        const versionId = contentPatchMap[id];
        contentPatchMap[id] = patchMap[versionId];
    });

    return contentPatchMap;
}

module.exports = { getContentPatchVersionMap };
