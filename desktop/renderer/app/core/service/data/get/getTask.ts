import type { Task } from '@model/Task';

import type { DataServiceContext } from '../types';

/**
 * Helper for `getChildTask` when lookup is from root
 * */
export function getTask(
    this: DataServiceContext,
    path: string,
): Task | null {
    if(!this.data) {
        console.error('Error: Data not initialized');
        return null;
    }

    return this.get.getChildTask(this.data, path);
}
