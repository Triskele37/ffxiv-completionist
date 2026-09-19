import type { ChainService } from '../chain.service';

export function setHistoryLimit(service: ChainService) {
    return (): void => {
        service.historyLimit = service.svcConfig.get('chain-history-limit');
    };
}
