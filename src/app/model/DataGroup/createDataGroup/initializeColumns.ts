import { Globals } from '@constant/Global';
import { JSONResource } from '@model/JSONResource';
import { DataGroup } from '../';

export function initializeColumns(group: DataGroup, json: JSONResource) {
    const lang = Globals.config?.lang;

    if(json.columns) {
        group.columns = Object.keys(json.columns)
            .map((key) => ({
                key,
                ...json.columns[key],
                header: json.columns[key].header ?? json.columns[key][`header_${lang}`]
            }));
    }
    else if(group._parent?.columns) {
        group.columns = group._parent.columns;
    }
}
