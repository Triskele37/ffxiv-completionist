import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';

import type { BookmarkService } from '../bookmark.service';

// Returns whether the item is now in the store
export function toggleBookmark(service: BookmarkService) {
    return (item: DataGroup | Task): boolean => {
        if(item.dataType === 'Group') {
            return service.toggleBookmarkGroup(item);
        }
        else {
            return service.toggleBookmarkTask(item);
        }
    };
}
