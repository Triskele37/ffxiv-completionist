import type { BookmarkService } from '../bookmark.service';

export function initBookmarkGroups(service: BookmarkService) {
    return (): void => {
        service.svcSave.get('bookmarked-groups').forEach((fullStorageKey: string) => {
            const path = fullStorageKey.replace(/^game./, '');

            // Add the bookmarked group to this group
            const group = service.svcData.getGroup(path);
            if(group?.fullStorageKey === fullStorageKey) {
                service.group.subGroups?.set(group.fullStorageKey, group);
            }
            else {
                console.error('Unable to find bookmarked group:', path);
            }
        });
    };
}
