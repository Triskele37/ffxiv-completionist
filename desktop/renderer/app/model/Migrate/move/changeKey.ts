import type { PlayerSave } from '@common/PlayerSave';

import type { ID } from '../types';
import { ensureDeepPath } from '../retrieve/ensureDeepPath';
import { getDeepProperty } from '../retrieve/getDeepProperty';
import { rebaseTaskMeta } from './rebaseMeta';

/**
 * Change the task id of a task within the same group and rebase all associated meta
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

        if(!newGroup[newStrId]) {
            newGroup[newStrId] = oldGroup[oldStrId];
            delete newGroup[oldStrId];
        }
        else {
            console.error('changeKey collision:', groupPath, oldId, newId);
        }
    }

    rebaseTaskMeta(save, `${groupPath}.${oldStrId}`, `${groupPath}.${newStrId}`);
}

/**
 * Change the task id of multiple tasks within the same group
 * - Be mindful of number vs string id handling
 * */
export function changeKeys(
    save: PlayerSave,
    groupPath: string,
    idMap: [number, number][],
): void {
    const group = getDeepProperty(save, groupPath);

    // Cache current flags
    const flags = idMap.reduce((acc, [oldId, newId]) => {
        acc[newId] = group[oldId];
        return acc;
    }, {} as Record<number, string>);

    // Clear current flags
    idMap.forEach(([oldId]) => delete group[oldId]);

    // Write cached flags to newId
    idMap.forEach(([oldId, newId]) => {
        const oldStrId = oldId.toString();
        const newStrId = newId.toString();
        group[newStrId] = flags[newId];

        rebaseTaskMeta(save, `${groupPath}.${oldStrId}`, `${groupPath}.${newStrId}`);
    });
}
