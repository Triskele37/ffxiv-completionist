import type { PlayerSave } from '@common/PlayerSave';
import type { ID } from '@common/Migration';

import { deleteTask } from '../delete/deleteTask';
import { getTask, setTask } from '../retrieve/task';

export function mergeTask(
    save: PlayerSave,
    oldGroupPath: string,
    oldId: ID,
    newGroupPath: string,
    newId: ID,
): void {
    if(getTask(save, oldGroupPath, oldId) === 'Y') {
        deleteTask(save, oldGroupPath, oldId);
        setTask(save, newGroupPath, newId, 'Y');
    }
}
