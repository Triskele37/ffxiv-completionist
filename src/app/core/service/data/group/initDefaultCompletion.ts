import { CompletionFlag } from '@constant';
import { DataGroup } from '@model/DataGroup';

import { DataServiceContext } from '../types';

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
