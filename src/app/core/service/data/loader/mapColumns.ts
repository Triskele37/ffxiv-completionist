import { Column } from '@model/Column';

import { DataServiceContext } from '../types';
import { JSON_GROUP } from './_types';

/**
 * Transform the raw column json to the initial app json
 */
export function mapColumns(
    this: DataServiceContext,
    json: JSON_GROUP,
): Column[] | null {
    if(!json.columns) return null;

    return Object.keys(json.columns).map((key) => {
        const column: Column = {
            key,
            ...json.columns![key],
            ...this.loader.defaultColumnProps(key, json.columns![key])
        };

        this.loader.translateCommonKeys(column);

        return column;
    });
}
