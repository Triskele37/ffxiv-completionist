import { DataGroup } from '@model/DataGroup';

import { DataServiceContext } from '../types';

/**
 * Helper for `getChildGroup` when lookup is from root
 * */
export function getGroup(
    this: DataServiceContext,
    path: string,
): DataGroup | null {
    if(!this.data) {
        console.error('Error: Data not initialized');
        return null;
    }

    return this.get.getChildGroup(this.data, path);
}
