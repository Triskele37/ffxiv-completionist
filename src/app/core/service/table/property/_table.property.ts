import type { TableServiceContext } from '../types';
import { setGroup } from './setGroup';
import { setTasks } from './setTasks';
import { setHasNumericColumns } from './setHasNumericColumns';

export type TablePropertyFacet = ReturnType<typeof createPropertyFacet>;

export function createPropertyFacet(this: TableServiceContext) {
    return {
        setGroup: setGroup.bind(this),
        setTasks: setTasks.bind(this),
        setHasNumericColumns: setHasNumericColumns.bind(this),
    };
}
