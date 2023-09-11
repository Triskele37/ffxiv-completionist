import { Completion, CompletionFlag } from '@constant';
import { Task } from '@model/Task';

import { createChainer } from './createChainer';
import { getAllTasksFor } from './getAllTasksFor';
import { applyChainedFlag } from './applyFlag/applyChainedFlag';
import { applyFlagToTask } from './applyFlag/applyFlagToTask';
import { applyAtChain } from './apply/applyAtChain';
import { applyComboChain } from './apply/applyComboChain';
import { applyExclusionChain } from './apply/applyExclusionChain';
import { applyExclusiveChain } from './apply/applyExclusiveChain';
import { applySiblingChain } from './apply/applySiblingChain';

// Main entry point that fires all chained properties of a task
export function triggerChains(
    task: Task,
    flag: CompletionFlag,
    force: boolean = false,
): void {
    const chainer = createChainer(task, flag, force);

    // Don't chain again if this task has already chained
    // if(DataGroup.overall.chainedTasks && !!DataGroup.overall.chainedTasks[`x${chainer.task.id}`]) {
    //     return;
    // }

    // Chain parent tasks if this one was completed
    if(chainer.task.cPrev && chainer.flag === Completion.Y && !chainer.task.cPrevAny) {
        applyChainedFlag(chainer, chainer.task.cPrev);
    }

    //
    if(chainer.task.cPrevAt) {
        applyAtChain(chainer, chainer.task.cPrevAt);
    }

    // Chain child tasks if this one was marked incomplete
    if(chainer.task.cNext && chainer.flag === Completion.N) {
        getAllTasksFor(chainer, chainer.task.cNext).forEach((task) => {
            if(task.completionFlag === Completion.Y) {
                applyFlagToTask(chainer, chainer.flag as Completion, task);
            }
        });
    }

    // Chain sibling tasks if this wasn't marked excluded
    if(chainer.task.cSiblings && chainer.flag !== Completion.X) {
        applySiblingChain(chainer, chainer.task.cSiblings);
    }

    // Chain siblings if their 'at' value is met or this flag is completed
    if(chainer.task.cSiblingsAt) {
        applyAtChain(chainer, chainer.task.cSiblingsAt);
    }

    // Evaluate combo chains if this wasn't marked excluded
    if(chainer.task.cCombo && chainer.flag !== Completion.X) {
        applyComboChain(chainer);
    }

    // Evaluate combo 'at' chains
    if(chainer.task.cComboAt) {
        Object.keys(chainer.task.cComboAt).forEach((at) => {
            applyComboChain(chainer, at);
        });
    }

    // Evaluate exclude chain
    if(chainer.task.cExclude) {
        applyExclusionChain(chainer);
    }

    // Evaluate exclusive chain
    if(chainer.task.cExclusive) {
        applyExclusiveChain(chainer);
    }
}
