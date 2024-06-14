const fs = require('fs');
const path = require('path');

const { getMaps } = require('./getMaps');

const RESOURCES = path.join(process.cwd(), 'resources');
const TARGET = path.join(RESOURCES, 'duty', 'quest');
const TARGET_CONTENT = 'Quest';

applyPatchById();
// applyPatchByName();

function applyPatchByName() {
    const { patchMap, contentPatchMap, nameToIdMap } = getMaps(TARGET_CONTENT);
    dive(TARGET, applyPatchesToGroup);

    function applyPatchesToGroup(groupPath) {
        const group = JSON.parse(fs.readFileSync(groupPath, 'utf8'));
        if(!group.tasks) return;

        Object.keys(group.tasks).forEach((xId) => {
            const contentId = nameToIdMap[group.tasks[xId].name_en];
            const contentPatch = contentPatchMap[contentId];
            group.tasks[xId].patch = patchMap[contentPatch];
        });

        fs.writeFileSync(groupPath, JSON.stringify(group, null, 4));
    }
}

function applyPatchById() {
    const { patchMap, contentPatchMap, idToNameMap } = getMaps(TARGET_CONTENT);
    dive(TARGET, applyPatchesToGroup);

    function applyPatchesToGroup(groupPath) {
        const group = JSON.parse(fs.readFileSync(groupPath, 'utf8'));
        if(!group.tasks) return;

        Object.keys(group.tasks).forEach((xId) => {
            const contentId = xId.replace('x', '');
            const contentPatch = contentPatchMap[contentId];
            group.tasks[xId].patch = patchMap[contentPatch];
        });

        fs.writeFileSync(groupPath, JSON.stringify(group, null, 4));
    }
}

function dive(divePath, fileOp) {
    fs.readdirSync(divePath).forEach((entity) => {
        const entityPath = path.join(divePath, entity);

        if(fs.lstatSync(entityPath).isDirectory()) dive(entityPath, fileOp);
        else fileOp(entityPath)
    });
}
