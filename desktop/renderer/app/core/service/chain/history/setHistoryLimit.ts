import type { ChainServiceContext } from '../types';

export function setHistoryLimit(
    this: ChainServiceContext,
): void {
    this.history.historyLimit = this.svcConfig.get('chain-history-limit');
}
