import type { PlayerSave } from '@common/PlayerSave';

import { getDeepProperty } from '../retrieve/getDeepProperty';
import { splitLastSegment } from '../util/splitLastSegment';
import { rebaseGroupMeta } from './rebaseMeta';

/**
 * Move a group from `old` to `new` and rebase all meta associated with it
 * NOTE: consider key collision handling maybe (shouldn't occur with proper struct in the first place)
 * */
export function moveGroup(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
): void {
    const oldGroup = getDeepProperty(save, oldGroupPath);

    // If completion has not created group, don't attempt move
    if(oldGroup) {
        // Place the group in the new store where its being moved
        const [newLeftHand, newRightHand] = splitLastSegment(newGroupPath);
        const newGroup = {
            ...getDeepProperty(save, newGroupPath), // keep current data if it exists
            ...oldGroup
        };

        // Remove the old group location from the new store
        const [oldLeftHand, oldRightHand] = splitLastSegment(oldGroupPath);
        delete getDeepProperty(save, oldLeftHand)[oldRightHand];

        // Set the new location (done after delete in case paths converge)
        getDeepProperty(save, newLeftHand)[newRightHand] = newGroup;
    }

    // Attempt move for meta regardless since its not tied to the completion structure
    rebaseGroupMeta(save, oldGroupPath, newGroupPath);
}
