import type { DataGroup } from '@model/DataGroup';

import type { DataServiceContext } from '../types';

const RESTRICT = ['..', '/', '\\'];

/**
 * Load just the given group key from json
 * */
export function loadGroupShallow(
    this: DataServiceContext,
    parent: DataGroup | null,
    key: string
): DataGroup | null {
    // Prevent path traversal driven by group keys
    if(RESTRICT.some((r) => key.includes(r))) return null;

    const json = this.loader.loadJson(key);
    return this.group.createDataGroup(json, parent);
}
