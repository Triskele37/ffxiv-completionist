import type { Task } from '@model/Task';

import type { DataService } from '../data-service';

/**
 * Helper for `getChildTask` when lookup is from root
 * */
export function getTask(service: DataService) {
    return (
        path: string,
    ): Task | null => {
        if(!service.data) {
            console.error('Error: Data not initialized');
            return null;
        }

        return service.getChildTask(service.data, path);
    };
}
