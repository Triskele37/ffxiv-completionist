import { PlayerSave } from '@common/PlayerSave';
import { ID } from '@common/Migration';

import { getTask, setTask } from '../retrieve/task';

export function matchLeft(
    save: PlayerSave,
    leftGroup: string,
    rightGroup: string,
    ids: ID[][],
): void {
    for(const set of ids) {
        const [leftId, ...rightIds] = set;

        if(getTask(save, leftGroup, leftId) === 'Y') {
            for(const rightId of rightIds) {
                setTask(save, rightGroup, rightId, 'Y');
            }
        }
    }
}
