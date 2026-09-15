import type { Column } from '@model/Column';

import type { DataService } from '../data-service';
import type { JSON_GROUP } from '../types';

/**
 * Transform the raw column json to the initial app json
 */
export function mapColumns(service: DataService) {
    return (
        json: JSON_GROUP,
    ): Column[] | undefined => {
        if(!json.columns) return;

        return Object.keys(json.columns).map((key) => {
            const column: Column = {
                key,
                ...json.columns![key],
                ...service.defaultColumnProps(key, json.columns![key])
            };

            service.translateCommonKeys(column);

            return column;
        });
    };
}
