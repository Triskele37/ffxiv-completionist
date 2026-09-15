import type { DataService } from '../data-service';

export function applyDataToStore(service: DataService) {
    return (): void => {
        service.svcSave.set(
            service.data.storageKey,
            service.diveForSave(service.data)
        );
    };
}
