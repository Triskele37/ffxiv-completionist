import type { ChainService } from '../chain.service';

export function addHistory(service: ChainService) {
    return (): void => {
        const chainStart = service.chainStart();

        if(
            service.svcConfig.get('chain-history-limit') > service.history().length && // Chain limit won't be exceeded
            chainStart !== null && // chainStart exists
            service.chainedTaskCount() // There are tasks chained
        ) {
            service.history.update((history) => {
                history.push({
                    chainStart: chainStart,
                    chainedGroups: service.chainedGroups(),
                    chainedTaskCount: service.chainedTaskCount()
                });
                return history;
            });
        }
    };
}
