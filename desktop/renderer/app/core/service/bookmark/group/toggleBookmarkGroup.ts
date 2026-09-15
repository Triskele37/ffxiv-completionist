import type { DataGroup } from '@model/DataGroup';

import type { BookmarkService } from '../bookmark.service';

// Returns whether the group is now in the store
export function toggleBookmarkGroup(service: BookmarkService) {
    return (group: DataGroup): boolean => {
        const store = service.svcSave.get('bookmarked-groups');

        const addBookmark = !store.includes(group.fullStorageKey);
        if(addBookmark) service.addBookmarkGroup(store, group);
        else service.removeBookmarkGroup(store, group);

        service.svcSave.set('bookmarked-groups', store);
        service.onGroupUpdated$.next();

        return addBookmark;
    };
}
