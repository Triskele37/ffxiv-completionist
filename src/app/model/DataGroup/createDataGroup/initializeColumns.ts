import { Globals } from '@constant/Global';
import { DataGroup } from '../';

export function initializeColumns(group: DataGroup, json) {
    if(json.headers) {
        group.columns = Object.keys(json.headers)
            .map((key) => ({ key, ...json.headers[key] }));
    }
    else if(group._parent?.columns) {
        group.columns = group._parent.columns;
    }

    // Show keys when in dev mode
    if(Globals.config.isAdmin) {
        if(group.columns?.[0] && group.columns[0].key !== 'fullStorageKey') {
            group.columns.unshift({
                key: 'fullStorageKey',
                header: 'ID'
            });
        }
    }
}
