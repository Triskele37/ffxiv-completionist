import type { Task } from '@model/Task';

import type { BookmarkService } from '../bookmark.service';

// Returns whether the task is now in the store
export function toggleBookmarkTask(service: BookmarkService) {
    return (task: Task): boolean => {
        const store = service.svcSave.get('bookmarked-tasks');

        const addBookmark = !store.includes(task.fullStorageKey);
        if(addBookmark) service.addBookmarkTask(store, task);
        else service.removeBookmarkTask(store, task);

        service.svcSave.set('bookmarked-tasks', store);

        return addBookmark;
    };
}
