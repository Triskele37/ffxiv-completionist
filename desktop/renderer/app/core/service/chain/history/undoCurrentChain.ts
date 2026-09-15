import type { ChainService } from '../chain.service';
import type { ChainHistory } from '../types';

export function undoCurrentChain(service: ChainService) {
    return (): void => {
        const chainStart = service.chainStart();
        const chainedGroups = service.chainedGroups();

        if(!chainStart) {
            console.error('Error: Missing chainStart');
            return;
        }

        service.svcMark.setCompletion(chainStart.task, chainStart.fromFlag);
        chainedGroups.forEach((chainedGroup) => {
            chainedGroup.tasks.forEach((chainedTask) => {
                service.svcMark.setCompletion(chainedTask.task, chainedTask.fromFlag);
            });
        });

        if(service.history().length) {
            let chainToUndo: ChainHistory | undefined;
            service.history.update((history) => {
                chainToUndo = history.pop();
                return history;
            });

            if(!chainToUndo) {
                console.error('Error: Missing history');
            }
            else {
                service.chainStart.set(chainToUndo.chainStart);
                service.chainedGroups.set(chainToUndo.chainedGroups);
                service.chainedTaskCount.set(chainToUndo.chainedTaskCount);
            }
        }
        else {
            service.chainStart.set(null);
            service.chainedGroups.set([]);
            service.chainedTaskCount.set(0);
        }
    };
}
