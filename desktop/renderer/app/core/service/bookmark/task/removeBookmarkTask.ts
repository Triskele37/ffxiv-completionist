import type { Task } from '@model/Task';

import type { BookmarkService } from '../bookmark.service';

export function removeBookmarkTask(service: BookmarkService) {
    return (store: string[], task: Task): void => {
        // Sync store
        store.splice(store.indexOf(task.fullStorageKey), 1);

        // Sync app data
        const appIndex = service.group.tasks.findIndex(
            (t) => t.fullStorageKey === task.fullStorageKey
        );
        service.group.tasks.splice(appIndex, 1);
        service.group.tasks = [...service.group.tasks];
    };
}
