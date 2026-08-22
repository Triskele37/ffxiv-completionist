import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { ChainServiceContext } from '../types';

// Main entry point that fires all chained properties of a task
export function applyChains(
    this: ChainServiceContext,
    task: Task,
    flag: CompletionFlag,
    force: boolean = false,
): void {
    const chainMeta = { task, flag, force };

    // Don't chain again if this task has already chained
    // if(DataGroup.overall.chainedTasks && !!DataGroup.overall.chainedTasks[`x${chainer.task.id}`]) {
    //     return;
    // }

    // cPrev Chains
    this.chain.chainPrev(chainMeta);
    this.chain.chainPrevSiblingsAt(chainMeta, task.cPrevAt);
    this.chain.chainUnlock(chainMeta);

    // cNext/cUnlocks Chains
    this.chain.chainNext(chainMeta);

    // cSiblings Chains
    this.chain.chainSiblings(chainMeta);
    this.chain.chainPrevSiblingsAt(chainMeta, task.cSiblingsAt);

    // cCombo Chains
    this.chain.chainCombo(chainMeta);
    this.chain.chainComboAt(chainMeta);

    // Evaluate exclude chain
    this.chain.chainExclude(chainMeta);

    // Evaluate exclusive chain
    this.chain.chainExclusive(chainMeta);
}
