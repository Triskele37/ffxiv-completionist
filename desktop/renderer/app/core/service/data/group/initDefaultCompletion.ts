import type { CompletionFlag } from '@constant';
import type { DataGroup } from '@model/DataGroup';

import type { DataServiceContext } from '../types';

export function initDefaultCompletion(
    this: DataServiceContext,
    group: DataGroup | null,
    value: CompletionFlag
): void {
    if(!group) return;

    group.defaultCompletion = value;

    group.subGroups?.forEach((subGroup) => {
        this.group.initDefaultCompletion(subGroup, value)
    });

    group.tasks.forEach((task) => {
        if(task.defaultCompletion) {
            this.svcMark.setCompletion(task, value);
        }
    });
}
