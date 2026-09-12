import type { TableServiceContext } from '../types';

export function collapseAll(this: TableServiceContext): void {
    this.rowGroup.expandedRows.set({});
}
