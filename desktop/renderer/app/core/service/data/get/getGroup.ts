import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

/**
 * Helper for `getChildGroup` when lookup is from root
 * */
export function getGroup(service: DataService) {
    return (
        path: string,
    ): DataGroup | null => {
        if(!service.data) {
            console.error('Error: Data not initialized');
            return null;
        }

        return service.getChildGroup(service.data, path);
    };
}
