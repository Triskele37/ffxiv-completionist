import type { TableServiceContext } from '../types';
import { ExpandedRows } from './_types';

export function expandAll(this: TableServiceContext): void {
    this.rowGroup.expandedRows.set(
        this.originalTasks
            .map((task) => task._parent.fullStorageKey)
            .reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {} as ExpandedRows)
    );
}
