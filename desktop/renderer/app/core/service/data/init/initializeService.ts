import type { DataServiceContext } from '../types';

/**
 * Post-data construction initialization
 * - Must be called after all groups are attached
 * */
export function initializeService(
    this: DataServiceContext,
): void {
    this.svcSave.migrateData();
    this.apply.storeToData();

    this.whenLoaded$.next();
    this.whenLoaded$.complete();
}
