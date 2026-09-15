import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function editTaskMeta(service: CustomContentService) {
    return (
        task: Task,
        key: string,
        value: string,
    ): void => {
        const metaStorageKey = service.getMetaStorageKey(task);
        const taskMeta = service.svcSaveStore.get(metaStorageKey) || {};
        taskMeta[key] = value;
        task[key] = value;

        service.svcSaveStore.set(metaStorageKey, taskMeta);
    };
}
