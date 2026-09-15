import type { DataService } from '../data-service';

export function applyStoreToData(service: DataService) {
    return (): void => {
        const dataToLoad = service.svcSave.get(service.data.storageKey);
        if(dataToLoad) service.diveForLoad(service.data, dataToLoad);
    };
}
