import { CompletionFlag } from '@constant';
import { setCompletion } from '@model/Task/completion/setCompletion';

import { DataGroup } from '../';

export function setDefaultCompletion(group: DataGroup | null, value: CompletionFlag) {
    if(!group) return;

    group.defaultCompletion = value;

    group.subGroups?.forEach((subGroup) => setDefaultCompletion(subGroup, value));

    group.tasks.forEach((task) => {
        if(task.defaultCompletion) setCompletion(task, value);
    });
}
