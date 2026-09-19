import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function removeTaskFromAppTree(service: CustomContentService) {
    return (
        group: DataGroup,
        task: Task,
    ): void => {
        const index = group.tasks.findIndex((t) => t.id === task.id);
        group.tasks.splice(index, 1);
        service.onGroupUpdated$.next();
    }
}
