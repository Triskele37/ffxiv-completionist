import { ChainServiceContext } from '../types';

export function addHistory(
    this: ChainServiceContext,
): void {
    const chainStart = this.chainStart();

    if(
        this.svcConfig.get('chain-history-limit') > this.history.history().length && // Chain limit won't be exceeded
        chainStart !== null && // chainStart exists
        !chainStart?.historyDisabled && // Initial task didn't disable history
        this.chainedTaskCount() // There are tasks chained
    ) {
        this.history.history.update((history) => {
            history.push({
                chainStart: chainStart,
                chainedGroups: this.chainedGroups(),
                chainedTaskCount: this.chainedTaskCount()
            });
            return history;
        });
    }
}
