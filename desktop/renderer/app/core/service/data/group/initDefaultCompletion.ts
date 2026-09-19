import type { CompletionFlag } from '@constant';
import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

export function initDefaultCompletion(service: DataService) {
    return (
        group: DataGroup | null,
        value: CompletionFlag
    ): void => {
        if(!group) return;

        group.defaultCompletion = value;

        group.subGroups?.forEach((subGroup) => {
            service.initDefaultCompletion(subGroup, value)
        });

        group.tasks.forEach((task) => {
            if(task.defaultCompletion) {
                service.svcMark.setCompletion(task, value);
            }
        });
    };
}
