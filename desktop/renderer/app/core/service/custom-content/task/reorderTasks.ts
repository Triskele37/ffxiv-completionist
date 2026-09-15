import type { Task } from '@model/Task';

import type { CustomContentService } from '../custom-content.service';

export function reorderTasks(service: CustomContentService) {
    return (
        tasks: Task[],
    ): void => {
        if(!tasks[0]) return;

        // Retrieve the meta and save data for the group with these tasks
        const metaStorageKey = service.getMetaStorageKey(tasks[0]._parent);
        const parentMeta = service.svcSaveStore.get(metaStorageKey);
        const saveStorageKey = tasks[0]._parent.fullStorageKey;
        const parentSave = service.svcSaveStore.get(saveStorageKey);

        // Modify *in place* to ensure non-task properties persist
        for(const task of tasks) {
            const key = `x${task.id}`;
            const tempMeta = parentMeta[key];
            delete parentMeta[key];
            parentMeta[key] = tempMeta;

            const tempSave = parentSave[task.id];
            delete parentSave[task.id];
            parentSave[task.id] = tempSave;
        }

        // Write to file
        service.svcSaveStore.set(metaStorageKey, parentMeta);
        service.svcSaveStore.set(saveStorageKey, parentSave);
    };
}
