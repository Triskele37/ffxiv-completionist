const fs = require('fs');
const path = require('path');

const DATA = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');

function getIdNameMap(content) {
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

module.exports = { getIdNameMap };
