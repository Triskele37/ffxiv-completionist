import type { TableServiceContext } from '../types';
import { setGroup } from './setGroup';
import { setHasNumericColumns } from './setHasNumericColumns';

export type TablePropertyFacet = ReturnType<typeof createPropertyFacet>;

export function createPropertyFacet(this: TableServiceContext) {
    return {
        setGroup: setGroup.bind(this),
        setHasNumericColumns: setHasNumericColumns.bind(this),
    };
}
