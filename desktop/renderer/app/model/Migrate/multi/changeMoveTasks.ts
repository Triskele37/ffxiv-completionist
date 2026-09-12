import { PlayerSave } from '@common/PlayerSave';

import { changeKey } from '../move/changeKey';
import { moveTask } from '../move/moveTask';

export function changeAndMoveTasks(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
    ids: [number, number][],
): void {
    for(const [oldId, newId] of ids) {
        changeKey(save, oldGroupPath, oldId, newId);
        moveTask(save, oldGroupPath, newGroupPath, newId);
    }
}

export function moveAndChangeTasks(
    save: PlayerSave,
    oldGroupPath: string,
    newGroupPath: string,
    ids: [number, number][],
): void {
    for(const [oldId, newId] of ids) {
        moveTask(save, oldGroupPath, newGroupPath, oldId);
        changeKey(save, newGroupPath, oldId, newId);
    }
}
