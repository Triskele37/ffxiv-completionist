import type { PlayerSave } from '@common/PlayerSave';

import { isOrIsChildOf } from '../util/isOrIsChildOf';

export function deleteTaskMeta(
    save: PlayerSave,
    fullStorageKey: string,
): void {
    // Remove bookmarked task if it exists
    if(save['bookmarked-tasks']) {
        const index = save['bookmarked-tasks'].indexOf(fullStorageKey);
        if(index !== -1) save['bookmarked-tasks'].splice(index, 1);
    }

    // Remove note if it exists
    if(save['notes']) {
        if(save['notes'][fullStorageKey]) {
            delete save['notes'][fullStorageKey];
        }
    }
}

export function deleteGroupMeta(
    save: PlayerSave,
    groupPath: string,
): void {
    // Remove bookmarked groups at and descending from groupPath
    if(save['bookmarked-groups']) {
        save['bookmarked-groups'] = save['bookmarked-groups']
            .filter((bookmark) => !isOrIsChildOf(bookmark, groupPath));
    }

    // Remove bookmarked tasks at and descending from groupPath
    if(save['bookmarked-tasks']) {
        save['bookmarked-tasks'] = save['bookmarked-tasks']
            .filter((bookmark) => !isOrIsChildOf(bookmark, groupPath));
    }

    // Remove notes at and descending from groupPath
    if(save['notes']) {
        for(const k in save['notes']) {
            if(isOrIsChildOf(k, groupPath)) {
                delete save['notes'][k];
            }
        }
    }
}
