import type { TableServiceContext } from '../types';

import { DataGroup } from '@model/DataGroup';

/**
 * Hook for any additional processing when updating group
 * */
export function setGroup(
    this: TableServiceContext,
    group: DataGroup,
): void {
    this.group.set(group);

    this.property.setHasNumericColumns();
    this.filter.updateFilteredTasks();
}
