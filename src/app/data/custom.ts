import { DataGroup } from '@domain/DataGroup';
import { pStore } from '@service/store/store.service';

export function Custom(parent): DataGroup {
    const data = DataGroup.fromJSON(parent, './custom');
    data.isCustomGroup = true;
    data.draggable = true;

    const customTasks = pStore().get('custom') || {};

    // Have to temporarily keep this in until everyone is off 0.5.55
    if(!Array.isArray(customTasks)) {
        Object.keys(customTasks).forEach((key) => {
            customTasks[key].id = parseInt(key.substr(1), 10);
        });
        data.initializeTasks(customTasks);
    }
    else {
        let highestId = customTasks.length - 1;
        customTasks.forEach((meta) => {
            if(meta.id === undefined) meta.id = highestId++;
        });
        const fixedTasks = customTasks.reduce((acc, t) => {
            acc[`x${ t.id }`] = t;
            return acc;
        }, {});

        data.initializeTasks(fixedTasks);
    }

    return data;
}
