const fs = require('fs');
const path = require('path');

const itemPatchData = require('../../../ffxiv-datamining-patches/patchdata/Item.json');
const { patchMap } = require('./createPatchMap');
const { getIdNameMap } = require('./getIdNameMap');

const RESOURCES = path.join(process.cwd(), 'resources');
const TARGET = path.join(RESOURCES, 'logs', 'gathering', 'gathering-log');

applyPatch();

function applyPatch() {
    const { idToNameMap, nameToIdMap } = getIdNameMap('Item');
    dive(TARGET);

    function dive(divePath) {
        fs.readdirSync(divePath).forEach((entity) => {
            const entityPath = path.join(divePath, entity);

            if(fs.lstatSync(entityPath).isDirectory()) dive(entityPath);
            else applyPatchesToGroup(entityPath)
        });
    }

    function applyPatchesToGroup(groupPath) {
        const group = JSON.parse(fs.readFileSync(groupPath, 'utf8'));
        if(!group.tasks) return;

        Object.keys(group.tasks).forEach((xId) => {
            const itemId = nameToIdMap[group.tasks[xId].name_en];
            const itemPatch = itemPatchData[itemId];
            group.tasks[xId].patch = patchMap[itemPatch];
        });

        fs.writeFileSync(groupPath, JSON.stringify(group, null, 4));
    }
}
