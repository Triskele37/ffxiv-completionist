import type { BookmarkService } from '../bookmark.service';

export function initBookmarkTasks(service: BookmarkService) {
    return (): void => {
        service.svcSave.get('bookmarked-tasks').forEach((fullStorageKey: string) => {
            // Remove 'game' step
            const path = fullStorageKey.replace(/^game./, '');

            // Add the task to this group
            const task = service.svcData.getTask(path);
            if(task) service.group.tasks.push(task);
            else {
                console.error('Unable to find bookmarked task:', path);
            }
        });
    };
}
