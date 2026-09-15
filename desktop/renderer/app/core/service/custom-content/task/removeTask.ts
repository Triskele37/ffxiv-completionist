import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function removeTask(service: CustomContentService) {
    return (
        group: DataGroup,
        task: Task,
    ) => {
        service.removeTaskFromAppTree(group, task);
        service.removeTaskFromStore(task);
    };
}
