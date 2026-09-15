import type { CompletionFlag } from '@constant';
import type { Task } from '@model/Task';

import type { ChainService } from '../chain.service';

// Main entry point that fires all chained properties of a task
export function applyChains(service: ChainService) {
    return (
        task: Task,
        flag: CompletionFlag,
        force: boolean = false,
    ): void => {
        const chainMeta = { task, flag, force };

        // Don't chain again if this task has already chained
        // if(DataGroup.game.chainedTasks && !!DataGroup.game.chainedTasks[`x${chainer.task.id}`]) {
        //     return;
        // }

        // cPrev Chains
        service.chainPrev(chainMeta);
        service.chainPrevSiblingsAt(chainMeta, task.cPrevAt);
        service.chainUnlock(chainMeta);

        // cNext/cUnlocks Chains
        service.chainNext(chainMeta);

        // cSiblings Chains
        service.chainSiblings(chainMeta);
        service.chainPrevSiblingsAt(chainMeta, task.cSiblingsAt);

        // cCombo Chains
        service.chainCombo(chainMeta);
        service.chainComboAt(chainMeta);

        // Evaluate exclude chain
        service.chainExclude(chainMeta);

        // Evaluate exclusive chain
        service.chainExclusive(chainMeta);
    };
}
