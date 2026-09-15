import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import { DataGroup } from '@model/DataGroup';

import { BookmarkService } from '../bookmark.service';

export function initService(service: BookmarkService) {
    return (): DataGroup => {
        const group = service.svcData.loadGroupShallow(service.svcData.data, 'bookmarks');

        if(group) {
            group.subGroups = new Map();

            // Put this group in its placeholder
            service.svcData.data.subGroups?.set(group._key, group);

            // Keep task counts in sync when root data updates
            service.svcData.data.onUpdated$.subscribe(() => group.updated$.next());

            return group;
        }
        else {
            console.error('Failed to load Bookmarks group');
            return createDummyGroup();
        }
    };
}
