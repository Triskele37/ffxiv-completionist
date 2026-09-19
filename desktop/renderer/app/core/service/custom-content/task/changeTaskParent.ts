import type { Task } from '@model/Task';
import type { DataGroup } from '@model/DataGroup';
import { getContentLink } from '@model/Link/getContentLink';

import type { CustomContentService } from '../custom-content.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function changeTaskParent(service: CustomContentService) {
    return (
        task: Task,
        newParent: DataGroup,
        newId: number,
    ): void => {
        const i = task._parent.tasks.findIndex((t) => t.id === task.id);
        task._parent.tasks.splice(i, 1);

        task.id = newId;
        task._parent = newParent;
        task.contentLink = getContentLink(task);
        task.storageKey = `${newId ?? -1}`;
        task.fullStorageKey = `${newParent.fullStorageKey}.${task.storageKey}`;

        if(!newParent.tasks) newParent.tasks = [];
        newParent.tasks.push(task);
    };
}
