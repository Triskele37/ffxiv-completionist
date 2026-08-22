import { DataGroup } from '@model/DataGroup';
import { JSONResource } from '@model/JSONResource';

import { DataServiceContext } from '../types';

/**
 * Initialize group columns
 * - Converts from Record<string, Column> to Column[]
 * - Localizes header text
 * - Inherits parent columns if json has none
 * */
export function initColumns(
    this: DataServiceContext,
    group: DataGroup,
    json: JSONResource,
): void {
    const lang = this.svcConfig.get('lang');

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
