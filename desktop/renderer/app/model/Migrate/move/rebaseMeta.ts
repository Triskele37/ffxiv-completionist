import type { PlayerSave } from '@common/PlayerSave';

import { isOrIsChildOf } from '../util/isOrIsChildOf';

export function rebaseTaskMeta(
    save: PlayerSave,
    oldFullStorageKey: string,
    newFullStorageKey: string,
): void {
    // Rebase bookmarked tasks
    if(save['bookmarked-tasks']) {
        const index = save['bookmarked-tasks'].indexOf(oldFullStorageKey);
        if(index !== -1) save['bookmarked-tasks'][index] = newFullStorageKey;
    }

    // Rebase notes
    if(save['notes']) {
        if(save['notes'][oldFullStorageKey]) {
            save['notes'][newFullStorageKey] = save['notes'][oldFullStorageKey];
            delete save['notes'][oldFullStorageKey];
        }
    }
}

export function rebaseGroupMeta(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
): void {
    // Re-base bookmarked groups at and descending from oldGroupPath
    if(save['bookmarked-groups']) {
        for(let i = 0; i < save['bookmarked-groups'].length; i++) {
            const bookmark = save['bookmarked-groups'][i];
            if(isOrIsChildOf(bookmark, oldGroupPath)) {
                save['bookmarked-groups'][i] = save['bookmarked-groups'][i]
                    .replace(oldGroupPath, newGroupPath);
            }
        }
    }

    // Re-base bookmarked tasks at and descending from oldGroupPath
    if(save['bookmarked-tasks']) {
        for(let i = 0; i < save['bookmarked-tasks'].length; i++) {
            const bookmark = save['bookmarked-tasks'][i];
            if(isOrIsChildOf(bookmark, oldGroupPath)) {
                save['bookmarked-tasks'][i] = save['bookmarked-tasks'][i]
                    .replace(oldGroupPath, newGroupPath);
            }
        }
    }

    // Re-base notes at and descending from oldGroupPath
    if(save['notes']) {
        for(const k in save['notes']) {
            if(isOrIsChildOf(k, oldGroupPath)) {
                const newK = k.replace(oldGroupPath, newGroupPath);
                save['notes'][newK] = save['notes'][k];
                delete save['notes'][k];
            }
        }
    }
}
