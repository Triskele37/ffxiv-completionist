import type { DataGroup } from '@model/DataGroup';

import type { DataServiceContext } from '../types';

export function initNumericCompletion(
    this: DataServiceContext,
    group: DataGroup,
    value: boolean
): void {
    group.isNumericCompletion = value;
    group.tasks.forEach((task) => task.isNumericCompletion = value);
}
