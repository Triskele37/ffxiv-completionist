import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function removeTaskFromStore(service: CustomContentService) {
    return (
        task: Task,
    ): void => {
        service.svcSaveStore.delete(task.fullStorageKey);
        service.svcSaveStore.delete(service.getMetaStorageKey(task));
    };
}
