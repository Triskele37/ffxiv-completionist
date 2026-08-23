import type { DataServiceContext } from '../types';

export function applyStoreToData(
    this: DataServiceContext,
): void {
    const dataToLoad = this.svcSave.get(this.data.storageKey);
    if(dataToLoad) this.apply.diveForLoad(this.data, dataToLoad);
}
