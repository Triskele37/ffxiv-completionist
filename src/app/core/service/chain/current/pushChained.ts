import { getGroupPath } from '@model/DataGroup/getGroupPath';

import { ChainedTask, ChainServiceContext } from '../types';

export function pushChained(
    this: ChainServiceContext,
    chained: ChainedTask,
): void {
    const path = getGroupPath(chained.task._parent).join(' > ');
    const chainedGroups = [...this.chainedGroups()];
    let chainedGroup = chainedGroups.find((g) => g.path === path);

    // Init first time a group is hit
    if(!chainedGroup) {
        chainedGroup = { path, tasks: [], show: true };
        chainedGroups.push(chainedGroup);
    }

    // Look for this task in the group
    let chainedTask = chainedGroup.tasks.find((t) => t.task.id === chained.task.id);
    if(!chainedTask) {
        // Init first time a task is hit
        chainedTask = { ...chained, count: 1 };
        chainedGroup.tasks.push(chainedTask);
    }
    else {
        // Indicate if a task is chained through multiple times
        if(chainedTask.count === undefined) chainedTask.count = 0;
        chainedTask.count++;
    }

    // Update show prop for all chained tasks
    const show = this.chainedTaskCount() < this.svcConfig.get('chain-min-threshold');
    chainedGroups.forEach((g) => g.show = show);

    // Sort the new groupings by path
    chainedGroups.sort((a, b) => a.path.localeCompare(b.path));

    this.chainedGroups.set(chainedGroups);
    this.chainedTaskCount.set(this.chainedTaskCount() + 1);
}
