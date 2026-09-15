import type { DataGroup } from '@model/DataGroup';
import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

/**
 * Initialize group columns
 * - Converts from Record<string, Column> to Column[]
 * - Localizes header text
 * - Inherits parent columns if json has none
 * */
export function initColumns(service: DataService) {
    return (
        group: DataGroup,
        json: JSONResource,
    ): void => {
        const lang = service.svcConfig.get('lang');

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
    };
}
