import type { ChainServiceContext } from '../types';

export function setHistoryDisabled(
    this: ChainServiceContext,
    historyDisabled: boolean,
): void {
    this.history.historyDisabled = historyDisabled;
}
