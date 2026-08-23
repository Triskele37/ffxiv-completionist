import { getGroupPath } from '@model/DataGroup/getGroupPath';

import type { ChainedTask, ChainServiceContext } from '../types';

export function startChain(
    this: ChainServiceContext,
    { task, fromFlag, toFlag }: ChainedTask,
): void {
    const path = getGroupPath(task._parent);
    path.shift();

    this.history.addHistory();

    this.chainStart.set({
        historyDisabled: this.history.historyDisabled ?? false,
        task,
        fromFlag,
        toFlag,
        path: path.join(' > ')
    });

    this.chainedGroups.set([]);
    this.chainedTaskCount.set(0);

    this.svcConfig.updated$.subscribe(() => this.history.setHistoryLimit());
}
