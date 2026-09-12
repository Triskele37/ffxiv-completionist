import type { PlayerSave } from '@common/PlayerSave';
import type { ID } from '@common/Migration';

import { deleteTaskMeta } from '../delete/deleteMeta';
import { ensureDeepPath } from '../retrieve/ensureDeepPath';
import { getDeepProperty } from '../retrieve/getDeepProperty';
import { rebaseTaskMeta } from './rebaseMeta';

/**
 * Change the task id of a task within the same group and rebase all associated meta
 * - key collisions allowed for the case of merging an existing onto an existing
 * */
export function changeKey(
    save: PlayerSave,
    groupPath: string,
    oldId: ID,
    newId: ID,
): void {
    const oldGroup = getDeepProperty(save, groupPath);
    const oldStrId = oldId.toString();
    const newStrId = newId.toString();

    // Only attempt to apply the change if there was an old value
    if(oldGroup?.[oldStrId]) {
        const newGroup = ensureDeepPath(save, groupPath);

        newGroup[newStrId] = oldGroup[oldStrId];
        delete newGroup[oldStrId];
    }

    rebaseTaskMeta(save, `${groupPath}.${oldStrId}`, `${groupPath}.${newStrId}`);
}

/**
 * Change the task id of multiple tasks within the same group and their associated meta
 * - Be mindful of number vs string id handling
 * */
export function changeKeys(
    save: PlayerSave,
    groupPath: string,
    idMap: [number, number][],
): void {
    const group = getDeepProperty(save, groupPath);

    // Cache current data for task
    const data = idMap.reduce((acc, [oldId, newId]) => {
        acc[newId] = {
            flag: group?.[oldId],
            bookmark: save['bookmarked-tasks']?.includes(`${groupPath}.${oldId}`),
            note: save['notes'][`${groupPath}.${oldId}`]
        };

        return acc;
    }, {} as Record<number, CachedData>);

    // Clear current data for task
    idMap.forEach(([oldId]) => {
        if(group) delete group[oldId];
        deleteTaskMeta(save, `${groupPath}.${oldId}`)
    });

    // Write cached data to newId for task and meta
    idMap.forEach(([, newId]) => {
        const newStrId = newId.toString();
        const { flag, bookmark, note } = data[newId];
        if(group) group[newStrId] = flag;
        if(bookmark) save['bookmarked-tasks'].push(`${groupPath}.${newStrId}`);
        if(note) save['notes'][`${groupPath}.${newStrId}`] = note;
    });
}

type CachedData = {
    flag: string;
    bookmark?: boolean;
    note?: string;
};
