import type { Store } from '../Store';

export function saveStore(service: Store<any>) {
    return (): void => {
        if(!service.data) return;

        service.updated$.next(service.data);
        service.setStore(service.data);
    };
}
