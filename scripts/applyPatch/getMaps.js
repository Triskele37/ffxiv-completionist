const fs = require('fs');
const path = require('path');
const patchlist = require('../../../ffxiv-datamining-patches/patchlist.json');

const DATA = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');

function getMaps(content) {
    return {
        patchMap: getPatchMap(),
        contentPatchMap: getContentPatchMap(content),
        ...getIdNameMaps(content)
    };
}


module.exports = { getMaps };

// Main patch map (maps patch id to patch version)
function getPatchMap() {
    const patchMap = {};
    patchlist.forEach(({ ID, Version }) => patchMap[ID] = Version);
    return patchMap;
}

// Content patch map
function getContentPatchMap(content) {
    return require(`../../../ffxiv-datamining-patches/patchdata/${content}.json`);
}

// ID/Name maps
function getIdNameMaps(content) {
    const contentPath = path.join(DATA, content);

    const idToNameMap = {};
    const nameToIdMap = {};
    fs.readdirSync(contentPath).forEach((entity) => {
        const recordPath = path.join(contentPath, entity, 'en.json');
        const record = JSON.parse(fs.readFileSync(recordPath, 'utf8'));
        const { RowId, Name } = record;
        if(!Name || !RowId) return;

        if(idToNameMap[RowId]) console.error(`Duplicate ID ${RowId}`);
        idToNameMap[RowId] = Name;

        if(nameToIdMap[Name]) console.error(`Duplicate Name ${Name}`);
        nameToIdMap[Name] = RowId;
    });

    return { idToNameMap, nameToIdMap };
}
