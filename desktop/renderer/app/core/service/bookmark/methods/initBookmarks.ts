import { BookmarkService } from '../bookmark.service';

export function initBookmarks(service: BookmarkService) {
    return (): void => {
        service.initBookmarkTasks();
        service.initBookmarkGroups();
    };
}
