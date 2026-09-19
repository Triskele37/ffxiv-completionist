import type { DataGroup } from '@model/DataGroup';

import type { DataService } from '../data-service';

const RESTRICT = ['..', '/', '\\'];

/**
 * Load just the given group key from json
 * */
export function loadGroupShallow(service: DataService) {
    return (
        parent: DataGroup | null,
        key: string
    ): DataGroup | null => {
        // Prevent path traversal driven by group keys
        if(RESTRICT.some((r) => key.includes(r))) return null;

        const json = service.loadJson(key);
        return service.createDataGroup(json, parent);
    };
}
