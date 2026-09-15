import type { Store } from '../Store';

export function loadStore(service: Store<any>) {
    return (): boolean => {
        const { data, successful } = service.getStore();

        if(!successful) {
            service.svcElectron.appReady$.subscribe(() => {
                service.primeMessage.add({
                    summary: service.translate.instant(service.failedSummaryKey),
                    detail: service.translate.instant(service.failedDetailKey),
                    sticky: true
                });
            });
        }

        service.data = data;
        return successful;
    };
}
