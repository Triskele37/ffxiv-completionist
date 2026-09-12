import type { PlayerSave } from '@common/PlayerSave';

import { getDeepProperty } from '../retrieve/getDeepProperty';
import { deleteGroupMeta } from './deleteMeta';

/**
 * Delete target group and all associated meta tied to it
 * */
export function deleteGroup(
    save: PlayerSave,
    groupPath: string,
): void {
    const groupPathArr = groupPath.split('.');
    const groupToDeleteKey = groupPathArr.pop();

    // If completion has not created group, don't attempt delete
    const parentOfTarget = getDeepProperty(save, groupPathArr);
    if(parentOfTarget && groupToDeleteKey) {
        delete parentOfTarget[groupToDeleteKey];
    }

    // Attempt delete for meta regardless since its not tied to the completion structure
    deleteGroupMeta(save, groupPath);
}
