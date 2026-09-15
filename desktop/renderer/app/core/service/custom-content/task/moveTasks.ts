import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function moveTasks(service: CustomContentService) {
    return (
        targetGroup: DataGroup,
        tasks: Task[],
    ): void => {
        // const oldParent = tasks[0]._parent;

        for(const task of tasks) {
            // Keep reference to old properties
            const oldMetaStorageKey = service.getMetaStorageKey(task);
            const oldMeta = service.svcSaveStore.get(oldMetaStorageKey) || {};
            const { fullStorageKey: oldStorageKey } = task;
            const oldSave = service.svcSaveStore.get(oldStorageKey);

            // Get next safe ID based on new parent
            const parentMetaStorageKey = service.getMetaStorageKey(targetGroup);
            const parentMeta = service.svcSaveStore.get(parentMetaStorageKey) || {};
            const [newId] = service.getNextKeyForMeta(parentMeta, false);

            // Change position in app tree
            service.changeTaskParent(task, targetGroup, newId);

            // Change position in completion & meta
            service.svcSaveStore.delete(oldMetaStorageKey);
            service.svcSaveStore.set(service.getMetaStorageKey(task), oldMeta);
            service.svcSaveStore.delete(oldStorageKey);
            service.svcSaveStore.set(task.fullStorageKey, oldSave);
        }

        service.onGroupUpdated$.next();
    };
}
