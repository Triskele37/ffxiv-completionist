import type { DataService } from '../data-service';

/**
 * Post-data construction initialization
 * - Must be called after all groups are attached
 * */
export function initService(service: DataService) {
    return (): void => {
        service.svcSave.migrateData();
        service.storeToData();

        service.whenLoaded$.next();
        service.whenLoaded$.complete();
    };
}
