import type { Column } from '@model/Column';
import type { JSONResource } from '@model/JSONResource';

import type { DataService } from '../data-service';

/**
 * Apply default column properties
 * - e.g. 'patch' has a default width of 100px
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function defaultColumnProps(service: DataService) {
    return (
        key: string,
        column: JSONResource,
    ): Partial<Column> => {
        switch(key) {
            case 'category':
                return {
                    filterable: column.filterable ?? true,
                    // width: column.width ?? 250,
                };
            case 'patch':
                return {
                    filterable: column.filterable ?? true,
                    width: column.width ?? 90,
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
            default:
                return {};
        }
    };
}
