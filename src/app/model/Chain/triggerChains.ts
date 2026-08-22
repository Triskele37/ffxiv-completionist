import { CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { applyAtChain } from './apply/applyAtChain';
import { applyComboChain, applyComboAtChain } from './apply/applyComboChain';
import { applyExclusionChain } from './apply/applyExclusionChain';
import { applyExclusiveChain } from './apply/applyExclusiveChain';
import { applySiblingChain } from './apply/applySiblingChain';
import { applyNextChain } from './apply/applyNextChain';
import { applyUnlockChain } from './apply/applyUnlockChain';
import { applyPrevChain } from '@model/Chain/apply/applyPrevChain';

// Main entry point that fires all chained properties of a task
export function triggerChains(
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
    applyPrevChain(chainMeta);
    applyAtChain(chainMeta, task.cPrevAt);
    applyUnlockChain(chainMeta);

    // cNext/cUnlocks Chains
    applyNextChain(chainMeta);

    // cSiblings Chains
    applySiblingChain(chainMeta);
    applyAtChain(chainMeta, task.cSiblingsAt);

    // cCombo Chains
    applyComboChain(chainMeta);
    applyComboAtChain(chainMeta);

    // Evaluate exclude chain
    applyExclusionChain(chainMeta);

    // Evaluate exclusive chain
    applyExclusiveChain(chainMeta);
}
