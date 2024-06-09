import { Globals } from '@constant/Global';
import { DataGroup } from '../';

export function initializeColumns(group: DataGroup, json) {
    const lang = Globals.config.lang;

    if(json.headers) {
        group.columns = Object.keys(json.headers)
            .map((key) => ({
                key,
                ...json.headers[key],
                header: json.headers[key][`header_${lang}`]
            }));
    }
    else if(group._parent?.columns) {
        group.columns = group._parent.columns;
    }
}
