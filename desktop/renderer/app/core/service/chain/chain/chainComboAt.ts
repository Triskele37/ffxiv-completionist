import { Completion } from '@constant';

import type { ChainService } from '../chain.service';
import type { ChainContext } from '../types';

/**
 * cComboAt
 * - Base case but A and B must have specific numeric values
 * */
export function chainComboAt(service: ChainService) {
    return (
        { task, force }: ChainContext,
    ): void => {
        // Early bail conditions
        if(!task.cComboAt) return;

        Object.keys(task.cComboAt).forEach((at) => {
            service.svcData.getTasks(task.cComboAt?.[at], task).forEach((comboTask) => {
                if(comboTask.cPrevAt?.[at]) {
                    // Task requires all previous tasks
                    const allComplete = service.svcData.getTasks(comboTask.cPrevAt[at], task).every(
                        (task) => parseInt(task.completionFlag$(), 10) >= parseInt(at, 10)
                    );

                    const applyFlag = allComplete ? Completion.Y : Completion.N;
                    service.applyFlagToTask(comboTask, applyFlag, force);
                }
            });
        });
    };
}
