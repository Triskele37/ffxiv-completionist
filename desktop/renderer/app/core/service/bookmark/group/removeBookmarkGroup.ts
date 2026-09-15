import type { DataGroup } from '@model/DataGroup';

import type { BookmarkService } from '../bookmark.service';

export function removeBookmarkGroup(service: BookmarkService) {
    return (store: string[], group: DataGroup): void => {
        // Sync store
        store.splice(store.indexOf(group.fullStorageKey), 1);

        // Sync app data
        service.group.subGroups?.delete(group.fullStorageKey);
        service.group.subGroups = new Map(service.group.subGroups);
    };
}
