import { DataGroup } from '../';

export function initializeColumns(group: DataGroup, json) {
    if(json.headers) {
        group.columns = Object.keys(json.headers)
            .map((key) => ({ key, ...json.headers[key] }));
    }
    else if(group._parent?.columns) {
        group.columns = group._parent.columns;
    }
}
