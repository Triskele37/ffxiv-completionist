import type { Task } from '@model/Task';

import type { NavigationService } from '../navigation.service';

export function setSelectedTask(service: NavigationService) {
    return (
        task: Task,
    ): void => {
        task.selected.set(true);
        service.selectedTask.set(task);
        service.setSelectedGroup(task._parent);
    };
}
