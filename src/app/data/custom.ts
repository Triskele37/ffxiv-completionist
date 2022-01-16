import { DataGroup } from '@domain/DataGroup';
import { SaveStoreService } from '@service/store/save-store.service';
import { ElectronService } from '@service/electron/electron.service';

export function Custom(svcElectron: ElectronService, svcSaveStore: SaveStoreService, parent): DataGroup {
    const data = DataGroup.fromJSON(svcElectron, parent, './custom');
    data.isCustomGroup = true;
    data.draggable = true;

    const customTasks = svcSaveStore.store.get('custom') || {};

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
