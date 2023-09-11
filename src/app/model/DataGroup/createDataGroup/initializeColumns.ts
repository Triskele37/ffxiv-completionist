import { APP_CONFIG } from '../../../../environments/environment';
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
    if(APP_CONFIG.showKeys) {
        if(group.columns?.[0].key !== 'fullStorageKey') {
            group.columns.unshift({
                key: 'fullStorageKey',
                header: 'ID'
            });
        }
    }
}
