const fs = require('fs');
const path = require('path');

import itemPatchData from '../../../ffxiv-datamining-patches/patchdata/Item.json';
const { patchMap } = require('./createPatchMap');
const { getIdNameMap } = require('./getIdNameMap');

applyPatch();

function applyPatch() {
    const { idToNameMap, nameToIdMap } = getIdNameMap('Item');
    dive('../../resources/logs/gathering/gathering-log');

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

        group.tasks.forEach((task) => {
            const itemId = nameToIdMap[task.name_en];
            const itemPatch = itemPatchData[itemId];
            task.patch = patchMap[itemPatch];
        });

        fs.writeFileSync(groupPath, JSON.stringify(task, null, 4));
    }
}
