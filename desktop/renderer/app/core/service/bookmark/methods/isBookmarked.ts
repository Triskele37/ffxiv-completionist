import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { BookmarkService } from '../bookmark.service';

// Returns whether something is in the store
export function isBookmarked(service: BookmarkService) {
    return (item: DataGroup | Task): boolean => {
        if(item.dataType === 'Group') {
            const bookmarks = service.svcSave.get('bookmarked-groups');
            return bookmarks.includes(item.fullStorageKey);
        }
        else {
            const bookmarks = service.svcSave.get('bookmarked-tasks');
            return bookmarks.includes(item.fullStorageKey);
        }
    };
}
