import type { Task } from '@model/Task';

import type { BookmarkService } from '../bookmark.service';

export function addBookmarkTask(service: BookmarkService) {
    return (store: string[], task: Task): void => {
        // Sync store
        store.push(task.fullStorageKey);

        // Sync app data
        service.group.tasks.push(task);
    };
}
