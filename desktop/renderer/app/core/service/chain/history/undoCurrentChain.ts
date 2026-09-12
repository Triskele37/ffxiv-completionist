import type { ChainServiceContext } from '../types';
import type { ChainHistory } from './_types';

export function undoCurrentChain(
    this: ChainServiceContext,
): void {
    const chainStart = this.chainStart();
    const chainedGroups = this.chainedGroups();

    if(!chainStart) {
        console.error('Error: Missing chainStart');
        return;
    }

    this.svcMark.setCompletion(chainStart.task, chainStart.fromFlag);
    chainedGroups.forEach((chainedGroup) => {
        chainedGroup.tasks.forEach((chainedTask) => {
            this.svcMark.setCompletion(chainedTask.task, chainedTask.fromFlag);
        });
    });

    if(this.history.history().length) {
        let chainToUndo: ChainHistory | undefined;
        this.history.history.update((history) => {
            chainToUndo = history.pop();
            return history;
        });

        if(!chainToUndo) {
            console.error('Error: Missing history');
        }
        else {
            this.chainStart.set(chainToUndo.chainStart);
            this.chainedGroups.set(chainToUndo.chainedGroups);
            this.chainedTaskCount.set(chainToUndo.chainedTaskCount);
        }
    }
    else {
        this.chainStart.set(null);
        this.chainedGroups.set([]);
        this.chainedTaskCount.set(0);
    }
}
