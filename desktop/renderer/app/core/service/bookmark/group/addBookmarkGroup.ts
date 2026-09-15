import type { DataGroup } from '@model/DataGroup';

import type { BookmarkService } from '../bookmark.service';

export function addBookmarkGroup(service: BookmarkService) {
    return (store: string[], group: DataGroup): void => {
        // Sync store
        store.push(group.fullStorageKey);

        // Sync app data
        service.group.subGroups?.set(group.fullStorageKey, group);
    };
}
