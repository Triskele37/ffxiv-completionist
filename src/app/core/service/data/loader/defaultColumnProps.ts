import { Column } from '@model/Column';
import { JSONResource } from '@model/JSONResource';

import { DataServiceContext } from '../types';

/**
 * Apply default column properties
 * - e.g. 'patch' has a default width of 100px
 */
export function defaultColumnProps(
    this: DataServiceContext,
    key: string,
    column: JSONResource,
): Partial<Column> {
    switch(key) {
        case 'category':
            return {
                filterable: column.filterable ?? true,
                width: column.width ?? 250,
            };
        case 'patch':
            return {
                filterable: column.filterable ?? true,
                width: column.width ?? 100,
            };
        case 'zone':
            return {
                filterable: column.filterable ?? true,
            };
        case 'level':
        case 'iLevel':
        case 'iLvl':
            return {
                width: column.width ?? 75,
            };
        default: return {};
    }
}
